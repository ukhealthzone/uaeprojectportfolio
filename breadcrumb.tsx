"use client"

import React from "react"

import { MapPin, TrendingUp, Search, ArrowRight, ExternalLink, Bed, Bath, Maximize } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Button({ className = "", asChild = false, children, ...props }: any) {
  const cls = `inline-flex items-center justify-center rounded-md px-4 py-2 ${className}`.trim()
  if (asChild && children) {
    return React.cloneElement(children, { className: `${children.props.className || ""} ${cls}`.trim() })
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}

function Input({ className = "", ...props }: any) {
  return <input className={`w-full ${className}`.trim()} {...props} />
}

function Card({ className = "", children, ...props }: any) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default function HomePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?location=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight text-balance">
            UAE Real Estate ML Model
          </h1>

          <p className="text-xl text-slate-600 text-pretty max-w-2xl mx-auto">
            Advanced machine learning models processing 2.4M+ daily data points with 3.2% MAPE valuation accuracy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/model-architecture">Model Architecture</Link>
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-2">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search by location, emirate, or property type..."
                  className="pl-10 h-12 border-0 focus-visible:ring-0"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-teal-600">12,847</div>
            <div className="text-sm text-slate-600 mt-1">Total Properties</div>
            <div className="text-xs text-teal-600 mt-2">+284 this month</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-teal-600">2.4M</div>
            <div className="text-sm text-slate-600 mt-1">Avg. Price (AED)</div>
            <div className="text-xs text-teal-600 mt-2">+5.2% YoY</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-teal-600">7.8%</div>
            <div className="text-sm text-slate-600 mt-1">Avg. ROI</div>
            <div className="text-xs text-teal-600 mt-2">+0.4% increase</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-teal-600">88.5</div>
            <div className="text-sm text-slate-600 mt-1">Investment Score</div>
            <div className="text-xs text-teal-600 mt-2">+2.1 points</div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Properties 2023</h2>
            <p className="text-slate-600 mt-1">Real listings from UAE property portals</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Luxury Apartment in Marina Gate",
              location: "Dubai Marina",
              area: "Marina Gate 1",
              price: "1,850,000",
              roi: "7.2%",
              score: 88,
              beds: 2,
              baths: 2,
              sqft: "1,456",
              image: "/luxury-apartment-dubai-marina-with-sea-view.jpg",
              url: "https://www.dubizzle.com/property-for-sale/residential/apartmentflat/",
              source: "Dubizzle",
            },
            {
              name: "3BR Penthouse with Sea View",
              location: "Palm Jumeirah",
              area: "Golden Mile",
              price: "4,200,000",
              roi: "6.8%",
              score: 92,
              beds: 3,
              baths: 4,
              sqft: "3,200",
              image: "/penthouse-palm-jumeirah-sea-view-luxury.jpg",
              url: "https://www.propertyfinder.ae/en/buy/properties-for-sale.html",
              source: "Property Finder",
            },
            {
              name: "Modern Villa with Pool",
              location: "Arabian Ranches",
              area: "Savannah",
              price: "3,500,000",
              roi: "5.9%",
              score: 85,
              beds: 5,
              baths: 6,
              sqft: "4,800",
              image: "/villa-arabian-ranches-pool-garden-dubai.jpg",
              url: "https://www.bayut.com/for-sale/property/dubai/",
              source: "Bayut",
            },
          ].map((property) => (
            <a
              key={property.name}
              href={property.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Score: {property.score}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    {property.location}
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    2023
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {property.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{property.area}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors flex-shrink-0" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-teal-600">AED {property.price}</span>
                    <span className="text-sm text-teal-600 flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {property.roi} ROI
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 pt-3 border-t">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4" />
                      {property.beds}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4" />
                      {property.baths}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4" />
                      {property.sqft} sqft
                    </span>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs text-slate-500">Listed on {property.source}</span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Our ML Model Architecture</h2>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Discover how we process 18.7M records with 8 ensemble models achieving 0.94 R² score
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/model-architecture">
              View Technical Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </Card>
      </section>
    </main>
  )
}
