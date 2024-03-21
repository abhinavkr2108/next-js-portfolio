import React from "react";

export default function TestChat() {
  return (
    <form className="flex h-[93vh]">
      <div className="flex flex-col flex-1">
        <div className="overflow-y-auto p-4 space-y-4 bg-gray-100 flex-1">
          <div className="text-right">
            <div className="inline-block bg-blue-500 text-white rounded px-4 py-2">
              User message
            </div>
          </div>
          <div className="text-left">
            <div className="inline-block bg-gray-300 rounded px-4 py-2">
              ChatGPT response
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-4">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 text-white rounded px-4 py-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
