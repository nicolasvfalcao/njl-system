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
    ? 'bg-[#CEE42F] !text-black hover:bg-[#CEE42F]/90'
      : 'border border-[#CEE42F] bg-transparent !text-white hover:bg-[#CEE42F] hover:!text-black';
  return (
  <a
    className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[5px] px-5 text-xs font-bold uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${variantClasses} ${className}`}
    {...props}
  >
    {children}
    <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
  </a>
);
}
