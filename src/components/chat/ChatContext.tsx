"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Message = {
    role: "user" | "assistant";
    content: string;
};

interface ChatContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    messages: Message[];
    addMessage: (message: Message) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    inputValue: string;
    setInputValue: (value: string) => void;
    sendMessage: (content: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const addMessage = (message: Message) => {
        setMessages((prev) => [...prev, message]);
    };

    const sendMessage = async (content: string) => {
        if (!content.trim() || isLoading) return;

        setIsOpen(true);
        addMessage({ role: "user", content });
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: content }),
            });

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            addMessage({ role: "assistant", content: data.content });
        } catch (error) {
            console.error(error);
            addMessage({ role: "assistant", content: "Sorry, something went wrong. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ChatContext.Provider
            value={{
                isOpen,
                setIsOpen,
                messages,
                addMessage,
                isLoading,
                setIsLoading,
                inputValue,
                setInputValue,
                sendMessage,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
