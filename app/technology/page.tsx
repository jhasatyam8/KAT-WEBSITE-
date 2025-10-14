"use client"

// Use case and TRL info for each aircraft
const aircraftUseCases = {
  "K-VAAYU": {
    trl: "TRL-5 (Prototype validated in relevant environment)",
    useCases: [
      "Point-to-point micro-logistics (5–10 kg): spares, samples, e-commerce/pharma.",
      "Emergency medical: blood, vaccines, antivenom, AED kits to PHCs/CHCs.",
      "Disaster relief: rapid drops to flood/landslide zones when roads are cut off.",
      "Industrial campus ops: inter-plant parts movement at ports, refineries, mines.",
      "Inspection & mapping: crop scouting, perimeter/roof/line inspections, photogrammetry."
    ]
  },
  "K-RUDRA": {
    trl: "TRL-4 (Subsystems validated; sub-scale flight tests)",
    useCases: [
      "Medium/heavy logistics (50–100 kg): defense resupply, remote site provisioning.",
      "HADR missions: food/water/medicine lift to isolated communities.",
      "Security & ISR: persistent EO/IR patrols for border/coastal surveillance.",
      "Infrastructure survey: rail/power/tower corridors, long-range LiDAR mapping (BVLOS).",
      "Medevac concepts: stabilized casualty/organ-transport pods on designated corridors."
    ]
  },
  "K-OSPERA": {
    trl: "TRL-2 (Concept; 400 kg payload class)",
    useCases: [
      "Heavy logistics: 200–400 kg pallets (MRO spares, turbines, batteries) plant↔port↔warehouse.",
      "Defense resupply: ammo, rations, water, field gensets to forward posts; convoy-risk reduction.",
      "Medevac/CASEVAC: single-stretcher (+ attendant/equipment) or dual-litter pods; cold-chain organs.",
      "Disaster/HADR airlift: shelters, telecom kits, water purifiers, portable bridges to cut-off areas.",
      "Offshore & energy ops: last-mile to rigs/ships, coast-guard replenishment, heavy spares to remote substations."
    ]
  }
};

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Instagram, Mail, Linkedin, X } from "lucide-react"
import Image from "next/image"

const aircraftData = {
  "K-OSPERA": {
    payload: "Up to 400kg",
    range: "200+ Km",
    endurance: "180+ Min",
    speed: "250 Kmph",
    altitude: "0-10,000 m AMSL",
    image: "/k-200.png",
  },
  "K-RUDRA": {
    payload: "Up to 100kg",
    range: "100+ Km",
    endurance: "120+ Min",
    speed: "120 Kmph",
    altitude: "0-5,000 m AMSL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k-50-0Mr3Mwrj8qen60wDQ7QpZeB3yePp6t.png",
  },
  "K-VAAYU": {
    payload: "Up to 10kg",
    range: "20+ Km",
    endurance: "45+ Min",
    speed: "70 Kmph",
    altitude: "0-2,500 m AMSL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k-5-FeueTyzB4Jamo0YPg9qSpzmyf9xcoH.png",
  },
}

const technologies = [
  {
    number: "01",
    title: "Tilt Rotor System",
    subtitle: "Switch. Snap. Send It",
    description: "Advanced tilt-rotor technology enabling efficient E-VTOL operations with enhanced thrust and power optimization.",
    features: [
      "Provides True vertical takeoff/landing for 5–400 kg class eVTOLs",
      "Combines with Variable-pitch props delivering 20% more thrust at 18% less power",
      "Agile loiter and rapid transition between hover and cruise mode",
      "All-weather operation with redundant actuator systems"
    ],
    image: "/tilt-rotor.png",
    imageSize: 600,
    transform: "rotate(-90deg)", // This rotates the image anticlockwise 90 degrees
    readMore:
      "The tilt rotor system integrates variable-pitch technology with precision actuators, enabling true VTOL capabilities across a broad 5–400 kg payload range. This design supports agile transition between hover and forward flight, essential for diverse operational profiles such as logistics, surveillance, or emergency response. With 20% thrust gain at 18% reduced power, this system significantly enhances flight performance and energy efficiency. Its redundancy features and tolerance to wind shear and turbulence ensure resilience in all-weather and high-demand environments, making it ideal for both civilian and defense-grade missions.",
  },
  {
    number: "02",
    title: "Coaxial Propulsion",
    subtitle: "Beast Mode Activated",
    description: "High-performance single axis coaxial rotor configuration delivering superior lift stability, range, and mission redundancy.",
    features: [
      "Counter-rotating rotors for ultra-stable lift and maneuverability",
      "25% greater range efficiency versus single-rotor layouts",
      "Compact footprint enabling ship-deck and ship-borne launch",
      "Auto-rotation redundancy for enhanced safety and mission reliability"
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/co-axial-6kjGtwyuxxYqYkFG8kh0J5kJi4vmIs.png",
    imageSize: 600,
    readMore:
      "Single-axis coaxial propulsion leverages counter-rotating rotor pairs to deliver superior lift efficiency and in-flight stability, even in adverse conditions. This configuration minimizes yaw torque, allowing smoother control and enhanced safety during critical flight operations. Compared to traditional single-rotor layouts, it achieves up to 25% greater range while maintaining a compact form factor—ideal for naval or confined-space deployments. Additionally, its ability to autorotate in case of emergency adds a crucial layer of safety, significantly increasing mission reliability in both autonomous and piloted scenarios.",
  },
  {
    number: "03",
    title: "Modular Payload Architecture",
    subtitle: "Switch. Snap. Send It",
    description: "Flexible multi-role payload system with rapid reconfiguration for dynamic mission requirements.",
    features: [
      "Snap-in pods for cargo, medical, ISR, or loiter-munition roles",
      "Rapid reconfiguration (<10 min) for multi-sortie workflows",
      "Universal mounting interface across K-Series platforms",
      "Sealed, all-weather enclosures with quick-release locks"
    ],
    image: "/modular-payload.png",
    imageSize: 350,
    readMore:
      "The modular payload architecture adopts a universal, snap-in design philosophy, minimizing downtime between missions and maximizing operational breadth. From ISR and cargo delivery to medical evacuation and loiter-munition deployment, this system accommodates multiple mission profiles with seamless reconfiguration under 10 minutes. Each payload pod integrates environmental protection and quick-release locking, ensuring operational durability and convenience. This approach reduces overall lifecycle and upgrade costs, while maintaining platform interoperability across the K-Series aircraft family, enabling operators to run high-tempo sortie cycles with minimal logistical overhead.",
  },
  {
    number: "04",
    title: "Electric & Hybrid Energy Systems",
    subtitle: "Juiced Up & Ready",
    description: "Scalable propulsion architecture supporting fast energy turnaround and next-gen hybrid compatibility.",
    features: [
      "Hot-swap battery and hybrid modules with <5 min turnaround",
      "High-energy-density packs designed for 50–400 kg payloads",
      "100% electric operation with plug-and-play generator compatibility",
      "Future-proof architecture supporting next-gen hybrid energy systems"
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electric-power-XkvzMPmnREFlFOqPqja2yPhySOkuOo.png",
    imageSize: 500,
    readMore:
      "Engineered for next-generation aviation, the energy architecture combines swappable high-density battery packs with plug-and-play hybrid generator modules. This flexibility supports rapid mid-mission recharging or hybrid energy supply for long endurance sorties, suitable across the 5–400 kg payload spectrum. A future-ready design allows for seamless integration of evolving propulsion technologies, ensuring long-term sustainability and compatibility. The system's electric-first operation not only reduces emissions but also simplifies ground logistics, offering mission planners fast deployment cycles and lower operational cost without compromising flight performance.",
  },
  {
    number: "05",
    title: "FleetOS Command & Control",
    subtitle: "Brain of the Beast",
    description: "AI-driven C2 ecosystem offering real-time monitoring, predictive maintenance, and secured multi-aircraft control.",
    features: [
      "Live telemetry and health monitoring across multi-aircraft fleets",
      "AI-driven flight path optimization in GNSS-challenged zones",
      "Predictive maintenance alerts via digital twin analytics",
      "Secure, over-the-air updates and encrypted C2 channels"
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fleet-os-XYF6mv2wcgYOK1H88TtbaO6g3goyv1.png",
    imageSize: 500,
    readMore:
      "FleetOS is a scalable command-and-control suite built for intelligent, multi-UAV operations. Designed around real-time telemetry, health diagnostics, and AI-based path planning, it ensures consistent performance in GNSS-denied or high-interference areas. Predictive maintenance features, powered by digital twin analytics, help preempt component failure and reduce downtime. Encrypted communication channels and continuous over-the-air updates guarantee system security and resilience. Whether managing a single aircraft or coordinating swarm operations, FleetOS brings actionable insights and autonomous decision-making capabilities, significantly elevating both safety and mission efficiency.",
  },
  {
    number: "06",
    title: "India-Optimized Design",
    subtitle: "Unstoppable. Unshakable.",
    description: "Indigenously engineered platform tailored for Indian terrain, weather, and regulatory compliance.",
    features: [
      "Tailored to diverse Indian terrains, climates, and altitudes",
      "74%+ local component sourcing under \"Make in India\" norms",
      "DGCA & UDAN-compliant design, tested in monsoon, desert, mountain",
      "Dust, heat, and humidity resilient composites and electronics"
    ],
    image: "/made-for-india.png",
    imageSize: 500,
    readMore:
      "This aerial platform is purpose-built for India's operational envelope, addressing high-altitude, desert, coastal, and monsoon conditions. Engineered with hardened avionics, sealed electronics, and thermally stable composites, it remains mission-ready in extreme heat, dust, and humidity. Over 74% of components are sourced from Indian manufacturers, aligning with \"Make in India\" goals while reducing import dependencies. The design also complies with DGCA and UDAN standards, streamlining regulatory approval processes. Its adaptability to India's geographic diversity makes it an ideal choice for both commercial and defense sectors operating in the subcontinent.",
  },
]

export default function TechnologyPage() {
  const [selectedAircraft, setSelectedAircraft] = useState("K-OSPERA")
  const [isVisible, setIsVisible] = useState({})
  const [expandedTech, setExpandedTech] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Modal state for aircraft use cases
  const [openUseCase, setOpenUseCase] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleReadMore = (techNumber: string) => {
    setExpandedTech(expandedTech === techNumber ? null : techNumber)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

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
              <a href="/technology" className="text-yellow-400 font-medium px-4 py-2 rounded-lg border border-yellow-400/30 bg-yellow-400/5">
                Technology
              </a>
              <a href="/impact" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
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
            <div className="flex flex-col space-y-4 py-4">
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
                className="text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
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
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-yellow-400/20 rotate-12 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-400/20 rotate-45 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p className="text-gray-400 text-lg mb-4 animate-fade-in">Powering the Future of Air Mobility in India</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
            TECHNOLOGY BEHIND <br />
            THIS{" "}
            <span className="text-yellow-400 relative">
              REVOLUTION
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 animate-pulse"></div>
            </span>
          </h1>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Join us as we reshape air mobility for cities, terrains, and industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <Button
              onClick={() => scrollToSection("aircraft")}
              className="bg-white text-black hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              Discover Our Aircraft
            </Button>
            <Button
              onClick={() => scrollToSection("technology")}
              className="bg-white text-black hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 rounded-xl"
            >
              Our Technology
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>
      </section>

      {/* Aircraft Section */}
      <section id="aircraft" className="py-20 relative" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR AIRCRAFT</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              A next-gen modular fleet built for versatility, endurance, and smart autonomous deployment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Aircraft List */}
            <div className="space-y-6">
              {Object.keys(aircraftData).map((aircraft) => (
                <div
                  key={aircraft}
                  className={`cursor-pointer p-6 rounded-lg border transition-all duration-300 ${
                    selectedAircraft === aircraft
                      ? "border-yellow-400 bg-yellow-400/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  onClick={() => setSelectedAircraft(aircraft)}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      selectedAircraft === aircraft ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    {aircraft}
                  </h3>

                  {selectedAircraft === aircraft && (
                    <div className="animate-fade-in">
                      {/* Mobile: Show image below specs */}
                      <div className="lg:hidden mb-6">
                        <div className="relative h-[300px] flex items-center justify-center">
                          <Image
                            src={aircraftData[aircraft as keyof typeof aircraftData].image || "/placeholder.svg"}
                            alt={`${aircraft} Aircraft`}
                            width={selectedAircraft === "K-OSPERA" ? 400 : selectedAircraft === "K-RUDRA" ? 350 : 300}
                            height={selectedAircraft === "K-OSPERA" ? 400 : selectedAircraft === "K-RUDRA" ? 350 : 300}
                            className="object-contain transition-all duration-500 filter brightness-110"
                          />
                        </div>
                      </div>

                      {/* Aircraft specs */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Payload Capacity:</p>
                          <p className="text-white font-semibold">{aircraftData[aircraft as keyof typeof aircraftData].payload}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Range:</p>
                          <p className="text-white font-semibold">{aircraftData[aircraft as keyof typeof aircraftData].range}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Endurance:</p>
                          <p className="text-white font-semibold">{aircraftData[aircraft as keyof typeof aircraftData].endurance}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Speed:</p>
                          <p className="text-white font-semibold">{aircraftData[aircraft as keyof typeof aircraftData].speed}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-gray-400 text-sm">Altitude:</p>
                          <p className="text-white font-semibold">{aircraftData[aircraft as keyof typeof aircraftData].altitude}</p>
                        </div>
                        {/* UseCase Button - Below Speed */}
                        <div className="flex justify-start items-start">
                          <button
                            className="px-5 py-2 rounded-lg bg-yellow-500/70 text-black font-bold shadow hover:bg-yellow-400/80 transition-all border-2 border-yellow-600/70"
                            onClick={() => setOpenUseCase(aircraft)}
                          >
                            UseCase
                          </button>
                        </div>
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
              const ac = aircraftUseCases[openUseCase as keyof typeof aircraftUseCases];
              if (!ac) return null;
              return (
                <>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">{openUseCase.replace("K-", "K-")} <span className="text-gray-400 text-base font-normal">— {ac.trl}</span></h2>
                  <ol className="list-decimal pl-5 text-gray-200 space-y-2">
                    {ac.useCases.map((uc: string, idx: number) => (
                      <li key={idx}>{uc}</li>
                    ))}
                  </ol>
                </>
              );
            })()}
          </div>
        </div>
      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Aircraft 3D Model - Hidden on mobile when aircraft is selected */}
            <div className={`relative h-[500px] flex items-center justify-center ${selectedAircraft ? 'hidden lg:flex' : 'flex'}`}>
              <div className="relative w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={aircraftData[selectedAircraft as keyof typeof aircraftData].image || "/placeholder.svg"}
                    alt={`${selectedAircraft} Aircraft`}
                    width={selectedAircraft === "K-OSPERA" ? 600 : selectedAircraft === "K-RUDRA" ? 500 : 420}
                    height={selectedAircraft === "K-OSPERA" ? 600 : selectedAircraft === "K-RUDRA" ? 500 : 420}
                    className="object-contain transition-all duration-500 filter brightness-110 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-900/30" data-animate>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR TECHNOLOGY</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Six core technologies powering the next generation of aerial mobility solutions
            </p>
          </div>

          <div className="space-y-20 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech.number}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl font-bold text-yellow-400/20">{tech.number}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-yellow-400">{tech.title}</h3>
                      <p className="text-gray-400 font-medium">{tech.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">{tech.description}</p>

                  <div className="space-y-3">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={() => toggleReadMore(tech.number)}
                      className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                    >
                      {expandedTech === tech.number ? "Read Less" : "Read More"}
                    </Button>
                  </div>

                  {expandedTech === tech.number && (
                    <div className="mt-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700 animate-fade-in">
                      <p className="text-gray-300 leading-relaxed">{tech.readMore}</p>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className={`relative h-[400px] flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative">
                    <Image
                      src={tech.image}
                      alt={tech.title}
                      width={tech.imageSize}
                      height={tech.imageSize}
                      className="object-contain transition-all duration-500 filter brightness-110 hover:scale-105"
                      style={tech.transform ? { transform: tech.transform } : {}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <img src="/images/kat-logo-white.png" alt="KAT Logo" width={80} height={80} className="mb-2" />
              <span className="text-xl font-bold text-yellow-400">K.A.T</span>
            </div>
            {/* Address/Contact */}
            <div className="flex flex-col space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 12.414a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414z" /></svg>
                </span>
                <span className="text-white text-base">
                  30, Green Avenue, Khatipura Road, Jharkhand Mod, Jaipur, 302012, Rajasthan.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </span>
                <span className="text-white text-base">+91 89529 43460</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4a4 4 0 01-8 0v-4" /></svg>
                </span>
                <span className="text-white text-base">khageshvaramobility@gmail.com</span>
              </div>
            </div>
            {/* Navigation */}
            <div className="flex flex-col space-y-4 text-left">
              <a href="/about" className="text-white hover:text-yellow-400 transition-colors text-base">About Us</a>
              <a href="/technology" className="text-white hover:text-yellow-400 transition-colors text-base">Technology</a>
              <a href="/impact" className="text-white hover:text-yellow-400 transition-colors text-base">Impact</a>
              <a href="/career" className="text-white hover:text-yellow-400 transition-colors text-base">Careers</a>
            </div>
            {/* Social Icons */}
            <div className="flex flex-row md:flex-col items-center md:items-end space-x-4 md:space-x-0 md:space-y-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/khageshvara-aviation-technology-pvt-ltd-k-a-t/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors" />
              </a>
              <a href="https://www.instagram.com/khageshvara/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-4 text-center">
            <p className="text-gray-400 text-xs">
              © 2025 Khageshvara Aviation Technology private limited, all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}