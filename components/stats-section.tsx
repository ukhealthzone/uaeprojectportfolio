const stats = [
  { value: "18.7M", label: "Training Records", description: "Comprehensive dataset" },
  { value: "247", label: "Features", description: "Engineered features" },
  { value: "480GB", label: "Data Warehouse", description: "Delta Lake storage" },
  { value: "50,000+", label: "Concurrent Users", description: "Load tested capacity" },
]

export function StatsSection() {
  return (
    <section className="border-y bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-lg font-medium text-foreground">{stat.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
