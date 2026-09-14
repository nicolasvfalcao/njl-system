import { ArrowUpRight } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'ghost';
};

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  const variantClasses =
    variant === 'primary'
      ? 'bg-brand text-ink hover:bg-brand-soft'
      : 'border border-white/20 bg-white/[0.03] text-white hover:border-brand/70 hover:text-brand';

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 text-xs font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${variantClasses} ${className}`}
      {...props}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </a>
  );
}
