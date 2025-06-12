export type Experience = {
  companyLink: string
  title: string
  company: string
  duration: string
  description: string
}

const experiences: Experience[] = [
  {
    companyLink: '/images/googleLogo.webp',
    title: 'Software engineer',
    company: 'Google',
    duration: 'Jul 2022 - Present',
    description:
      'I work on the Play Monetization team, where I’ve contributed to several cross-functional features involving Android development in Kotlin, frontend web development, and backend API and service design. My role spans the full stack, and I regularly collaborate with other teams to improve monetization flows and user experience.',
  },
  {
    companyLink: '/images/googleLogo.webp',
    title: 'Software Engineer Intern',
    company: 'Google',
    duration: 'Jun 2021 - Aug 2021',
    description:
      'As part of the Google Surveys team, I built a complete frontend interface for survey creation, along with backend APIs for rendering and processing surveys. This project gave me hands-on experience owning a feature end-to-end and collaborating with engineers across the stack.',
  },
  {
    companyLink: '/images/intuit.png',
    title: 'Software Engineer Intern',
    company: 'Intuit',
    duration: 'May 2020 - Aug 2020',
    description:
      'I worked on the Data team, where I built data pipelines and ETL processes to analyze user transactions and identify subscription patterns. Additionally, I developed dashboards using SQL and Tableau to surface insights into failed transactions and payment issues.',
  },
  {
    companyLink: '/images/quibblme.jpeg',
    title: 'Backend Engineer Intern',
    company: 'Quibbl.me',
    duration: 'Feb 2019 - May 2019',
    description:
      'Built RESTful backend APIs to support dynamic news content rendering. Also developed a data pipeline to process spreadsheet inputs and import them into a MongoDB database for structured storage and retrieval.',
  },
]

export default experiences
