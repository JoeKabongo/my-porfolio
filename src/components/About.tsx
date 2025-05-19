import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const About = () => {
  return (
    <section className="flex flex-col items-center lg:w-80 p-4 md:p-8 rounded-xl border-1 border-white/30">
      <img
        src="/images/image_2.jpg"
        alt="Profile"
        className="rounded-lg w-[200px]"
      />
      <h1 className="mt-4">I am Jonathan &#128522;</h1>
      <p>
        I am software engineer who is very passionate about learning and growing
        his skills.
      </p>

      <div className="flex gap-4 justify-center mt-5">
        <a
          href="https://www.linkedin.com/in/jonathan-tshimpaka/"
          target="_blank"
          className="hover:bg-blue-400 p-px"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/JoeKabongo"
          target="_blank"
          className="hover:bg-blue-400 p-px"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="mailto:jonathankabongo23@gmail.com"
          className="hover:bg-blue-400 p-px"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </section>
  )
}

export default About
