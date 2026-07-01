# RunSub Website v4.0 — Clean Asset Fix

Clean GitHub/Vercel-ready package.

## What changed
- Fixed broken hero image reference by using the existing verified asset path: `/assets/hero-device-premium-safe.png?v=400`.
- Included the hero image in `public/assets/` under both `hero-device-premium-safe.png` and `hero-device-v4.png`.
- Removed generated `dist/` from the source package.
- Kept Privacy, Terms and Contact pages.

## Upload instructions
Upload the extracted contents of this folder to GitHub. Do not upload the ZIP itself.

Do not upload any old `dist/` folder or `vercel.json`.

## Vercel settings
Framework: Other
Install: npm install
Build: npm run build
Output: dist
