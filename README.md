# Web.nox - Modern Full-Stack Website

A production-ready, mobile-first website for Web.nox - a web design startup. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

![Web.nox](https://img.shields.io/badge/Web.nox-Professional%20Web%20Development-6366f1)

## ✨ Features

- **Mobile-First Design** - Optimized for phones with responsive desktop adaptation
- **Modern Stack** - Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Contact Form** - Full-stack form with email notifications via Nodemailer
- **SEO Optimized** - Meta tags, Open Graph, semantic HTML
- **Accessible** - WCAG compliant with proper focus management
- **Performance** - Lighthouse optimized, lazy loading, code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Gmail account (or other SMTP provider) for contact form emails

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd web.nox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Copy the example env file
   cp .env.example .env.local
   
   # Edit .env.local with your values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form requires SMTP configuration to send emails.

### Using Gmail

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Under "2-Step Verification", click "App passwords"
   - Generate a new app password for "Mail"
3. Use this app password in your `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_TO_EMAIL=your-email@gmail.com
```

### Using Other Providers

| Provider | SMTP Host | Port |
|----------|-----------|------|
| Gmail | smtp.gmail.com | 587 |
| Outlook | smtp-mail.outlook.com | 587 |
| Yahoo | smtp.mail.yahoo.com | 587 |
| Mailgun | smtp.mailgun.org | 587 |
| SendGrid | smtp.sendgrid.net | 587 |

## 📁 Project Structure

```
web.nox/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts      # Contact form API endpoint
│   │   ├── globals.css           # Global styles & CSS variables
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Main page component
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Section.tsx
│   │   │   └── index.ts
│   │   ├── Icons.tsx             # SVG icon components
│   │   ├── Navbar.tsx            # Navigation with mobile menu
│   │   └── Footer.tsx            # Footer component
│   ├── sections/
│   │   ├── Hero.tsx              # Hero/landing section
│   │   ├── About.tsx             # About & Why Choose Us
│   │   ├── Services.tsx          # Services overview
│   │   ├── Packages.tsx          # Pricing packages
│   │   ├── Process.tsx           # How it works
│   │   ├── Terms.tsx             # Terms & conditions
│   │   ├── Contact.tsx           # Contact form section
│   │   └── index.ts
│   └── config/
│       ├── site.ts               # Site configuration & social links
│       ├── packages.ts           # Pricing packages data
│       ├── services.ts           # Services data
│       ├── process.ts            # Process steps data
│       └── terms.ts              # Terms & conditions data
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## ⚙️ Configuration

### Site Configuration (`src/config/site.ts`)

Edit this file to update:
- Brand name and tagline
- Contact information (email, phone, WhatsApp)
- Social media links
- Navigation links

### Packages (`src/config/packages.ts`)

Edit this file to update:
- Package names and descriptions
- Features for each package
- Pricing information

### Services (`src/config/services.ts`)

Edit this file to update:
- Service offerings
- Service descriptions
- Service icons

### Terms & Conditions (`src/config/terms.ts`)

Edit this file to update:
- Service agreement terms
- Payment policies
- Revision policies

## 🎨 Design System

### Colors (defined in `globals.css`)

| Variable | Color | Usage |
|----------|-------|-------|
| `--primary` | #6366f1 | Primary brand color |
| `--secondary` | #1e1b4b | Dark backgrounds |
| `--accent` | #818cf8 | Accent/highlight |
| `--foreground` | #0a0a0a | Text color |
| `--muted` | #64748b | Secondary text |
| `--surface` | #f8fafc | Light backgrounds |

### Components

- **Button** - Primary, secondary, outline, ghost variants
- **Card** - With header, content, footer composition
- **Input/Select/Textarea** - Form components with validation
- **SectionWrapper** - Consistent section spacing
- **FadeIn** - Animation wrapper component

## 🏗️ Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔧 Customization Tips

1. **Change colors** - Edit CSS variables in `src/app/globals.css`
2. **Update content** - Edit files in `src/config/`
3. **Add new sections** - Create in `src/sections/` and import in `page.tsx`
4. **Add new pages** - Create folders in `src/app/` (Next.js App Router)

## 📄 License

This project is proprietary to Web.nox. All rights reserved.

---

**Designed & Developed by Web.nox** 🚀
