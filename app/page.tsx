"use client"

// Aircraft use case and TRL data
const aircraftUseCases = [
  {
    id: 'k-vaayu',
    name: 'K-Vaayu',
    trl: 'TRL-5 (Prototype validated in relevant environment)',
    useCases: [
      'Point-to-point micro-logistics (5–10 kg): spares, samples, e-commerce/pharma.',
      'Emergency medical: blood, vaccines, antivenom, AED kits to PHCs/CHCs.',
      'Disaster relief: rapid drops to flood/landslide zones when roads are cut off.',
      'Industrial campus ops: inter-plant parts movement at ports, refineries, mines.',
      'Inspection & mapping: crop scouting, perimeter/roof/line inspections, photogrammetry.'
    ]
  },
  {
    id: 'k-rudra',
    name: 'K-Rudra',
    trl: 'TRL-4 (Subsystems validated; sub-scale flight tests)',
    useCases: [
      'Medium/heavy logistics (50–100 kg): defense resupply, remote site provisioning.',
      'HADR missions: food/water/medicine lift to isolated communities.',
      'Security & ISR: persistent EO/IR patrols for border/coastal surveillance.',
      'Infrastructure survey: rail/power/tower corridors, long-range LiDAR mapping (BVLOS).',
      'Medevac concepts: stabilized casualty/organ-transport pods on designated corridors.'
    ]
  },
  {
    id: 'k-ospera',
    name: 'K-Ospera',
    trl: 'TRL-2 (Concept; 400 kg payload class)',
    useCases: [
      'Heavy logistics: 200–400 kg pallets (MRO spares, turbines, batteries) plant↔port↔warehouse.',
      'Defense resupply: ammo, rations, water, field gensets to forward posts; convoy-risk reduction.',
      'Medevac/CASEVAC: single-stretcher (+ attendant/equipment) or dual-litter pods; cold-chain organs.',
      'Disaster/HADR airlift: shelters, telecom kits, water purifiers, portable bridges to cut-off areas.',
      'Offshore & energy ops: last-mile to rigs/ships, coast-guard replenishment, heavy spares to remote substations.'
    ]
  }
];

// Modal state for aircraft use cases will be inside the component
import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, Instagram, Mail, Linkedin, Calculator } from "lucide-react"

export default function HomePage() {
  // Modal state for aircraft use cases
  const [openUseCase, setOpenUseCase] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0)
  const [currentView, setCurrentView] = useState<"mission" | "vision">("mission")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [aircraftPosition, setAircraftPosition] = useState(1) // Start with mission position (right)
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
  const heroRef = useRef<HTMLElement>(null)
  const missionVisionRef = useRef<HTMLElement>(null)
  const [activeUseCase, setActiveUseCase] = useState<string | null>("ambulance")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleViewSwitch = (view: "mission" | "vision") => {
    if (view === currentView || isTransitioning) return

    setIsTransitioning(true)
    setCurrentView(view)

    if (view === "mission") {
      setAircraftPosition(1) // Move RIGHT when MISSION is visible
    } else {
      setAircraftPosition(-1) // Move LEFT when VISION is visible
    }

    // Reset transition state after animation completes (increased duration)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 3000) // Slower cinematic timing
  }

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800/30">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/images/kat-logo-white.png" alt="KAT Logo" width={60} height={60} className="object-contain" />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-yellow-400 font-medium px-4 py-2 rounded-lg border border-yellow-400/30 bg-yellow-400/5">
                Home
              </a>
              <a href="/about" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                About Us
              </a>
              <a href="/technology" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Technology
              </a>
              <a href="/impact" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Impact
              </a>
              <a href="/career" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Career
              </a>
            </div>
            {/* Social Icons */}
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
            <div className="flex flex-col space-y-4 py-4">
              <a
                href="/"
                className="text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
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
                className="text-white hover:text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
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
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-[400px] md:min-h-[600px] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
      >


        {/* Video Background */}
        <div className="absolute inset-0 z-10">
          <video
            className="w-full h-[300px] md:h-[500px] lg:h-full object-contain md:object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/next gen mobility website video.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for better text visibility on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        </div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-8 h-8 text-yellow-400" onClick={() => scrollToSection('mission-vision')} style={{ cursor: 'pointer' }} />
        </div>

      </section>

      {/* Mission & Vision Section - Interactive Sliding Panels */}
      <section
        ref={missionVisionRef}
        id="mission-vision"
        className="relative min-h-screen items-center justify-center overflow-hidden bg-black cursor-pointer hidden lg:flex"
        onClick={() => {
          if (!isTransitioning) {
            if (currentView === "mission") {
              handleViewSwitch("vision")
            } else {
              handleViewSwitch("mission")
            }
          }
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                     linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
                   `,
                backgroundSize: "100px 100px",
              }}
            ></div>
          </div>

          {/* Ambient Lighting */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>

          {/* Cinematic Glow Effects - Reduced */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/2 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/2 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        {/* Interactive Layout Container */}
        <div className="relative w-full h-screen flex items-center justify-center">
          {/* Left Panel - Mission */}
          <div
            className={`absolute left-0 top-0 h-full transition-all duration-3000 ease-out z-10`}
            style={{
              width:
                currentView === "mission" && aircraftPosition === 1 ? "50%" : currentView === "vision" ? "0%" : "20%",
              opacity: currentView === "mission" && aircraftPosition === 1 ? 1 : currentView === "vision" ? 0 : 0.6,
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.65) 100%)",
              clipPath:
                currentView === "mission" && aircraftPosition === 1
                  ? "polygon(0 0, 100% 0, 80% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transform: currentView === "mission" && aircraftPosition === 1 ? "translateX(0)" : "translateX(-10%)",
            }}
          >
            <div className="h-full flex items-center justify-center px-8">
              <div className="max-w-lg">
                <div className="mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"></div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-none font-sans text-yellow-400 drop-shadow-lg">
                    OUR MISSION
                  </h2>
                </div>

                <div className="relative">
                  <div className="bg-black rounded-2xl p-6 border border-yellow-400/30 shadow-2xl">
                    <p className="text-white text-base md:text-lg leading-relaxed font-light font-sans">
                      To redefine the future of transportation with next-gen, safe, fast, and sustainable
                      mobility solutions. Our commitment is encapsulated in our ethos:{" "}
                      <span className="text-yellow-300 font-semibold bg-yellow-400/10 px-2 py-1 rounded border border-yellow-400/50">
                        'Reaching the Unreachable,'
                      </span>{" "}
                      as we strive to access remote areas and serve underserved communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-transparent opacity-50"></div>
          </div>

          {/* Right Panel - Vision */}
          <div
            className={`absolute right-0 top-0 h-full transition-all duration-3000 ease-out z-10`}
            style={{
              width:
                currentView === "vision" && aircraftPosition === -1 ? "50%" : currentView === "mission" ? "0%" : "20%",
              opacity: currentView === "vision" && aircraftPosition === -1 ? 1 : currentView === "mission" ? 0 : 0.6,
              background: "linear-gradient(225deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
              clipPath:
                currentView === "vision" && aircraftPosition === -1
                  ? "polygon(20% 0, 100% 0, 100% 100%, 0 100%)"
                  : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transform: currentView === "vision" && aircraftPosition === -1 ? "translateX(0)" : "translateX(10%)",
            }}
          >
            <div className="h-full flex items-center justify-center px-8">
              <div className="max-w-lg">
                <div className="mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mb-4"></div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-none font-sans text-blue-400 drop-shadow-lg">
                    OUR VISION
                  </h2>
                </div>

                <div className="relative">
                  <div className="bg-black rounded-2xl p-6 border border-blue-400/30 shadow-2xl">
                    <p className="text-white text-base md:text-lg leading-relaxed font-light font-sans">
                      To lead an eVTOL ecosystem transformation, turning skies into eco-friendly highways,
                      cutting aviation carbon emissions, and fostering sustainable growth:{" "}
                      <span className="text-blue-300 font-semibold bg-blue-400/10 px-2 py-1 rounded border border-blue-400/50 whitespace-nowrap inline-block">'the forefront of next-gen mobility'.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-400/10 via-transparent to-transparent opacity-50"></div>
          </div>


          {/* Central eVTOL Aircraft with Enhanced Movement + Usecase Buttons */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-3000 ease-out z-20 flex flex-col items-center"
            style={{
              top: "50%",
              transform: `translate(${aircraftPosition === -1 ? "-25%" : aircraftPosition === 1 ? "75%" : "50%"}, -50%) 
              rotateY(${aircraftPosition === -1 ? "15deg" : aircraftPosition === 1 ? "-15deg" : "0deg"}) 
              rotateZ(${aircraftPosition === -1 ? "5deg" : aircraftPosition === 1 ? "-5deg" : "0deg"})
              translateZ(${aircraftPosition !== 0 ? "30px" : "0px"})`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Enhanced Glow Effects - Reduced opacity */}
            <div
              className="absolute inset-0 blur-3xl scale-150 animate-pulse transition-all duration-3000"
              style={{
                background:
                  aircraftPosition === -1
                    ? "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, rgba(96, 165, 250, 0.03) 50%, transparent 100%)"
                    : aircraftPosition === 1
                      ? "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, rgba(255, 215, 0, 0.03) 50%, transparent 100%)"
                      : "radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 215, 0, 0.05) 100%)",
              }}
            ></div>

            <div className="absolute inset-0 bg-yellow-400/5 blur-2xl scale-125 animate-pulse delay-500"></div>

            {/* 3D eVTOL Aircraft with Parallax */}
            <div className="relative z-10 group">
              <img
                src="/images/k50-evtol.png"
                alt="Interactive K50 eVTOL Aircraft"
                width={400}
                height={300}
                className="object-contain filter brightness-110 drop-shadow-2xl transition-all duration-3000 ease-out"
                style={{
                  filter: `brightness(1.2) contrast(1.1) drop-shadow(0 20px 40px ${
                    aircraftPosition === -1
                      ? "rgba(96, 165, 250, 0.4)"
                      : aircraftPosition === 1
                        ? "rgba(255, 215, 0, 0.4)"
                        : "rgba(255, 215, 0, 0.3)"
                  })`,
                  transform: `scale(${aircraftPosition !== 0 ? "1.1" : "1"}) 
                             translateY(${aircraftPosition !== 0 ? "-10px" : "0px"})`,
                }}
              />

              {/* Motion Blur Effect */}
              <div
                className={`absolute inset-0 transition-all duration-3000 ease-out ${
                  isTransitioning ? "opacity-30" : "opacity-0"
                }`}
                style={{
                  background:
                    aircraftPosition === -1
                      ? "linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.3) 50%, transparent 100%)"
                      : "linear-gradient(270deg, transparent 0%, rgba(255, 215, 0, 0.3) 50%, transparent 100%)",
                  filter: "blur(8px)",
                }}
              ></div>
            </div>

            {/* Dynamic Glowing Trail - Hidden/Minimal */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-y-1/2 h-1 transition-all duration-3000 ease-out opacity-0"
              style={{
                width: aircraftPosition !== 0 ? "20px" : "10px",
                background: "transparent",
                transform: "translateX(-50%)",
                borderRadius: "50px",
              }}
            ></div>
          </div>

          {/* Usecase Modal */}
          {openUseCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full border-2 border-yellow-500 relative">
                <button
                  className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-200 text-2xl font-bold"
                  onClick={() => setOpenUseCase(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                {(() => {
                  const ac = aircraftUseCases.find(a => a.id === openUseCase);
                  if (!ac) return null;
                  return (
                    <>
                      <h2 className="text-2xl font-bold text-yellow-400 mb-2">{ac.name} <span className="text-gray-400 text-base font-normal">— {ac.trl}</span></h2>
                      <ol className="list-decimal pl-5 text-gray-200 space-y-2">
                        {ac.useCases.map((uc, idx) => (
                          <li key={idx}>{uc}</li>
                        ))}
                      </ol>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-8 z-30">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleViewSwitch("mission")
              }}
              disabled={isTransitioning}
              className={`group relative p-4 rounded-full font-bold transition-all duration-500 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                currentView === "mission"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-400/50"
                  : "bg-gray-800/50 text-gray-300 hover:bg-yellow-400/20 hover:text-yellow-400"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 backdrop-blur-sm rounded px-3 py-1 border border-yellow-400/50">
                  <p className="text-yellow-400 text-xs font-medium whitespace-nowrap">Our Mission</p>
                </div>
              </div>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleViewSwitch("vision")
              }}
              disabled={isTransitioning}
              className={`group relative p-4 rounded-full font-bold transition-all duration-500 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                currentView === "vision"
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-400/50"
                  : "bg-gray-800/50 text-gray-300 hover:bg-blue-400/20 hover:text-blue-400"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 backdrop-blur-sm rounded px-3 py-1 border border-blue-400/50">
                  <p className="text-blue-400 text-xs font-medium whitespace-nowrap">Our Vision</p>
                </div>
              </div>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex items-center space-x-4">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-3000 ${
                  currentView === "mission" ? "bg-yellow-400 shadow-lg shadow-yellow-400/50 scale-125" : "bg-gray-600"
                }`}
              ></div>
              <div className="w-8 h-px bg-gray-600"></div>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-3000 ${
                  currentView === "vision" ? "bg-blue-400 shadow-lg shadow-blue-400/50 scale-125" : "bg-gray-600"
                }`}
              ></div>
            </div>
          </div>

          {/* Click Hint */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/50">
              <p className="text-gray-400 text-sm font-medium">Click anywhere to switch • Use arrows for precision</p>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      </section>

      {/* Mission & Vision Section - Mobile Layout */}
      <section className="lg:hidden bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 text-center mb-4">OUR MISSION</h2>
            <p className="text-gray-300 text-center leading-relaxed">
              To redefine the future of transportation with next-gen, safe, fast, and sustainable mobility
              solutions. Our commitment is encapsulated in our ethos: <span className="text-yellow-300 font-semibold">'Reaching the Unreachable'</span>, as we strive to access remote areas and serve underserved communities.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-400 text-center mb-4">OUR VISION</h2>
            <p className="text-gray-300 text-center leading-relaxed">
              To lead an eVTOL ecosystem transformation, turning skies into eco-friendly highways, cutting
              aviation carbon emissions, and fostering sustainable growth: <span className="text-blue-300 font-semibold">'the forefront of next-gen mobility'</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-12 relative bg-black min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-sans">
              <span className="text-white">USE </span>
              <span className="text-yellow-500">CASES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto font-sans">
              Discover how KAT's eVTOL Technology transforms various industries
            </p>
          </div>

          {/* Use Case Layout - Buttons Left, Image Right */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Use Case Buttons - Vertical on Left */}
              <div className="flex flex-col gap-4 w-full lg:w-auto">
                {[
                  { id: "ambulance", label: "Medevac" },
                  { id: "defence", label: "Border Defence" },
                  { id: "cargo", label: "Cargo" },
                  { id: "flood", label: "Flood Relief" },
                ].map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setActiveUseCase(useCase.id)}
                    className={`px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-left whitespace-nowrap ${
                      activeUseCase === useCase.id 
                        ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/30" 
                        : "bg-gray-800 text-white hover:bg-gray-700 hover:border-yellow-400/30 border border-transparent"
                    }`}
                  >
                    {useCase.label}
                  </button>
                ))}
              </div>

              {/* Use Case Display - Right Side (40-45% width) */}
              <div className="w-full lg:w-[45%] flex items-center justify-center">
                {activeUseCase && (
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 animate-fade-in w-full">
                    <img
                      src={`/images/use-cases/${activeUseCase}.png`}
                      alt={`${activeUseCase} use case`}
                      className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India's Flight Revolution Section */}
  <section className="py-20 relative bg-[#121b24]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10" style={{ marginBottom: '2rem' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-sans leading-tight md:leading-none">
              <span className="text-white block md:inline">INDIA'S FLIGHT</span>
              <span className="text-yellow-500 block md:inline"> REVOLUTION</span>
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full" style={{ maxWidth: '1700px' }}>
              <video
                className="w-full h-auto object-contain rounded-xl"
                style={{ maxHeight: 'calc(100vh - 200px)' }}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/Dark theme website video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Supported by Section */}
      <section id="supported-by" className="py-20 relative bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 font-sans">
              <span className="text-white">SUPPORTED </span>
              <span className="text-yellow-500">BY</span>
            </h2>
            <p className="text-gray-400 text-lg mt-6">
              Backed by leading institutions, universities, and government initiatives
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { src: "/images/support-logos/bits-pilani.png", alt: "BITS Pilani" },
                { src: "/images/support-logos/pieds.png", alt: "PIEDS" },
                { src: "/images/support-logos/yspace.png", alt: "ySpace" },
                { src: "/images/support-logos/dlabs.png", alt: "dlabs" },
                { src: "/images/support-logos/iiml.png", alt: "IIML" },
                { src: "/images/support-logos/oxford.png", alt: "Oxford" },
                { src: "/images/support-logos/octane.png", alt: "OCTANE" },
                { src: "/images/support-logos/srix.png", alt: "SRIX" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[120px]"
                >
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="max-h-48 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-500 text-center mb-8">GRANTS PROVIDED BY</h3>
            <div className="flex flex-col items-center">
              {/* First row - 3 logos */}
              <div className="grid grid-cols-3 w-full">
                {[
                  { src: "/images/grant-logos/placeholder.png", alt: "Grant Logo 1" },
                  { src: "/images/grant-logos/nidhi-prayas.png", alt: "NIDHI PRAYAS" },
                  { src: "/images/grant-logos/startupindia.png", alt: "Startup India" },
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="group hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[120px]"
                  >
                    <img
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      className="max-h-48 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                    />
                  </div>
                ))}
              </div>

              {/* Second row - 2 logos */}
              <div className="grid grid-cols-2 w-full max-w-2xl">
                {[
                  { src: "/images/grant-logos/meity-startup-hub.png", alt: "MeitY Startup Hub" },
                  { src: "/images/grant-logos/teal-swoosh.png", alt: "Grant Logo 5" },
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="group hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[120px]"
                  >
                    <img
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      className="max-h-48 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]"
                    />
                  </div>
                ))}
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
