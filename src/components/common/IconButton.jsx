export default function IconButton({
  label,
  children,
  className = "",
  ...props
}) {
  return (
    <a
      aria-label={label}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:border-[#F97316] hover:text-[#F97316] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
