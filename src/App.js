import { useState, useEffect } from 'react'
import TimelineCompany from './components/TimelineCompany'
import InfoItem from './components/InfoItem'
// import SkillItem from './components/SkillItem'
import { FaLinkedin, FaGithub, FaGlobe, FaPrint, FaSun, FaMoon, FaNoteSticky, FaBookOpen, FaSquareXTwitter, FaInstagram, FaTelegram, FaPhone, FaWhatsapp } from 'react-icons/fa6'
import LinkItem from './components/LinkItem'

export default function Resume() {
  const [darkMode, setDarkMode] = useState(true)
  const [shortVersion, setShortVersion] = useState(false)

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
    <div className="min-h-screen">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg print:hidden"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Summary Toggle Button */}
      <button
        onClick={() => setShortVersion(!shortVersion)}
        className="fixed bottom-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg print:hidden group/sum"
      >
        {shortVersion ? <FaBookOpen /> : <FaNoteSticky />}
        <span
          className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/sum:visible group-hover/sum:opacity-100 transition-all duration-200 whitespace-nowrap">
          {shortVersion ? 'Show full version' : 'Show short version'}
        </span>
      </button>

      {/* Print Button with Dropdown */}
      <div className="fixed bottom-16 right-4 z-10 print:hidden group">
        <button
          onClick={() => {
            const ShortVersionCopy = shortVersion
            setShortVersion(false)
            setTimeout(() => window.print(), 100)
            // Reset after printing
            setTimeout(() => setShortVersion(ShortVersionCopy), 500)
          }}
          className="relative p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg group/btn"
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
            className="relative p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white shadow-lg group/btn1"
          >
            <FaPrint />
            <span
              className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 invisible group-hover/btn1:visible group-hover/btn1:opacity-100 transition-all duration-200 whitespace-nowrap">
              Print short version
            </span>
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-cyan-500 dark:from-cyan-600 to-emerald-500 dark:to-emerald-600 p-3 md:p-7 text-white">
        <div className="flex flex-col max-w-7xl mx-auto">
          <p className="text-sm">Curriculum Vitae</p>
          <div className="flex items-end justify-between w-full">
            <div>
              <h1 className="text-3xl md:text-5xl mb-2">Ali Mirlou</h1>
              <h2 className="text-xl md:text-2xl font-light">Co-Founder and Software Engineer @ RoboEpics</h2>
            </div>
            <div className="size-24 md:size-32 rounded-full overflow-hidden border-4 border-white">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-4 lg:py-8">
        {/* About Me Section */}
        <section id="about" className="mb-5 lg:mb-12">
          <h2 className="text-xl lg:text-3xl text-teal-500 mb-3">About Me</h2>
          <p className="dark:text-gray-200 lg:text-lg lg:leading-relaxed">
            Passionate about delivering user-focused solutions in fast-paced environments, whatever the challenges and technologies may be.
          </p>
          <p className="dark:text-gray-200 lg:text-lg lg:leading-relaxed mt-2">
            Innovative Full-Stack Web Developer and DevOps Engineer. Expertise in microservices architecture,
            cloud infrastructure, container orchestration, CI/CD pipelines, and developing complex systems
            using technologies like Next.js, Django, Kubernetes, and emerging AI technologies.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-12" style={{direction: "rtl"}}>
          {/* Information & Skills */}
          <section id="info" className="dark:text-gray-200 lg:col-span-2 md:grid md:grid-cols-3 lg:block md:gap-8 space-y-8 md:space-y-0 lg:space-y-8" style={{direction: "ltr"}}>
            {/* Personal Information */}
            <div className="space-y-2 col-span-2">
              <h3 className="text-xl lg:text-2xl text-teal-500 mb-4">Information</h3>
              <InfoItem label="Location">Tehran, Iran</InfoItem>
              <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent" />
              <InfoItem label="Email">alimirlou@gmail.com</InfoItem>
              <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent print:hidden" />
              <InfoItem label="Languages" className="print:hidden">
                <div className="space-y-3">
                  <div>Persian (Native)</div>
                  <div className="w-16 h-[0.07rem] bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent" />
                  <div>English (Professional)</div>
                </div>
              </InfoItem>
              <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent" />
              <InfoItem label="Education">
                <div className="space-y-3 text-xs lg:text-base">
                  <div>MSc Data Mining, Shahid Beheshti University (2020-2022)</div>
                  <div className="w-16 h-[0.08rem] bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent"></div>
                  <div>BSc Computer Science, Shahid Beheshti University (2015-2020)</div>
                  <div className="w-16 h-[0.09rem] bg-gradient-to-r from-cyan-500 via-emerald-500 to-transparent"></div>
                  <div>NODET, Physics and Mathematical Sciences (2011-2015)</div>
                </div>
              </InfoItem>
            </div>

            {/* Links Section */}
            <div className="print:break-inside-avoid">
              <h3 className="text-xl lg:text-2xl text-teal-500 mb-4">Links</h3>
              <div className="space-y-2">
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
                    src="https://codeforces.org/s/93010/android-icon-192x192.png"
                    alt="Codeforces"
                    className="w-5 h-5 flex-shrink-0"
                  />}
                  className="print:hidden"
                >
                  codeforces.com/profile/AliMirlou
                </LinkItem>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section id="work" className="dark:text-gray-200 lg:col-span-3" style={{direction: "ltr"}}>
            <h2 className="text-xl lg:text-3xl text-teal-500 mb-3 lg:mb-8">Work Experience</h2>

            {/* Timeline Items */}
            <div className="space-y-5 lg:space-y-12">
              <TimelineCompany
                company="RoboEpics"
                companyUrl="https://roboepics.com"
                location="Tehran, Iran"
                positions={[
                  {
                    startDate: "2022-10",
                    title: "Software Engineer",
                    employmentType: "Full-time, On-site",
                    project: "Xerac",
                    projectUrl: "https://xerac.ir",
                    description: "Xerac started as a simple website for Iranian users to talk to ChatGPT, but the vision expands to a full-featured platform for users to have many types of interactions with different large language models and custom-made chatbots.\n\nOur small team of three, developed Xerac in less than a week and quickly gained thousands of users because of its simple UX and ease of access.\n\nInitially, it was developed in Express.js and Next.js but was fully rewritten all in Next.js by me, to benefit from Next.js Streaming Server Rendering and the Vercel AI SDK.",
                    summary: "Developed Xerac, a platform for LLM interactions. Rewritten the entire application from Express.js/Next.js to pure Next.js, implementing Streaming Server Rendering and Vercel AI SDK.",
                    skills: [
                      { name: "Next.js" },
                      { name: "Express.js", formattedName: "express" },
                      { name: "FastAPI" },
                      { name: "MongoDB" },
                      { name: "LangChain" },
                      { name: "Kubernetes" }
                    ]
                  },
                  {
                    startDate: "2021-03",
                    endDate: "2021-08",
                    title: "Back End Developer",
                    employmentType: "Full-time, On-site",
                    project: "Phoenix",
                    projectUrl: "https://phoenix.roboepics.com",
                    description: "Phoenix is a complete MLOps platform: From experiments to production, bring teams together in one application. Ship ML models faster, deploy to any cloud, and drive business results.\n\nAs part of a three-member team, I helped develop a serverless GPU marketplace for Data Scientists to train models on the cloud as easy as running a single command.\n\nData centers, universities, companies and even personal desktop GPUs could join the marketplace only by running a lightweight binary on their machine. Data scientists who needed large GPUs to train their models could submit their code and data via our CLI. Phoenix would Dockerize the code, run on the specified GPU(s), send back any results or exported files back to the user and only bill for the time their code was running. This pay-as-you-go system made it very cost-efficient for data scientists who didn't have access to powerful GPUs.\n\nWe also integrated Phoenix with Google Colab, in order to eliminate any migration steps for data scientists who perform experiments on Colab before going for the final training.\n\nThe backend, GPU agent and CLI were all implemented in Golang and the frontend was developed in React.js/Next.js.",
                    summary: "Developed a serverless GPU marketplace for Data Scientists. Implemented Dockerization and pay-as-you-go system for ML model training.",
                    skills: [
                      { name: "Golang", formattedName: "go" },
                      { name: "Docker" },
                      { name: "Next.js" }
                    ]
                  },
                  {
                    startDate: "2020-01",
                    title: "Software Engineer",
                    employmentType: "Full-time, On-site",
                    project: "RoboEpics",
                    projectUrl: "https://roboepics.com",
                    description: "RoboEpics is an AI and Data Science competitions hosting and outsourcing platform.\n\nMy team and I developed a comprehensive platform to host many types of data science competitions for companies and classes for professors.\n\nOur designed architecture consisted of several technologies, such as Gitlab for storing competition participants' codes, RabbitMQ for queuing and distributing runs and evaluations, MinIO for user-uploaded file storage, FusionAuth for authentication, Sentry for monitoring and Kubernetes for orchestrating all the services.\n\nWe also used Gimulator and it's Kubernetes controller to run and evaluate user codes and answers.\n\nThe primary backend and a few microservices were developed in Django and the frontend was developed in Next.js.",
                    summary: "Developed a comprehensive AI and Data Science competitions hosting platform. Implemented architecture using Gitlab, RabbitMQ, MinIO, FusionAuth, Sentry, and Kubernetes. Built backend in Django and frontend in Next.js.",
                    skills: [
                      { name: "Django" },
                      { name: "Next.js" },
                      { name: "RabbitMQ" },
                      { name: "Gitlab" },
                      { name: "Kubernetes" },
                      { name: "Golang", formattedName: "go" },
                      { name: "MinIO" },
                      { name: "Sentry" }
                    ]
                  },
                ]}
                shortVersion={shortVersion}
                darkMode={darkMode}
              />

              <TimelineCompany
                company="AlaanMed"
                companyUrl="https://alaanmed.com"
                location="Dubai, UAE"
                positions={[
                  {
                    startDate: "2023-12",
                    endDate: "2024-05",
                    title: "Software Engineer",
                    employmentType: "Contract, Remote",
                    project: "Alaan Med",
                    projectUrl: "https://alaanmed.com",
                    description: "Alaan Med is a review platform designed to empower patients, mitigate risks in medical tourism, and provide doctors with a global stage to excel.\n\nAs part of a three-member technical team, I developed the backend and infrastructure, implementing RESTful API with Express.js, database architecture on MongoDB, search system on Elasticsearch and a scalable infrastructure on Docker and Kubernetes to host all these services reliably and performantly.\n\nTo streamline development workflows and ensure consistent deployments, I implemented GitLab CI/CD pipelines across all services, automating builds, testing, and deployments.\n\nI also engaged in and maintained the frontend development of the project, implemented in React/Next.js.",
                    summary: "Developed backend and infrastructure for a medical review platform. Implemented RESTful API with Express.js, MongoDB, Elasticsearch, and Kubernetes. Set up GitLab CI/CD pipelines and contributed to Next.js frontend.",
                    skills: [
                      { name: "Express.js", formattedName: "express" },
                      { name: "MongoDB" },
                      { name: "Elasticsearch" },
                      { name: "Kubernetes" }
                    ]
                  }
                ]}
                shortVersion={shortVersion}
                darkMode={darkMode}
              />

              <TimelineCompany
                company="arades GmbH"
                companyUrl="https://arades.de"
                location="Offenbach, Germany"
                positions={[
                  {
                    startDate: "2023-03",
                    endDate: "2023-10",
                    title: "Technical Consultant",
                    employmentType: "Part-time, Remote",
                    description: "Provided technical consulting for AKS and Container Apps on Azure infrastructure.",
                    skills: [
                      { name: "Azure" },
                      { name: "Kubernetes" }
                    ]
                  },
                  {
                    startDate: "2021-10",
                    endDate: "2022-08",
                    title: "Back End Developer",
                    employmentType: "Part-time, Remote",
                    description: "arades GmbH is a software solutions and IT-Consulting for Microsoft Dynamics 365 & Office 365 products company.\n\nI contributed in two of their products, both on the backend side implemented with Express.js and frontend side implemented with Vue.js.\n\nI also migrated all of their infrastructure from bare-metal deployment on Azure Linux VMs, to Azure Kubernetes Service (AKS), Azure Container Apps and Azure Database for PostgreSQL Flexible Server, and updated all of their CI/CD pipelines to work with the new infrastructure.",
                    summary: "Migrated infrastructure to Azure Kubernetes Service, Container Apps, and PostgreSQL. Developed backend with Express.js and frontend with Vue.js.",
                    skills: [
                      { name: "Express.js", formattedName: "express" },
                      { name: "Vue.js" },
                      { name: "Azure" }
                    ]
                  }
                ]}
                shortVersion={shortVersion}
                darkMode={darkMode}
              />

              <TimelineCompany
                company="Atieh Roshan Consulting"
                companyUrl="https://www.atiehroshan.com/en/"
                location="Tehran, Iran"
                positions={[
                  {
                    startDate: "2019-04",
                    endDate: "2019-09",
                    title: "Full-Stack Web Developer",
                    employmentType: "Freelance, Remote",
                    project: "Atieh Roshan Survey",
                    description: "Atieh Roshan Consulting group is a human resource management strategic consulting company, established in 2002.\n\nThe project was a web interface to ease the process of filling large human resource questionnaires by companies in business relation with Atieh Roshan.\n\nI developed the backend with Django and frontend with vanilla JavaScript and CSS.",
                    summary: "Developed a web interface for streamlining human resource questionnaires. Built backend with Django and frontend with vanilla JavaScript and CSS.",
                    skills: [
                      { name: "Django" },
                      { name: "Python" },
                      { name: "JavaScript" },
                      { name: "HTML" },
                      { name: "CSS" }
                    ]
                  }
                ]}
                shortVersion={shortVersion}
                darkMode={darkMode}
              />

              <TimelineCompany
                company="Shahid Beheshti University"
                companyUrl="https://en.sbu.ac.ir"
                location="Tehran, Iran"
                positions={[
                  {
                    startDate: "2019-02",
                    endDate: "2019-06",
                    title: "Teacher Assistant - Advanced Programming",
                    description: "Served as a teaching assistant for the Advanced Programming course.",
                    skills: [
                      { name: "Java", formattedName: "openjdk" },
                      { name: "Object Oriented Programming (OOP)", formattedName: "oop" },
                      { name: "Desktop Application Development (Swing)", formattedName: "swing" },
                      { name: "Socket Programming (TCP)", formattedName: "tcp" },
                    ]
                  },
                  {
                    startDate: "2018-09",
                    endDate: "2019-01",
                    title: "Teacher Assistant - Basic Programming",
                    description: "Served as a teaching assistant for the Basic Programming course.",
                    skills: [
                      { name: "C" },
                      { name: "Algorithms" }
                    ]
                  }
                ]}
                shortVersion={shortVersion}
                darkMode={darkMode}
              />
            </div>
          </section>
        </div>
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
    </div>
  )
}
