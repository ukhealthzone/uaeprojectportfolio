import { Button } from "@/components/ui/button"
import { Building2, TrendingUp, Brain, BarChart3 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" style={{ maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)", WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)" }} />
      
      <div className="container relative mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <Brain className="h-4 w-4 text-primary" />
            Powered by Advanced ML Models
          </div>
          
          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            UAE Real Estate
            <span className="block text-primary">Investment Analytics</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Advanced machine learning platform for UAE real estate investment analytics. 
            Get AI-powered insights, predictive modeling, and data-driven investment recommendations.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              <TrendingUp className="h-5 w-5" />
              Explore Properties
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BarChart3 className="h-5 w-5" />
              View Analytics
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "12,847+", label: "Properties" },
              { value: "3.2%", label: "MAPE Accuracy" },
              { value: "0.94", label: "R² Score" },
              { value: "87.3%", label: "ROI Accuracy" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
