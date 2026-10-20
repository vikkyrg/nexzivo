
/**
 * NEXZIVO layout Container.
 * Shared width and spacing across all pages.
 */
export function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-none px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </Tag>
  );
}
