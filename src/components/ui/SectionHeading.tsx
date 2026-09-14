type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.38em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.08] font-bold tracking-[-0.02em] text-white sm:text-4xl">
        {title} {highlight ? <span className="text-brand">{highlight}</span> : null}
      </h2>
    </div>
  );
}
