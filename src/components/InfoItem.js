export default function InfoItem({ label, children }) {
  return (
    <div className="grid grid-cols-3">
      <div className="font-medium text-sm lg:text-base">{label}</div>
      <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base col-span-2">
        {children}
      </div>
    </div>
  )
}
