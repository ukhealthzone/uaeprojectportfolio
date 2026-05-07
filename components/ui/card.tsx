import * as React from "react"

type DivProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = "", ...props }: DivProps) {
  return <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`.trim()} {...props} />
}

