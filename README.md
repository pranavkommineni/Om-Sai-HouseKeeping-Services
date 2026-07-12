# Om Sai Housekeeping Services — Website

A premium, fully responsive marketing website for **Om Sai Housekeeping Services**, built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion. Personal service website for bussiness analysis.this is begin hosted in hostinger under the domain omsaihousekeepingservices.site. 

## Folder Structure

```
on-sai-website/
├── public/
│   └── assets/                 # Company photos (team, CEO, gallery)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Home page — composes all sections
│   │   └── globals.css         # Design tokens + signature styles
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Reveal.tsx      # Scroll-triggered fade/slide animation
│   │   │   ├── SectionTag.tsx  # Reusable eyebrow + heading block
│   │   │   ├── Counter.tsx     # Animated number counter
│   │   │   └── RippleButton.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Industries.tsx
│   │   ├── Process.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Leadership.tsx
│   │   ├── Stats.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingButtons.tsx # WhatsApp / Call / Back-to-top
│   ├── data/                   # All copy & content as typed data
│   │   ├── siteConfig.ts       # Phone, email, socials, hours
│   │   ├── services.ts
│   │   ├── whyChoose.ts
│   │   ├── industries.ts
│   │   ├── process.ts
│   │   ├── gallery.ts
│   │   ├── testimonials.ts
│   │   ├── faqs.ts
│   │   └── stats.ts
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

Almost all text, contact details, and social links live in `src/data/`.
Edit `src/data/siteConfig.ts` for phone/email/social links, and the
other files in `src/data/` for services, testimonials, FAQs, etc. —
no need to touch component code for routine content updates.

## Editing Images

Replace files in `public/assets/` (keep the same filenames, or update
the paths referenced in `src/data/gallery.ts` and the relevant
components: `Hero.tsx`, `About.tsx`, `Leadership.tsx`).

## Sending Contact Form Emails

The contact form (`src/components/Contact.tsx`) sends emails directly
from the browser using [EmailJS](https://www.emailjs.com) — there's no
backend/API route involved, so it works on any static or serverless host.

1. Copy `.env.local.example` to `.env.local` (already pre-filled with
   the project's EmailJS credentials):
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
2. In your [EmailJS dashboard](https://dashboard.emailjs.com/admin/templates),
   make sure the template (`template_mae62wm`) has a "To email" set to
   the owner's inbox (`madhukrishnakommineni2050@gmail.com`), and that
   it uses these variables so they map to the form fields:
   `{{name}}`, `{{phone}}`, `{{email}}`, `{{service}}`, `{{message}}`.
   A hidden `to_email` field is also submitted if you'd rather set the
   recipient dynamically from `{{to_email}}` in the template.
3. Restart `npm run dev` after editing `.env.local`.

Every time a client submits the form on the site, EmailJS delivers an
email straight to the owner/CEO's inbox with the client's name, phone,
email, service requested, and message — no server, database, or SMTP
credentials required.

> Note: the EmailJS **public key** is meant to be exposed in client-side
> code (that's how EmailJS works), so it's safe to keep in
> `NEXT_PUBLIC_*` env vars or committed defaults.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- **Service focus**: the site now highlights four core sectors —
  Hospital, School, College, and Mall housekeeping. Edit
  `src/data/services.ts` and `src/data/industries.ts` to adjust.
- **Service area**: set to "within 50 km of Hayathnagar, Telangana" in
  `src/data/siteConfig.ts` (`location`, `serviceArea`,
  `mapEmbedSrc`). Swap `mapEmbedSrc` for an exact Google Maps
  Place/Embed URL for a precise pin once you have the business listed
  on Google Maps.
- **Logo**: a custom shield + sparkle SVG mark lives in
  `src/components/ui/Logo.tsx` — edit the gradient colors or shape
  there to restyle it further.
- The Leadership section shows the title "Founder & CEO" without a
  personal name — add the name directly in `Leadership.tsx` if you'd
  like it displayed.
