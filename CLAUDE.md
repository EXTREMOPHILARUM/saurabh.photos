# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript + Vite application using shadcn/ui components with Tailwind CSS v4. The project is a modern photo portfolio site built with a component-based architecture.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript compiler + Vite build)
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Component System

This project uses **shadcn/ui** (Radix Nova style) with Base UI React primitives. The component system follows these conventions:

- **UI Components**: `src/components/ui/` - Reusable, low-level UI primitives (buttons, cards, inputs, etc.)
- **Feature Components**: `src/components/` - Higher-level, composed components that use UI primitives
- **Path Aliases**: Uses `@/` prefix for all imports (configured in `vite.config.ts` and `tsconfig.json`)

### shadcn/ui Configuration

The project uses shadcn/ui with:
- **Style**: `radix-nova`
- **Base Color**: `gray`
- **Icon Library**: `lucide-react`
- **CSS Variables**: Enabled for theming
- **Config File**: `components.json`

When adding new shadcn components, they should be placed in `src/components/ui/` and follow the existing patterns.

### Styling

- **Tailwind CSS v4**: Configured via `@tailwindcss/vite` plugin
- **CSS Variables**: Defined in `src/index.css` for theming
- **Utility Helper**: `cn()` function in `src/lib/utils.ts` merges Tailwind classes using `clsx` and `tailwind-merge`

Always use the `cn()` utility for combining className strings:
```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", conditionalClass && "conditional-class")} />
```

### Import Aliases

All project imports use path aliases defined in `components.json`:
- `@/components` → Component files
- `@/lib/utils` → Utility functions
- `@/components/ui` → UI primitives
- `@/lib` → Library code
- `@/hooks` → React hooks (directory to be created when needed)

### Entry Points

- **Main Entry**: `src/main.tsx` - React root rendering with StrictMode
- **App Component**: `src/App.tsx` - Top-level application component
- **HTML Template**: `index.html` - Vite HTML entry point

## Key Dependencies

- **React 19**: Latest React with concurrent features
- **TypeScript 5.9**: Strict type checking enabled
- **Vite 7**: Fast build tool and dev server
- **shadcn/ui**: Component system built on Radix primitives
- **@base-ui/react**: Base UI React primitives for accessible components
- **lucide-react**: Icon library
- **Tailwind CSS v4**: Utility-first CSS framework

## TypeScript Configuration

The project uses a composite TypeScript setup:
- `tsconfig.json` - Root config with path aliases
- `tsconfig.app.json` - App-specific settings (src/)
- `tsconfig.node.json` - Node/build tool settings (vite.config.ts)

## Component Patterns

When creating new components:

1. Use the `@/` import alias for all internal imports
2. Export component functions (not default exports for components)
3. Use `cn()` utility for className composition
4. Import icons from `lucide-react`
5. Follow the shadcn/ui component structure seen in `src/components/ui/`
6. Place UI primitives in `src/components/ui/`, feature components in `src/components/`

Example component structure:
```tsx
import { cn } from "@/lib/utils"
import { SomeIcon } from "lucide-react"

export function MyComponent({ className, ...props }: Props) {
  return (
    <div className={cn("default-classes", className)} {...props}>
      <SomeIcon />
    </div>
  )
}
```
