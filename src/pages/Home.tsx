import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="page-content fade-slide">
      <section className="hero">
        <div>
          <p className="eyebrow">Frontend Engineer Building Scalable Enterprise & AI-Powered Applications</p>
          <h1>Sourav Kumar Negi</h1>
          <p className="hero-copy">
            Frontend Developer with 4 years of experience building enterprise-grade web applications using React.js,
            Next.js, and TypeScript. Specialized in cybersecurity platforms, AI-powered applications, performance
            optimization, and scalable component architecture.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button button-primary">
              View case studies
            </Link>
            <a href="#about" className="button button-secondary">
              Learn more
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p><strong>Hyderabad, India</strong></p>
          <p>+91 7978716548</p>
          <p>negisourav911@gmail.com</p>
          <p>
            <a href="https://linkedin.com/in/sourav-kumar-negi-4614791b6" target="_blank" rel="noreferrer">
              linkedin.com/in/sourav-kumar-negi-4614791b6
            </a>
          </p>
        </div>
      </section>

      <section className="section-grid bring-grid">
        <div className="section-card bring-card">
          <h2>What I Bring</h2>
          <ul>
            <li>✅ 4 years of React development</li>
            <li>✅ Enterprise application development</li>
            <li>✅ TypeScript & Next.js expertise</li>
            <li>✅ Cybersecurity dashboard development</li>
            <li>✅ AI-powered application experience</li>
            <li>✅ Performance optimization & testing</li>
          </ul>
        </div>
        <div className="section-card about-card">
          <h2>About Me</h2>
          <p>
            I am a Frontend Developer with 4 years of experience building enterprise applications using React.js,
            Next.js, and TypeScript. I have worked on cybersecurity platforms, HRMS systems, and AI-powered
            solutions with a focus on scalable architecture, performance optimization, and exceptional user
            experiences.
          </p>
          <p>
            I enjoy transforming complex business requirements into intuitive, maintainable, and high-performance web
            applications that help teams make faster, smarter decisions.
          </p>
        </div>
      </section>

      <section id="skills" className="section-grid">
        <div className="section-card stack-card">
          <h3>Frontend</h3>
          <p className="stack-list">React.js • Next.js • TypeScript • JavaScript • HTML5 • CSS3</p>
        </div>
        <div className="section-card stack-card">
          <h3>State Management</h3>
          <p className="stack-list">Redux • Redux Toolkit • React Query</p>
        </div>
        <div className="section-card stack-card">
          <h3>UI & Testing</h3>
          <p className="stack-list">Material UI • Responsive Design • Jest • React Testing Library</p>
        </div>
        <div className="section-card stack-card">
          <h3>APIs & AI</h3>
          <p className="stack-list">REST APIs • Azure AI • JWT • Performance Optimization</p>
        </div>
      </section>

      <section className="section-card">
        <div className="section-headline">
          <div>
            <h2>Featured Case Studies</h2>
            <p>Business-focused outcomes from cybersecurity, AI, and HR workflow products.</p>
          </div>
          <Link to="/projects" className="button button-secondary">
            View all case studies
          </Link>
        </div>
        <div className="project-preview-grid">
          <article className="project-card">
            <h3>Enterprise HRMS Platform</h3>
            <p className="subtle">Problem, solution, and impact for HR operations.</p>
            <p>
              Built scalable React modules with Redux for onboarding, attendance, and leave management. Improved HR
              workflow efficiency and reduced manual processing.
            </p>
          </article>
          <article className="project-card">
            <h3>Fortified Health Security</h3>
            <p className="subtle">Security dashboards designed for real-time risk monitoring.</p>
            <p>
              Delivered analytics dashboards, interactive tables, and visualizations for cybersecurity teams to act on
              risk data faster.
            </p>
          </article>
          <article className="project-card">
            <h3>AI Chatbot</h3>
            <p className="subtle">Conversational UI with Azure AI for contextual data retrieval.</p>
            <p>
              Developed a responsive chatbot with Azure AI integration, improving user response accuracy and
              knowledge discovery in real time.
            </p>
          </article>
        </div>
      </section>

      <section id="experience" className="section-card">
        <h2>Professional Experience</h2>

        <article className="experience-item">
          <h3>Frontend Developer</h3>
          <p className="subtle">KPi Tech Services Pvt. Ltd, Hyderabad — May 2022 – Apr 2026</p>
          <ul>
            <li>Built scalable enterprise frontend modules for cybersecurity analytics, reducing development effort by 20%.</li>
            <li>Designed reusable React components and modular UI architecture to accelerate delivery across multiple teams.</li>
            <li>Implemented unit tests with Jest and React Testing Library, improving UI reliability and reducing regression defects.</li>
            <li>Collaborated with backend teams to integrate REST APIs for real-time security and operational insights.</li>
          </ul>
        </article>

        <article className="experience-item">
          <h3>Fortified Health Security (Cybersecurity Platform)</h3>
          <p className="subtle">React.js, TypeScript, MUI — Apr 2024 – Apr 2026</p>
          <ul>
            <li>Delivered security analytics dashboards for TPRM and PenTest workflows used in real-time risk monitoring.</li>
            <li>Built interactive tables, charts, and visualization components to help security teams triage vulnerabilities.</li>
            <li>Optimized frontend performance and supported server-rendered content with Next.js.</li>
          </ul>
        </article>

        <article className="experience-item">
          <h3>AI Chatbot</h3>
          <p className="subtle">React.js, Redux, MUI, Azure AI APIs — Feb 2024 – Apr 2024</p>
          <ul>
            <li>Developed an AI-powered chatbot with responsive conversational UI and reusable component architecture.</li>
            <li>Integrated Azure AI services to deliver context-aware responses from pre-fed datasets.
            </li>
            <li>Optimized real-time interactions to create a seamless user experience.</li>
          </ul>
        </article>

        <article className="experience-item">
          <h3>HRMS Platform</h3>
          <p className="subtle">React.js, Redux, MUI, REST APIs — May 2022 – Feb 2024</p>
          <ul>
            <li>Built onboarding, attendance tracking, and leave management features for HR workflows.</li>
            <li>Implemented Redux-based state management for scalable frontend data handling.</li>
            <li>Delivered dynamic forms with React Hook Form and Formik for consistent validation and user experience.</li>
          </ul>
        </article>
      </section>

      <section className="section-card looking-for-card">
        <h2>Currently Looking For</h2>
        <p>
          I’m actively seeking Frontend Developer opportunities where I can contribute to building React.js
          applications, Next.js products, TypeScript codebases, enterprise SaaS platforms, and AI-powered web
          applications.
        </p>
      </section>

      <section className="section-card testimonial-card">
        <h2>Testimonials</h2>
        <blockquote>
          “Sourav consistently delivered high-quality frontend solutions and collaborated effectively across teams.”
        </blockquote>
        <p className="subtle">— Product team lead</p>
      </section>

      <section id="contact" className="section-card contact-card">
        <h2>Contact</h2>
        <p>
          Interested in building scalable frontend applications together? I’m open to React.js, Next.js, and
          TypeScript opportunities.
        </p>
        <p>Email: <a href="mailto:negisourav911@gmail.com">negisourav911@gmail.com</a></p>
        <p>Phone: +91 7978716548</p>
        <p>
          LinkedIn:{' '}
          <a href="https://linkedin.com/in/sourav-kumar-negi-4614791b6" target="_blank" rel="noreferrer">
            linkedin.com/in/sourav-kumar-negi-4614791b6
          </a>
        </p>
      </section>

      <section className="footer-cta section-card">
        <h2>Let's build something great together</h2>
        <p>
          I’m ready to contribute to enterprise frontends, AI-enabled workflows, and performance-first web
          applications.
        </p>
        <div className="footer-actions">
          <a className="button button-primary" href="mailto:negisourav911@gmail.com?subject=Frontend%20Opportunity">
            Email me
          </a>
          <a className="button button-secondary" href="https://linkedin.com/in/sourav-kumar-negi-4614791b6" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
