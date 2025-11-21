<div align="center">

# 🏛️ Doodax: Local Business Permit Finder

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

<br />

<a href="https://PermitFinder.doodax.com" target="_blank">
  <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-PermitFinder.doodax.com-ff00ff?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
</a>

<br />
<br />

**An immersive, SEO-optimized web application designed to simplify government compliance for entrepreneurs.**

[Report Bug](https://github.com/hsinidev/doodax/issues) • [Contact Developer](mailto:hsini.web@gmail.com)

</div>

---

## 🚀 Project Overview

**Doodax** is a high-fidelity simulated utility that helps users identify necessary business permits based on their location and industry. It serves as a showcase of modern frontend capabilities, combining complex animations, robust SEO strategies, and a clean user interface.

### Key Objectives
- **Simplification:** Demystify the complexity of city zoning and state licensing.
- **Performance:** Achieve high Core Web Vitals scores through optimized asset loading and code splitting.
- **Immersion:** Utilize a custom CSS-based particle engine to create a "Galaxy" aesthetic, making a boring topic (compliance) visually engaging.

## ✨ Features

### 🎨 Visuals & UI
- **Nebula Engine:** A multi-layer parallax background utilizing CSS animations to create a deep-space effect with moving stars and shifting nebulae.
- **Glassmorphism:** Extensive use of backdrop-blur and translucent gradients to create a modern, floating interface.
- **Responsive Design:** Fully fluid layout that adapts to mobile, tablet, and desktop viewports.
- **UX Animations:** Simulated data processing states, toast notifications, and smooth micro-interactions.

### 🧠 Functionality
- **Smart Form Validation:** Real-time checks on user input for Business Type and Location.
- **Search Persistence:** Uses LocalStorage to remember recent searches, allowing users to easily resume previous sessions.
- **Actionable Tools:** Built-in "Print Checklist" and "Share Link" functionality for generated reports.
- **Dynamic Modals:** A centralized modal system managing legal pages (Privacy, Terms, DMCA) and informational content without page reloads.
- **Content Expansion:** A "Read More" interaction pattern that manages large-volume text content to maintain a clean initial fold.

### 🔍 SEO Architecture
- **JSON-LD Schema:** Fully integrated structured data for `WebSite`, `WebApplication`, `Article`, and `FAQPage`.
- **Semantic HTML:** Proper use of `<article>`, `<section>`, and header tags for accessibility and crawler efficiency.
- **Meta Optimization:** Comprehensive Open Graph and standard meta tags for social sharing and search indexing.

## 📂 Project Structure

```
/
├── public/               # Static Assets
│   ├── favicon.svg       # Brand Icon
│   ├── robots.txt        # Crawler Directives
│   └── sitemap.xml       # Search Indexing
├── src/
│   ├── components/       # UI Building Blocks
│   │   ├── Layout.tsx    # Main wrapper, Navbar, Footer, Modal Logic
│   │   └── PermitFinderUI.tsx # Core Logic: Form, History, Results
│   ├── lib/              # Logic & Utilities
│   │   └── formValidation.ts # Pure functions for input checking
│   ├── utils/            # Content Modules
│   │   └── SeoArticle.tsx # The SEO content engine (HTML-as-Code)
│   ├── App.tsx           # Root Component
│   └── index.tsx         # Application Entry Point
├── index.html            # HTML Entry & Critical CSS
└── README.md             # Documentation
```

## 🛠️ Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/hsinidev/doodax.git
    cd doodax
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 📄 License & Contact

**Powered by HSINI MOHAMED**

- **Website:** [doodax.com](https://doodax.com)
- **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
- **GitHub:** [github.com/hsinidev](https://github.com/hsinidev)

<div align="center">
  <sub>© 2024 HSINI MOHAMED. All Rights Reserved.</sub>
</div>
