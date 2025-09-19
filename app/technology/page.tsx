"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Instagram, Mail, Linkedin, X } from "lucide-react"
import Image from "next/image"

const aircraftData = {
  "K-VAAYU": {
    payload: "Up to 10kg",
    range: "20+ Km",
    endurance: "45+ Min",
    speed: "70 Kmph",
    altitude: "0-2,500 m AMSL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k-5-FeueTyzB4Jamo0YPg9qSpzmyf9xcoH.png",
  },
  "K-RUDRA": {
    payload: "Up to 100kg",
    range: "100+ Km",
    endurance: "120+ Min",
    speed: "120 Kmph",
    altitude: "0-5,000 m AMSL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k-50-0Mr3Mwrj8qen60wDQ7QpZeB3yePp6t.png",
  },
  "K-OSPERA": {
    payload: "Up to 400kg",
    range: "200+ Km",
    endurance: "180+ Min",
    speed: "250 Kmph",
    altitude: "0-10,000 m AMSL",
    image: "/k-200.png",
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
  const [selectedAircraft, setSelectedAircraft] = useState("K-VAAYU")
  const [isVisible, setIsVisible] = useState({})
  const [expandedTech, setExpandedTech] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                    <div className="grid grid-cols-2 gap-4 animate-fade-in">
                      <div>
                        <p className="text-gray-400 text-sm">Payload Capacity:</p>
                        <p className="text-white font-semibold">{aircraftData[aircraft].payload}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Range:</p>
                        <p className="text-white font-semibold">{aircraftData[aircraft].range}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Endurance:</p>
                        <p className="text-white font-semibold">{aircraftData[aircraft].endurance}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Speed:</p>
                        <p className="text-white font-semibold">{aircraftData[aircraft].speed}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-400 text-sm">Altitude:</p>
                        <p className="text-white font-semibold">{aircraftData[aircraft].altitude}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Aircraft 3D Model */}
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={aircraftData[selectedAircraft].image || "/placeholder.svg"}
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
      <section id="technology" className="py-20" data-animate>
        <div className="container mx-auto px-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR TECHNOLOGY</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              A next-gen modular tech suite for autonomous deployment, efficiency, and endurance
            </p>
          </div>

          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <div
                key={tech.number}
                className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                data-animate
              >
                {/* Content */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="absolute -top-8 -left-8 text-9xl font-bold text-yellow-400/10 select-none">
                    {tech.number}
                  </div>
                  <div className="relative z-10">
                    <p className="text-yellow-400 text-sm font-semibold mb-2 tracking-wider uppercase">
                      {tech.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 relative">{tech.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{tech.description}</p>
                    <ul className="space-y-2 mb-6">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Read More Section */}
                    {expandedTech === tech.number && (
                      <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 animate-fade-in">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-yellow-400 font-semibold">Read More:</h4>
                          <button
                            onClick={() => toggleReadMore(tech.number)}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{tech.readMore}</p>
                      </div>
                    )}

                    <button
                      onClick={() => toggleReadMore(tech.number)}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center space-x-2 transition-colors"
                    >
                      <span>{expandedTech === tech.number ? "read less" : "read more"}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${expandedTech === tech.number ? "rotate-180" : "rotate-[-90deg]"}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Tech Illustration */}
                <div className={`relative h-[400px] ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Real Tech Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={tech.image || "/placeholder.svg"}
                        alt={tech.title}
                        width={tech.imageSize}
                        height={tech.imageSize}
                        className={`object-contain transition-all duration-500 filter brightness-110 hover:scale-105`}
                        style={{
                          transform: tech.transform || "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
