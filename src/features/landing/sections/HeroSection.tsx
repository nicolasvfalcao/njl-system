import { BrandMark } from '@/components/ui/BrandMark';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[760px] items-center overflow-hidden pt-18"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-35" />
      <div
        aria-hidden="true"
        className="hero-glow absolute left-[64%] top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2"
      />

      <Container className="relative grid items-center gap-16 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        <div className="max-w-xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.38em] text-brand">
           Build · Code · Innovate
          </p>
          <h1 className="font-display text-[clamp(3.15rem,7vw,6.2rem)] leading-[0.92] font-black tracking-[-0.045em] text-white uppercase">
            Transformamos ideias em produtos <span className="text-brand">digitais</span>{' '}
            excepcionais.
          </h1>
          <p className="mt-7 max-w-md text-sm leading-6 text-white/55 sm:text-base">
            Desenvolvimento de software sob medida com foco em
design inteligente, performance e experiência do usuário.
          </p>
          <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row">
            <ButtonLink href="#contato">VER CASES</ButtonLink>
            <ButtonLink href="#portfolio" variant="ghost">
              Falar com especialista
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[310px] w-full max-w-[520px] place-items-center lg:min-h-[520px]">
          <div
            aria-hidden="true"
            className="absolute inset-[12%] rotate-45 border border-white/[0.06]"
          />
          <div className="relative z-10">
            <BrandMark />
          </div>
          <img
            src="/icontype.svg"
            alt=""
            aria-hidden="true"
            width="98"
            height="98"
            className="absolute left-2 top-8 size-14 sm:left-8 sm:size-[4.5rem]"
          />
          <img
            src="/iconReactGreen.svg"
            alt=""
            aria-hidden="true"
            width="98"
            height="98"
            className="absolute right-2 bottom-2 size-14 sm:right-8 sm:size-[4.5rem]"
          />
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 h-8 w-px bg-gradient-to-b from-brand to-transparent"
      />
    </section>
  );
}
