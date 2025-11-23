"use client";

import { ChatProvider } from "./chat/ChatContext";
import { ChatBar } from "./chat/ChatBar";
import { ChatPanel } from "./chat/ChatPanel";
import { MainLayout } from "./MainLayout";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChatProvider>
            <MainLayout>
                {children}
            </MainLayout>
            <ChatPanel />
            <ChatBar />
        </ChatProvider>
    );
}
