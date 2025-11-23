import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Mock data lookup
    const project = {
        title: slug.charAt(0).toUpperCase() + slug.slice(1),
        desc: "A deep dive into the design process, challenges, and solutions.",
        content: [
            "The Challenge",
            "We started with a simple premise: how can we make this complex data accessible to everyone? The existing solutions were clunky, slow, and hard to understand.",
            "The Solution",
            "We stripped away the non-essentials and focused on the core data points. By using a clean, typographic approach, we were able to highlight the most important information without overwhelming the user.",
            "The Result",
            "User engagement increased by 40% in the first month. The feedback was overwhelmingly positive, with users praising the clarity and ease of use."
        ]
    };

    return (
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto pt-20 md:pt-32">
            <Link href="/work" className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors mb-12 font-mono text-xs uppercase tracking-widest">
                <ArrowLeft size={16} className="mr-2" />
                Back to Index
            </Link>

            <article>
                <header className="mb-20">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 mb-8">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed">
                        {project.desc}
                    </p>
                </header>

                <div className="aspect-video bg-stone-200 w-full mb-20 flex items-center justify-center text-stone-400 font-mono uppercase tracking-widest">
                    Hero Image
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-3">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-2">Role</h3>
                                <p className="text-stone-900">Lead Designer</p>
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-2">Team</h3>
                                <p className="text-stone-900">2 Designers, 4 Engineers</p>
                            </div>
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-2">Timeline</h3>
                                <p className="text-stone-900">3 Months</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 md:col-start-5 prose prose-stone prose-lg md:prose-xl font-sans text-stone-600 max-w-none">
                        {project.content.map((block, i) => (
                            i % 2 === 0 ? (
                                <h2 key={i} className="font-serif text-stone-900 mt-12 first:mt-0">{block}</h2>
                            ) : (
                                <p key={i}>{block}</p>
                            )
                        ))}
                    </div>
                </div>
            </article>

            <div className="py-32 border-t border-stone-200 mt-32 flex justify-between items-center">
                <Link href="/work" className="font-serif text-3xl md:text-4xl text-stone-900 hover:text-stone-500 transition-colors">
                    Next Project
                </Link>
            </div>
        </div>
    );
}
