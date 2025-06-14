export type Project = {
  previewImageLink: string
  title: string
  stack: string[]
  taglineKey: string
  descriptionKey: string
  githubLink: string
  demoLink?: string // optional for future use
}

const projects: Project[] = [
  {
    previewImageLink: '/images/japanese_kanji.jpg',
    title: 'Kanji Journey',
    stack: ['React.js', 'Node.js', 'TypeScript'],
    taglineKey: 'project.kanjiJourney.tagline',
    descriptionKey: 'project.kanjiJourney.description',
    githubLink: 'https://github.com/JoeKabongo/kanji-journey',
  },
  {
    previewImageLink: '/images/planning.jpeg',
    title: 'Task Tracker',
    stack: ['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'JWT'],
    taglineKey: 'project.taskTracker.tagline',
    descriptionKey: 'project.taskTracker.description',
    githubLink: 'https://github.com/JoeKabongo/Task-Tracker',
  },
  {
    previewImageLink: '/images/basketball.jpeg',
    title: 'The NBA Talk',
    taglineKey: 'project.nba.tagline',
    descriptionKey: 'project.nba.description',
    stack: [
      'Angular',
      'Django',
      'TypeScript',
      'Python',
      'REST API',
      'PostgreSQL',
      'AWS',
      'Cloudinary API',
    ],
    githubLink: 'https://github.com/JoeKabongo/NBA-talk-frontend',
  },
  {
    previewImageLink: '/images/messaging.webp',
    title: 'Flack',
    taglineKey: 'project.flack.tagline',
    descriptionKey: 'project.flack.description',
    stack: ['Flask', 'Python', 'JavaScript', 'WebSocket', 'HTML', 'CSS'],
    githubLink: 'https://github.com/JoeKabongo/Flack',
  },
]

export default projects
