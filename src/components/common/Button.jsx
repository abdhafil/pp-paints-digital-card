export default function Button({
  as: Element = "a",
  className = "",
  children,
  ...props
}) {
  return (
    <Element
      className={`inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
