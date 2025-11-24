"use client";

import { useChat } from "./ChatContext";
import { ArrowUp } from "lucide-react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { FormEvent } from "react";

interface ChatInputProps extends React.ComponentProps<typeof motion.form> {
    autoFocus?: boolean;
}

export function ChatInput({ className, autoFocus, ...props }: ChatInputProps) {
    const { setIsOpen, addMessage, setIsLoading, isLoading, inputValue, setInputValue } = useChat();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue("");
        setIsOpen(true);
        addMessage({ role: "user", content: userMessage });
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
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
        <motion.form
            onSubmit={handleSubmit}
            className={clsx(
                "bg-white border border-stone-200 flex items-center p-2 pl-6 w-full max-w-xl pointer-events-auto rounded-2xl"
                ,
                className
            )}
            {...props}
        >

            {/* className={clsx(
                "bg-white border border-stone-200 shadow-lg flex items-center p-2 pl-6 transition-shadow duration-300 focus-within:shadow-xl focus-within:border-stone-300hover:shadow-md w-full max-w-xl pointer-events-auto rounded-2xl"
                ,
                className
            )} */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything"
                autoFocus={autoFocus}
                className="flex-1 bg-transparent border-none outline-none text-stone-800 placeholder:text-stone-400 font-sans text-base min-w-0"
            />
            <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className={clsx(
                    "p-2 rounded-full transition-all duration-200 ml-2 shrink-0",
                    inputValue.trim() && !isLoading
                        ? "bg-stone-900 text-white hover:bg-stone-800"
                        : "bg-stone-100 text-stone-300 cursor-not-allowed"
                )}
            >
                <ArrowUp size={20} />
            </button>
        </motion.form>
    );
}
