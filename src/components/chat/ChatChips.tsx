"use client";

import { usePathname } from "next/navigation";
import { useChat } from "./ChatContext";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CHIPS_BY_ROUTE: Record<string, string[]> = {
    "/": ["About Rik", "Design Philosophy", "Current Role"],
    "/about": ["Experience", "Education", "Contact"],
    "/work": ["Design Process", "Recent Projects", "Collaboration Style"],
};

const chipVariants: Variants = {
    hidden: { opacity: 0, x: 6 },
    visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: index * 0.05,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
    exit: {
        opacity: 0,
        x: -6,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

// Fallback chips if route doesn't match
const DEFAULT_CHIPS = ["Tell me about Rik", "Show me his work"];

export function ChatChips() {
    const pathname = usePathname();
    const { sendMessage } = useChat();

    // Get chips for current route or use default. 
    // Also handle dynamic routes (like /work/slug) by checking if it starts with /work/
    let chips = CHIPS_BY_ROUTE[pathname];

    if (!chips) {
        if (pathname.startsWith("/work/")) {
            chips = ["Project Details", "Role & Responsibilities", "Outcomes"];
        } else {
            chips = DEFAULT_CHIPS;
        }
    }

    return (
        <div className="flex items-center justify-start gap-2 mb-3 w-full pl-1">
            <AnimatePresence mode="wait">
                {chips.map((chip, index) => (
                    <motion.button
                        key={`${pathname}-${chip}`}
                        custom={index}
                        variants={chipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => sendMessage(chip)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 border border-stone-200  rounded-full text-xs font-medium text-stone-500 hover:bg-stone-100 hover:text-stone-600 hover:border-stone-300 cursor-pointer pointer-events-auto transition-colors duration-200"

                    >
                        <MessageCircle
                            size={12}
                            className="opacity-60 inline-flex items-center justify-center translate-y-[-0.75px]"
                        />
                        {chip}
                    </motion.button>
                ))}
            </AnimatePresence>
        </div>
    );
}
