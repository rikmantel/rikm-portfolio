"use client";

import { useChat } from "./chat/ChatContext";
import { clsx } from "clsx";

export function MainLayout({ children }: { children: React.ReactNode }) {
    const { isOpen } = useChat();

    return (
        <div
            className={clsx(
                "transition-[width,margin] duration-300 ease-in-out min-h-screen",
                isOpen ? "lg:mr-[400px] lg:w-[calc(100%-400px)]" : "w-full"
            )}
        >
            {children}
        </div>
    );
}
