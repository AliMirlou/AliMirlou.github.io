import { useState, useEffect } from 'preact/hooks'

import './app.css'

import { FaLinkedin, FaGithub, FaGlobe, FaPrint, FaSun, FaMoon, FaNoteSticky, FaBookOpen, FaSquareXTwitter, FaInstagram, FaTelegram, FaPhone, FaWhatsapp, FaEnvelope, FaListUl, FaBuilding } from 'react-icons/fa6'

import TimelineChronological from './components/TimelineChronological.jsx'
import TimelineCompany from './components/TimelineCompany.jsx'

import InfoItem from './components/InfoItem'
import LinkItem from './components/LinkItem'
import SkillBadge from './components/SkillBadge'

import { companies, positions } from './data.js'

export function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [shortVersion, setShortVersion] = useState(false)
  const [timelineView, setTimelineView] = useState('company')

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update document class when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen dark:text-gray-200">
      {/* Header */}
      <header className="p-3 md:p-7 bg-gradient-to-r from-cyan-500 dark:from-cyan-600 to-emerald-500 dark:to-emerald-600 text-white">
        <div className="max-w-7xl flex justify-between mx-auto">
          <div className="flex flex-col items-start gap-2 justify-between">
            <div className="flex flex-col">
              <p className="text-sm">Curriculum Vitae</p>
              <a
                href="https://AliMirlou.github.io"
                className="text-xs opacity-75 hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
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
      <main className="max-w-7xl mx-auto px-8 py-4 lg:py-8 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-12" style={{direction: "rtl"}}>
        {/* About Me Section */}
        <section id="about" className="col-span-1 lg:col-span-5 text-sm lg:text-lg lg:leading-relaxed" style={{direction: "ltr"}}>
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
        <section id="info" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 lg:col-span-2 gap-8 md:gap-4 h-fit" style={{direction: "ltr"}}>
          {/* Skills Section */}
          <div className="md:col-span-3 lg:col-span-1 print:break-inside-avoid">
            <h3 className="text-lg lg:text-2xl text-teal-500 mb-3">Skills</h3>

            <div className="grid grid-cols-[repeat(68,minmax(0,1fr))] lg:grid-cols-1 text-xs lg:text-base">
              <div className="lg:my-2 col-[span_13] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.1px] after:h-full after:bg-gradient-to-b after:from-transparent after:via-emerald-500 after:to-transparent lg:after:hidden">
                <h4 className="font-medium mb-2">Frontend Development</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Next.js" darkMode={darkMode} />
                  <SkillBadge name="React" formattedName="react" darkMode={darkMode} />
                  <SkillBadge name="Vue.js" darkMode={darkMode} />
                  <SkillBadge name="Tailwind CSS" formattedName="tailwindcss" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-[span_15] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-full after:bg-gradient-to-b after:from-transparent after:via-emerald-500 after:to-transparent before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:after:hidden lg:before:hidden">
                <h4 className="font-medium mb-2">Backend Development</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Django" darkMode={darkMode} />
                  <SkillBadge name="Express.js" formattedName="express" darkMode={darkMode} />
                  <SkillBadge name="FastAPI" darkMode={darkMode} />
                  <SkillBadge name="Go" formattedName="go" darkMode={darkMode} />
                  <SkillBadge name="Python" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-[span_13] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-full after:bg-gradient-to-b after:from-transparent after:via-emerald-500 after:to-transparent before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:after:hidden lg:before:hidden">
                <h4 className="font-medium mb-2">DevOps & Cloud</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="Kubernetes" darkMode={darkMode} />
                  <SkillBadge name="Docker" darkMode={darkMode} />
                  <SkillBadge name="GitLab" formattedName="gitlab" darkMode={darkMode} />
                  <SkillBadge name="Azure" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-[span_18] lg:col-span-1 relative after:absolute after:top-0 after:right-0 after:w-[0.5px] after:h-full after:bg-gradient-to-b after:from-transparent after:via-emerald-500 after:to-transparent before:absolute before:top-0 before:left-0 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:after:hidden lg:before:hidden">
                <h4 className="font-medium mb-2">Databases & Message Queues</h4>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  <SkillBadge name="PostgreSQL" darkMode={darkMode} />
                  <SkillBadge name="Elasticsearch" darkMode={darkMode} />
                  <SkillBadge name="MongoDB" darkMode={darkMode} />
                  <SkillBadge name="Redis" darkMode={darkMode} />
                  <SkillBadge name="RabbitMQ" formattedName="rabbitmq" darkMode={darkMode} />
                </div>
              </div>

              <div className="md:pl-1.5 lg:p-0 lg:my-2 col-span-9 lg:col-span-1 relative before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-transparent before:via-emerald-500 before:to-transparent lg:before:hidden">
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
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent" />
            <InfoItem label="Date of birth">November 17, 1996</InfoItem>
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent" />
            <InfoItem label="Languages" className="print:hidden">Persian (Native), English (Professional)</InfoItem>
            <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent print:hidden" />
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
                  className="w-5 h-5 flex-shrink-0"
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
        <section id="work" className="lg:col-span-3" style={{direction: "ltr"}}>
          <h3 className="text-lg lg:text-3xl text-teal-500 mb-3 lg:mb-8">Work Experience</h3>

          {/* Timeline Items */}
          {timelineView === 'company' ? (
            <div className="space-y-5 lg:space-y-12">
              {companies.map(company => (
                <TimelineCompany
                  key={company.name}
                  company={company.name}
                  companyUrl={company.url}
                  location={company.location}
                  positions={positions.filter(position => position.company === company.name)}
                  shortVersion={shortVersion}
                  darkMode={darkMode}
                />
              ))}
            </div>
          ) : (
            <TimelineChronological
              positions={positions}
              shortVersion={shortVersion}
              darkMode={darkMode}
            />
          )}
        </section>
      </main>

      <footer className="bg-gradient-to-r from-emerald-500 dark:from-emerald-600 to-cyan-500 dark:to-cyan-600 py-6 mt-10 break-before-page print:mt-[-72px]">
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
              Built with React.js and Tailwind CSS
              <span className="mx-2">•</span>
              Last updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg print:hidden group/theme cursor-pointer"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/theme:visible group-hover/theme:opacity-100 transition-all duration-200 whitespace-nowrap">
          {darkMode ? 'Show light mode' : 'Show dark mode'}
        </span>
      </button>

      {/* Summary Toggle Button */}
      <button
        onClick={() => setShortVersion(!shortVersion)}
        className="fixed bottom-16 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg print:hidden group/sum cursor-pointer"
      >
        {shortVersion ? <FaBookOpen /> : <FaNoteSticky />}
        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/sum:visible group-hover/sum:opacity-100 transition-all duration-200 whitespace-nowrap">
          {shortVersion ? 'Show full version' : 'Show short version'}
        </span>
      </button>

      {/* Timeline View Toggle Button */}
      <button
        onClick={() => setTimelineView(timelineView === 'company' ? 'chronological' : 'company')}
        className="fixed bottom-28 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg print:hidden group/view cursor-pointer"
      >
        {timelineView === 'company' ? <FaListUl /> : <FaBuilding />}
        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/view:visible group-hover/view:opacity-100 transition-all duration-200 whitespace-nowrap">
          {timelineView === 'company' ? 'Show chronological view' : 'Show company view'}
        </span>
      </button>

      {/* Print Button with Dropdown */}
      <div className="fixed bottom-40 right-4 z-10 print:hidden group">
        <button
          onClick={() => {
            const ShortVersionCopy = shortVersion
            setShortVersion(false)
            setTimeout(() => window.print(), 100)
            // Reset after printing
            setTimeout(() => setShortVersion(ShortVersionCopy), 500)
          }}
          className="relative p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg group/btn cursor-pointer"
        >
          <FaPrint />
          <span
            className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/btn:visible group-hover/btn:opacity-100 transition-all duration-200 whitespace-nowrap">
            Print full CV
          </span>
        </button>

        {/* Dropdown Menu */}
        <div
          className="absolute bottom-full right-0 mb-2 flex flex-col gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <button
            onClick={() => {
              const ShortVersionCopy = shortVersion
              setShortVersion(true)
              setTimeout(() => window.print(), 100)
              // Reset after printing
              setTimeout(() => setShortVersion(ShortVersionCopy), 500)
            }}
            className="relative p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg group/btn1 cursor-pointer"
          >
            <FaPrint />
            <span
              className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/btn1:visible group-hover/btn1:opacity-100 transition-all duration-200 whitespace-nowrap">
              Print short version
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
