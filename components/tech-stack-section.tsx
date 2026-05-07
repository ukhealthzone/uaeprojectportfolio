import { Card, CardContent } from "@/components/ui/card"

const techStack = {
  frontend: ["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  backend: ["FastAPI", "Python 3.11", "Redis", "PostgreSQL 15"],
  ml: ["PyTorch 2.1", "TensorFlow 2.14", "XGBoost", "LightGBM", "scikit-learn"],
  infrastructure: ["Docker", "Kubernetes", "Apache Airflow", "Delta Lake"],
}

export function TechStackSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Built with modern, production-ready technologies
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(techStack).map(([category, items]) => (
            <Card key={category} className="border bg-card">
              <CardContent className="pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
