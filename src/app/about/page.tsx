export default function AboutPage() {
    return (
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto pt-20 md:pt-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-8">
                    <h1 className="font-serif text-5xl md:text-7xl mb-12 text-stone-900">About</h1>
                    <div className="prose prose-stone prose-lg md:prose-xl font-sans text-stone-600 max-w-none">
                        <p className="font-serif text-2xl md:text-3xl text-stone-900 leading-relaxed italic mb-8">
                            I believe that the best interfaces are the ones that get out of the way, allowing the user to focus entirely on their intent.
                        </p>
                        <p className="mb-6">
                            With over 8 years of experience in product design, I&apos;ve worked with startups and Fortune 500 companies to build digital products that are not only functional but also delightful to use. My work is grounded in a deep understanding of user needs and a rigorous attention to detail.
                        </p>
                        <p className="mb-6">
                            I specialize in complex systems, data visualization, and design systems. I enjoy solving hard problems and making them look easy. When I&apos;m not designing, you can find me reading history books, exploring architecture, or tinkering with code.
                        </p>
                    </div>
                </div>

                <div className="md:col-span-4 md:pt-32 space-y-12">
                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-4">Connect</h3>
                        <ul className="space-y-2 text-stone-900">
                            <li><a href="#" className="hover:underline">Twitter / X</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#" className="hover:underline">GitHub</a></li>
                            <li><a href="#" className="hover:underline">Email</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-4">Experience</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="text-stone-900 font-medium">Senior Designer, Tech Co.</div>
                                <div className="text-stone-500 text-sm">2021 — Present</div>
                            </li>
                            <li>
                                <div className="text-stone-900 font-medium">Product Designer, Startup Inc.</div>
                                <div className="text-stone-500 text-sm">2018 — 2021</div>
                            </li>
                            <li>
                                <div className="text-stone-900 font-medium">Junior Designer, Agency LLC</div>
                                <div className="text-stone-500 text-sm">2016 — 2018</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
