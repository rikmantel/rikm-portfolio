"use client";

import { useChat } from "./ChatContext";
import { ChatInput } from "./ChatInput";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

export function ChatPanel() {
    const { isOpen, setIsOpen, messages, isLoading } = useChat();
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    return (
        <div
            className={clsx(
                "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white border-l border-stone-200 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out z-50",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-stone-100">
                    <h2 className="font-serif text-xl text-stone-800">Chat</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.length === 0 && (
                        <div className="text-stone-400 text-sm text-center mt-10">
                            Ask me anything about the work or the designer.
                        </div>
                    )}

                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={clsx(
                                "flex flex-col max-w-[85%]",
                                msg.role === "user" ? "self-end items-end" : "self-start items-start"
                            )}
                        >
                            <div
                                className={clsx(
                                    "p-4 rounded-lg text-sm leading-relaxed",
                                    msg.role === "user"
                                        ? "bg-stone-900 text-stone-50"
                                        : "bg-stone-100 text-stone-800"
                                )}
                            >
                                {msg.content}
                            </div>
                            <span className="text-[10px] text-stone-400 mt-1 uppercase tracking-wider font-mono">
                                {msg.role === "user" ? "You" : "AI"}
                            </span>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="self-start flex items-center space-x-2 p-4 bg-stone-50 rounded-lg">
                            <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-stone-100 border-t bg-white">
                    <AnimatePresence>
                        {isOpen && (
                            <ChatInput
                                // className="w-full rounded-full"
                                autoFocus
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.1 }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
