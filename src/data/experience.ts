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
      'Working in the Play Monetization team. Worked on multiple feature that includes android developlment in Kotlin, Frontend web development and backend.',
  },
  {
    companyLink: '/images/googleLogo.webp',
    title: 'Software Engineer Intern',
    company: 'Google',
    duration: 'Jun 2021 - Aug 2021',
    description:
      'Worked in Google Survey team. Built an entire frontend for creating a survey and the api for rendering the survey and processing survey creation',
  },
  {
    companyLink: '/images/intuit.png',
    title: 'Software Engineer Intern',
    company: 'Intuit',
    duration: 'May 2020 - Aug 2020',
    description:
      'Worked within the data team. Build some piline and ETL to process transactions and determines subscription patterns. Furtheremore built dashbooard using SQL and tablea to determine fop/transaction failtures.',
  },
  {
    companyLink: '/images/quibblme.jpeg',
    title: 'Backend Engineer Intern',
    company: 'Quibbl.me',
    duration: 'Feb 2019 - May 2019',
    description:
      'Built backend rest apis to process news rendering news informations; built a pipeline to process data from spreadsheet and import them into a database MongoDB ',
  },
]

export default experiences
