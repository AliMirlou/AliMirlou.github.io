export default function InfoItem({ label, className = "", children }) {
  return (
    <div className={`grid grid-cols-7 ${className}`}>
      <div className="font-medium text-sm lg:text-base col-span-2">{label}</div>
      <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base col-span-5">
        {children}
      </div>
    </div>
  )
}
