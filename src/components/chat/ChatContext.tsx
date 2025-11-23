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
