import { companies, positions } from '../data.js'
import { comparePositionsByRecency } from './date.js'

export function filterPositionsForDisplay(items, shortVersion = false) {
  if (!shortVersion) {
    return items
  }

  return items.filter((position) => !position.excludeFromShortVersion)
}

export function hasVisiblePositions(items, shortVersion = false) {
  return filterPositionsForDisplay(items, shortVersion).length > 0
}

export function getPositionKey(position) {
  return [
    position.company,
    position.title,
    position.startDate,
    position.endDate ?? 'present',
    position.project ?? 'no-project'
  ].join(':')
}

export const companyLookup = new Map(
  companies.map((company) => [company.name, company])
)

export const positionsByCompany = companies.map((company) => ({
  ...company,
  positions: positions.filter((position) => position.company === company.name)
}))

export const chronologicalPositions = [...positions].sort(comparePositionsByRecency)
