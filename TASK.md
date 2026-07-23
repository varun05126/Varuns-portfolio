# Prompt: Developer Portfolio — Production-Grade Architecture (Fresh Start)

## Role
You are a Senior Staff Software Engineer and UI/UX Architect with expertise in React, Node.js, Express, MongoDB, GSAP, Framer Motion, Lenis, TailwindCSS, Vite, and scalable system architecture.

## Objective
Design a production-grade, multi-page Developer Portfolio website for a student developer (projects: SkillHer, E-Waste Management System). The project must be scalable, modular, highly optimized, SEO-friendly, and visually world-class — built around a **glassmorphism design language** with an **animated 3D swimming fish background** and **3D interactive project cards**.

## Step Zero: Fresh Start
Before any design or planning work:
- Delete the entire existing project contents in `Varuns-portfolio/` (previous vanilla HTML/CSS/JS + Express prototype, including `frontend/`, `backend/`, `portfolio/`, `docs/`, and any leftover config) — this is being replaced with the stack below, not extended.
- Keep only: `.git/`, `README.md` (repo-level, will be rewritten later), and `.gitignore` (will be rewritten for the new stack).
- Confirm the deletion and resulting empty state before proceeding to architecture design.

## Technology Stack

**Frontend**
- React 19, Vite
- TailwindCSS
- Framer Motion, GSAP, Lenis (smooth scroll)
- React Router
- Zustand (state)
- React Hook Form
- React Query
- Axios
- React Icons
- Lottie
- Swiper
- Three.js (for the 3D fish background and 3D project cards — integrated as a React component, e.g. via `@react-three/fiber` + `@react-three/drei` if preferred over raw Three.js; propose and justify the choice)

**Backend**
- Node.js, Express
- MongoDB (local, for now — all data stored there)
- Mongoose
- Nodemailer (contact form delivery)
- CORS

**Deployment targets** (design for, don't deploy yet)
- Frontend: Render
- Backend: Render
- Database: MongoDB local for now, structured so migration to Atlas later is trivial

## Design Language (carry into the architecture, not just visuals)
- **Glassmorphism throughout**: all UI surfaces (nav, hero panel, project cards, skill panels, contact form, modals) use translucent frosted panels — `background: rgba(255,255,255,0.08–0.15)`, `backdrop-filter: blur(16–24px)`, `1px solid rgba(255,255,255,0.2)` borders, 16–24px radius, soft diffused shadow, faint top-left inner highlight. Vivid gradient/color-wash backdrop so the blur has something to refract.
- **3D animated fish background**: procedurally generated low-poly fish (no external model files), swimming via sine-wave spine undulation + faster tail oscillation, following a smooth looping path with banking turns. Subtle, muted, always behind content, 2–3 fish with parallax. Runs continuously (no reduced-motion gating on the fish itself — DOM/UI animations still respect `prefers-reduced-motion`).
- **3D interactive project cards**: each project rendered as its own floating glass card in 3D space, idle float/rotation, hover tilt + brighten, click expands into a full glass modal or camera-dolly zoom with project details, tech stack, live demo + repo links.
- **Multi-page structure**: Landing/Home, Skills, Projects, About, Contact — shared nav, shared 3D fish background (as a persistent layout-level component, not re-mounted per page), consistent theming (dark/light toggle adjusting glass tint + gradient together).

## What the Architecture Response Must Include
Do not write code. Plan and prepare the structure only, and wait for further instructions before implementation. Cover:

1. **Folder Structure** — full frontend (`src/components`, `src/pages`, `src/hooks`, `src/store`, `src/lib`, `src/three` or `src/canvas` for 3D scene code, `src/assets`) and backend (`routes`, `controllers`, `models`, `middleware`, `config`, `utils`) layout.
2. **API Structure** — REST endpoints for contact submissions, and for projects/skills if data-driven (`/api/contact`, `/api/projects`, `/api/skills`), including method, purpose, and expected request/response shape (described, not coded).
3. **Database Design** — Mongoose schema definitions at a conceptual level for `Contact`, `Project`, `Skill` (fields, types, validation rules, indexes), and relationships if any.
4. **Performance** — bundle size strategy, Three.js performance budget (triangle count caps, `devicePixelRatio` capping, delta-time animation, WebGL/low-end fallback), React Query caching strategy.
5. **Scalability** — how the structure supports adding new pages/projects without refactor, backend readiness for MongoDB Atlas migration.
6. **SEO** — per-page meta tags/Open Graph via React Router + Vite, sitemap/robots considerations, since this is a client-rendered SPA (address the SPA-SEO tradeoff explicitly and propose a mitigation, e.g. prerendering or meta-tag injection strategy).
7. **Image Optimization** — format/compression strategy, lazy loading approach.
8. **Animation Strategy** — division of responsibility between Framer Motion (UI transitions), GSAP (complex/timeline animations), Lenis (scroll), and Three.js (3D scene) — avoid overlap/conflict between libraries.
9. **Theme Strategy** — dark/light implementation approach (Zustand-backed, persisted, affecting both Tailwind theme and Three.js scene lighting/colors).
10. **Responsive Strategy** — breakpoint approach, how the 3D scene and glass cards adapt on mobile (including fallback to 2D glass cards on low-end/small devices).
11. **Accessibility** — keyboard navigation for 3D interactive elements, ARIA strategy for canvas content, focus management across route changes, reduced-motion handling for DOM elements.
12. **Code Splitting & Lazy Loading** — route-based splitting via React Router, lazy-loading the Three.js scene bundle specifically (since it's the heaviest dependency).
13. **Component Reusability** — shared glass-panel component, shared card component, shared layout/nav, design token system (Tailwind config extension for the glassmorphism tokens).

## Output Format
Architecture only — structured with headers matching the sections above, folder trees in code blocks where relevant, and schema field tables for the database design. No implementation code. End with a short list of open questions/decisions you need my input on before building (if any).