import { Aperture, Code2, Link } from 'lucide-react';

import { BrandMark } from '@/components/ui/BrandMark';
import { Container } from '@/components/ui/Container';

const socials = [
  { label: 'LinkedIn', Icon: Link },
  { label: 'GitHub', Icon: Code2 },
  { label: 'Instagram', Icon: Aperture },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-surface py-8">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <BrandMark compact />
          <p className="mt-4 max-w-xs text-xs leading-5 text-white/45">
            Soluções digitais que transformam ideias em resultados.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:items-end">
          <div className="flex gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contato"
                aria-label={label}
                className="grid size-9 place-items-center border border-white/15 text-white/70 transition hover:border-brand hover:text-brand"
              >
                <Icon size={16} strokeWidth={1.7} />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
            © {new Date().getFullYear()} NJL System. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
