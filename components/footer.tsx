import { Building2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">UAE Real Estate ML</span>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Developed by Balaga Raghuram</p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Built with Next.js and AI
          </div>
        </div>
      </div>
    </footer>
  )
}
