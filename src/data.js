export const companies = [
  {
    name: "RoboEpics",
    url: "https://roboepics.com",
    location: "Tehran, Iran"
  },
  {
    name: "AlaanMed",
    url: "https://alaanmed.com",
    location: "Dubai, UAE"
  },
  {
    name: "arades GmbH",
    url: "https://arades.de",
    location: "Offenbach, Germany"
  },
  {
    name: "Atieh Roshan Consulting",
    url: "https://www.atiehroshan.com/en/",
    location: "Tehran, Iran"
  },
  {
    name: "Shahid Beheshti University",
    url: "https://en.sbu.ac.ir",
    location: "Tehran, Iran"
  }
];

export const positions = [
  {
    company: "RoboEpics",

    startDate: "2022-10",

    title: "Software Engineer",
    employmentType: "Full-time, On-site",
    project: "Xerac",
    projectUrl: "https://xerac.ir",
    description: `**Xerac** started as a simple website for Iranian users to talk to **ChatGPT**, but the vision expands to a full-featured platform for users to have many types of interactions with different **large language models** and custom-made chatbots.

Our small team of three, developed Xerac in less than a week and successfully scaled it to **5000+ monthly users** with no marketing because of its simple UX, practical features and performance. I also developed **40+ private or internal assistants** for companies using **FastAPI** and utilizing different frameworks, RAG approaches, embedding models, vector stores and LLMs based on needs. These assistants were deployed on **Kubernetes** and connected to Xerac for company employees to interact with as a single comprehensive hub.

Initially, it was developed in **Express.js** and **Next.js** but was fully rewritten in **Next.js** by me and [open-sourced](https://github.com/XeracAI/Xerac), to benefit from **Next.js Streaming Server Rendering** and the **Vercel AI SDK**.`,
    summary: "Led a three-person team to develop **Xerac**, an LLM platform, scaling to **5000+ monthly users** with no marketing and only with simple UX, practical features and performance. Developed **40+ private assistants** for companies using **FastAPI**, various RAG approaches and LLMs, deployed on **Kubernetes**. Rewritten and [open-sourced](https://github.com/XeracAI/Xerac) from Express.js/Next.js to pure **Next.js** to leverage **Streaming Server Rendering** and **Vercel AI SDK**.",
    skills: [
      { name: "Next.js" },
      { name: "Tailwind CSS", formattedName: "tailwindcss" },
      { name: "Express.js", formattedName: "express" },
      { name: "FastAPI" },
      { name: "MongoDB" },
      { name: "LangChain" },
      { name: "Kubernetes" }
    ]
  },
  {
    company: "RoboEpics",

    startDate: "2021-03",
    endDate: "2021-08",

    title: "Back End Developer",
    employmentType: "Full-time, On-site",
    project: "Phoenix",
    projectUrl: "https://phoenix.roboepics.com",
    description: `**Phoenix** is an **MLOps platform** that simplifies ML model training and deployment through a serverless GPU marketplace.

As part of a three-member team, I helped develop a **serverless GPU marketplace** with **pay-as-you-go billing**.
Data centers, universities, companies and even personal desktop GPUs could join the marketplace only by running a lightweight binary on their machine. Data scientists who needed large GPUs to train their models could submit their code and data via our CLI. Phoenix would then **Dockerize** the code, run on the specified GPU(s), send back any results or exported files back to the user and only bill for the time their code was running. This pay-as-you-go system made it very cost-efficient for data scientists who didn't have access to powerful GPUs.

Key features we worked on:
- Automated containerization of ML training code
- **Pay-as-you-go billing** system based on GPU usage time
- Secure file transfer for code, data, and results
- **CLI** tool for workload submission and management

We also integrated Phoenix with **Google Colab**, in order to eliminate any migration steps for data scientists who perform experiments on Colab before going for the final training.

The backend services, GPU agent, and CLI were implemented in **Go**, while the frontend utilized **React.js**/**Next.js**.`,
    summary: "As part of a team of 3, developed a **serverless GPU marketplace** with **pay-as-you-go billing** system based on GPU usage time. Implemented automated **code Dockerization**, secure file transfer, and CLI tools for workload management. Integrated with **Google Colab** for seamless migration. Built backend services, GPU agent, and CLI in **Go** and frontend in **Next.js**.",
    skills: [
      { name: "Go" },
      { name: "Docker" },
      { name: "Next.js" },
      { name: "Google Colab", formattedName: "googlecolab" }
    ]
  },
  {
    company: "RoboEpics",

    startDate: "2020-01",

    title: "Software Engineer",
    employmentType: "Full-time, On-site",
    project: "RoboEpics",
    projectUrl: "https://roboepics.com",
    description: `**RoboEpics** is an **AI** and **Data Science competitions** hosting platform that enables companies to run competitions and professors to manage classroom assignments.

As the technical lead of a 5-person team, I architected and developed the platform's core infrastructure, which integrated multiple services:
- **Gitlab** for competition code submissions and version control
- **RabbitMQ** for distributed task queuing and evaluation processing
- **MinIO** for secure file storage and management
- **FusionAuth** for user authentication and access control
- **Sentry** for error tracking and performance monitoring
- **Kubernetes** for container orchestration and scaling

The platform automated the entire competition workflow, from code submission to evaluation. We implemented and open-sourced [Gimulator](https://github.com/Gimulator/Gimulator), a pub-sub real-time message broker using **gRPC** as a communication interface for AI agents, and [Hub](https://github.com/Gimulator/hub), a **Kubernetes controller** to orchestrate code execution and evaluation in isolated environments.

The backend was built with **Django REST framework** for robust API development, while the frontend utilized **Next.js** for a responsive user experience.`,
    summary: "Led a team of 5, developing an **AI and Data Science competitions** platform. Architected and developed core infrastructure integrating **Gitlab**, **RabbitMQ**, **MinIO**, **FusionAuth**, and **Kubernetes**. Open-sourced [Gimulator](https://github.com/Gimulator/Gimulator) (pub-sub message broker) and [Hub](https://github.com/Gimulator/hub) (Kubernetes controller) for isolated code execution. Built backend with **Django REST** and frontend with **Next.js**.",
    skills: [
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "Next.js" },
      { name: "RabbitMQ" },
      { name: "Gitlab" },
      { name: "Google Colab", formattedName: "googlecolab" },
      { name: "Kubernetes" },
      { name: "gRPC" },
      { name: "Go" },
      { name: "MinIO" },
      { name: "Sentry" }
    ]
  },
  {
    company: "AlaanMed",

    startDate: "2023-12",
    endDate: "2024-05",

    title: "Software Engineer",
    employmentType: "Contract, Remote",
    project: "Alaan Med",
    projectUrl: "https://alaanmed.com",
    description: `**Alaan Med** is a review platform designed to empower patients, mitigate risks in medical tourism, and provide doctors with a global stage to excel. It helps patients make informed decisions about medical tourism by providing verified reviews of doctors and medical facilities.

Working closely with the technical team of three, I developed the backend using **Express.js** and **MongoDB**, implementing **RESTful APIs** for user management, review systems, and doctor profiles. I integrated **Elasticsearch** to power the search functionality across doctors, specialties, and locations.

For infrastructure, I containerized the services using **Docker** and set up **Kubernetes** deployments to ensure reliable scaling and management. I also established **GitLab CI/CD** pipelines to automate the testing and deployment processes.

Additionally, I contributed to the frontend development in **React.js**/**Next.js**, focusing on implementing responsive UI components and integrating with the backend APIs.`,
    summary: "Built a **medical tourism review platform** with **Express.js** and **MongoDB** backend. Implemented **search functionality** using **Elasticsearch**, containerized with **Docker**, and deployed on **Kubernetes**. Set up **GitLab CI/CD** pipelines and developed responsive UI components in **Next.js**.",
    skills: [
      { name: "Express.js", formattedName: "express" },
      { name: "MongoDB" },
      { name: "Stripe" },
      { name: "Elasticsearch" },
      { name: "Kubernetes" }
    ]
  },
  {
    company: "arades GmbH",

    startDate: "2023-03",
    endDate: "2023-10",

    title: "Technical Consultant",
    employmentType: "Part-time, Remote",
    description: "Provided technical consulting for **AKS** and **Container Apps** on Azure infrastructure.",
    skills: [
      { name: "Kubernetes" },
      { name: "Azure" }
    ]
  },
  {
    company: "arades GmbH",

    startDate: "2021-10",
    endDate: "2022-08",

    title: "Back End Developer",
    employmentType: "Part-time, Remote",
    project: "Devonso",
    projectUrl: "https://devonso.com/",
    description: `**arades GmbH** develops software solutions and provides IT-Consulting for **Microsoft Dynamics 365** & **Office 365** products.

As a backend developer, I worked on two of their products, implementing **REST APIs** with **Express.js**, and contributing to the **Vue.js** frontend when needed. The products focused on extending **Microsoft Dynamics 365** functionality with custom features.

I also led the infrastructure modernization project, migrating their services from **Azure Linux VMs** to **Azure Kubernetes Service (AKS)** and **Azure Container Apps**. This included setting up **Azure Database for PostgreSQL Flexible Server** and updating the **CI/CD** pipelines to work with the containerized infrastructure.`,
    summary: "Developed **REST APIs** with **Express.js** for Microsoft Dynamics 365 extensions. Led infrastructure modernization, migrating from VMs to **Azure Kubernetes Service** and **Container Apps**. Contributed to **Vue.js** frontend.",
    skills: [
      { name: "Express.js", formattedName: "express" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Vue.js" },
      { name: "Stripe" },
      { name: "Kubernetes" },
      { name: "Azure" }
    ]
  },
  {
    company: "Atieh Roshan Consulting",

    startDate: "2019-04",
    endDate: "2019-09",

    title: "Full-Stack Web Developer",
    employmentType: "Freelance, Remote",
    project: "Atieh Roshan Survey",
    description: `**Atieh Roshan Consulting** group is a human resource management strategic consulting company, established in 2002.

The project involved creating a web-based system to digitize their HR questionnaire process, consisting of multiple forms with **5000+ inputs**. The system replaced Excel spreadsheets with an intuitive web interface where client companies could input their HR-related data across multiple categories including compensation, benefits, and organizational structure.

Key features included:
- Multi-page form interface with data validation and partial save
- Real-time report generation with **300+ tables and charts**, visualizing the collected data
- Export functionality for data analysis

The application was built with **Django** for the backend, utilizing **PostgreSQL** for data storage. The frontend was implemented using **vanilla JavaScript** and **CSS**, focusing on performance and user experience.`,
    summary: "Developed a comprehensive HR data collection system, replacing Excel spreadsheets, consisting of multiple forms with **5000+ inputs**, with a web-based interface featuring **multi-page forms**, **data validation**, and **extensive real-time reporting capabilities**, involving **300+ tables and charts**. Built with **Django** and **vanilla JavaScript**.",
    skills: [
      { name: "Django" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" }
    ]
  },
  {
    company: "Shahid Beheshti University",

    startDate: "2019-02",
    endDate: "2019-06",

    title: "Teacher Assistant - Advanced Programming",
    description: "Served as a teaching assistant for the Advanced Programming bachelor course.",
    skills: [
      { name: "Java", formattedName: "openjdk" },
      { name: "Object Oriented Programming (OOP)", formattedName: "oop" },
      { name: "Desktop Application Development (Swing)", formattedName: "swing" },
      { name: "Socket Programming (TCP)", formattedName: "tcp" }
    ]
  },
  {
    company: "Shahid Beheshti University",

    startDate: "2018-09",
    endDate: "2019-01",

    title: "Teacher Assistant - Basic Programming",
    description: "Served as a teaching assistant for the Basic Programming bachelor course.",
    skills: [
      { name: "C" },
      { name: "Algorithms" }
    ]
  }
]
