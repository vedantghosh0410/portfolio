# Vedant Ghosh – Personal Portfolio Website

A clean, modern, and minimal personal developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-purple)

---

## 🚀 Features

- **⚡ Fast & Modern Architecture**: Powered by Next.js 14 App Router and TypeScript.
- **🎨 Minimal & Elegant Design**: Clean dark aesthetic with purple accents and fluid responsive layouts.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **🧭 Smooth Section Navigation**: Sticky navbar with smooth-scrolling links to About, Projects, and Contact sections.
- **💼 Projects Showcase**: Reusable project cards displaying tech tags, project summaries, and GitHub repository links.
- **📬 Connected Backend Contact API**: Built-in `/api/contact` route with live email delivery via Resend and a zero-config development console logger.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend / API**: Next.js Server Route (`/app/api/contact/route.ts`)
- **Email Service**: [Resend](https://resend.com/) REST API

---

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form backend API route
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar with mobile menu
│   │   ├── Hero.tsx             # Large hero banner with quick CTA buttons
│   │   ├── About.tsx            # Short bio & interactive skill tags/chips
│   │   ├── Projects.tsx         # Projects showcase container
│   │   ├── ProjectCard.tsx      # Reusable project card component
│   │   ├── Contact.tsx          # Contact form with backend connection
│   │   └── Footer.tsx           # Copyright footer & back-to-top button
│   ├── globals.css              # Global styles & Tailwind directives
│   ├── layout.tsx               # Root layout & page metadata
│   └── page.tsx                 # Main page assembling all sections
├── .env.example                 # Example environment variables
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies & scripts
├── tailwind.config.ts           # Tailwind configuration & purple color theme
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 🏃 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/vedantghosh0410/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
*(Add your free API key from [resend.com](https://resend.com) to enable live email delivery to your inbox).*

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 👤 Author

**Vedant Ghosh**
- GitHub: [@vedantghosh0410](https://github.com/vedantghosh0410)
- Email: [vedantghosh0410@gmail.com](mailto:vedantghosh0410@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
