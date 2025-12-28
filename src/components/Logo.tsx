import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "icon" | "horizontal"
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeMap = {
  icon: {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  },
  horizontal: {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  },
}

export function Logo({ variant = "icon", size = "md", className }: LogoProps) {
  const logoSrc = variant === "icon" ? "/logo.svg" : "/logo-horizontal.svg"
  const sizeClass = sizeMap[variant][size]

  return (
    <img
      src={logoSrc}
      alt="Saurabh Photos Logo"
      className={cn(sizeClass, "text-current", className)}
    />
  )
}

// Alternative: Inline SVG component for better control
export function LogoIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-12 h-12", className)}
      {...props}
    >
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <g transform="translate(100, 100)">
        <path d="M 0,-50 L 15,-35 L 15,-15 L 0,-25 Z" fill="currentColor" opacity="0.9" />
        <path
          d="M 35.36,-35.36 L 25,-15 L 15,-15 L 35.36,-25 Z"
          fill="currentColor"
          opacity="0.85"
          transform="rotate(45)"
        />
        <path
          d="M 50,0 L 35,15 L 15,15 L 25,0 Z"
          fill="currentColor"
          opacity="0.8"
          transform="rotate(90)"
        />
        <path
          d="M 35.36,35.36 L 15,25 L 15,15 L 25,35.36 Z"
          fill="currentColor"
          opacity="0.75"
          transform="rotate(135)"
        />
        <path
          d="M 0,50 L -15,35 L -15,15 L 0,25 Z"
          fill="currentColor"
          opacity="0.7"
          transform="rotate(180)"
        />
        <path
          d="M -35.36,35.36 L -25,15 L -15,15 L -35.36,25 Z"
          fill="currentColor"
          opacity="0.65"
          transform="rotate(225)"
        />
        <path
          d="M -50,0 L -35,-15 L -15,-15 L -25,0 Z"
          fill="currentColor"
          opacity="0.6"
          transform="rotate(270)"
        />
        <path
          d="M -35.36,-35.36 L -15,-25 L -15,-15 L -25,-35.36 Z"
          fill="currentColor"
          opacity="0.55"
          transform="rotate(315)"
        />
      </g>
      <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <path
        d="M 100,70 Q 115,70 115,80 Q 115,85 110,87 Q 115,89 115,94 Q 115,104 100,104 Q 85,104 85,94"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
