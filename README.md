# Charis Portfolio

A custom React portfolio site for Charis Xiong focused on research, data science, and personal storytelling. The site uses a multi-page layout with interactive sections, custom styling, animated details, and downloadable resume/contact links.

## Overview

This project is a personal portfolio built with React and React Router. It is designed to highlight:

- academic background and research experience
- technical projects in R, Python, SQL, machine learning, and data visualization
- work experience, leadership, and awards
- contact information and resume access

## Features

- Multi-page React app with routes for Home, About, Work, Projects, and Contact
- Animated home page with rotating role text and a terminal-style "what I'm up to" section
- Filterable projects page
- Resume download from the `public/` directory
- Custom styling across each section
- Contact page with a placeholder message form plus direct links

## Tech Stack

- React 18
- React Router DOM 6
- CSS
- Create React App

## Getting Started

### Prerequisites

- Node.js 18 or newer recommended
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm start
```

The development server runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

## Project Structure

```text
charis-portfolio-main/
├── public/
│   ├── CharisXiongResume.pdf
│   ├── copy.JPG
│   └── index.html
├── src/
│   ├── App.js
│   ├── Home.js
│   ├── About.js
│   ├── Work.js
│   ├── Projects.js
│   ├── Contact.js
│   ├── Navbar.js
│   ├── footer.js
│   └── *.css
├── package.json
└── README.md
```

## Customization

### Update portfolio content

Most page content lives directly in arrays and JSX inside the component files:

- `src/Home.js` for the intro copy, rotating roles, and quick updates
- `src/About.js` for background, fun facts, awards, and toolkit content
- `src/Work.js` for experience and leadership sections
- `src/Projects.js` for project cards and filter tags
- `src/Contact.js` for email, LinkedIn, GitHub, and resume links

### Replace assets

- Profile image: `public/copy.JPG`
- Resume PDF: `public/CharisXiongResume.pdf`

If you rename either file, update the matching references in the React components.

### Update styling

Global and page-level styling lives in:

- `src/App.css`
- `src/index.css`
- page-specific `*.css` files in `src/`

## Contact Form Note

The contact form in `src/Contact.js` is currently front-end only. It shows a success message in the UI, but it does not send emails yet. To make it functional, connect it to a service such as Formspree, EmailJS, or a custom backend endpoint.

## Git and Repo Notes

Before pushing publicly:

- do not commit `.env` files with secrets
- keep `.DS_Store` files out of version control
- verify the resume PDF and personal image are intended for public distribution

## Deployment

This app can be deployed on:

- Netlify
- Vercel
- GitHub Pages

For most platforms, the workflow is:

```bash
npm run build
```

Then deploy the generated `build/` directory or connect the repository directly to your hosting provider.

## Contact

- Email: `charis.xiong@gmail.com`
- LinkedIn: [charis-xiong](https://linkedin.com/in/charis-xiong)
- GitHub: [karrixxa](https://github.com/karrixxa)
