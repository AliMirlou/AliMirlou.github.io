import SkillBadge from './SkillBadge'
import { formatDate, calculateMonths } from '../utils/date'
import { highlightText } from '../utils/textHighlight'
import { companies } from '../data'

export default function TimelineChronological({
  positions,
  shortVersion = false,
  darkMode = false
}) {
  // Sort positions by end date in descending order, handling current positions (no endDate)
  const sortedPositions = [...positions].sort((a, b) => {
    // If neither position has an endDate, sort by startDate
    if (!a.endDate && !b.endDate) {
      return new Date(b.startDate) - new Date(a.startDate)
    }
    // If only a has no endDate, it should come first
    if (!a.endDate) return -1
    // If only b has no endDate, it should come first
    if (!b.endDate) return 1
    // If both have endDates, sort by endDate
    return new Date(b.endDate) - new Date(a.endDate)
  })

  return (
    <div className="space-y-2 lg:space-y-10">
      {sortedPositions.map((position, index) => {
        // Find company data
        const companyData = companies.find(c => c.name === position.company)

        return (
          <div key={index} className="relative pl-6 print:pt-4 before:absolute before:left-0 before:top-0 print:before:top-4 before:w-[1px] before:h-full print:before:h-[90%] before:bg-gray-200 dark:before:bg-gray-700 print:break-inside-avoid timeline">
            <div className="absolute left-[-8px] print:top-4 top-0 w-4 h-4 bg-teal-500 dark:bg-teal-600 rounded-full" />

            <div className="relative print:break-inside-avoid">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
                {/* Date of position */}
                <div className="inline-block px-2 py-1 bg-gray-400 dark:bg-gray-600 text-white text-xs rounded">
                  {formatDate(position.startDate)} - {formatDate(position.endDate)}
                  <span className="font-medium">&nbsp;·&nbsp;{calculateMonths(position.startDate, position.endDate)}</span>
                </div>

                {/* Company and Position */}
                <h4 className="text-base lg:text-lg font-medium dark:text-gray-200">
                  {position.title}
                  {position.employmentType && (
                    <span className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                      &nbsp;({position.employmentType})
                    </span>
                  )}
                  <span className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                    &nbsp;@&nbsp;
                    {companyData?.url ? (
                      <a
                        href={companyData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:text-teal-500 
                          dark:hover:text-teal-300 underline decoration-dotted 
                          underline-offset-2 transition-colors"
                      >
                        {position.company}
                      </a>
                    ) : (
                      position.company
                    )}
                  </span>
                  {companyData?.location && (
                    <span className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                      &nbsp;·&nbsp;{companyData.location}
                    </span>
                  )}
                  {position.project && (
                    <span className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">
                      &nbsp;·&nbsp;
                      {position.projectUrl ? (
                        <a
                          href={position.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:text-teal-500 
                            dark:hover:text-teal-300 underline decoration-dotted 
                            underline-offset-2 transition-colors"
                        >
                          {position.project}
                        </a>
                      ) : (
                        position.project
                      )}
                    </span>
                  )}
                </h4>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-2 lg:mb-4 lg:mt-2 text-sm lg:text-base whitespace-pre-wrap">
                {highlightText(shortVersion && position.summary ? position.summary : position.description)}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {position.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 transition-transform hover:scale-110"
                  >
                    <SkillBadge name={skill.name} formattedName={skill.formattedName} darkMode={darkMode} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
