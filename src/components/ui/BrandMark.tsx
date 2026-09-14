type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-2" aria-label="NJL System">
        <img
          src="/NJL.svg"
          alt=""
          aria-hidden="true"
          width="328"
          height="425"
          className="h-9 w-auto"
        />
        <span className="text-[9px] font-semibold tracking-[0.08em] text-white/70">
          System
        </span>
      </span>
    );
  }

  return (
    <img
      src="/NJL.svg"
      alt="Símbolo da NJL System"
      width="328"
      height="425"
      fetchPriority="high"
      className="hero-logo h-auto w-[clamp(10rem,28vw,20.5rem)]"
    />
  );
}
