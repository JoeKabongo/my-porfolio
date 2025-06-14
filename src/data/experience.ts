export type Experience = {
  companyImageLink: string
  company: string
  titleKey: string
  durationKey: string
  descriptionKey: string
}

const experiences: Experience[] = [
  {
    companyImageLink: '/images/googleLogo.webp',
    company: 'Google',
    titleKey: 'experience.google.title',
    durationKey: 'experience.google.duration',
    descriptionKey: 'experience.google.description',
  },
  {
    companyImageLink: '/images/googleLogo.webp',
    company: 'Google',
    titleKey: 'experience.googleIntern.title',
    durationKey: 'experience.googleIntern.duration',
    descriptionKey: 'experience.googleIntern.description',
  },
  {
    companyImageLink: '/images/intuit.png',
    company: 'Intuit',
    titleKey: 'experience.intuit.title',
    durationKey: 'experience.intuit.duration',
    descriptionKey: 'experience.intuit.description',
  },
  {
    companyImageLink: '/images/quibblme.jpeg',
    company: 'Quibbl.me',
    titleKey: 'experience.quibbl.title',
    durationKey: 'experience.quibbl.duration',
    descriptionKey: 'experience.quibbl.description',
  },
]

export default experiences
