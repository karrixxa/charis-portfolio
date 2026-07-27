import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const ROLES = [
  "a Statistics Major at Rice University",
  "a Data Science & Asian Studies Minor at Rice University",
  "a Causal Inference Researcher at MD Anderson Cancer Center",
  "an National Security Agency Intern (Summer '26)",
  "a Break Through Tech Fellow",
  "a Leader, Coder, and Storyteller",
];

const QA = [
  {
    q:   "What are you studying?",
    col: "blue",
    a:   "Studying <em>Statistics</em> with a minor in <em>Data Science</em> at Rice University, where I am learning the math behind the models, from probability theory to machine learning. I care about understanding <strong>why</strong> something works, not just that it does.",
  },
  {
    q:   "What's coming up this summer?",
    col: "green",
    a:   "Heading to <em>Baltimore</em> this summer for the <strong>NSA Future Computing Summer Internship 2026</strong>. I'll be working on a <b>Cognitive Paradigm AI project</b> exploring symbolic computing as a new paradigm that imitates how the human brain processes information. Python, modeling, simulation, and some Linux.",
  },
  {
    q:   "And the research?",
    col: "amber",
    a:   "I'm a researcher at <strong>MD Anderson Cancer Center</strong> on a break for my internship right now, but I've been building simulation frameworks for <em>maternal-fetal health genomics</em>, comparing causal inference methods, and co-developing an <strong>R package</strong> that recommends the right approach based on your data.",
  },
  {
    q:   "Anything else?",
    col: "soft",
    a:   "Part of <em>Break Through Tech</em>, an AI/ML program bridging academia and industry.",
  },
];

const MARQUEE = [
  "Statistics · Data Science", "causal inference", "NSA intern 2026",
  "MD Anderson researcher", "R · Python · ggplot2", "Break Through Tech",
  "symbolic AI · cognitive computing", "DEEP mentor", "statistical modeling", "data visualization",
];

export default function Home() {
  const canvasRef = useRef(null);
  const heroRef   = useRef(null);
  const termRef   = useRef(null);

  const [typed,   setTyped]   = useState('');
  const [ri,      setRi]      = useState(0);
  const [ci,      setCi]      = useState(0);
  const [del,     setDel]     = useState(false);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const word = ROLES[ri], spd = del ? 42 : 88;
    const t = setTimeout(() => {
      if (!del) {
        if (ci < word.length) { setTyped(word.slice(0, ci + 1)); setCi(ci + 1); }
        else setTimeout(() => setDel(true), 1800);
      } else {
        if (ci > 0) { setTyped(word.slice(0, ci - 1)); setCi(ci - 1); }
        else { setDel(false); setRi((ri + 1) % ROLES.length); }
      }
    }, spd);
    return () => clearTimeout(t);
  }, [ci, del, ri]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero   = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const dots = Array.from({ length: 65 }, () => ({
      x: Math.random() * 1.4 - .2, y: Math.random() * 1.4 - .2,
      vx: (Math.random() - .5) * .00025, vy: (Math.random() - .5) * .00025,
      r: Math.random() * 1.8 + .5, a: Math.random() * .45 + .12,
    }));

    function resize() {
      canvas.width  = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(() => { requestAnimationFrame(resize); });
    ro.observe(hero);

    function draw() {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      ctx.strokeStyle = 'rgba(120,180,240,0.06)'; ctx.lineWidth = .8;
      for (let x = 0; x < W; x += W / 10) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += H / 7)  { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      ctx.strokeStyle = 'rgba(123,179,232,0.2)'; ctx.lineWidth = 1.3; ctx.setLineDash([5, 8]);
      ctx.beginPath(); ctx.moveTo(0, H * .88); ctx.lineTo(W, H * .12); ctx.stroke();
      ctx.setLineDash([]);

      const bw = H * .065;
      const g  = ctx.createLinearGradient(0, 0, W, 0);
      g.addColorStop(0,  'rgba(74,144,226,0)');
      g.addColorStop(.5, 'rgba(74,144,226,0.07)');
      g.addColorStop(1,  'rgba(74,144,226,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, H*.88-bw); ctx.lineTo(W, H*.12-bw);
      ctx.lineTo(W, H*.12+bw); ctx.lineTo(0, H*.88+bw);
      ctx.closePath(); ctx.fill();

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < -.2) d.x = 1.2; if (d.x > 1.2) d.x = -.2;
        if (d.y < -.2) d.y = 1.2; if (d.y > 1.2) d.y = -.2;
        const px = d.x * W, py = d.y * H, ly = H * .88 - d.x * H * .76;
        ctx.strokeStyle = 'rgba(123,179,232,0.07)'; ctx.lineWidth = .7;
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, ly); ctx.stroke();
        ctx.beginPath(); ctx.arc(px, py, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123,179,232,${d.a})`; ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  useEffect(() => {
    let started = false;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        QA.forEach((_, i) =>
          setTimeout(() => setVisible(v => [...v, i]), 400 + i * 340)
        );
        io.disconnect();
      }
    }, { threshold: .15 });
    if (termRef.current) io.observe(termRef.current);
    return () => io.disconnect();
  }, []);

  const mq = [...MARQUEE, ...MARQUEE];

  return (
    <div className="home">

      <section className="home-hero" ref={heroRef}>
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-grid">
          <div className="hero-inner">
            <div className="hero-eyebrow">
              <span className="edot" />
              Charis Xiong | 熊菲菲 | 캐리스
            </div>
            <h1 className="hero-h1">
              Making data<br />
              <span className="sky">make sense.</span>
            </h1>
            <p className="hero-role">
              Currently:&nbsp;
              <span className="hero-typed">{typed}</span>
              <span className="hero-cur" />
            </p>
            <p className="hero-desc">
              I'm <em>Charis Xiong</em> — statistics major and data science minor at Rice,
              causal inference researcher, and incoming NSA intern.
              I turn messy data into stories that actually mean something.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-w">View My Work</Link>
              <Link to="/contact"  className="btn btn-o">Get In Touch</Link>
              <a href="/CharisXiongResume.pdf" className="btn btn-s" download>resume.pdf ↓</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-pic-ring">
              <img src="/copy.JPG" alt="Charis Xiong"
                onError={e => { e.target.style.display = 'none'; }} />
              <span className="hero-pic-initials">CX</span>
            </div>
            <div className="hero-tags">
              <span className="hero-tag t1">Rice University '26</span>
              <span className="hero-tag t2">GPA 3.91 ✦</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mq-strip">
        <div className="mq-track">
          {mq.map((item, i) => (
            <span className="mq-item" key={i}>
              {item}&nbsp;<span className="mq-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="tz">
        <div className="tz-inner">
          <div className="sec-lbl tz-lbl">right now</div>
          <div className="term">
            <div className="term-bar">
              <div className="term-dots">
                <span className="tdot r" />
                <span className="tdot y" />
                <span className="tdot g" />
              </div>
              <span className="term-title">charis@rice: ~ — what i'm up to</span>
            </div>
            <div className="term-body" ref={termRef}>
              {QA.map((item, i) => (
                <div className="t-block" key={i}>
                  <div className="t-prompt">
                    <span className="t-sym">$</span>
                    <span className="t-q">{item.q}</span>
                  </div>
                  <div
                    className={`t-answer ${item.col}${visible.includes(i) ? ' show' : ''}`}
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="home-connect">
        <div className="connect-box">
          <div className="connect-left">
            <div className="connect-tag">Let's Talk</div>
            <h2 className="connect-h">Open to Opportunities ✦</h2>
            <p className="connect-sub">
              Research, data science, or anything with interesting data. Expected to graduate in December 2026.
            </p>
          </div>
          <div className="connect-right">
            <a className="cb w" href="mailto:charis.xiong@gmail.com">charis.xiong@gmail.com</a>
            <a className="cb o" href="https://linkedin.com/in/charis-xiong" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="cb o" href="https://github.com/karrixxa" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </div>

    </div>
  );
}