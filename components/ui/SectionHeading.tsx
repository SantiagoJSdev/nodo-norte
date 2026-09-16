interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  kickerClassName?: string;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  kickerClassName = "text-accent",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex max-w-3xl flex-col ${className}`}>
      {kicker ? (
        <span
          className={`font-mono text-xs font-medium uppercase tracking-widest ${kickerClassName}`}
        >
          {kicker}
        </span>
      ) : null}
      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
