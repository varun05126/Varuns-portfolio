# Developer Portfolio - Production-Grade Architecture

## 1. Folder Structure

### Frontend (`frontend/src`)
```
src/
├── assets/           # Static assets (images, icons, Lottie animations)
├── components/       # Reusable UI components
│   ├── layout/       # Layout components (Header, Footer, Layout)
│   ├── ui/           # Reusable UI components (Button, Input, Card, GlassPanel)
│   ├── layout/       # Layout components (Header, Footer, Layout)
│   └── three/        # 3D components (FishBackground, ProjectCard3D)
├── pages/            # Page-level components (routes)
│   ├── Home/
│   ├── Skills/
│   ├── Projects/
│   ├── About/
│   └── Contact/
├── hooks/            # Custom React hooks
├── store/            # Zustand store modules
├── lib/              # Utility functions and constants
├── three/            # Three.js scene setup and initialization
└── App.tsx           # Main app component with routing
```

### Backend (`backend`)
```
backend/
├── controllers/      # Request handlers
│   ├── authController.js
│   ├── contactController.js
│   ├── projectController.js
│   └── skillController.js
├── models/           # Mongoose schemas
│   ├── Contact.js
│   ├── Project.js
│   ├── Skill.js
│   └── User.js
├── routes/           # API route definitions
│   ├── authRoutes.js
│   ├── contactRoutes.js
├── middleware/       # Custom middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── validationMiddleware.js
├── config/           # Configuration files
│   ├── database.js
│   └── environment.js
├── utils/            # Utility functions
│   ├── emailUtils.js
│   └── helpers.js
├── server.js         # Entry point
└── .env.example      # Environment variables template
```

## 2. API Structure

### Contact Form Submission
- **Endpoint**: `POST /api/contact`
- **Purpose**: Handle contact form submissions and send email notifications
- **Request Body**:
  ```json
  {
    "name": "string (required)",
    "email": "string (required, email format)",
    "subject": "string (optional)",
    "message": "string (required)"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Message sent successfully"
  }
  ```

### Projects API (Data-driven)
- **Endpoint**: `GET /api/projects`
- **Purpose**: Retrieve all projects for display
- **Response**:
  ```json
  [
    {
      "_id": "ObjectId",
      "title": "string",
      "description": "string",
      "technologies": ["string"],
      "imageUrl": "string",
      "demoUrl": "string (optional)",
      "repoUrl": "string (optional)",
      "featured": "boolean",
      "createdAt": "Date"
    }
  ]
  ```
- **Endpoint**: `GET /api/projects/:id`
- **Purpose**: Retrieve a single project by ID
- **Response**: Single project object

### Skills API (Data-driven)
- **Endpoint**: `GET /api/skills`
- **Purpose**: Retrieve all skills for display
- **Response**:
  ```json
  [
    {
      "_id": "ObjectId",
      "name": "string",
      "category": "string (e.g., 'Frontend', 'Backend', 'Tools')",
      "proficiency": "number (1-100)",
      "icon": "string (icon class or URL)"
    }
  ]
  ```

## 3. Database Design

### Contact Schema
| Field | Type | Validation | Index |
|-------|------|------------|-------|
| _id | ObjectId | Auto-generated | Primary |
| name | String | Required, trim, minlength=2 | |
| email | String | Required, email format, lowercase | Index |
| subject | String | Trim, maxlength=200 | |
| message | String | Required, trim, minlength=10 | |
| createdAt | Date | Default: Date.now | Index (descending) |

### Project Schema
| Field | Type | Validation | Index |
|-------|------|------------|-------|
| _id | ObjectId | Auto-generated | Primary |
| title | String | Required, trim, minlength=2 | |
| description | String | Required, trim, minlength=10 | |
| technologies | [String] | Required, array of strings | |
| imageUrl | String | Required, valid URL | |
| demoUrl | String | Valid URL (optional) | |
| repoUrl | String | Valid URL (optional) | |
| featured | Boolean | Default: false | Index |
| createdAt | Date | Default: Date.now | Index (descending) |
| updatedAt | Date | Default: Date.now | Index |

### Skill Schema
| Field | Type | Validation | Index |
|-------|------|------------|-------|
| _id | ObjectId | Auto-generated | Primary |
| name | String | Required, trim, minlength=2 | |
| category | String | Required, enum: ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Design', 'Tools'] | Index |
| proficiency | Number | Required, min=1, max=100 | |
| icon | String | Required (icon class name or URL) | |

### User Schema (for admin/auth if needed)
| Field | Type | Validation | Index |
|-------|------|------------|-------|
| _id | ObjectId | Auto-generated | Primary |
| username | String | Required, unique, trim, minlength=3 | Unique |
| email | String | Required, unique, email format, lowercase | Unique |
| password | String | Required, minlength=8 | |
| role | String | Enum: ['admin', 'user'], default: 'user' | Index |
| createdAt | Date | Default: Date.now | Index |

## 4. Performance

### Bundle Size Strategy
- Code splitting via React Router lazy loading
- Dynamic imports for heavy libraries (Three.js, GSAP, Framer Motion)
- Tree shaking with ES modules
- CSS purging with TailwindCSS
- Image optimization and lazy loading

### Three.js Performance Budget
- Triangle count cap: 10K triangles for fish models
- devicePixelRatio capped at 2 for mobile devices
- Delta-time based animation for consistent speed
- Frustum culling for off-screen objects
- Instanced meshes for multiple fish (same geometry)
- Low-poly geometry with simple materials
- WebGL2 renderer with fallback to CanvasRenderer for very old browsers

### React Query Caching Strategy
- Projects data: staleTime: 5 minutes, cacheTime: 30 minutes
- Skills data: staleTime: 30 minutes, cacheTime: 1 hour
- Contact form submission: invalidate projects/skills queries on success
- Retry mechanism: 3 attempts with exponential backoff
- Refetch on window focus: false for projects data

## 

### Scalability
- **routes**/structure files can be extended routes for adding refactoring existing code
- Model schemas in `models/` can be easily extended with new fields or relationships
- Environment-based configuration in `config/` allows for easy migration between environments (local, staging, production)
- Database connection is abstracted in `config/database.js`, making MongoDB Atlas migration straightforward (just change connection string)
- Controllers are thin and delegate business logic to service-like utility functions, making them easy to test and maintain
- API versioning can be implemented by adding version prefixes to routes (e.g., `/api/v1/projects`) without breaking existing clients

### Database Migration Readiness
- Mongoose schemas are defined with explicit field types and validation, making schema evolution predictable
- Connection string is environment-configurable (`MONGODB_URI`)
- Indexes are explicitly defined for query performance
- Timestamps (`createdAt`, `updatedAt`) are included in all models for audit trails
- No hardcoded database/collection names - all derived from model definitions

## 5. SEO Strategy

### Meta Tags & Open Graph
- **React Router + React Helmet**: Dynamic meta tags per route using `react-helmet-async` (compatible with React 19)
- **Per-page SEO**: Each page component sets appropriate title, description, and Open Graph tags
- **Open Graph Images**: Custom images for sharing (1200x630px recommended)
- **Twitter Cards**: Summary card with large image support
- **Structured Data**: JSON-LD for Person (schema.org/Person) on About page, Project schema for portfolio items

### SPA-SEO Mitigation
- **Prerendering**: Use `vite-plugin-ssr` or similar for static generation of critical pages (Home, About, Projects index)
- **Meta Tag Fallback**: Static `index.html` contains default meta tags that are replaced by React Helmet on client load
- **Sitemap Generation**: Automated sitemap.xml generation during build process (`vite-plugin-sitemap`)
- **Robots.txt**: Explicit rules allowing indexing of all pages, specifying sitemap location
- **Server-Side Rendering Consideration**: For production, evaluate moving to React Server Components or Remix for full SSR if SEO becomes critical

## 6. Image Optimization

### Format Strategy
- **Modern Formats**: WebP as primary format with AVIF fallback for modern browsers
- **Fallbacks**: JPEG/WebP for older browser support
- **SVG**: For icons, logos, and simple illustrations (infinite scalability)
- **Avif**: Next-gen format with superior compression (where browser support allows)

### Compression & Processing
- **Build-time Optimization**: Use `vite-plugin-imagemin` with mozjpeg, optipng, svgo, and avif encoders
- **Quality Settings**: 80-85% quality for photographic images, 60-70% for background/images with text overlay
- **Responsive Images**: `srcset` and `sizes` attributes for different screen resolutions
- **Lazy Loading**: Native `loading="lazy"` for images below the fold, Intersection Observer for custom lazy loading
- **Placeholder Techniques**: Blurred placeholders (LQIP) for hero images and project thumbnails

### CDN & Delivery
- **Build Asset Optimization**: Images processed and optimized during build
- **Cache Headers**: Proper cache-control headers for immutable assets (1 year for hashed filenames)
- **Responsive Breakpoints**: Generate multiple sizes for art direction (mobile, tablet, desktop)

## 7. Animation Strategy

### Library Responsibilities

#### Framer Motion
- **UI Transitions**: Page transitions, modal animations, tooltip appearances
- **Layout Animations**: Reordering lists, expanding/collapsing sections
- **Hover/Focus States**: Button hovers, input focus, card lifts
- **Presence Animations**: Mount/unmount animations for conditional elements
- **Gesture Animations**: Drag, swipe, pinch gestures (if implemented)

#### GSAP (GreenSock Animation Platform)
- **Complex Timeline Animations**: Fish swimming animations, complex weapon effects
- **Scroll-triggered Animations**: Scroll-based progress indicators, parallax sections (complementing Lenis)
- **Physics-based Animations**: Spring effects, bounce, elastic movements
- **SVG Animations**: Stroke drawing, path animations for icons/logos
- **3D Integration**: GSAP can animate Three.js object properties (position, rotation, scale)

#### Lenis (Smooth Scroll)
- **Smooth Scrolling**: Native-like smooth scrolling experience
- **Scroll Synchronization**: Syncs with GSAP ScrollTrigger for scroll-based animations
- **Optimized Performance**: Uses requestAnimationFrame and efficient event handling
- **Mobile Support**: Proper touch handling and momentum scrolling on iOS/Android

#### Three.js
- **3D Scene Rendering**: Main 3D fish background and interactive project cards
- **Object Animations**: Fish swimming motion, card hover rotations, floating animations
- **Camera Animations**: Slow dolly zooms, orbital rotations for scene exploration
- **Particle Systems**: Bubbles, light particles, ambient environment effects
- **Post-processing**: Subtle bloom, vignette, or color grading for cinematic feel

### Avoiding Conflicts
- **DOM vs Canvas**: Framer Motion/GSAP for DOM elements, Three.js strictly for WebGL canvas
- **Scroll Handling**: Lenis handles scroll smoothing; GSAP's ScrollTrigger listens to Lenis' scroll events
- **State Management**: Animation state stored in Zustand stores to prevent conflicts between libraries
- **Destroy Cleanup**: Proper cleanup of animation controllers and listeners in component unmount
- **Performance Budget**: Limit concurrent animations; use `will-change` CSS property sparingly

## 8. Theme Strategy

### Dark/Light Implementation
- **Zustand Store**: Central theme store (`useThemeStore`) with persisted state (localStorage)
- **Theme Token**: Single boolean `isDark` stored in Zustand and persisted
- **CSS Variables**: Tailwind CSS configuration uses CSS variables for color tokens
- **Theme Switcher**: Toggle component updates Zustand store, which updates CSS variables
- **Transition**: CSS transition on `background-color` and `color` for smooth theme switching

### Three.js Theme Integration
- **Dynamic Lighting**: Scene ambient and directional light colors adjust based on theme
- **Material Adjustments**: Fish material emissive/color properties shift with theme
- **Background Gradient**: WebGL renderer background color changes with theme
- **Post-processing Effects**: Adjust bloom threshold and intensity based on theme brightness

### Tailwind Theme Extension
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        // Glassmorphism tokens
        glass: 'var(--glass)',
        'glass-border': 'var(--glass-border)',
        'glass-shadow': 'var(--glass-shadow)',
      },
    },
  },
};
```

### CSS Variables (Applied to :root)
```css
:root {
  --background: #ffffff;
  --foreground: #08060d;
  --card: rgba(255, 255, 255, 0.08);
  --card-foreground: #08060d;
  --glass: rgba(255, 255, 255, 0.08);
  --glass-border: 1px solid rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.dark {
  --background: #08060d;
  --foreground: #ffffff;
  --card: rgba(255, 255, 255, 0.08);
  --card-foreground: #ffffff;
  --glass: rgba(255, 255, 255, 0.05);
  --glass-border: 1px solid rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

## 9. Responsive Strategy

### Breakpoint Approach
- **Mobile First**: Base styles target mobile, min-width queries for larger screens
- **Tailwind Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Fluid Typography**: Use `clamp()` for fluid text scaling between breakpoints
- **Spacing Scale**: Consistent 4px-based spacing scale that adapts to screen size

### 3D Scene Adaptation
#### Desktop/Large Screens
- Full 3D fish bank with 3-5 fish
- Interactive 3D project cards with hover tilt and expansion
- High-detail fish models with smooth animations
- Full post-processing effects

#### Tablet/Medium Screens
- Reduced fish count (2-3 fish)
- Simplified fish animations (reduced complexity)
- 3D project cards with reduced interaction range
- Moderate post-processing

#### Mobile/Small Screens
- **Fallback to 2D**: Replace 3D fish background with animated SVG/CSS fish silhouettes
- **2D Project Cards**: Glass cards with subtle shadow and hover lift (no 3D tilt)
- **Reduced Complexity**: Disable post-processing, use basic materials
- **Performance Focus**: Lower polygon counts, simpler shaders, reduced animation complexity

### Adaptive Techniques
- **Window Size Monitoring**: Use `useWindowSize` hook to detect breakpoints
- **Pixel Ratio Handling**: Cap `devicePixelRatio` at 1.5 on mobile devices
- **Quality Tiers**: Three quality levels (high/medium/low) based on device capabilities
- **Progressive Enhancement**: Basic functionality works without JavaScript; enhancements layer on

## 10. Accessibility

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through interactive elements (nav links, buttons, form inputs)
- **3D Interactive Elements**: 
  - Project cards accessible via keyboard (Tab to focus, Enter/Space to activate)
  - Focus visible indicator with high contrast outline
  - Arrow keys for navigating between project cards in grid/view
  - Escape to close modals or exit expanded card view
- **Skip Navigation**: "Skip to main content" link at top of page
- **Custom Controls**: All custom interactive elements have appropriate `tabindex` and keyboard handlers

### ARIA Strategy
- **Canvas Content**: 
  - Three.js canvas has `aria-label="Animated 3D fish background"` 
  - Decorative fish elements marked with `aria-hidden="true"`
  - Interactive project cards have `role="button"` and appropriate `aria-label`
- **Dynamic Content**: 
  - Live regions for status messages (form submission status)
  - Proper `aria-expanded` for collapsible sections
  - `aria-label` for icon-only buttons
- **Screen Reader Support**:
  - Semantic HTML elements (header, nav, main, section, footer)
  - Proper heading hierarchy (h1-h6)
  - Meaningful alt text for all informative images
  - Form labels properly associated with inputs

### Focus Management
- **Route Changes**: Focus moves to main heading or first interactive element after route transition
- **Modal Dialogs**: Focus trap within modal, returns focus to trigger on close
- **Dynamic Content**: Focus management for newly inserted content (toasts, notifications)
- **Skip Links**: Visible on focus for keyboard users

### Reduced Motion Handling
- **CSS Media Query**: Respects `prefers-reduced-motion: reduce`
- **Animation Adjustments**:
  - Non-essential animations disabled or reduced to simple fades
  - Motion duration reduced to minimal viable duration
  - Parallax and scroll-based animations disabled or simplified
  - Three.js animations continue (as requested) but DOM/UI animations respect preference
- **User Control**: Global animation duration setting in user preferences (stored in Zustand)

### Color Contrast & Text
- **Contrast Ratio**: All text and UI elements meet WCAG 2.1 AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- **Text Scaling**: Support for user-initiated text scaling (no fixed pixel heights on containers)
- **Glassmorphism Contrast**: Ensure sufficient contrast between glass panels and blurred background
- **Focus Indicators**: Minimum 2px solid outline with 3:1 contrast against adjacent colors

## 11. Code Splitting & Lazy Loading

### Route-Based Splitting
- **React Router v6**: Route-level code splitting with `React.lazy()` and `Suspense`
- **Route Components**: Each page (Home, About, Projects, etc.) is a separate chunk
- **Route-based Prefetching**: Intelligent prefetching of likely next routes based on user behavior
- **Loading States**: Fallback UI for each route while chunk loads (skeleton loaders)

### Three.js Specific Splitting
- **Separate Chunk**: Three.js scene and related libraries (`three`, `@react-three/fiber`, `@react-three/drei`) in separate vendor chunk
- **Dynamic Import**: Three.js scene loaded only when needed (initially on Home page, preserved via context)
- **Progressive Loading**: Low-poly placeholder while high-detail models load
- **Worker Offloading**: Consider using worker threads for complex geometry parsing (if needed)

### Additional Optimization Techniques
- **Component-Level Splitting**: Large components (like project card galleries) split into smaller chunks
- **Library Splitting**: Separate chunks for animation libraries (Framer Motion, GSAP, Lenis)
- **Icon Optimization**: Icons loaded as needed from react-icons (tree-shaken)
- **Language Splitting**: If i18n added later, locale-specific chunks
- **Preloading**: Critical above-the-fold resources preloaded via `<link rel="preload">`

### Loading States & UX
- **Skeleton Loaders**: Animated placeholders for content while chunks load
- **Progressive Enhancement**: Basic HTML/CSS loads first, then JS enhances
- **Priority Hints**: `importance="high"` for critical resources, `low` for below-the-fold
- **Service Worker**: Consider Workbox for runtime caching of assets and API responses

## 12. Component Reusability

### Shared Glass Panel Component
```typescript
// src/components/ui/GlassPanel.tsx
interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  blur?: number; // 16-24px range
  opacity?: number; // 0.08-0.15 range
  border?: boolean;
  shadow?: boolean;
  radius?: string; // 16-24px radius
}

// Usage:
// <GlassPanel className="p-6" blur={20} opacity={0.1} border shadow radius="rounded-2xl">
//   <h2 className="text-xl font-bold">Project Title</h2>
//   <p className="mt-2">Project description...</p>
// </GlassPanel>
```

### Shared Card Component
```typescript
// src/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'hoverable' | 'clickable';
  size?: 'sm' | 'md' | 'lg';
  radius?: string;
  asChild?: boolean;
}

// Usage:
// <Card variant="hoverable" className="w-full">
//   <CardHeader>
//     <h3 className="font-semibold">Project Title</h3>
//   </CardHeader>
//   <CardContent>
//     <p>Project description...</p>
//   </CardContent>
// </Card>
```

### Design Token System (Tailwind Config Extension)
```javascript
// tailwind.config.js
const { createGlobalTheme } = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    addBase({
      ':root': {
        // Glassmorphism tokens
        '--glass-opacity-light': '0.08',
        '--glass-opacity-dark': '0.05',
        '--glass-blur': '20px',
        '--glass-border-width': '1px',
        '--glass-border-opacity': '0.2',
        '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
        
        // Border radius
        '--radius-sm': '8px',
        '--radius-md': '12px',
        '--radius-lg': '16px',
        '--radius-xl': '24px',
        
        // Transition durations
        '--duration-short': '150ms',
        '--duration-medium': '300ms',
        '--duration-long': '500ms',
        
        // Timing functions
        '--ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        '--ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      '.dark': {
        '--glass-opacity-light': '0.05',
        '--glass-opacity-dark': '0.03',
        '--glass-border-opacity': '0.1',
        '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.3)',
      }
    }
  ])
};
```

### Shared Layout Components
- **Layout Wrapper**: Provides consistent page structure (header, main, footer)
- **Header**: Navigation with logo, menu (mobile/hamburger and desktop variants)
- **Footer**: Copyright, links, social media icons
- **Container**: Constrained width padding component for consistent content width
- **Section**: Vertical spacing wrapper with optional background variants

## Open Questions & Decisions Needed

### 1. Three.js Implementation Approach
- **Option A**: Use `@react-three/fiber` + `@react-three/drei` (React-friendly, declarative)
- **Option B**: Use raw Three.js with useEffect/hooks (more control, potentially better performance)
- **Decision Needed**: Which approach do you prefer for the 3D fish background and interactive project cards?

### 2. State Management Scope
- **Option A**: Use Zustand for all global state (theme, UI state, form states)
- **Option B**: Use Zustand for global/theme state, React Query for server state, useState/useReducer for local UI state
- **Decision Needed**: What's your preference for state management granularity?

### 3. Data Fetching Strategy
- **Option A**: Use React Query for all server state (projects, skills, contact form)
- **Option B**: Use Fetch/Axios with custom hooks and manual caching
- **Decision Needed**: Would you prefer the built-in caching and deduplication of React Query?

### 4. Form Handling
- **Option A**: Use React Hook Form for contact form (performance, minimal re-renders)
- **Option B**: Use built-in React state with controlled components
- **Decision Needed**: Do you have a preference for form library approach?

### 5. Animation Library Specifics
- **Question**: Do you have any specific animation preferences or restrictions for the fish swimming behavior or project card interactions?

### 6. Deployment Considerations
- **Question**: Do you have a preference between Vercel (frontend) and Render/Railway (backend) for deployment, or should I keep the architecture deployment-agnostic?

### 7. Accessibility Requirements
- **Question**: Are there any specific accessibility standards (WCAG 2.1 AA, Section 508) that need to be strictly adhered to beyond the general guidelines provided?

Please provide your preferences on these questions so I can proceed with the implementation phase.