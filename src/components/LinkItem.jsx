import { isValidElement } from 'preact'

export default function LinkItem({ href, icon: Icon, className = "", children }) {
  const opensInNewTab = /^https?:\/\//.test(href)

  return (
    <a
      href={href}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
      className={`text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 min-w-0 mb-2 text-sm md:text-base ${className}`}
    >
      {/* If Icon is an element (like img), render it directly */}
      {isValidElement(Icon) ? Icon : Icon && <Icon className="text-xl shrink-0" />}

      <span className="truncate">{children}</span>
    </a>
  )
}
