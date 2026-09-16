export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0 text-primary"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 4 20 20H4Z" />
      </svg>
      <span className="text-base font-bold tracking-tight text-ink">
        Nodo Norte Studio
      </span>
      <span className="mb-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
    </span>
  );
}
