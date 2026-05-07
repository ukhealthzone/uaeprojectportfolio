import * as React from "react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-teal-500 ${className}`.trim()}
      {...props}
    />
  )
}

