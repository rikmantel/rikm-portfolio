import Link from "next/link";
import { Button } from "./Button";
import { Mails } from "lucide-react";

export function Navigation() {
    return (
        <nav className="flex items-center justify-between py-8 px-6 md:px-12 max-w-screen-2xl mx-auto">

            <Link href="/" className="font-mono text-xs md:text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 transition-colors">
                Rik Mantel
            </Link>

            <div className="flex items-center space-x-6 md:space-x-10">
                <div className="flex items-center space-x-6 md:space-x-12 font-sans text-sm md:text-base text-stone-500">
                    <Link href="/work" className="hover:text-stone-900 transition-colors">
                        Work
                    </Link>
                    <Link href="/about" className="hover:text-stone-900 transition-colors">
                        About
                    </Link>
                </div>

                <Button
                    href="mailto:mantel.rik@gmail.com"
                    variant="primary"
                    size="md"
                    className="tracking-normal font-sans normal-case"
                    icon={<Mails size={16} />}
                >
                    Contact
                </Button>
            </div>
        </nav>

    );
}
