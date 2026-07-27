import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

/* ── cat designs ── */
function CatSVG({ type, flip, sitting }) {
  const s = sitting;

  /* shared face pieces */
  const Face = ({ cx, cy, eyeL, eyeR, noseC, whiskerC, mouthC }) => (<>
    <ellipse cx={cx-6} cy={cy}   rx="7" ry="7.5" fill="white"/>
    <ellipse cx={cx+7} cy={cy}   rx="7" ry="7.5" fill="white"/>
    <ellipse cx={cx-6} cy={cy+.5} rx="4.5" ry="5" fill={eyeL}/>
    <ellipse cx={cx+7} cy={cy+.5} rx="4.5" ry="5" fill={eyeR}/>
    <circle  cx={cx-4.5} cy={cy-2} r="1.8" fill="white"/>
    <circle  cx={cx+8.5} cy={cy-2} r="1.8" fill="white"/>
    <ellipse cx={cx+.5} cy={cy+6} rx="1.8" ry="1.2" fill="#f9a8c9"/>
    <path d={`M${cx-.5},${cy+7.2} Q${cx-1.5},${cy+9} ${cx-3},${cy+9}`} stroke={mouthC} strokeWidth="1" fill="none" strokeLinecap="round"/>
    <path d={`M${cx+1.5},${cy+7.2} Q${cx+2.5},${cy+9} ${cx+4},${cy+9}`} stroke={mouthC} strokeWidth="1" fill="none" strokeLinecap="round"/>
    {/* whiskers — fan sideways from cheeks */}
    <line x1={cx-18} y1={cy+3}   x2={cx-8} y2={cy+5}   stroke={whiskerC} strokeWidth="1" opacity=".9"/>
    <line x1={cx-19} y1={cy+6.5} x2={cx-8} y2={cy+6.5} stroke={whiskerC} strokeWidth="1" opacity=".9"/>
    <line x1={cx-18} y1={cy+10}  x2={cx-8} y2={cy+8}   stroke={whiskerC} strokeWidth="1" opacity=".7"/>
    <line x1={cx+8}  y1={cy+5}   x2={cx+19} y2={cy+3}   stroke={whiskerC} strokeWidth="1" opacity=".9"/>
    <line x1={cx+8}  y1={cy+6.5} x2={cx+20} y2={cy+6.5} stroke={whiskerC} strokeWidth="1" opacity=".9"/>
    <line x1={cx+8}  y1={cy+8}   x2={cx+19} y2={cy+10}  stroke={whiskerC} strokeWidth="1" opacity=".7"/>
  </>);

  if (type === 'calico') return (
    <svg width="42" height="38" viewBox="0 0 110 145" style={{display:'block'}}>
      {/* tail */}
      {!s && <g style={{transformOrigin:'88px 95px'}}>
        <path d="M88,95 Q106,76 100,55 Q95,40 80,44" stroke="#d4823a" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <ellipse cx="80" cy="43" rx="5" ry="4" fill="#1a1a1a"/>
      </g>}
      {s && <path d="M70,118 Q88,125 90,118 Q88,110 70,118" stroke="#d4823a" strokeWidth="5" fill="none" strokeLinecap="round"/>}
      {/* body */}
      <ellipse cx="55" cy="100" rx="33" ry="20" fill="#f5f0e8"/>
      <ellipse cx="40" cy="96"  rx="13" ry="10" fill="#e8903a" opacity=".85"/>
      <ellipse cx="68" cy="105" rx="11" ry="9"  fill="#1a1a1a" opacity=".7"/>
      {/* head */}
      <circle cx="28" cy="83" r="23" fill="#f5f0e8"/>
      <ellipse cx="22" cy="75" rx="11" ry="10" fill="#e8903a" opacity=".8"/>
      <ellipse cx="37" cy="88" rx="9"  ry="8"  fill="#1a1a1a" opacity=".55"/>
      {/* ears */}
      <polygon points="14,71 9,52 24,66"  fill="#f5f0e8"/>
      <polygon points="16,70 12,56 23,65" fill="#f9c0c0"/>
      <polygon points="39,69 43,52 32,65" fill="#e8903a"/>
      <polygon points="38,69 41,55 33,65" fill="#f9c0c0"/>
      <Face cx={28} cy={81} eyeL="#2d6fa3" eyeR="#c47a2a" noseC="#b08060" whiskerC="#ccc" mouthC="#b08060"/>
      {/* legs */}
      {!s ? <>
        <line x1="37" y1="113" x2="34" y2="130" stroke="#e8c090" strokeWidth="5" strokeLinecap="round"/>
        <line x1="46" y1="115" x2="44" y2="130" stroke="#e8c090" strokeWidth="5" strokeLinecap="round"/>
        <line x1="63" y1="115" x2="62" y2="130" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="74" y1="113" x2="76" y2="130" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      </> : <>
        <ellipse cx="40" cy="125" rx="10" ry="5" fill="#e8c090"/>
        <ellipse cx="62" cy="125" rx="10" ry="5" fill="#1a1a1a"/>
      </>}
    </svg>
  );

  if (type === 'tabby') return (
    <svg width="42" height="38" viewBox="0 0 110 145" style={{display:'block'}}>
      {!s && <g style={{transformOrigin:'88px 95px'}}>
        <path d="M88,95 Q106,76 100,55 Q95,40 80,44" stroke="#c46820" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <ellipse cx="80" cy="43" rx="5" ry="4" fill="#a05010"/>
      </g>}
      {s && <path d="M70,118 Q88,125 90,118 Q88,110 70,118" stroke="#c46820" strokeWidth="5" fill="none" strokeLinecap="round"/>}
      <ellipse cx="55" cy="100" rx="33" ry="20" fill="#e8922a"/>
      <path d="M36,91 Q40,100 36,109" stroke="#c47020" strokeWidth="2.5" fill="none" opacity=".7"/>
      <path d="M47,89 Q51,100 47,111" stroke="#c47020" strokeWidth="2.5" fill="none" opacity=".7"/>
      <path d="M58,89 Q62,100 58,111" stroke="#c47020" strokeWidth="2.5" fill="none" opacity=".6"/>
      <circle cx="28" cy="83" r="23" fill="#e8922a"/>
      <path d="M19,68 L21,73 L25,69 L28,74 L31,69 L35,73 L37,68" stroke="#c47020" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <polygon points="14,71 9,52 24,66"  fill="#e8922a"/>
      <polygon points="16,70 12,56 23,65" fill="#f9c0c0"/>
      <polygon points="39,69 43,52 32,65" fill="#e8922a"/>
      <polygon points="38,69 41,55 33,65" fill="#f9c0c0"/>
      <Face cx={28} cy={81} eyeL="#c47a2a" eyeR="#c47a2a" noseC="#a06030" whiskerC="#ffd8a0" mouthC="#a06030"/>
      {!s ? <>
        <line x1="37" y1="113" x2="34" y2="130" stroke="#d4732a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="46" y1="115" x2="44" y2="130" stroke="#d4732a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="63" y1="115" x2="62" y2="130" stroke="#d4732a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="74" y1="113" x2="76" y2="130" stroke="#d4732a" strokeWidth="5" strokeLinecap="round"/>
      </> : <>
        <ellipse cx="40" cy="125" rx="10" ry="5" fill="#d4732a"/>
        <ellipse cx="62" cy="125" rx="10" ry="5" fill="#d4732a"/>
      </>}
    </svg>
  );

  if (type === 'tuxedo') return (
    <svg width="42" height="38" viewBox="0 0 110 145" style={{display:'block'}}>
      {!s && <g style={{transformOrigin:'88px 95px'}}>
        <path d="M88,95 Q106,76 100,55 Q95,40 80,44" stroke="#1a1a2e" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <ellipse cx="80" cy="43" rx="5" ry="4" fill="#1a1a2e"/>
      </g>}
      {s && <path d="M70,118 Q88,125 90,118 Q88,110 70,118" stroke="#1a1a2e" strokeWidth="5" fill="none" strokeLinecap="round"/>}
      <ellipse cx="55" cy="100" rx="33" ry="20" fill="#2a2a3a"/>
      <ellipse cx="48" cy="103" rx="15" ry="13" fill="#f0f0f0"/>
      <circle  cx="28" cy="83" r="23" fill="#2a2a3a"/>
      <ellipse cx="28" cy="91" rx="12" ry="9" fill="#f0f0f0"/>
      <polygon points="14,71 9,52 24,66"  fill="#2a2a3a"/>
      <polygon points="16,70 12,56 23,65" fill="#f9c0c0"/>
      <polygon points="39,69 43,52 32,65" fill="#2a2a3a"/>
      <polygon points="38,69 41,55 33,65" fill="#f9c0c0"/>
      <Face cx={28} cy={81} eyeL="#3aaa6a" eyeR="#3aaa6a" noseC="#888" whiskerC="#ddd" mouthC="#888"/>
      {!s ? <>
        <line x1="37" y1="113" x2="34" y2="130" stroke="#1a1a2e" strokeWidth="5" strokeLinecap="round"/>
        <line x1="46" y1="115" x2="44" y2="130" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round"/>
        <line x1="63" y1="115" x2="62" y2="130" stroke="#1a1a2e" strokeWidth="5" strokeLinecap="round"/>
        <line x1="74" y1="113" x2="76" y2="130" stroke="#1a1a2e" strokeWidth="5" strokeLinecap="round"/>
      </> : <>
        <ellipse cx="40" cy="125" rx="10" ry="5" fill="#1a1a2e"/>
        <ellipse cx="62" cy="125" rx="10" ry="5" fill="#f0f0f0"/>
      </>}
    </svg>
  );

  /* tobi — grey/white fluffy with white chest, grey cap, pink nose */
  return (
    <svg width="42" height="38" viewBox="0 0 110 145" style={{display:'block'}}>
      {!s && <g style={{transformOrigin:'88px 95px'}}>
        <path d="M88,95 Q106,76 100,55 Q95,40 80,44" stroke="#8a8a9a" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <ellipse cx="80" cy="43" rx="5" ry="4" fill="#606070"/>
      </g>}
      {s && <path d="M70,118 Q88,125 90,118 Q88,110 70,118" stroke="#8a8a9a" strokeWidth="5" fill="none" strokeLinecap="round"/>}
      {/* body — white/fluffy chest */}
      <ellipse cx="55" cy="100" rx="33" ry="20" fill="#9a9aaa"/>
      <ellipse cx="50" cy="103" rx="18" ry="14" fill="#f0f0f0"/>
      {/* fluffy texture lines */}
      <path d="M36,96 Q38,100 36,104" stroke="#7a7a8a" strokeWidth="1.5" fill="none" opacity=".5"/>
      <path d="M72,96 Q74,100 72,104" stroke="#7a7a8a" strokeWidth="1.5" fill="none" opacity=".5"/>
      {/* head — grey cap, white lower face like Tobi */}
      <circle cx="28" cy="83" r="23" fill="#9a9aaa"/>
      {/* white muzzle/lower face */}
      <ellipse cx="28" cy="91" rx="15" ry="11" fill="#f0f0f0"/>
      {/* grey forehead cap */}
      <path d="M8,80 Q15,62 28,60 Q41,62 48,80 Q40,74 28,73 Q16,74 8,80Z" fill="#8a8a9a"/>
      {/* ears — grey with pink inside */}
      <polygon points="14,71 9,52 24,66"  fill="#9a9aaa"/>
      <polygon points="16,70 12,57 23,65" fill="#f9c0c0"/>
      <polygon points="39,69 43,52 32,65" fill="#9a9aaa"/>
      <polygon points="38,69 41,57 33,65" fill="#f9c0c0"/>
      {/* eyes — big round like Tobi's surprised look */}
      <ellipse cx="22" cy="80" rx="7.5" ry="8" fill="white"/>
      <ellipse cx="36" cy="80" rx="7.5" ry="8" fill="white"/>
      <ellipse cx="22" cy="80.5" rx="5"  ry="5.5" fill="#2a2a3a"/>
      <ellipse cx="36" cy="80.5" rx="5"  ry="5.5" fill="#2a2a3a"/>
      <circle  cx="24" cy="78"   r="2"   fill="white"/>
      <circle  cx="38" cy="78"   r="2"   fill="white"/>
      <circle  cx="20.5" cy="82" r=".9"  fill="white"/>
      <circle  cx="34.5" cy="82" r=".9"  fill="white"/>
      {/* pink nose like Tobi */}
      <ellipse cx="28.5" cy="88" rx="2.2" ry="1.5" fill="#f090a0"/>
      {/* mouth */}
      <path d="M26.5,89.5 Q25,91.5 23.5,91.5" stroke="#a0a0b0" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M30,89.5 Q31.5,91.5 33,91.5"   stroke="#a0a0b0" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* white whiskers — long and fan out */}
      <line x1="7"  y1="84"   x2="20" y2="86.5" stroke="white" strokeWidth="1.1" opacity=".95"/>
      <line x1="6"  y1="88"   x2="20" y2="88"   stroke="white" strokeWidth="1.1" opacity=".95"/>
      <line x1="7"  y1="92"   x2="20" y2="89.5" stroke="white" strokeWidth="1.1" opacity=".8"/>
      <line x1="37" y1="86.5" x2="50" y2="84"   stroke="white" strokeWidth="1.1" opacity=".95"/>
      <line x1="37" y1="88"   x2="51" y2="88"   stroke="white" strokeWidth="1.1" opacity=".95"/>
      <line x1="37" y1="89.5" x2="50" y2="92"   stroke="white" strokeWidth="1.1" opacity=".8"/>
      {/* legs */}
      {!s ? <>
        <line x1="37" y1="113" x2="34" y2="130" stroke="#8a8a9a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="46" y1="115" x2="44" y2="130" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round"/>
        <line x1="63" y1="115" x2="62" y2="130" stroke="#8a8a9a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="74" y1="113" x2="76" y2="130" stroke="#8a8a9a" strokeWidth="5" strokeLinecap="round"/>
      </> : <>
        <ellipse cx="40" cy="125" rx="12" ry="6" fill="#f0f0f0"/>
        <ellipse cx="63" cy="125" rx="12" ry="6" fill="#8a8a9a"/>
      </>}
    </svg>
  );
}

/* ── animated walking cat ── */
const TYPES = ['calico', 'tabby', 'tuxedo', 'tobi'];

function NavCat({ id }) {
  const type    = TYPES[id % TYPES.length];
  const startX  = 4 + id * 24;
  const xRef    = useRef(startX);
  const dirRef  = useRef(id % 2 === 0 ? 1 : -1);
  const pausedR = useRef(false);

  const [x,       setX]       = useState(startX);
  const [dir,     setDir]     = useState(id % 2 === 0 ? 1 : -1);
  const [sitting, setSitting] = useState(false);

  const speed = 0.09 + id * 0.015;

  useEffect(() => {
    const t = setInterval(() => {
      if (pausedR.current) return;
      let nx = xRef.current + dirRef.current * speed;
      if (nx > 92) { nx = 92; dirRef.current = -1; setDir(-1); }
      if (nx < 1)  { nx = 1;  dirRef.current =  1; setDir(1);  }
      xRef.current = nx;
      setX(nx);
    }, 40);
    return () => clearInterval(t);
  }, [speed]);

  useEffect(() => {
    const t = setInterval(() => {
      if (Math.random() < 0.28) {
        pausedR.current = true; setSitting(true);
        setTimeout(() => { pausedR.current = false; setSitting(false); },
          2200 + Math.random() * 2800);
      }
    }, 4500 + id * 700);
    return () => clearInterval(t);
  }, [id]);

  const flip = dir === -1;

  return (
    <div
      className={`nav-cat${sitting ? ' sitting' : ''}`}
      style={{ left: `${x}%`, transform: `scaleX(${flip ? -1 : 1})` }}
      onClick={() => { pausedR.current = !pausedR.current; setSitting(s => !s); }}
      title="click me ♡"
    >
      <CatSVG type={type} flip={flip} sitting={sitting} />
    </div>
  );
}

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => setOpen(false);
  const links = [
    ['/', 'home'], ['/about', 'about'], ['/work', 'experience'],
    ['/projects', 'projects'], ['/contact', 'contact'],
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="cat-strip">
        <NavCat id={0}/>
        <NavCat id={1}/>
        <NavCat id={2}/>
        <NavCat id={3}/>
      </div>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={close}>
          charis<span>.xiong</span>
        </NavLink>
        <ul className="nav-links-list">
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={close}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="menu">
          <span className={`bar ${open ? 'open' : ''}`}/>
          <span className={`bar ${open ? 'open' : ''}`}/>
          <span className={`bar ${open ? 'open' : ''}`}/>
        </button>
      </div>
      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end
            className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}
            onClick={close}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}