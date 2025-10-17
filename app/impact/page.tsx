"use client"

import { useState } from "react"
import { Instagram, Mail, Linkedin } from "lucide-react"

export default function ImpactPage() {
  const [operationType, setOperationType] = useState<"cargo" | "defence">("defence")
  const [distance, setDistance] = useState("0")
  const [payloadWeight, setPayloadWeight] = useState("0")
  const [missionType, setMissionType] = useState("ISR/Recon")
  const [carbonResults, setCarbonResults] = useState({
    co2Saved: 0,
    treesPlanted: 0,
    carsOffRoad: 0,
    traditionalEmission: 0,
    katEmission: 0,
    fuelSaved: 0,
    convoyKmAvoided: 0,
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const calculateCarbonSavings = () => {
    const value = Number.parseFloat(distance) || 0
    const weight = Number.parseFloat(payloadWeight) || 0
    let traditionalEmission = 0
    let katEmission = 0
    let fuelSaved = 0
    let convoyKmAvoided = 0

    if (operationType === "cargo") {
      // For cargo operations, calculations based on distance and weight
      const distanceKm = value
      const cargoWeight = weight
      
      // Traditional truck emissions: ~100g CO2 per ton-km
      traditionalEmission = (distanceKm * cargoWeight / 1000) * 100
      // KAT eVTOL emissions: ~20g CO2 per ton-km
      katEmission = (distanceKm * cargoWeight / 1000) * 20
      
      // Fuel savings based on average truck consumption of 35L/100km
      fuelSaved = (distanceKm * 35) / 100
      convoyKmAvoided = distanceKm
    } else {
      // For defence operations, calculations based on operation hours and equipment load
      const operationHours = value
      const equipmentLoad = weight
      
      // Traditional helicopter emissions: ~800kg CO2 per hour
      traditionalEmission = operationHours * 800
      // KAT eVTOL emissions: ~160kg CO2 per hour
      katEmission = operationHours * 160
      
      // Fuel savings based on average helicopter consumption of 160L/hour
      fuelSaved = operationHours * 160
      // For defence ops, convoy distance avoided is based on operation area coverage
      convoyKmAvoided = operationHours * 50 // Assuming 50km coverage per hour
    }

    const co2Saved = traditionalEmission - katEmission

    setCarbonResults({
      co2Saved: Math.round(co2Saved),
      treesPlanted: Math.round(co2Saved / 22), // Each tree absorbs ~22kg CO2 per year
      carsOffRoad: Math.round(co2Saved / 4600), // Average car emits 4.6 tons CO2 per year
      traditionalEmission: Math.round(traditionalEmission),
      katEmission: Math.round(katEmission),
      fuelSaved: Math.round(fuelSaved),
      convoyKmAvoided: Math.round(convoyKmAvoided)
    })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800/30">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/kat-logo-white.png" alt="KAT Logo" width={60} height={60} className="object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Home
              </a>
              <a href="/about" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                About Us
              </a>
              <a href="/technology" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Technology
              </a>
              <a href="/impact" className="text-yellow-400 font-medium px-4 py-2 rounded-lg border border-yellow-400/30 bg-yellow-400/5">
                Impact
              </a>
              <a href="/career" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Career
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              <a href="https://www.instagram.com/khageshvara/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              </a>
              <a href="mailto:khageshvaramobility@gmail.com">
                <Mail className="w-5 h-5 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/company/khageshvara-aviation-technology-pvt-ltd-k-a-t/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-all duration-300 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-64 opacity-100 mt-4"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4 bg-black/50 backdrop-blur-sm rounded-lg px-4">
              <a
                href="/"
                className="text-white hover:text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                About Us
              </a>
              <a
                href="/technology"
                className="text-white hover:text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                Technology
              </a>
              <a
                href="/impact"
                className="text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                Impact
              </a>
              <a
                href="/career"
                className="text-white hover:text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                Career
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 break-words">
              ENVIRONMENTAL <span className="text-yellow-400">IMPACT</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Calculate the positive environmental impact of switching to KAT's sustainable eVTOL solutions
            </p>
          </div>
        </div>
      </section>

      {/* Carbon Savings Calculator Section */}
      <section id="carbon-calculator" className="py-16 relative bg-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3 font-sans">
              <span className="text-white">CARBON SAVINGS</span>
              <br />
              <span className="text-yellow-500">CALCULATOR</span>
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto font-sans">
              Discover how much carbon footprint you can save by switching to KAT's eVTOL
            </p>
          </div>

          {/* Calculator Interface */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Left Panel - Calculator Form */}
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-white text-lg font-semibold mb-4">Mission Parameters</h3>
              <div className="space-y-4">
                {/* Operation Type Toggle */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Operation Type</label>
                  <div className="flex bg-slate-600/50 rounded-lg p-1">
                    <button
                      onClick={() => setOperationType("defence")}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                        operationType === "defence"
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Defence
                    </button>
                    <button
                      onClick={() => setOperationType("cargo")}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-300 ${
                        operationType === "cargo"
                          ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Cargo
                    </button>
                  </div>
                </div>

                {operationType === "cargo" ? (
                  <>
                    {/* Distance Input */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Distance</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={distance}
                          onChange={(e) => setDistance(e.target.value)}
                          className="w-full bg-slate-600/50 text-white rounded-lg py-2 px-3 pr-10 border border-slate-500/50 focus:border-yellow-400 focus:outline-none text-sm"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          km
                        </span>
                      </div>
                    </div>

                    {/* Payload Weight Input */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Cargo Weight</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={payloadWeight}
                          onChange={(e) => setPayloadWeight(e.target.value)}
                          className="w-full bg-slate-600/50 text-white rounded-lg py-2 px-3 pr-10 border border-slate-500/50 focus:border-yellow-400 focus:outline-none text-sm"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          kg
                        </span>
                      </div>
                    </div>

                    {/* Cargo Type */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Cargo Type</label>
                      <select
                        value={missionType}
                        onChange={(e) => setMissionType(e.target.value)}
                        className="w-full bg-slate-600/50 text-white rounded-lg py-2 px-3 border border-slate-500/50 focus:border-yellow-400 focus:outline-none text-sm"
                      >
                        <option value="General">General Cargo</option>
                        <option value="Medical">Medical Supplies</option>
                        <option value="Perishable">Perishable Goods</option>
                        <option value="Emergency">Emergency Supplies</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Mission Type Dropdown */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Mission Type</label>
                      <select
                        value={missionType}
                        onChange={(e) => setMissionType(e.target.value)}
                        className="w-full bg-slate-600/50 text-white rounded-lg py-2 px-3 border border-slate-500/50 focus:border-yellow-400 focus:outline-none text-sm"
                      >
                        <option value="ISR/Recon">ISR/Recon</option>
                        <option value="Forward Resupply">Forward Resupply</option>
                        <option value="CASEVAC/MEDEVAC">CASEVAC/MEDEVAC</option>
                        <option value="SAR">Search & Rescue</option>
                        <option value="Border Patrol">Border Patrol</option>
                      </select>
                    </div>

                    {/* Operation Duration */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Operation Duration</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={distance}
                          onChange={(e) => setDistance(e.target.value)}
                          className="w-full bg-slate-600/50 text-white rounded-lg py-2 px-3 pr-12 border border-slate-500/50 focus:border-yellow-400 focus:outline-none text-sm"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          hours
                        </span>
                      </div>
                    </div>

                    {/* Equipment Load */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Equipment Load</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={payloadWeight}
                          onChange={(e) => setPayloadWeight(e.target.value)}
                          className="w-full bg-slate-600/50 text-white rounded-lg py-2 px-3 pr-10 border border-slate-500/50 focus:border-yellow-400 focus:outline-none text-sm"
                          placeholder="0"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                          kg
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Calculate Button */}
                <button
                  onClick={calculateCarbonSavings}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg py-3 px-4 font-bold text-base hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Calculate Environmental Impact
                </button>
              </div>
            </div>

            {/* Right Panel - Results Display */}
            <div className="space-y-4">
              {/* Main CO2 Result */}
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
                <h3 className="text-white text-lg font-semibold mb-3">Carbon Impact Results</h3>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-500 mb-2">{carbonResults.co2Saved} kg</div>
                  <div className="text-gray-400 text-base">CO₂ Emissions Reduced</div>
                </div>
              </div>

              {/* Secondary Metrics */}
              {operationType === "cargo" ? (
                // Cargo Operation Metrics
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 text-center">
                    <div className="text-lg font-bold text-yellow-500 mb-1">{carbonResults.fuelSaved} L</div>
                    <div className="text-gray-400 text-xs">Truck Fuel Saved</div>
                  </div>
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 text-center">
                    <div className="text-lg font-bold text-yellow-500 mb-1">{carbonResults.convoyKmAvoided}</div>
                    <div className="text-gray-400 text-xs">Road km Reduced</div>
                  </div>
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 text-center">
                    <div className="text-lg font-bold text-yellow-500 mb-1">{carbonResults.treesPlanted}</div>
                    <div className="text-gray-400 text-xs">Trees Equivalent</div>
                  </div>
                </div>
              ) : (
                // Defence Operation Metrics
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 text-center">
                    <div className="text-lg font-bold text-yellow-500 mb-1">{carbonResults.fuelSaved} L</div>
                    <div className="text-gray-400 text-xs">Helicopter Fuel Saved</div>
                  </div>
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 text-center">
                    <div className="text-lg font-bold text-yellow-500 mb-1">{carbonResults.convoyKmAvoided}</div>
                    <div className="text-gray-400 text-xs">Area Coverage (km)</div>
                  </div>
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600/50 text-center">
                    <div className="text-lg font-bold text-yellow-500 mb-1">{carbonResults.traditionalEmission > 0 ? Math.round((1 - carbonResults.katEmission / carbonResults.traditionalEmission) * 100) : 0}%</div>
                    <div className="text-gray-400 text-xs">Efficiency Gain</div>
                  </div>
                </div>
              )}

              {/* Emission Comparison */}
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-5 border border-slate-600/50">
                <h4 className="text-white text-base font-semibold mb-3 text-center">Emission Comparison</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-red-900/20 rounded-lg">
                    <span className="text-gray-300 text-sm">
                      {operationType === "cargo" ? "Traditional Truck:" : "Traditional Helicopter:"}
                    </span>
                    <span className="text-red-400 font-bold text-sm">{carbonResults.traditionalEmission} kg CO₂</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-900/20 rounded-lg">
                    <span className="text-gray-300 text-sm">KAT eVTOL:</span>
                    <span className="text-green-400 font-bold text-sm">{carbonResults.katEmission} kg CO₂</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-600/50">
                    <div className="flex justify-between items-center p-2 bg-yellow-900/20 rounded-lg">
                      <span className="text-gray-300 font-medium text-sm">Carbon Reduction:</span>
                      <span className="text-yellow-400 font-bold text-base">
                        {carbonResults.traditionalEmission > 0 ? Math.round((1 - carbonResults.katEmission / carbonResults.traditionalEmission) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/images/kat-logo-white.png"
                  alt="KAT Logo"
                  width={96}
                  height={96}
                  className="object-contain mb-2"
                />
                <span className="text-yellow-400 text-lg font-bold">K.A.T</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm">30, Green Avenue, Khatipura Road, Jharkhand</p>
                  <p className="text-white text-sm">Mod, Jaipur, 302012, Rajasthan.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-yellow-400 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <p className="text-white text-sm">+91 89529 43460</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a
                  href="mailto:khageshvaramobility@gmail.com"
                  className="text-white text-sm hover:text-yellow-400 transition-colors"
                >
                  khageshvaramobility@gmail.com
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-3">
              <a href="/about" className="text-white hover:text-yellow-400 transition-colors text-sm">
                About Us
              </a>
              <a href="/technology" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Technology
              </a>
              <a href="/impact" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Impact
              </a>
              <a href="/career" className="text-white hover:text-yellow-400 transition-colors text-sm">
                Careers
              </a>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/company/khageshvara-aviation-technology-pvt-ltd-k-a-t/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/khageshvara/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-xs">
              © 2025 Khageshvara Aviation Technology private limited, all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}