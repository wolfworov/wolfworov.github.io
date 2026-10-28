# WolfRoad portfolio

A responsive, dependency-free portfolio for GitHub Pages. Open `index.html` to preview locally. No installation or build step is required.

## Before publishing

- Confirm the GitHub account (suggested by the requester: `wolfworov`) and repository name with the artist.
- Artist profile URLs are populated in `content.js`: DeviantArt `wolfroad` and Fur Affinity `wolfsroad`. The Fur Affinity search listing cross-links the DeviantArt name. Confirm these with the artist before launch.
- The requester states that images from the artist’s official pages may be used with links back. Verify the official sources and retain attribution for each selected work. Never use reposted meme images as originals.
- All included frames are abstract CSS placeholders, clearly labeled; none are representations of WolfRoad’s actual artwork. The decorative W mark is a site monogram, not a claimed artist logo.
- Confirm the title/date of Voices (2015) with the artist. These were supplied in the project brief. No personal name, location, career history, or commission availability has been invented.

## Add artwork

1. Save an authorized web-sized file in `assets/`, for example `assets/voices.webp`. Use lowercase filenames without spaces. Keep original high-resolution files outside the public repository.
2. Edit the corresponding entry in `content.js`: set `image` to its relative path, write an accurate `alt` description based on the actual image, set `permissionConfirmed: true`, and add its original official artwork page as `source` (an HTTPS URL). Voices and Mirror are included from files supplied by the requester with explicit authorization and original DeviantArt source links. Voices is the supplied clipboard PNG; replace it with a higher-quality artist file if available.
3. Keep Voices as the first entry; it appears both in the hero and gallery. Add more entries or remove unused gallery slots as needed.
4. Add only an artist-approved biography to `bio`. It is rendered as plain text.

Approved images open in a keyboard-accessible enlargement dialog. Escape or Close dismisses it. Missing files fall back to labeled placeholders. Images are displayed uncropped.

## Publish on GitHub Pages

1. Sign in to the artist’s confirmed GitHub account. Create a public repository, or choose her intended existing repository without overwriting unrelated files.
2. For a main profile site, name the repository exactly `USERNAME.github.io`. For a project site, choose a name such as `portfolio`.
3. Upload the **contents of this folder**, including `index.html`, `styles.css`, `content.js`, `site.js`, `.nojekyll`, and `assets/`, into the repository root on the `main` branch. Do not upload the outer `wolfroad` folder or ZIP as a single file. Confirm the dotfile `.nojekyll` is present.
4. Open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
5. Wait for the Pages deployment to finish, then use **Visit site** in Settings → Pages. A profile site uses `https://USERNAME.github.io/`; a project site uses `https://USERNAME.github.io/REPOSITORY/`. Publication can take up to 10 minutes.
6. Check the live page on a phone and desktop. Confirm artwork, original source links, profile links, and the enlargement dialog. Changes committed to the publishing branch update the site.

All asset paths are relative, so both URL styles work. No secret keys, contact form service, analytics, external fonts, or third-party scripts are required. Contact uses the confirmed artist profiles; it does not claim to send form submissions.

Official guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site and https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Rights

Do not apply an open-source license to the artwork without the artist’s agreement. Publishing images in a public repository does not grant a reuse license. Remove placeholder slots once the final selection is approved.
