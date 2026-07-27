import React, { useState } from 'react';
import './Projects.css';

const FILTERS = ['All', 'R', 'Python', 'SQL', 'Research', 'ML', 'Data Viz', 'Website'];

const PROJECTS = [
  {
    num: '01', title: 'SCENIC: Causal Inference Methods',
    tag: 'Research: Causal Inference', tagColor: 'blue',
    desc: 'Developing simulation frameworks for maternal-fetal genomics to evaluate how causal inference methods perform under different exposure, mediation, and confounding structures. Supporting an R package that recommends appropriate methods based on data structure and simulation results.',
    tech: ['R', 'devtools', 'Causal Inference', 'simulation','genomics'],
    filters: ['R', 'Research'],
  },

  {
    num: '02',
    title: 'Mapping Health Inequality in America',
    tag: 'Health Inequality Website',
    tagColor: 'blue',
    desc: 'Created an R-based interactive data visualization project exploring how premature death relates to poverty, uninsurance, income inequality, education, housing instability, and geographic disadvantage across U.S. counties and states.',
    tech: ['R', 'tidyverse', 'ggplot2', 'plotly', 'leaflet', 'Data Visualization', 'Public Health Data'],
    link: 'https://sites.google.com/rice.edu/dsci304-health-inequality/home',
    filters: ['R', 'Data Viz', 'Website'],
  },

  {
    num: '03',
    title: 'Is This Real? AI Scam Awareness Quiz',
    tag: 'AI Literacy Website',
    tagColor: 'blue',
    desc: 'Built an interactive quiz website that teaches users to recognize AI-assisted scams, deepfakes, voice cloning, and misinformation through real-world scenarios and practical safety tips.',
    tech: ['Web Design', 'AI Literacy', 'Interactive Quiz', 'Public Interest Tech', 'Netlify'],
    link: 'https://symphonious-halva-a35b05.netlify.app/',
    filters: ['Python', 'Website'],
  },
  {
    num: '04', title: 'DEEP Competition: Housing Market Analysis (1st Place)',
    tag: 'Competition', tagColor: 'gold',
    desc: 'Mentored a student team through a complete data science pipeline on real housing market data: cleaning, EDA, feature engineering, ensemble modeling, and final presentation. We won first place in Rice University\'s Data Exploration and Experiential Projects (DEEP).',
    tech: ['Python', 'scikit-learn', 'pandas', 'EDA', 'Regression', 'Ensemble Modeling'],
    link: 'https://github.com/karrixxa/DEEP_HousingPrices',
    filters: ['Python', 'ML', 'Data Viz'],
  },
  {
    num: '05', title: 'BioKind Analytics — Melanin Minds',
    tag: 'Analysis for a Non-profit Organization', tagColor: 'gold',
    desc: 'Analyzed survey and event data from non-profit organization Melanin Minds using Python and NLP to identify key themes, sentiment patterns, and engagement trends. Created visualizations to support outreach evaluation and measure community impact, while providing advice on data-driven decision making.',
    tech: ['Python', 'NLP', 'Sentiment Analysis', 'pandas', 'Seaborn', 'Geographical Analysis'],
    link: 'https://github.com/karrixxa/BioKindAnalytics_MelaninMinds',
    filters: ['Python','ML', 'Data Viz'],
  },

  {
    num: '06',
    title: 'Connecticut Real Estate Market Analysis',
    tag: 'Housing Analytics',
    tagColor: 'blue',
    desc: 'Analyzed over two decades of Connecticut real estate sales to examine how housing prices, municipal assessments, property types, and major market shocks changed from 2001 to 2023.',
    tech: ['R', 'SQL', 'ggplot2', 'EDA', 'Data Visualization', 'Regression', 'text mining', 'text analysis'],
    link: 'https://github.com/karrixxa/ConnecticutRealEstateMarketAnalysis',
    filters: ['R', 'SQL', 'Data Viz'],
  },

  {
    num: '07', title: 'Life Expectancy Analysis & Prediction Project',
    tag: 'Health Analytics', tagColor: 'blue',
    desc: 'Conducted a comprehensive analysis of global life expectancy trends using R. Performed data cleaning, exploratory data analysis, and built regression models to identify key predictors of life expectancy. Applied Box-Cox transformations to improve model fit and visualized results.',
    tech: ['R', 'ggplot2', 'tidyverse', 'Regression', 'Box-Cox'],
    link: 'https://github.com/karrixxa/LifeExpectancy',
    filters: ['R', 'Data Viz'],
  },

  {
    num: '08', title: 'DiabetesAI: Diabetes Risk Prediction Project',
    tag: 'Health Analytics', tagColor: 'blue',
    desc: 'Built a diabetes risk prediction pipeline using BRFSS survey data, comparing Logistic Regression, Random Forest, and SVM models while improving detection through class balancing, feature selection, and performance evaluation.',
    tech: ['Python', 'scikit-learn', 'Random Forest', 'SVM', 'Feature Engineering', 'Model Evaluation'],
    link: 'https://github.com/karrixxa/DiabetesAI',
    filters: ['Python', 'ML'],
  },
  {
    num: '09',
    title: 'DEEP Competition: Billboard Hot 100 Analysis & Spotify Recommendation System',
    tag: 'Competition',
    tagColor: 'gold',
    desc: 'Mentored a student team through a music analytics project using Billboard Hot 100 and Spotify audio feature data. The project explored popularity trends, compared rank prediction models, and built a song recommendation system based on audio similarity.',
    tech: ['Python', 'scikit-learn', 'pandas', 'EDA', 'Random Forest', 'Recommendation System'],
    link: 'https://github.com/karrixxa/DEEP_Spotify',
    filters: ['Python', 'ML', 'Data Viz'],
  }
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.filters.includes(active));

  return (
    <div className="page-wrap">
      <header className="page-header">
        <div className="page-eyebrow">projects</div>
        <h1>Projects I've <span>Built.</span></h1>
        <p>
          A mix of research, data analysis projects, and websites that I built because the data was
          interesting. Mostly R and Python and SQL. Always with purpose.
        </p>
      </header>

      <div className="proj-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? 'active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {filtered.map(({ num, title, tag, tagColor, desc, tech, link }) => (
          <div className="card proj-card" key={num}>
            <div className="proj-top">
              <span className={`tag-pill ${tagColor}`}>{tag}</span>
              <span className="proj-num">{num}</span>
            </div>
            <h2 className="proj-title">{title}</h2>
            <p className="proj-desc">{desc}</p>
            <div className="proj-tech-row">
              {tech.map(t => <span className="proj-tech" key={t}>{t}</span>)}
            </div>
            {link !== '#' && (
              <a href={link} className="btn btn-ghost proj-link"
                target="_blank" rel="noreferrer">
                View Project ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}