import { Send } from 'lucide-react';

import { Container } from '@/components/ui/Container';

export function ContactSection() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.38em] text-brand">
            Pronto para tirar sua ideia do papel?
          </p>
          <h2 className="font-display text-5xl leading-[0.95] font-black uppercase text-white sm:text-6xl">
            Vamos construir algo <span className="text-brand">incrível</span> juntos.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
            Conte um pouco sobre a sua ideia. Vamos conversar sobre como transformá-la em
            uma experiência digital de verdade.
          </p>
        </div>

        <form
          className="grid gap-5 sm:grid-cols-2"
          action="mailto:contato@njlsystem.com.br"
          method="post"
          encType="text/plain"
        >
          <label className="field-label">
            Nome
            <input
              className="field"
              type="text"
              name="nome"
              autoComplete="name"
              placeholder="Seu nome"
              required
            />
          </label>
          <label className="field-label">
            E-mail
            <input
              className="field"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="voce@empresa.com"
              required
            />
          </label>
          <label className="field-label">
            Telefone
            <input
              className="field"
              type="tel"
              name="telefone"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
            />
          </label>
          <label className="field-label">
            Empresa
            <input
              className="field"
              type="text"
              name="empresa"
              autoComplete="organization"
              placeholder="Nome da empresa"
            />
          </label>
          <label className="field-label sm:col-span-2">
            Como podemos ajudar?
            <textarea
              className="field min-h-28 resize-y"
              name="mensagem"
              placeholder="Conte sobre seu projeto"
              required
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-brand px-6 text-xs font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:w-fit"
          >
            Enviar mensagem <Send size={15} />
          </button>
        </form>
      </Container>
    </section>
  );
}
