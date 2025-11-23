import Link from "next/link";

const projects = [
    {
        title: "Chronicle",
        category: "Product Design",
        year: "2024",
        desc: "A new way to experience history through interactive timelines.",
        slug: "chronicle"
    },
    {
        title: "Vessel",
        category: "Design System",
        year: "2023",
        desc: "Comprehensive component library for a fintech unicorn.",
        slug: "vessel"
    },
    {
        title: "Lumina",
        category: "Mobile App",
        year: "2023",
        desc: "Ambient light control for smart homes.",
        slug: "lumina"
    },
    {
        title: "Atlas",
        category: "Web Platform",
        year: "2022",
        desc: "Geospatial data visualization for urban planners.",
        slug: "atlas"
    }
];

export default function WorkPage() {
    return (
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto pt-20 md:pt-32">
            <h1 className="font-serif text-5xl md:text-7xl mb-20 text-stone-900">Index</h1>

            <div className="border-t border-stone-200">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/work/${project.slug}`}
                        className="group block py-10 border-b border-stone-200 hover:bg-stone-50 transition-colors -mx-6 px-6 md:-mx-12 md:px-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 group-hover:text-stone-600 transition-colors">
                                {project.title}
                            </h2>
                            <div className="flex items-center space-x-8 text-stone-500 font-mono text-xs uppercase tracking-wider">
                                <span>{project.category}</span>
                                <span>{project.year}</span>
                            </div>
                        </div>
                        <p className="mt-4 text-stone-600 text-lg max-w-2xl">
                            {project.desc}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
