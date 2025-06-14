import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t, i18n } = useTranslation()

  return (
    <section className="flex flex-col items-center lg:w-80 p-4 md:p-8 rounded-xl border-1 border-white/30">
      <img
        src="/images/image_2.jpg"
        alt={t('introImageAlt')}
        className="rounded-lg w-[200px]"
      />
      <h1 className="mt-3 mb-2"> {t('introSectionTitle')} &#128522;</h1>
      <div className="">
        <button
          className={
            i18n.language === 'en'
              ? 'p-2 m-2 rounded-md	bg-blue-400'
              : 'p-2 m-2 rounded-md hover:bg-blue-300'
          }
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
        <span>|</span>
        <button
          className={
            i18n.language === 'ja'
              ? 'p-2 m-2 rounded-md	bg-blue-400'
              : 'p-2 m-2 rounded-md hover:bg-blue-300'
          }
          onClick={() => i18n.changeLanguage('ja')}
        >
          日本語
        </button>
      </div>
      <p>{t('introSectionDescription')}</p>

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
