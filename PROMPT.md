# Prompt: Premium Portfolio — Design System → Frontend → Backend (Phased)

## Role
You are a Senior Staff Software Engineer and UI/UX Architect. Execute this in **three strict phases**. Do not proceed to the next phase until I explicitly approve the current one — even though all three are described below, treat this as three separate work orders, not one continuous task.

---

## PHASE 1 — Design System (STOP after this phase)

Design a premium, custom UI system. Visual inspiration: Apple, Linear, Vercel, Stripe, Framer — but the result must be its own distinct design language, not a recognizable clone or generic template of any of them. State explicitly what makes this design language distinct rather than just naming the inspirations.

**Requirements to design for:**
- Dark mode + light mode with persistence (localStorage, respected on reload, no flash-of-wrong-theme)
- Multiple selectable accent colors (define the palette options)
- Glassmorphism panels
- Aurora background + animated gradient mesh
- Subtle noise texture overlay
- Glow effects (buttons, cards, focus states)
- Magnetic buttons, custom animated cursor (desktop only)
- Smooth hover animations, micro-interactions
- Parallax layers, scroll reveal, section transitions
- Sticky navbar + floating dock navigation
- Dynamic/animated background system
- Glass cards with blur, custom shadow system
- Rounded, modern layout grammar
- Typography: Inter + Satoshi pairing (define roles — which face for display/headings vs. body/UI)
- Responsive spacing system
- Minimal, premium color palette (not generic SaaS blue/purple)

**Deliverables for Phase 1 only:**
1. **Design Tokens** — full token set (color, spacing, radius, shadow, blur, z-index) as CSS custom properties or a Tailwind config extension.
2. **Spacing Scale** — the full scale with rationale (e.g. 4px base, ratio used).
3. **Typography Scale** — type ramp (sizes, weights, line-heights, letter-spacing) for both Inter and Satoshi roles, responsive behavior across breakpoints.
4. **Animation Timing** — easing curves, duration scale (micro/short/medium/long), and which interactions map to which tier.
5. **Color Palette** — base neutrals, accent color options, semantic colors (success/error/warning), dark + light variants for each, with contrast-ratio notes for accessibility.
6. **Component Styling Rules** — the governing rules for glass panels, cards, buttons, and nav (not full component code — the rules that any component must follow: blur ranges, border treatment, hover states, glow triggers).

**Do not write component code, page code, or backend code in this phase. Stop and wait for my review/approval before Phase 2.**

---

## PHASE 2 — Frontend Implementation (do not start until Phase 1 is approved)

Generate the complete frontend, built strictly on the approved Phase 1 design tokens.

**Stack:** React 19, Vite, TailwindCSS, Framer Motion, GSAP, Lenis (smooth scroll).

**Architecture requirements:**
- Atomic design structure (atoms/molecules/organisms/templates/pages), reusable components throughout.
- Route-based code splitting + dynamic imports (especially for heavy pages/components: 3D scene, stats widgets, image gallery).
- Lazy loading for below-the-fold content and images.
- Parallax scrolling via Lenis + GSAP ScrollTrigger, layered correctly (no fighting between Framer Motion and GSAP on the same element — define ownership per animation type as previously architected).
- GPU-accelerated animations only (`transform`/`opacity`, avoid layout-triggering properties).
- Fully responsive.

**Pages:** Home, About, Experience, Education, Skills, Projects, Certifications, Achievements, Blogs, Testimonials, Services, Resume, Contact, 404.
*(Flagged for your decision — see open question at the end: build all of these now, or scaffold routes only for the ones without real content yet?)*

**Components:** Hero, Navbar, Footer, Animated Background, Custom Cursor, Theme Toggle, Timeline, Project Cards, Skill Cards, Tech Stack display, Experience Cards, Blog Cards, GitHub Stats, LeetCode Stats, Codeforces Stats, CodeChef Stats, Typing Animation, Terminal Animation, Animated Buttons, Social Dock, Contact Form, Image Gallery, Resume Download, Floating CTA, Loading Screen, Skeleton Loader, Back-to-Top, Progress Bar.

**Output:** production-ready code, organized by the atomic-design folder structure, using only the Phase 1 tokens for styling (no ad-hoc colors/spacing). Stop and wait for review before Phase 3.

---

## PHASE 3 — Backend Implementation (do not start until Phase 2 is approved)

Generate the complete backend.

**Stack:** Node.js, Express, MongoDB, Mongoose.

**Folder structure:** `controllers/`, `routes/`, `services/`, `middlewares/`, `utils/`, `validators/`, `config/`.

**Requirements:**
- CRUD REST APIs for every content module (projects, skills, experience, education, certifications, achievements, blogs, testimonials, services, contact submissions).
- File upload support — text data, structured schema data, and images all persisted to MongoDB (e.g. GridFS or base64/Cloudinary reference strategy — propose and justify the approach rather than assuming).
- Image optimization on upload (resize/compress before storage or before serving).
- Request validation on every endpoint (via a validator layer, not inline checks).
- Centralized error handling middleware, consistent error response shape.
- Environment-based config (`config/`), no hardcoded values.

**Output:** production-grade, optimized code following the folder structure above.

---

## Open Questions Before Starting Phase 1
1. Of the 14 pages listed, which ones have real content ready now (Home, Skills, Projects, About, Contact, per prior work) versus which should be scaffolded as empty/placeholder routes for later (Blogs, Testimonials, Services, Certifications, Achievements, Experience, Education)?
2. For GitHub/LeetCode/Codeforces/CodeChef stats — do you have accounts/handles on all four to actually pull data from, or should some be deferred?
3. Image storage: MongoDB GridFS (self-contained, simpler for local dev) or an external service like Cloudinary referenced by URL in MongoDB (better performance/CDN, requires an external account)? This affects the Phase 3 file-upload design.