import { Link } from 'react-router-dom'
import hrmsDashboard from '../assets/hrms-dashboard.svg'
import securityAnalytics from '../assets/security-analytics.svg'
import chatbotExperience from '../assets/chatbot-experience.svg'

const projectList = [
  {
    title: 'Enterprise HRMS Platform',
    subtitle: 'Human resource management for onboarding, attendance, and leave workflows',
    screenshot: hrmsDashboard,
    problem: 'Organizations needed a centralized HR experience to reduce manual workflows and improve visibility.',
    solution:
      'Built scalable React modules with Redux state management, dynamic forms, and secure REST APIs for employee lifecycle operations.',
    impact: 'Streamlined HR operations and improved workforce onboarding efficiency across the platform.'
  },
  {
    title: 'Fortified Health Security',
    subtitle: 'Cybersecurity analytics and risk monitoring platform',
    screenshot: securityAnalytics,
    problem: 'Security teams needed an intuitive way to view third-party risk and penetration test results.',
    solution:
      'Delivered interactive dashboards, tables, and visualizations in React and TypeScript to surface real-time risk insights.',
    impact: 'Enabled faster risk triage and more effective decision-making for cybersecurity stakeholders.'
  },
  {
    title: 'AI Chatbot',
    subtitle: 'Conversational data retrieval powered by Azure AI',
    screenshot: chatbotExperience,
    problem: 'Users needed quick access to contextual information from pre-fed enterprise datasets.',
    solution:
      'Developed a responsive chatbot UI with Redux and Azure AI integration for fast, accurate conversational responses.',
    impact: 'Improved user engagement and reduced time-to-answer for data-driven workflows.'
  }
]

const Projects = () => {
  return (
    <main className="page-content fade-slide">
      <section className="section-card">
        <div className="section-headline">
          <div>
            <h2>Featured Case Studies</h2>
            <p>Detailed examples of enterprise work with product thinking, AI integration, and performance-first frontend design.</p>
          </div>
          <Link to="/" className="button button-secondary">
            Back to home
          </Link>
        </div>
      </section>

      <section className="section-grid project-list">
        {projectList.map(project => (
          <article key={project.title} className="project-card project-detail">
            <div className="project-screenshot">
              <img src={project.screenshot} alt={`${project.title} screenshot`} />
            </div>
            <h3>{project.title}</h3>
            <p className="subtle">{project.subtitle}</p>
            <div className="case-section">
              <strong>Problem</strong>
              <p>{project.problem}</p>
            </div>
            <div className="case-section">
              <strong>Solution</strong>
              <p>{project.solution}</p>
            </div>
            <div className="case-section">
              <strong>Impact</strong>
              <p>{project.impact}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Projects
