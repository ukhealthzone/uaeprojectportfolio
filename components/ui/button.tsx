import * as React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "lg"
  asChild?: boolean
}

export function Button({ className = "", variant = "default", size = "default", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md transition-colors"
  const v =
    variant === "outline"
      ? "border border-slate-300 bg-white hover:bg-slate-50"
      : variant === "ghost"
        ? "hover:bg-slate-100"
        : "bg-teal-600 text-white hover:bg-teal-700"
  const s = size === "lg" ? "h-12 px-5" : "h-10 px-4"
  return <button className={`${base} ${v} ${s} ${className}`.trim()} {...props} />
}

