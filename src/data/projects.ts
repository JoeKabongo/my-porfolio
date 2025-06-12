export type Project = {
  previewImageLink: string
  title: string
  stack: string[]
  tagline: string
  description: string
  githubLink: string
  demoLink?: string // optional for future use
}

const projects: Project[] = [
  {
    previewImageLink: '/images/japanese_kanji.jpg',
    title: 'Kanji Journey',
    stack: ['React.js', 'Node.js', 'TypeScript'],
    tagline:
      'A visual study tool to help learners master Japanese kanji by JLPT level.',
    description:
      'Kanji Journey offers interactive features like kanji lookup, progress tracking, note-taking, and self-quizzing. Designed to support efficient and personalized kanji learning through a clean, user-friendly interface.',
    githubLink: 'https://github.com/JoeKabongo/kanji-journey',
  },
  {
    previewImageLink: '/images/planning.jpeg',
    title: 'Task Tracker',
    stack: ['React.js', 'Node.js', 'JavaScript', 'MongoDB', 'JWT'],
    tagline:
      'A productivity app for organizing tasks by category, with full CRUD functionality.',
    description:
      'Designed to help users manage their workflow more effectively by categorizing and tracking tasks. Features include task creation, editing, deletion, and real-time updates for a smooth productivity experience.',
    githubLink: 'https://github.com/JoeKabongo/Task-Tracker',
  },
  {
    previewImageLink: '/images/messaging.webp',
    title: 'Flack',
    tagline:
      'A Slack-style messaging app built with Python Flask and vanilla JavaScript',
    description:
      'Enables real-time messaging with the ability to create and join chat rooms. Built from scratch to explore websocket-based communication and full-stack app architecture.',
    stack: ['Flask', 'Python', 'JavaScript', 'WebSocket', 'HTML', 'CSS'],
    githubLink: 'https://github.com/JoeKabongo/Flack',
  },
  {
    previewImageLink: '/images/basketball.jpeg',
    title: 'The NBA Talk',
    tagline: 'A social media platform built with Angular and Django.',
    description:
      'Allows users to create posts, comment, and engage with content through likes and dislikes. Built to explore user-generated content systems and modern frontend-backend integration.',
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
