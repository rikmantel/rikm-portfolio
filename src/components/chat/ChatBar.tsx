"use client";

import { useChat } from "./ChatContext";
import { ChatInput } from "./ChatInput";
import { ChatChips } from "./ChatChips";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";

{/* className={clsx(
                "bg-white border border-stone-200 shadow-lg flex items-center p-2 pl-6 transition-shadow duration-300 focus-within:shadow-xl focus-within:border-stone-300hover:shadow-md w-full max-w-xl pointer-events-auto rounded-2xl"
                ,
                className
            )} */}

export function ChatBar() {
    const { isOpen } = useChat();
    const [isEngaged, setIsEngaged] = useState(false);

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none flex justify-center">
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            height: isEngaged ? 240 : 128 // Expand height when engaged
                        }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{
                            duration: 1,
                            ease: [0.2, 0, 0, 1] // Custom ease for "breathe" feel
                        }}
                        className="relative w-full flex items-end justify-center pb-6"
                    >
                        {/* Frosted Background Layer */}
                        <motion.div
                            animate={{
                                opacity: isEngaged ? 1 : 0.8,
                                maskImage: isEngaged
                                    ? "linear-gradient(to top, black 60%, transparent 100%)"
                                    : "linear-gradient(to top, black 40%, transparent 100%)"
                            }}
                            transition={{ duration: 3 }}
                            className="absolute inset-0 bg-gradient-to-t from-stone-50/95 via-stone-50/80 to-transparent backdrop-blur-[2px] pointer-events-none"
                        />

                        {/* AI Glow Container */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none overflow-hidden h-32">
                            <AnimatePresence>
                                {isEngaged && (
                                    <>
                                        {/* Soft wide ambient mesh gradient */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="absolute bottom-[-20px] left-[-10%] right-[-10%] h-[16px] blur-[20px]"
                                            style={{
                                                background: "linear-gradient(90deg, #F59E0B 0%, #EC4899 35%, #8B5CF6 65%, #3B82F6 100%)",
                                                opacity: 0.5
                                            }}
                                        />

                                        {/* Brighter core line for definition */}
                                        {/* <motion.div
                                            initial={{ opacity: 0, scaleX: 0.8 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            exit={{ opacity: 0, scaleX: 0.8 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="absolute bottom-0 left-0 right-0 h-[2px]"
                                            style={{
                                                background: "linear-gradient(90deg, transparent 0%, #F59E0B 20%, #EC4899 40%, #8B5CF6 60%, #3B82F6 80%, transparent 100%)",
                                                opacity: 0.8
                                            }}
                                        /> */}

                                        {/* Subtle moving shimmer overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.3 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="absolute bottom-0 left-0 right-0 h-[4px] blur-[2px]"
                                            style={{
                                                background: "linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%)",
                                                backgroundSize: "200% 100%",
                                            }}
                                        >
                                            <motion.div
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                                className="w-full h-full"
                                            />
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <div
                            className="relative w-full max-w-xl px-4 flex flex-col items-start justify-end pointer-events-auto"
                            onFocus={() => setIsEngaged(true)}
                            onBlur={(e) => {
                                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                                    setIsEngaged(false);
                                }
                            }}
                        >
                            <ChatChips />
                            <ChatInput
                                className={clsx(
                                    "w-full max-w-xl bg-white shadow-2xl transition-all duration-300 rounded-2xl",
                                    // isEngaged ? "shadow-stone-200/50 ring-1 ring-stone-200" : ""
                                )}
                                autoFocus={false}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
