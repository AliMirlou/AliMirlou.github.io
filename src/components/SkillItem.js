export default function SkillItem({ name, level }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-600 dark:text-gray-400">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? 'bg-teal-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
