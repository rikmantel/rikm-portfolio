"use client";

import { useChat } from "./ChatContext";
import { ChatInput } from "./ChatInput";
import { AnimatePresence, motion } from "framer-motion";

{/* className={clsx(
                "bg-white border border-stone-200 shadow-lg flex items-center p-2 pl-6 transition-shadow duration-300 focus-within:shadow-xl focus-within:border-stone-300hover:shadow-md w-full max-w-xl pointer-events-auto rounded-2xl"
                ,
                className
            )} */}

export function ChatBar() {
    const { isOpen } = useChat();

    return (
        <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none">
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="relative h-32 flex items-end justify-center pb-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-50/90 via-stone-50/40 to-transparent backdrop-blur-md [mask-image:linear-gradient(to_top,black_40%,transparent)] pointer-events-none" />
                        <div className="relative w-full max-w-4xl px-4 flex justify-center pointer-events-auto">

                            <ChatInput
                                className="w-full max-w-xl bg-white shadow-2xl transition-shadow duration-300 rounded-2xl"
                                autoFocus={false}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
