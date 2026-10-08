import { ButtonLink } from '@/components/ui/ButtonLink';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[760px] overflow-hidden pt-18"
    >
      <div
        aria-hidden="true"
        className="hero-grid absolute inset-0 opacity-35"
      />

      <div
        aria-hidden="true"
        className="hero-glow absolute left-[64%] top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative grid min-h-[700px] items-center lg:grid-cols-2">
        
        {/* ESQUERDA */}
        <div className="w-full px-6 py-20 sm:px-10 lg:px-[6vw] xl:px-[8vw]">
          <div className="max-w-2xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.38em] text-brand">
              Build · Code · Innovate
            </p>

            <h1 className="font-display text-[clamp(3.15rem,7vw,6.2rem)] leading-[0.92] font-black tracking-[-0.045em] text-white uppercase">
              Transformamos ideias em produtos{' '}
              <span className="text-brand">digitais</span> excepcionais.
            </h1>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/55 sm:text-base">
              Desenvolvimento de software sob medida com foco em design
              inteligente, performance e experiência do usuário.
            </p>

            <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
              <ButtonLink href="#contato">
                VER CASES
              </ButtonLink>

              <ButtonLink href="#portfolio" variant="ghost">
                Falar com especialista
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex h-full min-h-[400px] w-full items-center justify-center overflow-hidden px-4 lg:min-h-[700px] lg:px-0">
          <img
            src="/image.png"
            alt="Desenvolvimento de software"
            className="h-auto w-full max-w-none object-contain"
          />
        </div>

      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 h-8 w-px bg-gradient-to-b from-brand to-transparent"
      />
    </section>
  );
}