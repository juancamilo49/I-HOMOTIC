# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite HMR)
npm run build      # Type-check + production build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite is configured.

## Architecture

**IHomotic** is a React 19 + TypeScript + Vite SPA for a home automation (domótica) company based in Medellín, Colombia.

### Routing (`src/main.tsx`)

Five routes, all sharing a persistent `<Navbar>` and `<Footer>`:

| Path | Page |
|------|------|
| `/` | Home |
| `/nosotros` | Nosotros (About) |
| `/proyectos` | Proyectos |
| `/mapa` | Mapa (3D visualizer) |
| `/contacto` | Contacto |

### Internationalisation (`src/i18n.ts`)

**All translation strings live in a single file** (`src/i18n.ts`), not in external JSON files. Both `es` and `en` locales are defined inline as a typed `const`. Default language is Spanish. When adding new text, add both `es` and `en` keys in the same file following the existing `section.key` pattern. Components consume strings via `useTranslation()` from `react-i18next`.

### Component structure

```
src/
  Pages/           # Full-page components (one per route)
  components/
    TSX/           # Shared layout: Navbar.tsx, Footer.tsx
    CSS/           # CSS for shared layout components
    Tarjetas1/     # Service card component + servicios.json data
    Tarjetas2/     # Secondary project cards + otros-proyectos.json data
    calculadora-precios/  # Price calculator + productos.json data
    contacto-formulario/  # Contact form + campos-formulario.json fields
    grid-datos/    # Stats grid + grid-datos-info.json data
    proyectos-imagen/     # Featured project image + info JSON
  Styles/          # Per-page CSS files (Global.css + one per page)
  assets/          # Image files; imagenes.ts re-exports them as named exports
  integrantes.ts   # Team member data (names, roles, photos)
  i18n.ts          # All i18n strings + i18next init
  main.tsx         # App entry point and router
```

Component data (product lists, card content, form fields) is co-located as JSON files inside each component folder. The calculator reads `productos.json` for both individual products and packages.

### Mapa page (Three.js)

`src/Pages/Mapa.tsx` uses **raw Three.js** (not `@react-three/fiber`) with an imperative scene setup inside `useEffect`. The scene is manually torn down in the cleanup function. DOM hotspot elements are created imperatively and appended to the container div. When editing this page, be aware that `OrbitControls` is imported from `three/addons/controls/OrbitControls.js`.

### Styling

Each page has a matching CSS file in `src/Styles/`. Shared layout components have CSS in `src/components/CSS/`. There is no CSS module or Tailwind setup — plain CSS with class names.

### Key dependencies

- **MUI** (`@mui/material`) — UI components
- **Three.js** + `@react-three/fiber` + `@react-three/drei` — 3D (Three.js used imperatively in Mapa)
- **Framer Motion** — animations
- **React Router DOM v7** — routing
- **SweetAlert2** — modal dialogs
- **react-icons** — icon library
