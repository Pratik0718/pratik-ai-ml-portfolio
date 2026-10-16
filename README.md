# Pratik Khetmalis — AI/ML Portfolio

A responsive dark portfolio built with React, Vite, Tailwind CSS v4, and Lucide icons.

## Requirements
- Node.js 20.19+ or 22.12+ (recommended: current LTS)
- npm

## Run locally
1. Extract this project folder.
2. Open a terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Customize before publishing
Open `src/App.jsx` and update the `profile` object:
- Email
- LinkedIn URL
- GitHub URL

Also update the project cards in the `projects` array so each GitHub link points to the specific repository. The starter currently points to your GitHub profile because individual repository URLs have not been confirmed.

If you want to add a downloadable resume:
1. Create a `public` folder.
2. Put your resume PDF inside it as `resume.pdf`.
3. Add a link such as `<a href="/resume.pdf" download>Download résumé</a>` where you want it in the UI.

Review the experience, education, certifications, and project descriptions for accuracy before publishing.

## Build for production
```bash
npm run build
npm run preview
```
The production site is generated in the `dist/` folder.

## Free deployment option A: Vercel
1. Create a GitHub repository and push this project to it.
2. Sign in to Vercel with GitHub and import the repository.
3. Vercel should detect Vite automatically. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click **Deploy**. Vercel provides a free `*.vercel.app` URL.

## Free deployment option B: Netlify
1. Push this project to GitHub.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Deploy. Netlify provides a free `*.netlify.app` URL.

## Push to GitHub from a terminal
Create an empty repository on GitHub first, then run these commands in this folder (replace the URL with your repository URL):
```bash
git init
git add .
git commit -m "Build personal AI/ML portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Notes
- No API key or backend is required for this portfolio.
- Do not put secret API keys in frontend code.
- Google Fonts are loaded remotely; the site still works if the font request is blocked, using fallback fonts.
