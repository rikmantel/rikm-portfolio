"use client";

import { useEffect, useRef } from "react";
import { useChat } from "./chat/ChatContext";

export function Footer() {
    const { setIsFooterVisible } = useChat();
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1, // Trigger when 10% of footer is visible
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, [setIsFooterVisible]);

    return (
        <footer ref={footerRef} className="py-12 px-6 md:px-16 border-t border-stone-200 mt-20 bg-stone-50">
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <h3 className="font-serif text-2xl text-stone-900">Rik Mantel</h3>
                    <p className="text-stone-500 mt-2 text-sm">Product Designer based in Vancouver.</p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-stone-600">
                    <a href="#" className="hover:text-stone-900 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-stone-900 transition-colors">Email</a>
                </div>
            </div>

            <div className="mt-12 text-xs text-stone-400 font-mono uppercase tracking-wider">
                © {new Date().getFullYear()} Rik Mantel. All rights reserved.
            </div>
        </footer>
    );
}
