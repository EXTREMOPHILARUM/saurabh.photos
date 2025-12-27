# saurabh.photos

A modern photo portfolio website built with React 19, TypeScript, Vite, and shadcn/ui.

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components (Radix Nova style)
- **Base UI React** - Accessible component primitives
- **lucide-react** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Lint code with ESLint
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives (Button, Card, Input, etc.)
│   └── ...              # Feature components
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles and Tailwind CSS

components.json          # shadcn/ui configuration
vite.config.ts          # Vite configuration
tsconfig.json           # TypeScript configuration
```

## Key Features

- **Component System**: Built with shadcn/ui components on Radix primitives
- **Type Safety**: Full TypeScript support with strict mode
- **Modern Styling**: Tailwind CSS v4 with CSS variables for theming
- **Path Aliases**: Use `@/` imports for clean, absolute imports
- **Icon Library**: lucide-react for beautiful, consistent icons

## Development

### Adding Components

Use shadcn/ui CLI to add new components:

```bash
npx shadcn@latest add [component-name]
```

Components will be added to `src/components/ui/`

### Import Aliases

The project uses path aliases for clean imports:

```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Styling

Use the `cn()` utility to merge Tailwind classes:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", conditional && "conditional-class")} />
```

## License

Private
