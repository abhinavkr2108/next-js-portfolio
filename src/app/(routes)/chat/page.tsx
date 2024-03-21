"use client";
import React, { useEffect, useRef } from "react";
import { Message, useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { Bot, SendIcon, TrashIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function ChatbotPage() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const lastMessageIsUser =
    messages.length > 0 && messages[messages.length - 1].role === "user";

  return (
    <div className="container pt-10">
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
      {/** Intial Screen */}
      {!error && messages.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full">
          <Bot size={28} />
          <p className="text-slate-500 text-lg font-medium">
            Send a message to start the chat.
          </p>
          <p>This is a custom chatbot that answers questions about myself</p>
        </div>
      )}

      {/** Loading Message */}
      {isLoading && lastMessageIsUser && (
        <div>
          <ChatMessage
            message={{
              id: "Loading",
              role: "assistant",
              content: "Loading...",
            }}
          />
        </div>
      )}

      {/** Error Message */}
      {error && (
        <div>
          <ChatMessage
            message={{
              id: "Error",
              role: "assistant",
              content: "Something went wrong. Please try again later.",
            }}
          />
        </div>
      )}

      <form className="flex h-[80vh]" onSubmit={handleSubmit}>
        <div className="flex flex-col flex-1">
          <div className="overflow-y-auto p-4 space-y-4 flex-1" ref={scrollRef}>
            {/* <div className="text-right">
              <div className="inline-block bg-blue-500 text-white rounded px-4 py-2">
                User message
              </div>
            </div>
            <div className="text-left">
              <div className="inline-block bg-gray-300 rounded px-4 py-2">
                ChatGPT response
              </div>
            </div> */}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-4">
              <button
                className="bg-gray-500 text-white rounded px-4 py-2"
                title="Clear Chat"
                onClick={() => setMessages([])}
              >
                <TrashIcon />
              </button>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="flex-1 p-2 border border-gray-300 rounded outline-none"
                placeholder="Type your message..."
                onClick={() => setMessages([])}
                ref={inputRef}
              />
              <button
                className="bg-blue-500 text-white rounded px-4 py-2 cursor-pointer"
                title="Send Message"
                type="submit"
                disabled={isLoading || input.length === 0}
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage(props: ChatMessageProps) {
  const role = props.message.role;
  const content = props.message.content;

  const aiMessage: boolean = role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        aiMessage ? "me-5 justify-start" : "ms-5 justify-end"
      )}
    >
      {aiMessage && <Bot className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          aiMessage ? "bg-background" : "bg-blue-500 text-background"
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="list-inside list-disc mt-3 first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
