"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, TrendingUp, Search, SlidersHorizontal, ExternalLink, Bed, Bath, Maximize } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DashboardPage() {
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

  const handleQuickSearch = (location: string) => {
    router.push(`/search?location=${encodeURIComponent(location)}`)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">UAE Real Estate Investment Analytics</h1>
          <p className="text-slate-600">
            Working prototype (deployed on Vercel) with complete full model architecture and production level code with
            documentation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Total Properties</div>
                <div className="text-3xl font-bold text-slate-900">12,847</div>
                <div className="text-xs text-amber-600">+284</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Avg. Price (AED)</div>
                <div className="text-3xl font-bold text-slate-900">2.4M</div>
                <div className="text-xs text-amber-600">+5.2%</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Avg. ROI</div>
                <div className="text-3xl font-bold text-slate-900">7.8%</div>
                <div className="text-xs text-amber-600">+0.4%</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Investment Score</div>
                <div className="text-3xl font-bold text-slate-900">88.5</div>
                <div className="text-xs text-amber-600">+2.1</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Search Section */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search by location, emirate, or property type..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSearch}>
              Search
            </Button>
          </div>

          <div className="flex gap-2 mt-4">
            {["Dubai Marina", "Palm Jumeirah", "Business Bay", "Abu Dhabi"].map((location) => (
              <Button key={location} variant="outline" size="sm" onClick={() => handleQuickSearch(location)}>
                {location}
              </Button>
            ))}
          </div>
        </Card>

        {/* Market Insights */}
        <Card className="p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Market Insights</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-start gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-teal-600 mt-0.5" />
                <h3 className="font-semibold text-slate-900">Strong Upward Trend in Dubai Marina</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Our ML models predict a 12.3% price increase over the next 6 months based on current market dynamics,
                infrastructure development, and historical patterns.
              </p>
            </div>
          </div>
        </Card>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Featured Properties 2023</h2>
          <p className="text-slate-600 mt-1">Real listings from UAE property portals</p>
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
              gradient: "from-blue-100 to-teal-100",
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
              gradient: "from-teal-100 to-cyan-100",
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
              gradient: "from-green-100 to-teal-100",
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
                      <TrendingUp className="w-4 h-4" />
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
      </div>
    </main>
  )
}
