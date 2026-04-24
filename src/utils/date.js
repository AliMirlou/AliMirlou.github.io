const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export function formatDate(date) {
  if (!date) return 'Present'
  const [year, month] = date.split('-')
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`
}

function getCurrentYearMonth() {
  const now = new Date()

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1
  }
}

function getMonthIndex({ year, month }) {
  return year * 12 + month - 1
}

function parseYearMonth(value) {
  if (!value) return null

  const [yearString, monthString] = value.split('-')
  const year = Number.parseInt(yearString, 10)
  const month = Number.parseInt(monthString, 10)

  return { year, month }
}

function compareYearMonthDesc(left, right) {
  if (!left && !right) return 0
  if (!left) return 1
  if (!right) return -1

  return getMonthIndex(right) - getMonthIndex(left)
}

export function comparePositionsByRecency(left, right) {
  const leftEnd = parseYearMonth(left.endDate) ?? getCurrentYearMonth()
  const rightEnd = parseYearMonth(right.endDate) ?? getCurrentYearMonth()
  const endComparison = compareYearMonthDesc(leftEnd, rightEnd)

  if (endComparison !== 0) {
    return endComparison
  }

  return compareYearMonthDesc(
    parseYearMonth(left.startDate),
    parseYearMonth(right.startDate)
  )
}

export function calculateMonths(startDate, endDate) {
  const start = parseYearMonth(startDate)
  const end = parseYearMonth(endDate) ?? getCurrentYearMonth()

  if (!start) {
    return ''
  }

  const totalMonths = getMonthIndex(end) - getMonthIndex(start) + 1

  if (totalMonths <= 11) {
    return `${totalMonths} ${totalMonths === 1 ? 'mo' : 'mos'}`
  }

  const years = Math.floor(totalMonths / 12)
  const remainingMonths = totalMonths % 12

  return `${years} ${years === 1 ? 'yr' : 'yrs'}${remainingMonths ? ` ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}` : ''}`
}
