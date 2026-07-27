import React from 'react';
import './Work.css';

const EXPERIENCES = [
  {
    role: 'Future Computing Summer Intern',
    company: 'National Security Agency',
    location: 'Baltimore, MD',
    duration: 'May 2026 - August 2026',
    tag: ['AI + Future Computing', ' + Research'],
    tagColor: 'gold',
    bullets: [
      'Selected for the NSA Future Computing Summer Internship, contributing to the Cognitive Paradigm: AI Project to Explore Symbolic Computing.',
      'Investigating symbolic computing as a brain-inspired approach to artificial intelligence, with attention to how symbolic systems can represent and process information.',
      'Applying Python, modeling, and simulation skills while building on experience in statistics, AI/ML, Linux, and computer architecture.',
    ],
  },
  {
    role: 'Undergraduate Researcher — Causal Inference & Genomic Software Development',
    company: 'UT MD Anderson Cancer Center · Department of Epidemiology',
    location: 'Houston, TX',
    duration: 'November 2025 - Present',
    tag: 'Research',
    tagColor: 'blue',
    bullets: [
      'Contribute to a simulation framework for maternal–fetal health genomics, modeling mother–child–placenta data structures under different exposure and confounding scenarios.',
      'Generate simulated datasets to compare causal inference approaches and evaluate how methods perform when assumptions vary across data-generating settings.',
      'Support development of an R package that recommends appropriate causal inference strategies based on simulation results and observed data structure.',
    ],
  },

  {
  role: 'AI/ML Fellow',
  company: 'Break Through Tech AI Program',
  location: 'Online',
  duration: 'May 2026 - Present',
  tag: 'AI/ML',
  tagColor: 'gold',
  bullets: [
    'Selected for a competitive AI/ML program focused on applied machine learning, responsible AI, model evaluation, and industry-connected technical projects.',
    'Build practical skills in data science workflows, from framing machine learning problems to evaluating model performance and communicating technical results.',
    'Develop portfolio-based AI/ML work while strengthening skills in Python, model interpretation, and responsible data science.',
  ],
},

  {
    role: 'Labbie / Grader',
    company: 'Rice University · Department of Statistics',
    location: 'Houston, TX',
    duration: 'August 2024 - Present',
    tag: 'Statistics',
    tagColor: 'blue',
    bullets: [
      'Served for one and half year as a STAT 280 labbie, supporting students in applied statistics, R, RStudio, and data visualization through hands-on lab instruction.',
      'Currently grade for STAT 410: Linear Regression, providing feedback on statistical reasoning, model interpretation, and technical accuracy.',
      'Help students strengthen their understanding of probability, regression, statistical coding, and how to communicate quantitative results clearly.',
    ],
  },

  {
    role: 'DEEP Data Science Mentor',
    company: 'Rice University',
    location: 'Houston, TX',
    duration: 'August 2024 - December 2025',
    tag: 'Mentorship + ML',
    tagColor: 'gold',
    bullets: [
      'Mentored student teams through end-to-end data science workflows, including dataset selection, cleaning, exploratory analysis, feature engineering, model building, evaluation, and presentation.',
      'Supported projects including a Spotify recommendation system and a housing market prediction model, helping students debug code, interpret outputs, compare metrics, and refine their final presentations.',
      "Guided a housing market prediction team that earned 1st place in Rice's DEEP competition.",
    ],
  },

  {
    role: 'Live Instructor — Python, Machine Learning & Deep Learning',
    company: 'WorldStrides / Rice Elite Tech Camp',
    location: 'Houston, TX',
    duration: 'May 2024 - July 2025',
    tag: 'Teaching',
    tagColor: 'blue',
    bullets: [
      'Taught Python fundamentals, including variables, loops, functions, data structures, and debugging strategies, to students with varying levels of coding experience.',
      'Introduced machine learning and deep learning concepts such as model building, evaluation metrics, image recognition, and real-world AI applications.',
      'Led hands-on coding activities designed to make technical concepts more approachable, practical, and confidence-building for students.',
    ],
  },

  {
    role: 'Office Assistant',
    company: 'Rice University · Glasscock School of Continuing Studies',
    location: 'Houston, TX',
    duration: 'October 2024 - December 2025',
    tag: 'Operations + Data',
    tagColor: 'blue',
    bullets: [
      'Built and maintained a database of 1,000+ educational institutions to support outreach, partnership tracking, and program development.',
      'Combined web scraping, institutional research, and data cleaning to identify potential education partners and standardize outreach records.',
      'Translated web-based research into organized datasets that improved partnership tracking, administrative workflows, and outreach strategy.',
    ],
  },

  {
    role: 'Bobarista',
    company: 'Sharetea',
    location: 'Houston, TX',
    duration: 'August 2024 - Present',
    tag: 'Customer Service + Operations',
    tagColor: 'blue',
    bullets: [
      'Provided excellent customer service in a fast-paced bubble tea shop environment.',
      'Managed inventory, restocked supplies, and ensured a clean and organized workspace.',
      'Collaborated with team members to create a welcoming atmosphere for customers.',
    ],
  },

  {
  role: 'Lab Assistant',
  company: 'University of Arkansas at Pine Bluff',
  location: 'Pine Bluff, AR',
  duration: 'June 2022 - Aug 2022',
  tag: 'Aquaculture Research',
  tagColor: 'blue',
  bullets: [
    'Assisted with aquaculture research by helping monitor fish, organize experimental materials, and support day-to-day lab and facility procedures.',
    'Recorded observations, maintained lab notes, and helped track experimental conditions to support accurate documentation and project continuity.',
    'Supported routine fish care and lab operations, including organizing supplies, maintaining clean work areas, and assisting with experiment setup and cleanup.',
  ],
  }

];


export default function Work() {
  return (
    <div className="page-wrap">
      <header className="page-header">
        <div className="page-eyebrow">experience</div>
        <h1>My <span>Experiences</span></h1>
        <p>
          From causal inference research to teaching Python to building AI projects, 
          here's how I've applied statistical thinking to real-world challenges.
        </p>
      </header>

      <div className="timeline">
        <div className="tl-line" />
        {EXPERIENCES.map((exp, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-dot" />
            <div className="card tl-card">
              <div className="tl-top">
                <span className={`tag-pill ${exp.tagColor}`}>{exp.tag}</span>
                <span className="tl-duration">{exp.duration}</span>
              </div>
              <h2 className="tl-role">{exp.role}</h2>
              <div className="tl-company">{exp.company} · {exp.location}</div>
              <ul className="tl-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="card resume-box">
        <h2 className="resume-title">Want the full picture?</h2>
        <p className="resume-sub">
          Download my resume for a complete overview of my skills and experience.
        </p>
        <a href="/CharisXiongResume.pdf" className="btn btn-blue" download>
          Download Resume ↓
        </a>
      </div>
    </div>
  );
}