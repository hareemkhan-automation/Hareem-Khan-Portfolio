import { useMemo, useState } from 'react'
import './Projects.css'

const categories = ['ALL', 'AI · FULL STACK', 'WEB', 'AUTOMATION', 'DATA · PYTHON']

const projectsData = [
  {
    id: 1,
    title: "AI Voice Translator",
    category: "AI · FULL STACK",
    description: "Real-time voice-to-voice translation app with modular AI models designed for easy swapping without modifying frontend logic.",
    techStack: ["React", "FastAPI", "NLLB-200", "Whisper", "Docker"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/ai-voice-translator.png"
  },
  {
    id: 2,
    title: "AI Chatbot App",
    category: "AI · FULL STACK",
    description: "Lightweight, low-latency full-stack conversational assistant powered by Groq and Llama 3.1.",
    techStack: ["React", "FastAPI", "Groq API", "Llama 3.1", "MUI"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/ai-chatbot.png"
  },
  {
    id: 3,
    title: "Kanban Task Manager",
    category: "WEB · FRONTEND",
    description: "Role-based task management board with drag-and-drop workflow stages, RBAC permissions, and local storage.",
    techStack: ["React 19", "Vite", "JavaScript", "Lucide Icons", "LocalStorage"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/kanban-app.png"
  },
  {
    id: 4,
    title: "AI Outlook Auto-Responder",
    category: "AI · AUTOMATION",
    description: "Automated n8n workflow to filter incoming emails and generate context-aware AI draft responses in Outlook.",
    techStack: ["n8n", "Gemini API", "Outlook", "Automation"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/outlook-automation.png"
  },
  {
    id: 5,
    title: "AI Cold Email Tool",
    category: "AI · FULL STACK",
    description: "Targeted outbound email system parsing lead lists and generating custom emails via Llama 3.3.",
    techStack: ["React", "Node.js", "Express", "Groq API", "Nodemailer"],
    githubUrl: "https://github.com/hakhan-byte/ai-cold-email-tool",
    image: "/project-images/cold-email-tool.png"
  },
  {
    id: 6,
    title: "Automated Company Data Extractor",
    category: "AUTOMATION · PYTHON",
    description: "Scrapes and extracts accurate company metadata using domain names with strict ground-truth verification.",
    techStack: ["Python", "Playwright", "Ollama", "Gemini API", "Google Sheets"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/company-data-extractor.png"
  },
  {
    id: 7,
    title: "Car Rental Management System",
    category: "DATABASE · BACKEND",
    description: "Normalized 7-table relational database architecture with stored procedures, audit triggers, and a Python CLI.",
    techStack: ["Python", "SQL Server", "pyodbc", "Relational DB"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/car-rental-system.png"
  },
  {
    id: 8,
    title: "Raah-e-Ehsaas",
    category: "CAMPAIGN · MEDIA",
    description: "Social donation campaign and documentary production raising funds to purchase clothing for underprivileged children.",
    techStack: ["Campaign Strategy", "Media Production", "Leadership"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/raah-e-ehsaas.png"
  },
  {
    id: 9,
    title: "Local Voice Cloning & TTS",
    category: "AI · AUDIO",
    description: "Fully offline voice cloning and text-to-speech engine built with Coqui TTS as an open-source ElevenLabs alternative.",
    techStack: ["Python", "Coqui TTS", "PyTorch", "librosa", "Colab"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/voice-cloning-tts.png"
  },
  {
    id: 10,
    title: "Library Management System",
    category: "PYTHON · OOP",
    description: "OOP-driven CLI application featuring fine calculations, role permissions, borrowing limits, and SHA-256 auth.",
    techStack: ["Python", "OOP", "JSON", "SHA-256"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/library-management.png"
  },
  {
    id: 11,
    title: "Marham Digital Strategy Study",
    category: "BUSINESS · HEALTH TECH",
    description: "Strategic case study identifying revenue disintermediation and proposing AI pattern monitoring with escrow models.",
    techStack: ["Business Strategy", "SWOT Analysis", "Risk Assessment"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/marham-case-study.png"
  },
  {
    id: 12,
    title: "Superstore Sales Analysis",
    category: "DATA ANALYTICS",
    description: "Exploratory data analysis on 1,000-row dataset analyzing purchasing trends, profit margins, and payment channels.",
    techStack: ["Python", "Pandas", "Matplotlib", "Data Viz"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/superstore-analysis.png"
  },
  {
    id: 13,
    title: "Sleep Pattern Statistical Study",
    category: "DATA SCIENCE",
    description: "Primary research study modeling undergraduate sleep habits using normal and binomial probability distributions.",
    techStack: ["MS Excel", "Applied Statistics", "Probability Modeling"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/sleep-study.png"
  },
  {
    id: 14,
    title: "Skincare Routine Planner",
    category: "PYTHON · OOP",
    description: "Object-oriented rule engine generating personalized routines and flagging ingredient incompatibility conflicts.",
    techStack: ["Python", "OOP", "Rule Engine", "Exception Handling"],
    githubUrl: "https://github.com/hakhan-byte",
    image: "/project-images/skincare-planner.png"
  }
]

function filterProjects(data, filter) {
  if (filter === 'ALL') return data
  if (filter === 'AI · FULL STACK') return data.filter((project) => project.category === 'AI · FULL STACK')
  if (filter === 'WEB') return data.filter((project) => project.category.includes('WEB'))
  if (filter === 'AUTOMATION') return data.filter((project) => project.category.includes('AUTOMATION'))
  if (filter === 'DATA · PYTHON') return data.filter(
    (project) => project.category.includes('DATA') || project.category.includes('PYTHON')
  )
  return data
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('ALL')
  const [showAll, setShowAll] = useState(false)
  const [erroredImages, setErroredImages] = useState({})

  const visibleProjects = useMemo(
    () => filterProjects(projectsData, selectedFilter),
    [selectedFilter]
  )

  const displayedProjects = showAll ? visibleProjects : visibleProjects.slice(0, 6)
  const hiddenCount = Math.max(0, visibleProjects.length - 6)
  const canShowToggle = visibleProjects.length > 6

  const handleImageError = (projectId, event) => {
    event.currentTarget.style.display = 'none'
    setErroredImages((prev) => ({ ...prev, [projectId]: true }))
  }

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter)
    setShowAll(false)
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__header">
        <h2 className="projects-section__title">Featured Work</h2>
        <p className="projects-section__subtitle">
          Live deployments, AI tools, and full stack projects I have built and shipped.
        </p>
      </div>

      <div className="projects-filters">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`projects-filter-button ${selectedFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-image-wrapper">
              {erroredImages[project.id] ? (
                <div className="project-card-image-fallback" aria-label="Image unavailable">
                  <span className="project-card-image-fallback-icon">🖼️</span>
                </div>
              ) : (
                <img
                  className="project-card-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => handleImageError(project.id, e)}
                />
              )}
            </div>

            <div className="project-card-content">
              <div className="project-card-body">
                <span className="project-card-category">{project.category}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-card-tech-list">
                  {project.techStack.map((tech) => (
                    <span className="project-card-tech-pill" key={`${project.id}-${tech}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  className="project-card-button"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {canShowToggle && (
        <div className="projects-show-more">
          <button
            type="button"
            className="projects-show-more-button"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show Less' : `Show More Projects (+${hiddenCount})`}
          </button>
        </div>
      )}
    </section>
  )
}
