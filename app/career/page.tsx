"use client"

import { useState, useEffect } from "react"
import { Instagram, Phone, Mail, Linkedin, MapPin, Rocket, Users, Target } from "lucide-react"

export default function CareerPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-gray-800/30">
        <div className="container mx-auto px-6 py-4">
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
              <a href="/impact" className="hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5">
                Impact
              </a>
              <a href="/career" className="text-yellow-400 font-medium px-4 py-2 rounded-lg border border-yellow-400/30 bg-yellow-400/5">
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
              <a href="https://www.linkedin.com/company/khageshvara-aviation-technology-pvt-ltd-k-a-t/" target="_blank" rel="noopener noreferrer">
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
                className="text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                Career
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Starfield Effect */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>

          {/* Ambient Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-xs md:text-sm tracking-wider uppercase">Coming Soon</span>
            </div>

            <h1
              className={`text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tight leading-tight md:leading-none transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-white">JOIN THE</span>
              <br />
              <span
                className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Space Grotesk', 'Montserrat', sans-serif",
                  textShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
                }}
              >
                REVOLUTION
              </span>
            </h1>

            {/* Golden Divider */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>

            <p
              className={`text-gray-300 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Be part of the team that's reshaping the future of aerial mobility.
              <br className="hidden md:block" />
              Exciting career opportunities are launching soon.
            </p>

            {/* Features Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Innovation First</h3>
                <p className="text-gray-400 text-xs md:text-sm">Work on cutting-edge eVTOL technology that's changing the world</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Amazing Team</h3>
                <p className="text-gray-400 text-xs md:text-sm">Join brilliant minds passionate about the future of mobility</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800/50 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-base md:text-lg mb-2">Make Impact</h3>
                <p className="text-gray-400 text-xs md:text-sm">Shape the future of transportation and sustainable aviation</p>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 px-4 md:px-0">
                Stay tuned for exciting opportunities in engineering, design, operations, and more.
              </p>

              {/* Email Notification */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800/50 max-w-sm md:max-w-md mx-auto">
                <h3 className="text-white font-bold text-lg md:text-xl mb-3 md:mb-4">Get Notified</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                  Be the first to know when we start hiring. Send us your details at:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-yellow-400/10 rounded-lg p-3 md:p-4 border border-yellow-400/30">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-yellow-400 font-semibold text-sm md:text-base text-center sm:text-left break-all">khageshvaramobility@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400/20 rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-yellow-400/20 rotate-12 animate-pulse delay-1000 opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-yellow-400/20 rotate-45 animate-pulse delay-2000 opacity-30"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-col items-center mb-4">
                <video width={64} height={64} autoPlay loop muted playsInline className="object-contain mb-2">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KAT%20LOGO%20white-xM2fU9ldjehtteW5SYt4Z23mOYJLUo.mp4"
                    type="video/mp4"
                  />
                </video>
                <span className="text-yellow-400 text-lg font-bold">K.A.T</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">30, Green Avenue, Khatipura Road, Jharkhand</p>
                  <p className="text-white text-sm">Mod, Jaipur, 302012, Rajasthan.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-white text-sm">+91 89529 43460</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p className="text-white text-sm">khageshvaramobility@gmail.com</p>
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
