import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/features/landing/constants/landingContent';

export function ProcessSection() {
  return (
    <section id="processo" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nosso processo"
          title="Do projeto à solução, com método e transparência."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative px-3 text-center">
              <div className="relative mx-auto mb-6 grid size-14 place-items-center rounded-full border border-white/15">
                <span className="font-display text-lg font-bold text-brand">
                  {step.number}
                </span>
                {index < processSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-full top-1/2 hidden h-px w-[calc(100%+2rem)] bg-gradient-to-r from-brand/50 to-white/10 lg:block"
                  />
                ) : null}
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-white/40">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
