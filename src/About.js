import React, { useState } from 'react';
import './About.css';

/* Auto-calculates Duolingo streak from a known date.
   If you ever lose your streak, update both numbers below. */
const STREAK_ON_DATE  = 1289;
const STREAK_DATE     = new Date('2026-05-16');
const daysSince       = Math.floor((new Date() - STREAK_DATE) / 86400000);
const DUOLINGO_STREAK = STREAK_ON_DATE + Math.max(0, daysSince);

const FACTS = [
  {
    emoji: '🐈',
    label: 'cat mode',
    text: 'Inspired by Google Colab + my love for cats, I added little cats to my nav bar that you can tap to make them stop and walk around.',
  },
  {
    emoji: '🌏',
    label: 'languages',
    text: `I love learning languages — studied French in high school, am learning Korean and Chinese (reading/writing), and somehow have a ${DUOLINGO_STREAK}-day Duolingo streak.`,
  },
  {
    emoji: '🎧',
    label: 'on repeat',
    text: "I'm almost always listening to music on Spotify. Current favorites include Alex Warren, keshi, and Kendrick Lamar.",
  },
  {
    emoji: '✈️',
    label: 'travel + food',
    text: 'I love traveling (have been to South Korea, China, and Hong Kong) and trying new foods around Houston.',
  },
  {
    emoji: '👩‍🏫',
    label: 'teaching',
    text: "I genuinely enjoy helping ideas click, whether I'm explaining statistics, coding, or a confusing concept in three different ways until it finally makes sense.",
  },
];


const CARDS = [
  {
    num: '01',
    tag: 'background',
    title: 'Data Point: Charis',
    body: [
      "I'm a Rice student who likes questions that do not have obvious answers.",
      "Statistics gave me a way to think through uncertainty, data science gave me tools to build with, and Asian Studies has kept me attentive to language, culture, and context.",
      "Together, they shape how I approach problems: with curiosity, structure, and attention to what the numbers alone cannot explain.",
    ],
  },
  {
    num: '02',
    tag: 'research',
    title: "Questions I've Chased",
    body: [
      "At <strong>UT MD Anderson Cancer Center</strong>, I work on causal inference and genomic software development for maternal–fetal health research.",
      "I contribute to simulation frameworks that generate mother-child-placenta data under different exposure and confounding scenarios, then use those simulations to compare causal inference methods.",
      "I also support the development of an <strong>R package</strong> designed to recommend appropriate causal inference approaches based on data structure and simulation results.",
    ],
  },
  {
    num: '03',
    tag: 'toolkit',
    title: 'My Data Toolkit',
    body: [
      "I work mostly in <strong>Python</strong>, <strong>R</strong>, and <strong>SQL</strong>, using them to clean data, explore patterns, build models, and communicate results.",
      "My everyday tools include <strong>pandas</strong>, <strong>NumPy</strong>, <strong>tidyverse</strong>, <strong>ggplot2</strong>, <strong>matplotlib</strong>, <strong>seaborn</strong>, and <strong>scikit-learn</strong>.",
      "I have experience with many machine learning algorithms like <strong>regression</strong>, <strong>ensemble methods</strong>, <strong>gradient boosting</strong>, <strong>neural networks</strong>, and other tools like <strong>bootstrapping</strong>, <strong>time series</strong>, <strong>random forest</strong>, <strong>SVM</strong>, <strong>cross-validation</strong>, <strong>model diagnostics</strong>, and <strong>NLP</strong>.",
      "I also use <strong>Git/GitHub</strong>, <strong>Jupyter</strong>, <strong>RStudio</strong>, <strong>VS Code</strong>, <strong>SQLite</strong>, <strong>AWS S3</strong>, <strong>Tableau</strong>, and <strong>Power BI</strong> to organize and present my work.",
    ],
  },
  {
    num: '04',
    tag: 'teaching',
    title: 'Helping Ideas Click',
    body: [
      "For a year, I worked as a STAT 280: Elementary Applied Statistics labbie, helping students learn applied statistics, R, and data visualization in a hands-on lab setting.",
      "I now support STAT 410: Linear Regression as a grader, giving feedback on statistical reasoning, model interpretation, and technical work.",
      "Across both roles, I've learned how to explain complex ideas clearly, spot where students get stuck, and make statistics feel more approachable.",
    ],
  },
  {
    num: '05',
    tag: 'projects',
    title: 'Built From Data',
    body: [
      "For two years, I've mentored student teams through <strong>DEEP</strong>, helping turn broad project ideas into cleaned datasets, models, evaluations, and final presentations.",
      "The projects have ranged from a <strong>Spotify recommendation system</strong> to a <strong>housing price prediction model</strong>, with this year's team earning <strong>1st place</strong> in the DEEP competition.",
      "I've also worked with <strong>BioKind Analytics</strong> and the <strong>Melanin Minds Initiative</strong>, using Python and NLP to analyze survey data, uncover themes, and communicate community impact.",
    ],
  },
  {
    num: '06',
    tag: 'milestones',
    title: 'Milestones',
    body: [
      "<strong>Break Through Tech AI/ML Fellow</strong> — selected for a competitive program focused on applied machine learning, responsible AI, model evaluation, and industry-connected technical projects.",
      "<strong>Recognition:</strong> 1st Place DEEP at Rice (2025), Regeneron ISEF 3rd Grand Award in Plant Sciences (2023), National Geographic Award (2023), and Arkansas CS Student of Distinction (2023).",
    ],
  },
];

export default function About() {
  const [fi, setFi]             = useState(0);
  const [flipping, setFlipping] = useState(false);

  const next = () => {
    setFlipping(true);
    setTimeout(() => {
      setFi(i => (i + 1) % FACTS.length);
      setFlipping(false);
    }, 200);
  };

  const fact = FACTS[fi];

  return (
    <div className="page-wrap">
      <header className="page-header">
        <div className="page-eyebrow">Data Point: Charis</div>
        <h1>Bridging Statistics,<br /><span>Data Science &amp; Impact.</span></h1>
        <p>
          Hi, I'm Charis — a Statistics &amp; Data Science student at Rice University drawn to the
          stories hidden inside data. Through research, teaching, and mentorship, I use statistical
          modeling and visualization to turn complex information into something clearer and more useful.
        </p>
      </header>

      {/* ── FUN FACT ── */}
      <div className="fact-section-label">Fun Facts About Me ✦</div>
      <div className="fact-card" onClick={next}>
        <div className={`fact-inner${flipping ? ' flip' : ''}`}>
          <div className="fact-top">
            <span className="fact-emoji">{fact.emoji}</span>
            <span className="fact-label">{fact.label}</span>
            <span className="fact-counter">{fi + 1} / {FACTS.length}</span>
          </div>
          <p className="fact-text">{fact.text}</p>
          <div className="fact-hint">click for another ✦</div>
        </div>
        <div className="fact-dots">
          {FACTS.map((_, i) => (
            <span key={i} className={`fact-dot${i === fi ? ' active' : ''}`} />
          ))}
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="about-divider">
        <div className="about-divider-line" />
        <span className="about-divider-txt">the full picture</span>
        <div className="about-divider-line" />
      </div>

      {/* ── CARDS ── */}
      <div className="about-grid">
        {CARDS.map(({ num, tag, title, body }) => (
          <div className="card about-card" key={num}>
            <div className="about-card-top">
              <span className="about-num">{num}</span>
              <span className="tag-pill blue">{tag}</span>
            </div>
            <h2 className="about-card-title">{title}</h2>
            {body.map((p, i) => (
              <p key={i} className="about-card-body"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}