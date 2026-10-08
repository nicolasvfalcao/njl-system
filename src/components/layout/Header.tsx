import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { BrandMark } from '@/components/ui/BrandMark';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { navigation } from '@/features/landing/constants/landingContent';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl">
  <div className="flex h-20 items-center justify-between px-6 sm:px-10 lg:h-24 lg:px-[4vw] xl:px-[6vw]">

    {/* Logo */}
    <a
      href="#inicio"
      className="scale-110 focus-visible:outline-2 focus-visible:outline-brand lg:scale-125 xl:scale-[1.55]"
    >
      <BrandMark compact />
    </a>

    {/* Navegação */}
    <nav
      aria-label="Navegação principal"
      className="hidden md:block"
    >
      <ul className="flex items-center gap-8 lg:gap-12 xl:gap-16">
        {navigation.map((item) => (
          <li key={item.href}>
            <a
              className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-brand lg:text-sm"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* CTA */}
    <ButtonLink
      variant="ghost"
      className="hidden md:inline-flex lg:min-h-12 lg:px-6 lg:text-sm"
      href="#contato"
    >
      Vamos conversar
    </ButtonLink>

    {/* Menu mobile */}
    <button
      type="button"
      className="grid size-11 place-items-center rounded-[5px] border border-white/15 text-white md:hidden"
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((current) => !current)}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  </div>

  {isOpen ? (
    <nav
      aria-label="Navegação mobile"
      className="border-t border-white/10 bg-ink md:hidden"
    >
      <div className="px-6 py-6 sm:px-10">
        <ul>
          {navigation.map((item) => (
            <li
              key={item.href}
              className="border-b border-white/[0.07]"
            >
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
      </div>
    </nav>
  ) : null}
</header>
  );
}