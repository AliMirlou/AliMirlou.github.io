export default function FloatingActionButton({
  label,
  className = '',
  children,
  pressed,
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      className={`group fixed right-4 z-10 cursor-pointer rounded-full bg-white p-2 text-gray-800 shadow-lg transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 print:hidden ${className}`}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {label}
      </span>
    </button>
  )
}
