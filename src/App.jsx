import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Database, Github, Linkedin, Mail, Menu, MessageSquareText,
  Network, ShieldCheck, Sparkles, X, FileText, Terminal, Workflow
} from "lucide-react";

const profile = {
  name: "Pratik Khetmalis",
  role: "AI / ML Engineer",
  location: "Pune, India",
  email: "khetmalisp3@gmail.com",
  linkedin: "https://linkedin.com/in/pk6959",
  github: "https://github.com/Pratik0718",
  // Add a resume PDF to public/resume.pdf and uncomment the resume link below.
};

const projects = [
  {
    number: "01",
    title: "YouTube RAG Chatbot",
    category: "GENERATIVE AI · RAG",
    description: "A conversational assistant that answers questions from YouTube video transcripts using retrieval-augmented generation.",
    details: [
      "Transcript ingestion and text chunking",
      "Embeddings and semantic retrieval with FAISS",
      "Hugging Face models and Sentence Transformers",
      "Interactive Streamlit chat interface",
    ],
    stack: ["Python", "LangChain", "Hugging Face", "FAISS", "Streamlit"],
    icon: MessageSquareText,
    color: "violet",
    github: "https://github.com/Pratik0718",
    demo: "",
  },
  {
    number: "02",
    title: "Credit Risk Assessment System",
    category: "MACHINE LEARNING · MLOPS",
    description: "An end-to-end credit risk prediction workflow with model tuning, explainability, experiment tracking, and an API.",
    details: [
      "Preprocessing with Scikit-learn ColumnTransformer",
      "Feature engineering for financial ratios",
      "Model optimization with RandomizedSearchCV",
      "SHAP explainability and MLflow tracking",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "SHAP", "MLflow", "FastAPI"],
    icon: ShieldCheck,
    color: "cyan",
    github: "https://github.com/Pratik0718",
    demo: "",
  },
  {
    number: "03",
    title: "Customer Churn Prediction",
    category: "PREDICTIVE ANALYTICS",
    description: "A telecom churn prediction application that turns customer data into actionable retention signals.",
    details: [
      "Data cleaning, EDA, and feature engineering",
      "Compared classification algorithms",
      "Hyperparameter tuning with GridSearchCV",
      "Evaluation with ROC-AUC, precision, recall, and F1",
    ],
    stack: ["Python", "Scikit-learn", "Flask", "Joblib"],
    icon: Network,
    color: "orange",
    github: "https://github.com/Pratik0718",
    demo: "",
  },
];

const skillGroups = [
  { title: "Generative AI", icon: Sparkles, skills: ["LLMs", "RAG", "LangChain", "Hugging Face", "Embeddings", "FAISS", "Sentence Transformers"] },
  { title: "Machine Learning", icon: BrainCircuit, skills: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Random Forest", "Model Evaluation", "SHAP"] },
  { title: "Data & Analytics", icon: Database, skills: ["Python", "SQL", "Pandas", "NumPy", "EDA", "Feature Engineering", "Window Functions"] },
  { title: "APIs & MLOps", icon: Workflow, skills: ["FastAPI", "Flask", "Streamlit", "REST APIs", "MLflow", "Docker", "Git / GitHub"] },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Pratik Khetmalis home">
          <span className="brand-mark">P<span>K</span></span>
          <span className="brand-name">pratik<span>.dev</span></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"]].map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO AI / ML OPPORTUNITIES</div>
            <p className="hero-intro">Hi, I'm Pratik Khetmalis.</p>
            <h1>I build <span className="gradient-text">intelligent</span><br className="desktop-break" /> things with AI.</h1>
            <p className="hero-description">
              AI/ML engineer with a data analytics foundation, building practical machine learning systems,
              GenAI applications, and RAG-powered experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-line" /> Based in {profile.location}</span>
              <span className="meta-divider">/</span>
              <span>Python · ML · GenAI · RAG</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Decorative AI workflow illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="core-glow" />
            <div className="core-icon"><BrainCircuit size={53} strokeWidth={1.3} /></div>
            <div className="float-card float-card-top"><span className="mini-icon purple"><Sparkles size={15} /></span><span><b>Generative AI</b><small>Context-aware systems</small></span><span className="card-check"><Check size={12} /></span></div>
            <div className="float-card float-card-bottom"><span className="mini-icon blue"><Terminal size={15} /></span><span><b>ML Engineering</b><small>From data to deployment</small></span><span className="card-check"><Check size={12} /></span></div>
            <div className="orbit-dot dot-a" /><div className="orbit-dot dot-b" /><div className="orbit-dot dot-c" />
            <div className="visual-caption"><span>FIG. 01</span><span>IDEAS → SYSTEMS</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner">
            <span className="strip-label">CURRENT FOCUS</span>
            <div className="focus-items"><span><Sparkles size={15} /> Generative AI</span><span><Network size={15} /> Retrieval systems</span><span><BrainCircuit size={15} /> Applied ML</span><span><Workflow size={15} /> Model deployment</span></div>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>Curiosity into <span className="gradient-text">working systems.</span></>} />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">I enjoy taking a problem from raw data to a useful, working product.</p>
              <p className="body-copy">My experience spans data analytics, SQL-driven insights, machine learning workflows, and hands-on development of Generative AI applications. I focus on building solutions that are understandable, measurable, and ready to be used.</p>
              <p className="body-copy">I’m currently deepening my work in open-source LLMs, retrieval-augmented generation, model explainability, and API-based deployment.</p>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
                <button onClick={copyEmail}><Mail size={16} /> {copied ? "Email copied" : "Copy email"} {copied ? <Check size={14} /> : <ArrowUpRight size={14} />}</button>
              </div>
            </div>
            <div className="about-aside">
              <div className="aside-top"><span className="aside-icon"><Code2 size={19} /></span><span className="aside-label">MY APPROACH</span></div>
              <div className="approach-step"><span>01</span><div><b>Understand</b><p>Start with the problem and the data.</p></div></div>
              <div className="approach-step"><span>02</span><div><b>Build</b><p>Choose the right model and tools.</p></div></div>
              <div className="approach-step"><span>03</span><div><b>Deliver</b><p>Make it usable through an API or interface.</p></div></div>
              <div className="aside-footer"><span className="status-dot" /> PRACTICAL BY DESIGN</div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionHeading eyebrow="02 / TOOLKIT" title={<>Tools I use to <span className="gradient-text">make things work.</span></>} description="A growing toolkit across machine learning, GenAI, analytics, and deployment." />
            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return <article className="skill-card" key={group.title}>
                  <div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">TOOLKIT / {String(skillGroups.indexOf(group) + 1).padStart(2, "0")}</span></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects built around <span className="gradient-text">real problems.</span></>} description="A selection of ML and GenAI projects. Replace the GitHub links with each project's repository when ready." />
          <div className="projects-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card project-${project.color}`} key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15} /></a>}
                  </div>
                </div>
                <div className="project-art">
                  <div className="art-ring art-ring-one" /><div className="art-ring art-ring-two" />
                  <div className="art-icon"><Icon size={39} strokeWidth={1.25} /></div>
                  <div className="art-code"><span>01</span><span>build()</span><span>→ deploy</span></div>
                </div>
              </article>;
            })}
          </div>
          <a className="all-projects-link" href={profile.github} target="_blank" rel="noreferrer">Explore more on GitHub <ArrowRight size={16} /></a>
        </section>

        <section className="section section-muted" id="experience">
          <div className="container">
            <SectionHeading eyebrow="04 / EXPERIENCE & EDUCATION" title={<>A foundation in data, <span className="gradient-text">a focus on AI.</span></>} />
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">MAR 2024 — MAR 2026</div>
                <div className="timeline-marker"><BriefcaseBusiness size={16} /></div>
                <div className="timeline-content"><span className="timeline-type">PROFESSIONAL EXPERIENCE</span><h3>Associate Software Engineer — Data Analytics</h3><p className="timeline-company">Tech Mahindra <span>· Pune, India</span></p><ul><li>Built SQL queries using joins, CTEs, window functions, and aggregations to analyze business datasets.</li><li>Used Python, Pandas, and NumPy for exploratory analysis and data quality workflows.</li><li>Automated reporting tasks and collaborated with cross-functional teams.</li></ul></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">OCT 2023 — NOV 2023</div>
                <div className="timeline-marker"><BrainCircuit size={16} /></div>
                <div className="timeline-content"><span className="timeline-type">INTERNSHIP</span><h3>Machine Learning Intern</h3><p className="timeline-company">Prodigy InfoTech <span>· Remote</span></p><ul><li>Built data preprocessing pipelines and trained classification and regression models.</li><li>Practiced feature engineering, cross-validation, and hyperparameter tuning.</li></ul></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">EDUCATION</div>
                <div className="timeline-marker"><FileText size={16} /></div>
                <div className="timeline-content"><span className="timeline-type">BACHELOR'S DEGREE</span><h3>Bachelor of Engineering, Computer Engineering</h3><p className="timeline-company">International Institute of Information Technology, Pune <span>· CGPA 8.2 / 10</span></p></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">CERTIFICATIONS</div>
                <div className="timeline-marker"><Check size={16} /></div>
                <div className="timeline-content"><span className="timeline-type">MICROSOFT CERTIFIED</span><h3>Azure AI Fundamentals & Azure AI Engineer Associate</h3><p className="timeline-company">AI-900 · AI-102</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-card">
            <div className="contact-orb" />
            <p className="eyebrow">05 / GET IN TOUCH</p>
            <h2>Have a problem worth <span className="gradient-text">solving?</span></h2>
            <p className="contact-description">I'm interested in AI/ML engineering opportunities and building useful AI-powered products. Let's connect.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent("AI/ML opportunity")}`}><Mail size={17} /> Email me <ArrowUpRight size={15} /></a>
              <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={15} /></a>
            </div>
            <div className="contact-email">{profile.email}</div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a href="#home" className="brand"><span className="brand-mark">P<span>K</span></span><span className="brand-name">pratik<span>.dev</span></span></a>
        <p>Designed & built with curiosity<span className="footer-star"> ✳</span></p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pratik Khetmalis</span><span>React · Tailwind CSS · Vite</span></div>
      </footer>
    </div>
  );
}

export default App;