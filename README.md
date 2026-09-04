# OSS Design Reference

A personal static knowledge base for OSS design work: codes, forms, fees, calculators, reviewer notes, and reusable design-detail reminders.

## Files

- `index.html` is the page structure.
- `styles.css` controls the layout and visual design.
- `app.js` stores the source links, topic cards, calculators, and seed notes.
- `assets/downloads/WCHCS-2025-Fees-for-OSS.pdf` is the local fee schedule copy.
- `assets/previews/wchcs-fees-preview.png` is the fee schedule preview image.

## Preview

Open `index.html` in a browser. No build step is required.

For a local server:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish For Free

### GitHub Pages

GitHub Pages can publish static HTML, CSS, and JavaScript files directly from a repository. On GitHub Free, the repository must be public for Pages publishing.

1. Create a repository, such as `oss-design-reference` or `<your-username>.github.io`.
2. Upload this folder.
3. Go to repository Settings, then Pages.
4. Choose the `main` branch and `/root` as the publishing source.
5. Wait for GitHub to publish the site.

Official docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

### Cloudflare Pages

Cloudflare Pages can also publish a static HTML site from GitHub. It supports Git integration and custom domains.

Suggested settings:

- Build command: `exit 0`
- Build output directory: `/`
- Production branch: `main`

Official docs: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Add References

Edit `siteContent` in `app.js`.

- Add code links under `codeSources`.
- Add design topics under `designTopics`.
- Add forms under `forms`.
- Add fee PDFs under `feeDocuments`.
- Add permanent notes under `notes`.
- Add detail reminders under `details`.
- Add bookmarks under `usefulLinks`.

## Add A PDF

1. Put the PDF in `assets/downloads`.
2. Add a `feeDocuments` entry in `app.js`.
3. Optional: add a preview image in `assets/previews`.

Anything committed to this site becomes public after deployment, including PDFs in `assets/downloads`.
