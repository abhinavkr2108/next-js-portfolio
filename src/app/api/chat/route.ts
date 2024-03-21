import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts";
import {
  LangChainStream,
  Message,
  OpenAIStream,
  StreamingTextResponse,
} from "ai";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/lib/astradb";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((message: Message) =>
        message.role === "user"
          ? new HumanMessage(message.content)
          : new AIMessage(message.content)
      );
    const currentMessageContent = messages[messages.length - 1].content;

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for a personal portfolio website. You impersonate the website's owner " +
          "Answer the user's questions  based on the given context." +
          "Whenevever it makes sense provide link to pages that contain the relevant information about topic from given context. " +
          "Format the response in markdown." +
          "If you don't know the answer, say that you did not find any relevant answer or information from the website. DO NOT make up an answer.\n\n" +
          "Context: \n{context}",
      ],
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\n Page content: \n{page_content}"
      ),
      documentSeparator: "\n-------\n",
    });

    const retriever = (await getVectorStore()).asRetriever();
    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever,
    });
    retrievalChain.invoke({ input: currentMessageContent });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" });
  }
}
