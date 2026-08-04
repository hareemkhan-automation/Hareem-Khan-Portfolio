import './Experience.css'

const experienceData = [
  {
    jobTitle: 'AI & Automation Engineer',
    company: 'Cinnova International',
    timeline: 'Jun 2026 – Aug 2026',
    summary:
      'Architected and deployed end-to-end AI agent workflows, local LLM extractions, and full-stack web applications to automate core business operations.',
    bullets: [
      'Built an n8n automation connecting Outlook to a Gemini AI agent that parses incoming emails and generates tailored replies within 60 seconds using rule-based filtering.',
      'Developed Roselle, a scalable real-time translation and chat app built with React, FastAPI, and the Groq API.',
      'Engineered a local Ollama LLM tool to auto-populate verified company details directly into Google Sheets, alongside a Python voice cloning system and a role-based React Kanban management platform.',
    ],
  },
  {
    jobTitle: 'Business Development, AI & Automation Specialist',
    company: 'Highscore Company',
    timeline: 'Dec 2025 – Jun 2026',
    summary:
      'Drove AI-powered B2B lead generation, client proposals, and sales funnel optimization to accelerate business growth.',
    bullets: [
      'Led outbound business development across LinkedIn, Upwork, Reddit, and Discord, integrating AI tools directly into prospecting and sequencing to cut deal cycle times by 25%.',
      'Restructured lead qualification using SQL and Excel pipeline tracking, increasing qualified lead volume by 35% in Q1.',
      'Partnered with product teams on messaging for flagship launches, driving a 20% lift in newly acquired user engagement.',
    ],
  },
   {
    jobTitle: 'Academic Operations & Admissions Coordinator',
    company: 'FAST NUCES Lahore',
    timeline: 'June 2025 – August 2025',
    summary:
      'Streamlined admissions workflows, student operations, and multi-cohort compliance in a fast-paced environment.',
  },
  {
    jobTitle: 'Business Developer and Digital Marketing Manager',
    company: 'Zai Systems',
    timeline: 'Feb 2022 – Nov 2025',
    summary:
      'Expanded the active client base for software and digital solutions through structured outreach, market research, and client relationship management.',
    bullets: [
      'Expanded the active client base by 25% over two years through targeted B2B outreach and consistent pipeline management.',
      'Built weekly executive dashboards to track revenue-driving channels, boosting overall lead conversion by 30% and audience engagement by 40%.',
      'Translated client pain points into structured engineering feature requests that were directly integrated into product roadmap releases.',
    ],
  },
  // {
  //   jobTitle: 'Academic Operations & Admissions Coordinator',
  //   company: 'FAST NUCES Lahore',
  //   timeline: 'June 2025 – August 2025',
  //   summary:
  //     'Streamlined admissions workflows, student operations, and multi-cohort compliance in a fast-paced environment.',
  // },
  {
    jobTitle: 'Content and Digital Marketing Executive',
    company: 'Black Bird Packaging Company',
    timeline: 'Dec 2019 – July 2021',
    summary:
      'Managed complete brand identities, platform-specific content strategies, and graphic design for growing brands.',
  },
  {
    jobTitle: 'Freelance Digital Strategy, Content and Analytics Consultant',
    company: 'Freelance',
    timeline: 'Jan 2019 – Present',
    summary:
      'Delivered multi-channel content, SEO planning, and digital growth strategies for tech startups and SMBs.',
  },
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-section__header">
        {/* <p className="experience-section__eyebrow">MY WORK EXPERIENCE</p> */}
        <h2 className="projects-section__title">MY WORK EXPERIENCE</h2>
        <p className="experience-section__subtitle">Where I build, learn and grow.</p>
      </div>

      <div className="experience-timeline" aria-label="Professional experience timeline">
        {experienceData.map((item, index) => (
          <article key={`${item.jobTitle}-${index}`} className="experience-item">
            <div className="experience-item__marker" aria-hidden="true">
              <span className="experience-item__dot" />
            </div>

            <div className="experience-item__card">
              <div className="experience-item__header">
                <div>
                  <h3 className="experience-item__title">{item.jobTitle}</h3>
                  <p className="experience-item__company">{item.company}</p>
                </div>
                <p className="experience-item__timeline">{item.timeline}</p>
              </div>

              <p className="experience-item__summary">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
