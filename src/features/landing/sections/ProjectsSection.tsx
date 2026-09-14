import { ArrowUpRight } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/features/landing/constants/landingContent';

export function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="border-y border-white/[0.06] bg-surface py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Cases selecionados"
          title="Ideias que ganharam vida através do"
          highlight="digital"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group border border-white/[0.08] bg-card"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent}`}
              >
                <div
                  aria-hidden="true"
                  className="project-grid absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-4 right-4 font-display text-6xl font-black tracking-[-0.12em] text-white/[0.07]">
                  NJL
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand">
                    {project.category}
                  </p>
                  <span className="text-[10px] text-white/25">0{index + 1}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-white/45">
                  {project.description}
                </p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand"
                >
                  Ver projeto <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
