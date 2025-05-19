export type Project = {
  previewImageLink: string
  title: string
  stack: string[]
  description: string
  githubLink: string
  demoLink?: string // optional for future use
}

const projects: Project[] = [
  {
    previewImageLink: '/images/japanese_kanji.jpg',
    title: 'Kanji Journey',
    stack: ['React.js', 'Node.js', 'TypeScript'],
    description:
      'A visual study tool to help learners master Japanese kanji by JLPT level. Features include kanji lookup, progress tracking, and the ability to take notes and quiz yourself.',
    githubLink: 'https://github.com/JoeKabongo/kanji-journey',
  },
  {
    previewImageLink: '/images/planning.jpeg',
    title: 'Task Tracker',
    stack: ['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'JWT'],
    description:
      'A productivity app to manage and organize tasks by categories, with full CRUD functionality.',
    githubLink: 'https://github.com/JoeKabongo/Task-Tracker',
  },
  {
    previewImageLink: '/images/messaging.webp',
    title: 'Flack',
    description:
      'A Slack-style messaging app built with Flask and vanilla JavaScript. Features include real-time messaging and the ability to create and join chat rooms.',
    stack: ['Flask', 'Python', 'JavaScript', 'WebSocket'],
    githubLink: 'https://github.com/JoeKabongo/Flack',
  },
  {
    previewImageLink: '/images/basketball.jpeg',
    title: 'The NBA Talk',
    description:
      'A social blogging platform built with Angular and Django. Features include creating posts, commenting, liking, and disliking content.',
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
]

export default projects
