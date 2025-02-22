export function highlightText(text) {
  // First split by markdown links [text](url)
  const parts = text.split(/(\[.*?\]\(.*?\))/)
  
  return parts.map((part, index) => {
    // Check if this part is a markdown link
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
    if (linkMatch) {
      const [, linkText, url] = linkMatch
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 dark:text-teal-400 hover:text-teal-500 
            dark:hover:text-teal-300 underline decoration-dotted 
            underline-offset-2 transition-colors"
        >
          {linkText}
        </a>
      )
    }

    // For non-link parts, process bold markers
    return part.split(/(\*\*.*?\*\*)/).map((boldPart, boldIndex) => {
      if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
        const highlightedText = boldPart.slice(2, -2)
        return (
          <span 
            key={`${index}-${boldIndex}`} 
            className="text-teal-600 dark:text-teal-400 font-medium"
          >
            {highlightedText}
          </span>
        )
      }
      return boldPart
    })
  })
}
