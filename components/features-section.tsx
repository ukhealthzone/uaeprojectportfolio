import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Brain, LineChart, Database, Cpu, Zap } from "lucide-react"

const features = [
  {
    icon: Building,
    title: "Property Search & Discovery",
    description: "Search 12,847+ properties across UAE with advanced filters and ML-powered recommendations.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent property analysis, market trends, and personalized investment recommendations.",
  },
  {
    icon: LineChart,
    title: "ROI Predictions",
    description: "Accurate ROI forecasting with 87.3% accuracy using ensemble ML models.",
  },
  {
    icon: Database,
    title: "Real-Time Data",
    description: "2.4M+ daily data points from 350+ web scrapers and 12 API integrations.",
  },
  {
    icon: Cpu,
    title: "8 Ensemble Models",
    description: "XGBoost, LightGBM, Random Forest, Neural Networks, LSTM, and Ridge regression.",
  },
  {
    icon: Zap,
    title: "Fast Inference",
    description: "Sub-250ms model inference with Redis caching for instant predictions.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Platform Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Enterprise-grade ML infrastructure for real estate investment analytics
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 bg-background shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
