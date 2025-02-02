import React from 'react'

export default function LinkItem({ href, icon: Icon, className = "", children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 min-w-0 mb-2 text-sm md:text-base ${className}`}
    >
      {/* If Icon is an element (like img), render it directly */}
      {React.isValidElement(Icon) ? Icon : Icon && <Icon className="text-xl flex-shrink-0" />}

      <span className="truncate">{children}</span>
    </a>
  )
}
