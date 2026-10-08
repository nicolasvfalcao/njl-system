import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { BrandMark } from '@/components/ui/BrandMark';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { navigation } from '@/features/landing/constants/landingContent';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <a href="#inicio" className="focus-visible:outline-2 focus-visible:outline-brand">
          <BrandMark compact />
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/70 transition hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink className="hidden md:inline-flex" href="#contato">
          Vamos conversar
        </ButtonLink>

        <button
          type="button"
          className="grid size-11 place-items-center border border-white/15 text-white md:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <nav
          aria-label="Navegação mobile"
          className="border-t border-white/10 bg-ink md:hidden"
        >
          <Container className="py-6">
            <ul>
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-white/[0.07]">
                  <a
                    className="flex min-h-14 items-center justify-between font-display text-xl uppercase text-white"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span className="text-brand">+</span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
