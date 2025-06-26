# Last Minute Labs 🚀

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://last-minute-labs.vercel.app/)

**Struggling With Your IT Assignment?** We help students finish their toughest university projects — on time, with confidence.

🌐 **Live Website**: [https://last-minute-labs.vercel.app/](https://last-minute-labs.vercel.app/)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## 🎯 About

Last Minute Labs is a professional academic support service specializing in helping university students complete their IT assignments and projects. Born out of the chaos of deadline nights, we are a team of developers who understand what students need - quality, plagiarism-free, and presentable work with comprehensive support.

### Our Mission
To provide student-friendly, affordable, and high-quality academic project support that helps students succeed while learning.

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Floating Elements**: Animated tech icons and particles
- **Interactive Components**: Hover effects and micro-interactions

### 📱 User Experience
- **Single Page Application**: Smooth scrolling navigation
- **Mobile-First**: Optimized for mobile devices
- **Fast Loading**: Optimized images and performance
- **Accessibility**: WCAG compliant design

### 🛠️ Core Functionality
- **Service Showcase**: Detailed overview of offered services
- **Project Portfolio**: Carousel showcasing completed projects
- **WhatsApp Integration**: Direct contact via WhatsApp
- **Social Media Links**: Easy access to social platforms
- **Contact Forms**: Multiple ways to get in touch

### 🎯 Services Offered
- **Web Development**: Full-stack web applications, CRUD systems
- **Mobile Apps**: Cross-platform mobile application development
- **Desktop Applications**: Windows/Mac desktop software
- **Database Design**: Database architecture and implementation
- **System Analysis**: Requirements gathering and system design
- **Research Projects**: Academic research and documentation

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework for production
- **[React 19](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typed superset of JavaScript

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Components & Libraries
- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel library
- **[React Hook Form](https://react-hook-form.com/)** - Forms with easy validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### Development Tools
- **[PostCSS](https://postcss.org/)** - Tool for transforming CSS
- **[Autoprefixer](https://autoprefixer.github.io/)** - PostCSS plugin for vendor prefixes
- **[Class Variance Authority](https://cva.style/)** - Creating variant API for components
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.17 or later)
- **npm** or **pnpm** (recommended)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/last-minute-labs.git
   cd last-minute-labs
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using pnpm (recommended)
   pnpm install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Using pnpm
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 💻 Usage

### Development Scripts

```bash
# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Start production server
npm run start
# or
pnpm start

# Run linting
npm run lint
# or
pnpm lint

# Deploy to GitHub Pages
npm run deploy
# or
pnpm deploy
```

### Environment Setup

The project uses Next.js default configuration and doesn't require additional environment variables for basic functionality. However, you may want to configure:

- **Analytics** (Google Analytics, etc.)
- **Contact Forms** (if adding backend functionality)
- **CDN** (for image optimization)

## 📁 Project Structure

```
last-minute-labs/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main page component
├── components/                   # Reusable React components
│   ├── ui/                      # UI components (Radix UI based)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ... (other UI components)
│   └── theme-provider.tsx       # Theme context provider
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── public/                      # Static assets
│   ├── last-minute-labs-02.png  # Main logo
│   ├── stressed-developer.png   # Hero background
│   └── ... (other images)
├── styles/                      # Additional styles
│   └── globals.css
├── components.json              # Shadcn/ui configuration
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

### Key Files

- **`app/page.tsx`** - Main landing page with all sections
- **`app/layout.tsx`** - Root layout with metadata and providers
- **`components/ui/`** - Reusable UI components built with Radix UI
- **`lib/utils.ts`** - Utility functions for styling and helpers
- **`tailwind.config.ts`** - Tailwind configuration with custom colors

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-dark: #1B262C     /* Dark navy */
--primary-blue: #0F4C75     /* Deep blue */
--accent-blue: #3282B8      /* Bright blue */
--light-blue: #BBE1FA       /* Light blue */
--background: #A7BBC9       /* Light gray-blue */

/* Gradients */
background: linear-gradient(to bottom right, #1B262C, #0F4C75)
background: linear-gradient(to bottom right, #A7BBC9, white)
```

### Typography

- **Headings**: Bold, large sizes with color gradients
- **Body Text**: Clean, readable with good contrast
- **Interactive Elements**: Hover states and transitions

### Components

All UI components are built using Radix UI primitives with custom styling:
- Fully accessible
- Keyboard navigation support
- Screen reader friendly
- Consistent design language

## 🚀 Deployment

### Vercel (Recommended) ✅ Currently Deployed

**Live Website**: [https://last-minute-labs.vercel.app/](https://last-minute-labs.vercel.app/)

This project is currently hosted on Vercel. To deploy your own version:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### GitHub Pages

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- **Netlify**
- **AWS Amplify** 
- **Heroku**
- **Railway**

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure components are accessible
- Write clean, documented code
- Test on multiple devices

## 📞 Contact & Support

### Get In Touch

- **WhatsApp**: [+94 77 190 9141](https://wa.me/94771909141)
- **Facebook**: [Last Minute Labs](https://www.facebook.com/profile.php?id=61577740044753)
- **Instagram**: [@lastminute.labs](https://www.instagram.com/lastminute.labs/)

### Business Hours

- **Available**: 24/7 via WhatsApp
- **Languages**: English & Sinhala
- **Response Time**: Usually within 1 hour

### Services & Pricing

Contact us for:
- **Project Quotes**: Free initial consultation
- **Academic Support**: Assignment help and guidance
- **Technical Consulting**: System design and architecture
- **Emergency Projects**: Last-minute deadline assistance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set

---

## 📊 Project Stats

- **Built with**: Next.js 15, React 19, TypeScript
- **UI Components**: 25+ reusable components
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliant

---

<div align="center">

**Last Minute Labs** - *Helping students succeed, one project at a time* 🎓

[Live Website](https://last-minute-labs.vercel.app/) • [WhatsApp](https://wa.me/94771909141) • [Facebook](https://www.facebook.com/profile.php?id=61577740044753) • [Instagram](https://www.instagram.com/lastminute.labs/)

</div>
