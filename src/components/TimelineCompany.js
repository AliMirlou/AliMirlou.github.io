import SkillBadge from './SkillBadge'
import { formatDate, calculateMonths } from '../utils/date'
import { highlightText } from '../utils/textHighlight'

export default function TimelineCompany({
  company,
  companyUrl,
  location,
  positions,
  shortVersion = false,
  darkMode = false
}) {
  return (
    <div className={`relative pl-6 print:pt-8 before:absolute before:left-0 before:top-0 print:before:top-8 before:w-[1px] before:h-full before:bg-gray-200 dark:before:bg-gray-700 ${shortVersion ? 'print:break-inside-avoid' : ''} timeline`}>
      <div className="absolute left-[-8px] print:top-8 top-0 w-4 h-4 bg-teal-500 dark:bg-teal-600 rounded-full" />
      <h3 className="text-lg lg:text-xl font-medium dark:text-gray-200 mb-3 lg:mb-4">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit hover:text-teal-600 dark:hover:text-teal-400 underline decoration-dotted underline-offset-2 transition-colors"
          >
            {company}
          </a>
        ) : (
          company
        )}
        {location && (
          <span className="text-sm lg:text-base text-gray-500 dark:text-gray-400 mb-2 lg:mb-4">&nbsp;·&nbsp;{location}</span>
        )}
      </h3>

      {/* Positions */}
      <div className="space-y-4 lg:space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="relative print:break-inside-avoid">
            <div className="absolute left-[-28px] top-2 w-2 h-2 bg-teal-500 dark:bg-teal-600 rounded-full" />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
              {/* Date of position */}
              <div className="inline-block px-2 py-1 bg-gray-400 dark:bg-gray-600 text-white text-xs rounded">
                {formatDate(position.startDate)} - {formatDate(position.endDate)}
                <span className="font-medium">&nbsp;·&nbsp;{calculateMonths(position.startDate, position.endDate)}</span>
              </div>

              {/* Information about position */}
              <h4 className="text-base lg:text-lg font-medium dark:text-gray-200">
                {position.title}
                {position.employmentType && <span className="text-sm lg:text-base font-normal text-gray-500 dark:text-gray-400">&nbsp;({position.employmentType})</span>}
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
              {shortVersion && position.summary ? 
                highlightText(position.summary) : 
                position.description}
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
        ))}
      </div>
    </div>
  )
}
