import {
  AstraDBVectorStore,
  AstraLibArgs,
  AstraDeleteParams,
} from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { AstraDB, Collection } from "@datastax/astra-db-ts";
const endpoint = `${process.env.ASTRA_DB_ENDPOINT}` || "";
const token = `${process.env.ASTRA_DB_APPLICATION_TOKEN}` || "";
const collection = `${process.env.ASTRA_DB_COLLECTION}` || "";

if (!endpoint || !token || !collection) {
  throw new Error(
    "Missing environment variables: ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_COLLECTION"
  );
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 1536,
          metric: "cosine",
        },
      },
    }
  );
}

export async function getEmbeddingsCollection() {
  return new AstraDB(token, endpoint).collection(collection);
}
