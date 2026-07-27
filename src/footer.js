import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:charis.xiong@gmail.com">charis.xiong@gmail.com</a>
          <a href="https://linkedin.com/in/charis-xiong" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/karrixxa" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="footer-logo">charis<span>.xiong</span></div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Charis Xiong · built with React
        </div>
      </div>
    </footer>
  );
}