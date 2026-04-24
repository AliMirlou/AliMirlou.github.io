import { useEffect, useState } from 'preact/hooks'

import './app.css'

import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPrint,
  FaSun,
  FaMoon,
  FaNoteSticky,
  FaBookOpen,
  FaSquareXTwitter,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaListUl,
  FaBuilding
} from 'react-icons/fa6'

import TimelineChronological from './components/TimelineChronological.jsx'
import TimelineCompany from './components/TimelineCompany.jsx'
import FloatingActionButton from './components/FloatingActionButton.jsx'

import InfoItem from './components/InfoItem.jsx'
import LinkItem from './components/LinkItem.jsx'
import SkillBadge from './components/SkillBadge.jsx'

import {
  hasVisiblePositions,
  chronologicalPositions,
  positionsByCompany
} from './utils/positions.js'
import {
  applyDarkMode,
  getInitialDarkMode,
  persistThemePreference
} from './utils/theme.js'

export function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)
  const [shortVersion, setShortVersion] = useState(false)
  const [timelineView, setTimelineView] = useState('company')
  const visibleCompanyTimelines = positionsByCompany.filter((company) =>
    hasVisiblePositions(company.positions, shortVersion)
  )

  useEffect(() => {
    applyDarkMode(darkMode)
    persistThemePreference(darkMode)
  }, [darkMode])

  const handlePrint = (nextShortVersion) => {
    if (typeof window === 'undefined') {
      return
    }

    const previousShortVersion = shortVersion
    let restoreTimerId

    const restoreShortVersion = () => {
      window.removeEventListener('afterprint', restoreShortVersion)

      if (restoreTimerId) {
        window.clearTimeout(restoreTimerId)
      }

      setShortVersion(previousShortVersion)
    }

    setShortVersion(nextShortVersion)

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.addEventListener('afterprint', restoreShortVersion, { once: true })
        restoreTimerId = window.setTimeout(restoreShortVersion, 1000)
        window.print()
      })
    })
  }

  return (
    <div className="min-h-screen dark:text-gray-200">
      {/* Header */}
      <header className="p-3 md:p-7 bg-linear-to-r from-cyan-500 dark:from-cyan-600 to-emerald-500 dark:to-emerald-600 text-white" role="banner">
        <div className="max-w-7xl flex justify-between mx-auto">
          <div className="flex flex-col items-start gap-2 justify-between">
            <div className="flex flex-col">
              <h1 className="text-sm">Curriculum Vitae</h1>
              <a
                href="https://AliMirlou.github.io"
                className="text-xs opacity-75 hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Portfolio Website"
              >
                AliMirlou.github.io
              </a>
            </div>
            <div>
              <h1 className="text-3xl lg:text-5xl">Ali Mirlou</h1>
              <h2 className="text-xl lg:text-2xl font-light">Co-Founder and Software Engineer @ RoboEpics</h2>
            </div>
          </div>
          <div className="size-24 lg:size-32 rounded-full overflow-hidden border-4 border-white my-auto">
            <img
              src="/profile.webp"
              alt="Profile"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 gap-4 px-8 py-4 lg:grid-cols-5 lg:gap-12 lg:py-8" dir="rtl">
        {/* About Me Section */}
        <section id="about" className="col-span-1 text-sm lg:col-span-5 lg:text-lg lg:leading-relaxed" dir="ltr">
          <h3 className="text-lg lg:text-3xl text-teal-500 mb-3">About Me</h3>

          Ambitious and collaborative team player focused on delivering user-focused solutions in fast-paced environments,
          whatever the challenges and technologies may be, with 8 years of experience in web development, DevOps and infrastructure.
          <p className="mt-2">
            Innovative Full-Stack Web Developer with strong problem-solving abilities and effective communication skills.
            Expertise in microservices architecture, cloud infrastructure, container orchestration, CI/CD pipelines,
            and developing complex systems using technologies like Next.js, Django, Kubernetes, and emerging AI technologies.
            Demonstrated leadership in mentoring junior developers and driving technical decisions through analytical thinking and adaptability.
          </p>
        </section>

        {/* Information */}
        <section id="info" className="grid h-fit grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:col-span-2 lg:grid-cols-1" dir="ltr">
          {/* Skills Section */}
          <div className="md:col-span-3 lg:col-span-1 print:break-inside-avoid">
            <h3 className="text-lg lg:text-2xl text-teal-500 mb-3">Skills</h3>

            <div className="grid grid-cols-68 lg:grid-cols-1 text-xs lg:text-base">
              <div className="lg:my-2 col-[span_13] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.1px] after:h-full after:bg-linear-to-b after:from-transparent after:via-emerald-500 after:to-transparent lg:after:hidden">
                <h4 className="font-medium mb-2">Frontend Development</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Next.js" darkMode={darkMode} />
                  <SkillBadge name="React" formattedName="react" darkMode={darkMode} />
                  <SkillBadge name="Vue.js" darkMode={darkMode} />
                  <SkillBadge name="Tailwind CSS" formattedName="tailwindcss" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-[span_15] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-full after:bg-linear-to-b after:from-transparent after:via-emerald-500 after:to-transparent before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-linear-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:after:hidden lg:before:hidden">
                <h4 className="font-medium mb-2">Backend Development</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Django" darkMode={darkMode} />
                  <SkillBadge name="Express.js" formattedName="express" darkMode={darkMode} />
                  <SkillBadge name="FastAPI" darkMode={darkMode} />
                  <SkillBadge name="Go" formattedName="go" darkMode={darkMode} />
                  <SkillBadge name="Python" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-[span_13] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-full after:bg-linear-to-b after:from-transparent after:via-emerald-500 after:to-transparent before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-linear-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:after:hidden lg:before:hidden">
                <h4 className="font-medium mb-2">DevOps & Cloud</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Kubernetes" darkMode={darkMode} />
                  <SkillBadge name="Docker" darkMode={darkMode} />
                  <SkillBadge name="GitLab" formattedName="gitlab" darkMode={darkMode} />
                  <SkillBadge name="Azure" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-[span_18] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-full after:bg-linear-to-b after:from-transparent after:via-emerald-500 after:to-transparent before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-linear-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:after:hidden lg:before:hidden">
                <h4 className="font-medium mb-2">Databases & Message Queues</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="PostgreSQL" darkMode={darkMode} />
                  <SkillBadge name="Elasticsearch" darkMode={darkMode} />
                  <SkillBadge name="MongoDB" darkMode={darkMode} />
                  <SkillBadge name="Redis" darkMode={darkMode} />
                  <SkillBadge name="RabbitMQ" formattedName="rabbitmq" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-span-9 lg:col-span-1 relative before:absolute before:top-0 before:left-0 before:w-px before:h-full before:bg-linear-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:before:hidden">
                <h4 className="font-medium mb-2">Other Tools</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Git" darkMode={darkMode} />
                  <SkillBadge name="MinIO" darkMode={darkMode} />
                  <SkillBadge name="Sentry" formattedName="sentry" darkMode={darkMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-1 lg:space-y-2 col-span-2">
            <h3 className="text-lg lg:text-2xl text-teal-500 mb-3">Information</h3>
            <InfoItem label="Location">Tehran, Iran</InfoItem>
            <div className="w-32 h-0.5 bg-linear-to-r from-cyan-500 via-emerald-500 to-transparent" />
            <InfoItem label="Date of birth">November 17, 1996</InfoItem>
            <div className="w-32 h-0.5 bg-linear-to-r from-cyan-500 via-emerald-500 to-transparent" />
            <InfoItem label="Languages" className="print:hidden">Persian (Native), English (Professional)</InfoItem>
            <div className="w-32 h-0.5 bg-linear-to-r from-cyan-500 via-emerald-500 to-transparent print:hidden" />
            <InfoItem label="Education">
              <div className="space-y-2 text-xs lg:text-base">
                <p>MSc Data Mining, Shahid Beheshti University (2020-2022)</p>
                {/* <div className="w-16 h-[0.08rem] bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent"></div> */}
                <p>BSc Computer Science, Shahid Beheshti University (2015-2020)</p>
                {/* <div className="w-16 h-[0.09rem] bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent"></div> */}
                <p>NODET, Physics and Mathematical Sciences (2011-2015)</p>
              </div>
            </InfoItem>
          </div>

          {/* Links Section */}
          <div className="print:break-inside-avoid">
            <h3 className="text-lg lg:text-2xl text-teal-500 mb-3">Links</h3>
            <div className="space-y-2">
              <LinkItem
                href="mailto:alimirlou@gmail.com"
                icon={FaEnvelope}
              >
                alimirlou@gmail.com
              </LinkItem>
              <LinkItem
                href="tel:+989382470510"
                icon={FaPhone}
              >
                +98 938 247 0510
              </LinkItem>
              <LinkItem
                href="https://wa.me/989382470510"
                icon={FaWhatsapp}
                className="print:hidden"
              >
                WhatsApp
              </LinkItem>
              <LinkItem
                href="https://linkedin.com/in/alimirlou"
                icon={FaLinkedin}
              >
                linkedin.com/in/alimirlou
              </LinkItem>
              <LinkItem
                href="https://github.com/AliMirlou"
                icon={FaGithub}
              >
                github.com/AliMirlou
              </LinkItem>
              <LinkItem
                href="https://AliMirlou.github.io"
                icon={FaGlobe}
                className="print:hidden"
              >
                AliMirlou.github.io
              </LinkItem>
              <LinkItem
                href="https://t.me/AliMirlou"
                icon={FaTelegram}
                className="print:hidden"
              >
                t.me/AliMirlou
              </LinkItem>
              <LinkItem
                href="https://www.instagram.com/alimirlou/"
                icon={FaInstagram}
                className="print:hidden"
              >
                instagram.com/alimirlou
              </LinkItem>
              <LinkItem
                href="https://x.com/AliMirlou"
                icon={FaSquareXTwitter}
                className="print:hidden"
              >
                x.com/AliMirlou
              </LinkItem>
              <LinkItem
                href="https://codeforces.com/profile/AliMirlou"
                icon={<img
                  src="https://codeforces.org/s/65485/apple-icon-57x57.png"
                  alt="Codeforces"
                  className="w-5 h-5 shrink-0"
                  loading="lazy"
                  decoding="async"
                />}
                className="print:hidden"
              >
                codeforces.com/profile/AliMirlou
              </LinkItem>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="work" className="lg:col-span-3" dir="ltr">
          <h3 className="text-lg lg:text-3xl text-teal-500 mb-3 lg:mb-8">Work Experience</h3>

          {/* Timeline Items */}
          {timelineView === 'company' ? (
            <div className="space-y-5 lg:space-y-12">
              {visibleCompanyTimelines.map((company) => (
                <TimelineCompany
                  key={company.name}
                  company={company.name}
                  companyUrl={company.url}
                  location={company.location}
                  positions={company.positions}
                  shortVersion={shortVersion}
                  darkMode={darkMode}
                />
              ))}
            </div>
          ) : (
            <TimelineChronological
              positions={chronologicalPositions}
              shortVersion={shortVersion}
              darkMode={darkMode}
            />
          )}
        </section>
      </main>

      <footer className="bg-linear-to-r from-emerald-500 dark:from-emerald-600 to-cyan-500 dark:to-cyan-600 py-6 mt-10 break-before-page print:-mt-18">
        <div className="max-w-7xl mx-auto px-8">
          <div className="hidden print:block text-center text-white">
            <span className="font-light">View the live version at: </span>
            <a
              href="https://AliMirlou.github.io/"
              className="font-medium hover:underline"
            >
              AliMirlou.github.io
            </a>
          </div>
          <div className="print:hidden text-center text-white text-sm">
            <p className="font-light">
              Built with Preact and Tailwind CSS
              <span className="mx-2">•</span>
              Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <FloatingActionButton
        onClick={() => setDarkMode(!darkMode)}
        className="bottom-4"
        label={darkMode ? 'Show light mode' : 'Show dark mode'}
        pressed={darkMode}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </FloatingActionButton>

      {/* Summary Toggle Button */}
      <FloatingActionButton
        onClick={() => setShortVersion(!shortVersion)}
        className="bottom-16"
        label={shortVersion ? 'Show full version' : 'Show short version'}
        pressed={shortVersion}
      >
        {shortVersion ? <FaBookOpen /> : <FaNoteSticky />}
      </FloatingActionButton>

      {/* Timeline View Toggle Button */}
      <FloatingActionButton
        onClick={() => setTimelineView(timelineView === 'company' ? 'chronological' : 'company')}
        className="bottom-28"
        label={timelineView === 'company' ? 'Show chronological view' : 'Show company view'}
        pressed={timelineView === 'chronological'}
      >
        {timelineView === 'company' ? <FaListUl /> : <FaBuilding />}
      </FloatingActionButton>

      <FloatingActionButton
        onClick={() => handlePrint(false)}
        className="bottom-40"
        label="Print full CV"
      >
        <FaPrint />
      </FloatingActionButton>

      <FloatingActionButton
        onClick={() => handlePrint(true)}
        className="bottom-52"
        label="Print short CV"
      >
        <FaPrint />
      </FloatingActionButton>
    </div>
  )
}
