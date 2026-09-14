import { ArrowUpRight } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/features/landing/constants/landingContent';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-y border-white/[0.06] bg-surface py-20 sm:py-24"
    >
      <Container>
        <SectionHeading title="Soluções completas para seu projeto" highlight="digital" />
        <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
          {services.map(({ title, description, iconSrc, iconFrameSrc }, index) => (
            <article key={title} className="group bg-card p-7 sm:p-10">
              <div className="flex items-start justify-between">
                <span className="relative grid size-14 place-items-center">
                  {iconFrameSrc ? (
                    <img
                      src={iconFrameSrc}
                      alt=""
                      aria-hidden="true"
                      width="82"
                      height="82"
                      className="absolute inset-0 size-full"
                    />
                  ) : null}
                  <img
                    src={iconSrc}
                    alt=""
                    aria-hidden="true"
                    width="98"
                    height="98"
                    className={iconFrameSrc ? 'relative h-6 w-auto' : 'size-full'}
                  />
                </span>
                <span className="font-display text-xs tracking-[0.18em] text-white/25">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-10 font-display text-3xl font-bold uppercase text-white">
                {title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                {description}
              </p>
              <a
                href="#contato"
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand"
              >
                Saiba mais <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
