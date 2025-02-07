export function formatDate(date) {
  if (!date) return 'Present'
  const [year, month] = date.split('-')
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  return `${monthNames[parseInt(month) - 1]} ${year}`
}

export function calculateMonths(startDate, endDate) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const totalMonths = months + 1

  if (totalMonths <= 11) {
    return `${totalMonths} ${totalMonths === 1 ? 'mo' : 'mos'}`
  }

  const years = Math.floor(totalMonths / 12)
  const remainingMonths = totalMonths % 12

  return `${years} ${years === 1 ? 'yr' : 'yrs'}${remainingMonths ? ` ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}` : ''}`
}
