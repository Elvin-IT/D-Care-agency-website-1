# D-Homecare Services (Static Site)

A static, front-end-only version of the D-Homecare WordPress homepage. Built with semantic HTML, responsive CSS, and vanilla JS. Suitable for GitHub Pages.

## Structure

- `index.html` — Main page with sections: header, hero, about, services, team, testimonials, contact, footer
- `css/style.css` — Mobile-first, accessible design
- `js/main.js` — Mobile menu, smooth scroll, contact form validation
- `assets/img/` — Place images here (hero and team placeholders referenced)

## How to run locally

Open `index.html` directly in your browser, or serve with a simple HTTP server (recommended for correct hash navigation):

- VS Code Live Server
- `python -m http.server` (Python 3)
- `npx serve` (Node.js)

## Add your branding

- Replace colors in `css/style.css` (`:root` variables)
- Replace images in `assets/img/`:
  - `hero-placeholder.jpg`
  - `person-1.jpg`, `person-2.jpg`, `person-3.jpg`
- Update copy in `index.html`

## Deploy to GitHub Pages

1. Create a new GitHub repository (public), e.g., `d-homecare`.
2. Initialize Git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial static site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/d-homecare.git
   git push -u origin main
   ```
3. In GitHub repository settings, go to Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` / folder: `/ (root)`
4. Your site will be available at `https://<your-username>.github.io/d-homecare/` after a few minutes.

## Notes

- This site is static and has no backend. The contact form shows a mock success message.
- For a multi-page site, create `about.html`, `services.html`, etc., and reuse the header/footer.
- If you want to mirror additional WordPress content, provide the URLs or export, and we can incorporate them.
