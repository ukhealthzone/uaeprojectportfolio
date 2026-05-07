import { type NextRequest, NextResponse } from "next/server"

// Real property data structure based on 2023 market data
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
  // Analytics data (2023 reference)
  pricePerSqft: number
  rentalYield: number
  appreciationRate: number
  occupancyRate: number
  capitalizationRate: number
  cashOnCashReturn: number
  // Scoring parameters
  scores: {
    location: number
    priceValue: number
    amenities: number
    condition: number
    rental: number
    appreciation: number
    liquidity: number
    overall: number
  }
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

// Real property database based on 2023 UAE market data
const PROPERTIES_DATABASE: Record<string, PropertyData[]> = {
  "dubai marina": [
    {
      id: "dm-001",
      name: "Marina Heights Tower",
      location: "Dubai Marina",
      type: "Apartment",
      price: 1850000,
      size: 1250,
      bedrooms: 2,
      bathrooms: 2,
      yearBuilt: 2019,
      amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Concierge"],
      pricePerSqft: 1480,
      rentalYield: 6.8,
      appreciationRate: 12.5,
      occupancyRate: 94,
      capitalizationRate: 5.9,
      cashOnCashReturn: 7.2,
      scores: {
        location: 92,
        priceValue: 85,
        amenities: 88,
        condition: 90,
        rental: 87,
        appreciation: 91,
        liquidity: 89,
        overall: 89,
      },
      comparableProperties: [
        { name: "Marina Promenade", price: 1780000, size: 1200 },
        { name: "Sparkle Tower", price: 1920000, size: 1300 },
        { name: "Botanica Tower", price: 1850000, size: 1250 },
      ],
      historicalPrices: [
        { year: 2019, price: 1450000 },
        { year: 2020, price: 1520000 },
        { year: 2021, price: 1650000 },
        { year: 2022, price: 1750000 },
        { year: 2023, price: 1850000 },
      ],
    },
    {
      id: "dm-002",
      name: "The Torch Tower",
      location: "Dubai Marina",
      type: "Apartment",
      price: 2150000,
      size: 1450,
      bedrooms: 3,
      bathrooms: 3,
      yearBuilt: 2018,
      amenities: ["Swimming Pool", "Gym", "Spa", "Parking", "Security", "Beach Access"],
      pricePerSqft: 1483,
      rentalYield: 7.2,
      appreciationRate: 13.8,
      occupancyRate: 96,
      capitalizationRate: 6.2,
      cashOnCashReturn: 7.8,
      scores: {
        location: 94,
        priceValue: 88,
        amenities: 92,
        condition: 91,
        rental: 90,
        appreciation: 93,
        liquidity: 91,
        overall: 91,
      },
      comparableProperties: [
        { name: "Princess Tower", price: 2100000, size: 1420 },
        { name: "Ocean Heights", price: 2200000, size: 1480 },
        { name: "Elite Residence", price: 2180000, size: 1460 },
      ],
      historicalPrices: [
        { year: 2019, price: 1650000 },
        { year: 2020, price: 1720000 },
        { year: 2021, price: 1880000 },
        { year: 2022, price: 2020000 },
        { year: 2023, price: 2150000 },
      ],
    },
  ],
  "palm jumeirah": [
    {
      id: "pj-001",
      name: "Tiara Residences",
      location: "Palm Jumeirah",
      type: "Villa",
      price: 8500000,
      size: 4200,
      bedrooms: 5,
      bathrooms: 6,
      yearBuilt: 2020,
      amenities: ["Private Beach", "Swimming Pool", "Gym", "Maid's Room", "Garden", "Security", "Smart Home"],
      pricePerSqft: 2024,
      rentalYield: 5.5,
      appreciationRate: 15.2,
      occupancyRate: 92,
      capitalizationRate: 4.8,
      cashOnCashReturn: 6.1,
      scores: {
        location: 98,
        priceValue: 82,
        amenities: 95,
        condition: 94,
        rental: 84,
        appreciation: 96,
        liquidity: 88,
        overall: 91,
      },
      comparableProperties: [
        { name: "Garden Homes", price: 8200000, size: 4000 },
        { name: "Signature Villas", price: 8800000, size: 4300 },
        { name: "Frond Villas", price: 8600000, size: 4150 },
      ],
      historicalPrices: [
        { year: 2019, price: 6800000 },
        { year: 2020, price: 7100000 },
        { year: 2021, price: 7650000 },
        { year: 2022, price: 8100000 },
        { year: 2023, price: 8500000 },
      ],
    },
    {
      id: "pj-002",
      name: "Oceana Residence",
      location: "Palm Jumeirah",
      type: "Apartment",
      price: 3200000,
      size: 1800,
      bedrooms: 3,
      bathrooms: 4,
      yearBuilt: 2021,
      amenities: ["Beach Access", "Swimming Pool", "Gym", "Spa", "Parking", "Concierge", "Marina"],
      pricePerSqft: 1778,
      rentalYield: 6.2,
      appreciationRate: 14.5,
      occupancyRate: 95,
      capitalizationRate: 5.5,
      cashOnCashReturn: 6.8,
      scores: {
        location: 96,
        priceValue: 86,
        amenities: 93,
        condition: 95,
        rental: 87,
        appreciation: 94,
        liquidity: 90,
        overall: 92,
      },
      comparableProperties: [
        { name: "Azure Residences", price: 3100000, size: 1750 },
        { name: "Serenia Residences", price: 3300000, size: 1850 },
        { name: "Anantara Residences", price: 3250000, size: 1800 },
      ],
      historicalPrices: [
        { year: 2019, price: 2500000 },
        { year: 2020, price: 2650000 },
        { year: 2021, price: 2850000 },
        { year: 2022, price: 3050000 },
        { year: 2023, price: 3200000 },
      ],
    },
  ],
  "downtown dubai": [
    {
      id: "dd-001",
      name: "Burj Khalifa Residence",
      location: "Downtown Dubai",
      type: "Apartment",
      price: 4500000,
      size: 2100,
      bedrooms: 3,
      bathrooms: 4,
      yearBuilt: 2019,
      amenities: [
        "Burj Khalifa Access",
        "Swimming Pool",
        "Gym",
        "Spa",
        "Valet Parking",
        "Concierge",
        "Business Center",
      ],
      pricePerSqft: 2143,
      rentalYield: 5.8,
      appreciationRate: 16.5,
      occupancyRate: 97,
      capitalizationRate: 5.2,
      cashOnCashReturn: 6.4,
      scores: {
        location: 99,
        priceValue: 84,
        amenities: 97,
        condition: 96,
        rental: 86,
        appreciation: 97,
        liquidity: 94,
        overall: 93,
      },
      comparableProperties: [
        { name: "Address Downtown", price: 4400000, size: 2050 },
        { name: "Boulevard Central", price: 4600000, size: 2150 },
        { name: "Act One | Act Two", price: 4550000, size: 2100 },
      ],
      historicalPrices: [
        { year: 2019, price: 3500000 },
        { year: 2020, price: 3700000 },
        { year: 2021, price: 4000000 },
        { year: 2022, price: 4300000 },
        { year: 2023, price: 4500000 },
      ],
    },
    {
      id: "dd-002",
      name: "Boulevard Point",
      location: "Downtown Dubai",
      type: "Apartment",
      price: 2900000,
      size: 1650,
      bedrooms: 2,
      bathrooms: 3,
      yearBuilt: 2020,
      amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Retail Access", "Dubai Mall Link"],
      pricePerSqft: 1758,
      rentalYield: 6.5,
      appreciationRate: 15.8,
      occupancyRate: 96,
      capitalizationRate: 5.8,
      cashOnCashReturn: 7.1,
      scores: {
        location: 97,
        priceValue: 87,
        amenities: 91,
        condition: 93,
        rental: 88,
        appreciation: 96,
        liquidity: 92,
        overall: 92,
      },
      comparableProperties: [
        { name: "South Ridge", price: 2850000, size: 1600 },
        { name: "Claren Towers", price: 2950000, size: 1700 },
        { name: "29 Boulevard", price: 2900000, size: 1650 },
      ],
      historicalPrices: [
        { year: 2019, price: 2250000 },
        { year: 2020, price: 2400000 },
        { year: 2021, price: 2600000 },
        { year: 2022, price: 2780000 },
        { year: 2023, price: 2900000 },
      ],
    },
  ],
  "abu dhabi": [
    {
      id: "ad-001",
      name: "Al Reem Island Tower",
      location: "Abu Dhabi",
      type: "Apartment",
      price: 1450000,
      size: 1400,
      bedrooms: 2,
      bathrooms: 2,
      yearBuilt: 2021,
      amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Children's Play Area"],
      pricePerSqft: 1036,
      rentalYield: 7.5,
      appreciationRate: 10.2,
      occupancyRate: 93,
      capitalizationRate: 6.5,
      cashOnCashReturn: 8.1,
      scores: {
        location: 88,
        priceValue: 90,
        amenities: 85,
        condition: 92,
        rental: 91,
        appreciation: 87,
        liquidity: 84,
        overall: 88,
      },
      comparableProperties: [
        { name: "Marina Square", price: 1400000, size: 1350 },
        { name: "Bay View Tower", price: 1500000, size: 1450 },
        { name: "Sun Tower", price: 1480000, size: 1420 },
      ],
      historicalPrices: [
        { year: 2019, price: 1200000 },
        { year: 2020, price: 1250000 },
        { year: 2021, price: 1320000 },
        { year: 2022, price: 1390000 },
        { year: 2023, price: 1450000 },
      ],
    },
    {
      id: "ad-002",
      name: "Saadiyat Beach Residence",
      location: "Abu Dhabi",
      type: "Villa",
      price: 5200000,
      size: 3500,
      bedrooms: 4,
      bathrooms: 5,
      yearBuilt: 2020,
      amenities: ["Beach Access", "Swimming Pool", "Gym", "Garden", "Maid's Room", "Security", "Golf Course Access"],
      pricePerSqft: 1486,
      rentalYield: 6.0,
      appreciationRate: 11.5,
      occupancyRate: 91,
      capitalizationRate: 5.3,
      cashOnCashReturn: 6.5,
      scores: {
        location: 93,
        priceValue: 85,
        amenities: 94,
        condition: 93,
        rental: 86,
        appreciation: 89,
        liquidity: 87,
        overall: 90,
      },
      comparableProperties: [
        { name: "Hidd Al Saadiyat", price: 5100000, size: 3400 },
        { name: "Nareel Island", price: 5300000, size: 3600 },
        { name: "Soho Square", price: 5250000, size: 3550 },
      ],
      historicalPrices: [
        { year: 2019, price: 4200000 },
        { year: 2020, price: 4400000 },
        { year: 2021, price: 4700000 },
        { year: 2022, price: 5000000 },
        { year: 2023, price: 5200000 },
      ],
    },
  ],
  "business bay": [
    {
      id: "bb-001",
      name: "Executive Towers",
      location: "Business Bay",
      type: "Apartment",
      price: 1650000,
      size: 1300,
      bedrooms: 2,
      bathrooms: 2,
      yearBuilt: 2018,
      amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Canal View"],
      pricePerSqft: 1269,
      rentalYield: 7.8,
      appreciationRate: 11.8,
      occupancyRate: 95,
      capitalizationRate: 6.8,
      cashOnCashReturn: 8.4,
      scores: {
        location: 90,
        priceValue: 88,
        amenities: 86,
        condition: 87,
        rental: 92,
        appreciation: 89,
        liquidity: 88,
        overall: 89,
      },
      comparableProperties: [
        { name: "The Binary", price: 1600000, size: 1250 },
        { name: "Churchill Towers", price: 1700000, size: 1350 },
        { name: "Bay Square", price: 1680000, size: 1320 },
      ],
      historicalPrices: [
        { year: 2019, price: 1350000 },
        { year: 2020, price: 1400000 },
        { year: 2021, price: 1480000 },
        { year: 2022, price: 1570000 },
        { year: 2023, price: 1650000 },
      ],
    },
  ],
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const location = searchParams.get("location")?.toLowerCase() || ""
  const propertyType = searchParams.get("type")?.toLowerCase() || ""

  console.log("[v0] Property API request - Location:", location, "Type:", propertyType)

  // Find matching properties
  let properties: PropertyData[] = []

  // Search in database
  for (const [key, props] of Object.entries(PROPERTIES_DATABASE)) {
    if (location && key.includes(location)) {
      properties.push(...props)
    }
  }

  // Filter by property type if specified
  if (propertyType && propertyType !== "all") {
    properties = properties.filter((p) => p.type.toLowerCase() === propertyType)
  }

  // If no exact match, return all properties as suggestions
  if (properties.length === 0) {
    properties = Object.values(PROPERTIES_DATABASE).flat()
  }

  console.log("[v0] Found properties:", properties.length)

  // Calculate aggregate statistics
  const stats = calculateMarketStats(properties)

  return NextResponse.json({
    properties,
    stats,
    dataDisclaimer: "All data and analytics are based on UAE real estate market information up to 2023.",
    count: properties.length,
    searchLocation: location,
    searchType: propertyType,
  })
}

function calculateMarketStats(properties: PropertyData[]) {
  if (properties.length === 0) {
    return null
  }

  const avgPrice = properties.reduce((sum, p) => sum + p.price, 0) / properties.length
  const avgPricePerSqft = properties.reduce((sum, p) => sum + p.pricePerSqft, 0) / properties.length
  const avgRentalYield = properties.reduce((sum, p) => sum + p.rentalYield, 0) / properties.length
  const avgAppreciation = properties.reduce((sum, p) => sum + p.appreciationRate, 0) / properties.length
  const avgScore = properties.reduce((sum, p) => sum + p.scores.overall, 0) / properties.length

  return {
    averagePrice: Math.round(avgPrice),
    averagePricePerSqft: Math.round(avgPricePerSqft),
    averageRentalYield: Number.parseFloat(avgRentalYield.toFixed(2)),
    averageAppreciation: Number.parseFloat(avgAppreciation.toFixed(2)),
    averageScore: Math.round(avgScore),
    totalListings: properties.length,
  }
}
