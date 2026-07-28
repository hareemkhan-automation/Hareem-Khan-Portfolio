import { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'
import Navbar from './Navbar'
import Hero from './Hero'
import './App.css'

const slides = [
  {
    image: '/slide%201%20background%20image.jpeg',
    title: 'Hareem Khan',
    subtitle: 'Growth & Business Specialist',
    pitch: 'I help businesses scale by automating what slows them down, marketing what they sell, and bringing in the clients who buy it, all without needing three different people to do it.',
    description: 'AI & Automation | Digital Marketing | Client Acquisition'
  },
  {
    image: '/slide%202%20background%20image.jpeg',
    title: 'Growth Specialist',
    description: "This is the part that ties everything else together. I don't just plan growth, I go find it. Restructured outreach that pulled in 35 percent more qualified leads. Messaging that cut deal time by 25 percent because I stopped overcomplicating it. I find where a pipeline is leaking and I close the gap myself, no handoff to someone else who has to figure out what I meant."
  },
  {
    image: '/slide%203%20background%20image.jpeg',
    title: 'Built with intention',
    description: 'Every interaction is crafted to feel seamless on any screen size.'
  },
  {
    image: '/slide%204%20background%20image.jpeg',
    title: 'A portfolio that evolves',
    description: 'Fresh perspectives and refined execution for every new chapter.'
  }
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 10000)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Hero />

      <section className="about-section" id="about">
        <div className="about-slideshow" aria-label="About slideshow">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`about-slide ${index === activeIndex ? 'is-active' : ''}`}
              style={{ backgroundImage: `linear-gradient(135deg, rgba(30, 18, 51, 0.72), rgba(49, 36, 71, 0.4)), url(${slide.image})` }}
            >
              <div className="about-slide-content">
                {/* <p className="about-slide-label">About</p> */}
                <h2>{slide.title}</h2>
                <h3>{slide.subtitle}</h3>
                <p>{slide.description}</p>
                <div className="about-slide-pitch" style={{ marginTop: '3px !important' }}>
                  {slide.pitch}
                </div>

              </div>
            </div>
          ))}

          <div className="about-slide-controls">
            <button type="button" className="about-nav-button" onClick={goToPrevious} aria-label="Previous slide">
              ←
            </button>

            <div className="about-indicators" aria-label="Slide indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`about-indicator ${index === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button type="button" className="about-nav-button" onClick={goToNext} aria-label="Next slide">
              →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
