# Portfolio Setup Instructions

## Quick Start Guide

### Step 1: Create Your Project Folder Structure

```bash
# Create main project folder
mkdir charis-portfolio
cd charis-portfolio

# Create src and public directories
mkdir src
mkdir public
```

### Step 2: Copy Files

Copy all the provided files into the correct locations:

**Root directory files:**
- package.json
- .gitignore
- README.md

**src/ directory files:**
- App.js
- App.css
- Home.js
- Home.css
- About.js
- About.css
- Work.js
- Work.css
- Projects.js
- Projects.css
- Contact.js
- Contact.css
- Navbar.js
- Navbar.css
- footer.js
- footer.css
- index.js
- index.css
- reportWebVitals.js

**public/ directory files:**
- index.html

### Step 3: Install Dependencies

```bash
npm install
```

This will install:
- React
- React DOM
- React Router DOM
- React Scripts
- Web Vitals
- Testing libraries

### Step 4: Run the Development Server

```bash
npm start
```

Your website will open at http://localhost:3000

## Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org/

### Port 3000 already in use
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies installation fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Module not found errors
Make sure all files are in the correct directories (src/ vs public/)

## Next Steps

1. **Add your images:** Place images in the `public/` folder
2. **Update content:** Edit the .js files with your information
3. **Customize colors:** Modify CSS variables in App.css
4. **Add resume:** Place your resume PDF in `public/` folder
5. **Deploy:** Use Netlify, Vercel, or GitHub Pages

## File Structure Should Look Like:

```
charis-portfolio/
├── node_modules/          (created after npm install)
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Home.js
│   ├── Home.css
│   ├── About.js
│   ├── About.css
│   ├── Work.js
│   ├── Work.css
│   ├── Projects.js
│   ├── Projects.css
│   ├── Contact.js
│   ├── Contact.css
│   ├── Navbar.js
│   ├── Navbar.css
│   ├── footer.js
│   ├── footer.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── package-lock.json      (created after npm install)
└── README.md
```
