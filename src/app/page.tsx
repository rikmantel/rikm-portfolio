import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { JobberIcon } from "@/components/icons/JobberIcon";

export default function Home() {
  return (
    <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
      <section className="pt-8 md:pt-8 pb-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.075] text-stone-900 max-w-7xl text-balance">
          Rik Mantel is a product designer in Vancouver, BC
        </h1>
        <p className="mt-8 text-lg md:text-xl text-stone-600 max-w-2xl text-balance">
          Rik is currently at <JobberIcon className="text-stone-600 inline-block h-[0.8em] w-auto align-baseline translate-y-[1px] ml-[4px] mr-[-1px]" /> Jobber, designing for the service professionals that keep our homes running. Previously Shopify and Morgan Stanley.</p>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">Selected Work</h2>
          {/* <Link href="/work" className="group flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">
            View all
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link> */}

          <Button
            href="/work"
            variant="secondary"
            size="sm"
            className="tracking-normal font-sans normal-case"
          >
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            {
              title: "Chronicle",
              category: "Product Design",
              desc: "A new way to experience history through interactive timelines.",
              slug: "chronicle"
            },
            {
              title: "Vessel",
              category: "Design System",
              desc: "Comprehensive component library for a fintech unicorn.",
              slug: "vessel"
            }
          ].map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
              <div className="aspect-[4/3] bg-stone-200 rounded-3xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-200 group-hover:bg-stone-300 transition-colors duration-500" />
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-900 opacity-50 font-mono text-xs uppercase">
                  Project Image
                </div>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-900 group-hover:text-stone-600 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-stone-500 font-mono text-xs uppercase tracking-wider">
                {project.category}
              </p>
              <p className="mt-3 text-stone-600 text-lg leading-relaxed max-w-md">
                {project.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
