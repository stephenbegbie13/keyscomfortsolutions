# Keys Comfort Solutions — Website (Netlify + GitHub)

This is a static site designed for Netlify deployment, with two Netlify Forms:
- service-request (customer job request)
- careers-application (job application)

## Quick start
1) Create a GitHub repo (e.g. `keyscomfortsolutions-site`)
2) Add all files in this folder to the repo
3) Push to GitHub

## Deploy on Netlify
1) Netlify → Add new site → Import from Git
2) Pick your repo
3) Build command: (leave blank)
4) Publish directory: `.` (root)
5) Deploy

## Forms (important)
Netlify detects forms during deploy. After first deploy:
- Netlify dashboard → Site → Forms
- You should see `service-request` and `careers-application`
- Enable email notifications (Forms → Settings)

Tip: You can add spam filtering and reCAPTCHA later if needed.

## Customize
Edit these placeholders in `index.html` and `thank-you.html`:
- Phone number: replace `+1XXXXXXXXXX` and `(XXX) XXX-XXXX`
- Email: update `info@keyscomfortsolutions.com` and `careers@keyscomfortsolutions.com`
- Service area list

## Domain
In Netlify:
- Site settings → Domain management → Add custom domain
- Follow Netlify instructions for DNS at GoDaddy
