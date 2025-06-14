import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row  gap-10 mt-10 items-start w-full max-w-ful">
      <div className="lg:h-fit lg:sticky lg:top-20 lg:w-auto w-full sm:mt-2">
        <About />
      </div>
      <div className="flex-1">
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
