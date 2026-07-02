# On Sai House Keeping Services — Website

A premium, fully responsive marketing website for **On Sai House Keeping Services**, built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion.

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

The contact form now posts to `src/app/api/contact/route.ts`, which
sends an email to the owner/CEO via [Nodemailer](https://nodemailer.com).

1. Copy `.env.local.example` to `.env.local`.
2. Fill in **either**:
   - `EMAIL_USER` + `EMAIL_PASS` — a Gmail address and an
     [App Password](https://myaccount.google.com/apppasswords)
     (requires 2‑Step Verification on that Gmail account), **or**
   - `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` — for any
     other email provider (SendGrid, Zoho Mail, Outlook, hosting SMTP, etc.)
3. Optionally set `CONTACT_TO_EMAIL` to the inbox that should receive
   bookings (defaults to the email in `src/data/siteConfig.ts`).
4. Restart `npm run dev` after editing `.env.local`.

Every time a client submits the form on the site, the owner/CEO's inbox
receives an email with the client's name, phone, email, service
requested, and message, with "reply-to" set to the client's email so
you can reply directly.

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
