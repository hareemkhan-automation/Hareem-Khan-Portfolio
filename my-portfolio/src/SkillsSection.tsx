import type { ReactElement } from 'react'
import './SkillsSection.css'

type SkillCategory = {
  id: string
  category: string
  icon: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ai-automation',
    category: 'AI & Automation',
    icon: 'Cpu',
    skills: [
      'AI Agents',
      'System Automation',
      'Workflow Automation',
      'Workflow Optimization (n8n)',
      'Prompt Engineering',
      'Local LLM Deployment (Ollama)',
      'AI Agent Integration (Claude, Gemini, Groq API)',
      'Python Scripting',
      'Text-to-Speech & Voice Cloning',
      'REST API Design (HTTP, Auth vs. Authz)',
      'Git & GitHub',
      'Google Colab'
    ]
  },
  {
    id: 'development',
    category: 'Development',
    icon: 'Code',
    skills: [
      'Web Development (React.js, FastAPI, MUI)',
      'Google Sheets Automation',
      'Version Control (Git/GitHub)'
    ]
  },
  {
    id: 'content-creative',
    category: 'Content & Creative',
    icon: 'PenTool',
    skills: [
      'Digital Media',
      'Business Content Writing',
      'Copywriting',
      'Social Media Management',
      'Graphic Design',
      'Canva',
      'Brand Storytelling'
    ]
  },
  {
    id: 'biz-dev',
    category: 'Business Development',
    icon: 'TrendingUp',
    skills: [
      'B2B Outreach',
      'Pipeline Growth & Management',
      'Client Acquisition',
      'Lead Qualification',
      'SDR Operations',
      'CRM'
    ]
  },
  {
    id: 'growth-strategy',
    category: 'Growth Strategy',
    icon: 'Target',
    skills: [
      'Growth Strategy',
      'Funnel Analysis',
      'Conversion Optimization',
      'A/B Testing',
      'Multi-channel Outreach',
      'Retention Strategy'
    ]
  },
  {
    id: 'product-market',
    category: 'Product & Market',
    icon: 'PieChart',
    skills: [
      'Product Marketing',
      'Go-To-Market Planning',
      'Competitive Analysis',
      'Product Positioning',
      'Market Segmentation',
      'User Feedback Synthesis'
    ]
  },
  {
    id: 'analytics-data',
    category: 'Analytics & Data',
    icon: 'BarChart3',
    skills: [
      'SQL',
      'Advanced Excel',
      'IBM SPSS',
      'Google Analytics',
      'Data Visualization',
      'Statistical Analysis'
    ]
  }
]

function SkillIcon({ name }: { name: string }): ReactElement | null {
  switch (name) {
    case 'Cpu':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 4v4M15 4v4M9 16v4M15 16v4M4 9h4M4 15h4M16 9h4M16 15h4" />
        </svg>
      )
    case 'Code':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
        </svg>
      )
    case 'PenTool':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4h-4l-2 3 4 4 4-4-2-3Z" />
          <path d="M8 7 4 11v4l4 4h8l4-4v-4l-4-4H8Z" />
        </svg>
      )
    case 'TrendingUp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 17l5-5 4 4 7-8" />
          <path d="M14 8h7v7" />
        </svg>
      )
    case 'Target':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      )
    case 'PieChart':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3v9h9a9 9 0 1 1-9-9Z" />
          <path d="M12 3a9 9 0 0 1 9 9h-9V3Z" />
        </svg>
      )
    case 'BarChart3':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19V9M12 19V5M19 19v-7" />
        </svg>
      )
    default:
      return null
  }
}

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section__header">
        <p className="skills-section__eyebrow">CORE CAPABILITIES</p>
        <h2 className="skills-section__title">MY SKILLS & EXPERTISE</h2>
        <p className="skills-section__subtitle">
          Here&apos;s a breakdown of my technical and core capabilities
        </p>
      </div>

      <div className="skills-grid" role="list">
        {skillCategories.map((category) => (
          <article key={category.id} className="skill-card" tabIndex={0} role="listitem">
            <div className="skill-card__header">
              <div className="skill-icon" aria-hidden="true">
                <SkillIcon name={category.icon} />
              </div>
              <h3 className="skill-card__title">{category.category}</h3>
            </div>

            <div className="skill-tags" aria-label={`${category.category} skills`}>
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
