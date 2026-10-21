const alignClasses = {
  left: 'text-left',
  center: 'text-center mx-auto items-center',
  right: 'text-right ml-auto items-end',
};

/**
 * NEXZIVO Studio SectionHeading.
 * Editorial typography hierarchy with clean styling, restrained eyebrow,
 * and high-contrast readable text.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
  theme = 'light', // 'light' or 'dark'
}) {
  const alignClass = alignClasses[align] || alignClasses.left;
  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? 'text-[#35C5E8]' : 'text-[#2764F5]'
          }`}
        >
          <span
            className={`h-0.5 w-5 rounded-full ${
              isDark ? 'bg-[#35C5E8]' : 'bg-[#2764F5]'
            }`}
            aria-hidden="true"
          />
          <span>{eyebrow}</span>
        </span>
      )}
      <Tag
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? 'text-white' : 'text-[#141B2A]'
        }`}
      >
        {heading}
      </Tag>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-[#CBD5E1]' : 'text-[#687386]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
