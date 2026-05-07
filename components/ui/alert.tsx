"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, DollarSign, ArrowLeft, PieChart, Activity, Star, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

interface PropertyScores {
  location: number
  priceValue: number
  amenities: number
  condition: number
  rental: number
  appreciation: number
  liquidity: number
  overall: number
}

interface PropertyData {
  id: string
  name: string
  location: string
  type: string
  price: number
  size: number
  bedrooms: number
  bathrooms: number
  yearBuilt: number
  amenities: string[]
  pricePerSqft: number
  rentalYield: number
  appreciationRate: number
  occupancyRate: number
  capitalizationRate: number
  cashOnCashReturn: number
  scores: PropertyScores
  comparableProperties: Array<{
    name: string
    price: number
    size: number
  }>
  historicalPrices: Array<{
    year: number
    price: number
  }>
}

interface ApiResponse {
  properties: PropertyData[]
  stats: {
    averagePrice: number
    averagePricePerSqft: number
    averageRentalYield: number
    averageAppreciation: number
    averageScore: number
    totalListings: number
  }
  dataDisclaimer: string
  count: number
  searchLocation: string
  searchType: string
}

function SearchResultsContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("location") || "Dubai Marina"
  const propertyType = searchParams.get("type") || "all"

  const [apiData, setApiData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log("[v0] Fetching properties for:", searchQuery, propertyType)

        const response = await fetch(
          `/api/properties?location=${encodeURIComponent(searchQuery)}&type=${encodeURIComponent(propertyType)}`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch properties")
        }

        const data: ApiResponse = await response.json()
        console.log("[v0] Received property data:", data)
        setApiData(data)
      } catch (err) {
        console.error("[v0] Error fetching properties:", err)
        setError(err instanceof Error ? err.message : "Failed to load properties")
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [searchQuery, propertyType])

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
              <p className="text-slate-600">Loading property data...</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (error || !apiData) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <Card className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-900 mb-2">Error Loading Properties</h2>
            <p className="text-slate-600 mb-4">{error || "Unable to fetch property data"}</p>
            <Link href="/dashboard">
              <Button>Return to Dashboard</Button>
            </Link>
          </Card>
        </div>
      </main>
    )
  }

  const { properties, stats } = apiData

  const avgInvestmentScore = properties.reduce((sum, p) => sum + p.scores.overall, 0) / properties.length
  const totalMarketValue = properties.reduce((sum, p) => sum + p.price, 0)

  const propertyTypeMap: Record<string, number> = {}
  properties.forEach((p) => {
    propertyTypeMap[p.type] = (propertyTypeMap[p.type] || 0) + 1
  })

  const propertyTypes = Object.entries(propertyTypeMap).map(([name, count], index) => ({
    name,
    value: count,
    color: ["#14b8a6", "#0891b2", "#0284c7", "#0369a1"][index % 4],
  }))

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" className="mb-4 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-8 h-8 text-teal-600" />
            <h1 className="text-4xl font-bold text-slate-900">Investment Analysis: {searchQuery}</h1>
          </div>
          <p className="text-slate-600">
            Comprehensive investment decision dashboard with {properties.length} properties and ML predictions
          </p>
        </div>

        {/* Market Overview Hero */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Average Investment Score</div>
              <div className="text-6xl font-bold mb-2">{Math.round(avgInvestmentScore)}</div>
              <div className="text-sm opacity-90">Out of 100</div>
            </div>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Average Price</div>
              <div className="text-3xl font-bold mb-2">AED {stats.averagePrice.toLocaleString()}</div>
              <div className="text-sm opacity-90">{stats.averagePricePerSqft}/sqft average</div>
            </div>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Average Rental Yield</div>
              <div className="text-3xl font-bold mb-2">{stats.averageRentalYield}%</div>
              <div className="text-sm opacity-90">Annual return</div>
            </div>
            <div className="text-center">
              <div className="text-sm opacity-90 mb-2">Total Listings</div>
              <div className="text-3xl font-bold mb-2">{stats.totalListings}</div>
              <div className="text-sm opacity-90">Available properties</div>
            </div>
          </div>
        </Card>

        {/* Market Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-teal-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-sm text-slate-600 mb-1">Average Appreciation</div>
            <div className="text-3xl font-bold text-slate-900">{stats.averageAppreciation}%</div>
            <div className="text-xs text-emerald-600 mt-1">Year-over-year growth</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-sm text-slate-600 mb-1">Total Market Value</div>
            <div className="text-3xl font-bold text-slate-900">{(totalMarketValue / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-slate-600 mt-1">AED across all listings</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <PieChart className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-sm text-slate-600 mb-1">Property Types</div>
            <div className="text-3xl font-bold text-slate-900">{propertyTypes.length}</div>
            <div className="text-xs text-slate-600 mt-1">Different categories</div>
          </Card>
        </div>

        {/* Property Distribution Chart */}
        {propertyTypes.length > 0 && (
          <Card className="p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Property Type Distribution</h3>
                <p className="text-sm text-slate-600">Market composition in {searchQuery}</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RePieChart>
                <Pie
                  data={propertyTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {propertyTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </Card>
        )}

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Properties</h2>
          <div className="space-y-6">
            {properties.map((property) => (
              <Card key={property.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Property Details */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{property.name}</h3>
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-4 h-4" />
                          <span>{property.location}</span>
                          <span className="text-slate-400">•</span>
                          <span>{property.type}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-teal-600">AED {property.price.toLocaleString()}</div>
                        <div className="text-sm text-slate-600">AED {property.pricePerSqft}/sqft</div>
                      </div>
                    </div>

                    {/* Property Specs */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">{property.bedrooms}</div>
                        <div className="text-xs text-slate-600">Bedrooms</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">{property.bathrooms}</div>
                        <div className="text-xs text-slate-600">Bathrooms</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">{property.size}</div>
                        <div className="text-xs text-slate-600">Sqft</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="text-2xl font-bold text-slate-900">{property.yearBuilt}</div>
                        <div className="text-xs text-slate-600">Built</div>
                      </div>
                    </div>

                    {/* Investment Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-teal-50 rounded-lg">
                        <div className="text-xs text-teal-700 mb-1">Rental Yield</div>
                        <div className="text-xl font-bold text-teal-600">{property.rentalYield}%</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-xs text-blue-700 mb-1">Appreciation</div>
                        <div className="text-xl font-bold text-blue-600">{property.appreciationRate}%</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-xs text-purple-700 mb-1">Occupancy</div>
                        <div className="text-xl font-bold text-purple-600">{property.occupancyRate}%</div>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Cap Rate</div>
                        <div className="text-lg font-bold text-slate-900">{property.capitalizationRate}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-600 mb-1">Cash-on-Cash Return</div>
                        <div className="text-lg font-bold text-slate-900">{property.cashOnCashReturn}%</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-slate-700 mb-2">Amenities</div>
                      <div className="flex flex-wrap gap-2">
                        {property.amenities.map((amenity, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price History Chart */}
                    <div className="mt-4">
                      <div className="text-sm font-semibold text-slate-700 mb-3">Price History</div>
                      <ResponsiveContainer width="100%" height={150}>
                        <LineChart data={property.historicalPrices}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                          <YAxis stroke="#64748b" fontSize={12} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "white",
                              border: "1px solid #e2e8f0",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                            formatter={(value: number) => `AED ${value.toLocaleString()}`}
                          />
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#14b8a6"
                            strokeWidth={2}
                            dot={{ fill: "#14b8a6", r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Scoring Panel */}
                  <div className="lg:border-l lg:pl-6">
                    <div className="mb-6">
                      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 text-white">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{property.scores.overall}</div>
                          <div className="text-xs opacity-90">Overall</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-slate-700">Investment Score</div>
                        <div className="text-xs text-slate-600">Based on 7 parameters</div>
                      </div>
                    </div>

                    {/* Individual Score Breakdown */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Location Quality</span>
                          <span className="text-xs font-bold text-teal-600">{property.scores.location}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-teal-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.location}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Price Value</span>
                          <span className="text-xs font-bold text-blue-600">{property.scores.priceValue}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.priceValue}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Amenities</span>
                          <span className="text-xs font-bold text-purple-600">{property.scores.amenities}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.amenities}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Condition</span>
                          <span className="text-xs font-bold text-emerald-600">{property.scores.condition}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-emerald-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.condition}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Rental Potential</span>
                          <span className="text-xs font-bold text-amber-600">{property.scores.rental}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-amber-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.rental}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Appreciation</span>
                          <span className="text-xs font-bold text-rose-600">{property.scores.appreciation}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-rose-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.appreciation}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-700">Liquidity</span>
                          <span className="text-xs font-bold text-cyan-600">{property.scores.liquidity}/100</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-cyan-600 h-1.5 rounded-full"
                            style={{ width: `${property.scores.liquidity}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Score Radar Chart */}
                    <div className="mt-6">
                      <ResponsiveContainer width="100%" height={200}>
                        <RadarChart
                          data={[
                            { parameter: "Location", score: property.scores.location },
                            { parameter: "Value", score: property.scores.priceValue },
                            { parameter: "Amenities", score: property.scores.amenities },
                            { parameter: "Condition", score: property.scores.condition },
                            { parameter: "Rental", score: property.scores.rental },
                            { parameter: "Growth", score: property.scores.appreciation },
                            { parameter: "Liquidity", score: property.scores.liquidity },
                          ]}
                        >
                          <PolarGrid stroke="#e2e8f0" />
                          <PolarAngleAxis dataKey="parameter" tick={{ fontSize: 10, fill: "#64748b" }} />
                          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                          <Radar name="Score" dataKey="score" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Investment Recommendation */}
                    <div className="mt-6 p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200">
                      <div className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">Investment Recommendation</div>
                          <p className="text-xs text-slate-700">
                            {property.scores.overall >= 90
                              ? "Excellent investment opportunity with strong fundamentals across all parameters. High potential for appreciation and rental income."
                              : property.scores.overall >= 85
                                ? "Very good investment prospect with solid metrics. Recommended for both long-term appreciation and rental yield."
                                : "Good investment option with balanced characteristics. Consider based on your investment strategy and risk appetite."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparable Properties */}
                {property.comparableProperties.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="text-sm font-semibold text-slate-700 mb-3">Comparable Properties</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {property.comparableProperties.map((comp, index) => (
                        <div key={index} className="p-3 bg-slate-50 rounded-lg">
                          <div className="font-medium text-slate-900 text-sm mb-2">{comp.name}</div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">Price</span>
                            <span className="font-bold text-teal-600">AED {comp.price.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className="text-slate-600">Size</span>
                            <span className="text-slate-900">{comp.size} sqft</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6 bg-amber-50 border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-amber-900 mb-1">Data Disclaimer</div>
              <p className="text-sm text-amber-800">
                {apiData.dataDisclaimer} Property valuations, market analytics, investment scores, and predictive models
                are based on historical market trends and machine learning algorithms trained on data up to 2023. Actual
                market conditions may vary.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  )
}
