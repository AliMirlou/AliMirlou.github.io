export function highlightText(text) {
  // Match text between ** markers
  return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove ** markers and wrap content in highlight span
      const highlightedText = part.slice(2, -2)
      return <span key={index} className="text-teal-600 dark:text-teal-400 font-medium">{highlightedText}</span>
    }
    return part
  })
}
