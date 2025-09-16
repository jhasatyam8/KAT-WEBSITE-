"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Mail, Linkedin } from "lucide-react"

const teamMembers = {
  column1: [
    {
      name: "Vedansh Agrawal",
      title: "Business Development Lead",
      tagline: "Scaling new heights",
      image: "/vedansh-aggrawal.png",
    },
    {
      name: "Satyam Jha",
      title: "Creative Content Associate",
      tagline: "Crafting visual stories",
      image: "/satyam-jha.png",
    },
  ],
  column2: [
    {
      name: "Ritvik Yadav",
      title: "Co-Founder",
      tagline: "Visionary behind the revolution",
      image: "/ritvik-yadav.png",
    },
    {
      name: "Ujjwal Kumar",
      title: "Design Lead",
      tagline: "Form meets function",
      image: "/ujjwal-kumar.jpeg",
    },
    {
      name: "Gaurav Sharma",
      title: "Machine Learning and SLAM Lead",
      tagline: "Teaching machines to see",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gaurav-sharma-PhQPLK2oH6daLTW0AL5MjnaJENcnkc.jpeg",
    },
  ],
  column3: [
    {
      name: "Swasti Dubey",
      title: "Marketing Content Lead",
      tagline: "Storytelling the future",
      image: "/swasti-dubey.jpeg",
    },
    {
      name: "Tashif Syed",
      title: "Aero Propulsion Lead",
      tagline: "Defying gravity daily",
      image: "/tashif-ali-final.jpeg",
    },
  ],
  column4: [
    {
      name: "Shyaandeep Das",
      title: "Co-Founder",
      tagline: "Leading strategic vision",
      image: "/shayandeep-das.png",
    },
    {
      name: "Madhav Menon",
      title: "Propulsion System Lead",
      tagline: "Engineering propulsion excellence",
      image: "/madhav-menon.jpeg",
    },
    {
      name: "Mathew George",
      title: "Wing and Tail Design Lead",
      tagline: "Perfecting aerodynamic excellence",
      image: "/mathew-george.jpeg",
    },
  ],
}

interface TeamMember {
  name: string
  title: string
  tagline: string
  image: string
}

interface TeamCardProps {
  member: TeamMember
  index: number
}

function TeamCard({ member, index }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay based on index for staggered animation
            setTimeout(() => {
              setIsVisible(true)
            }, index * 150)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px -50px 0px", // Only trigger when well into view
      },
    )

    const cardElement = document.getElementById(`team-card-${index}`)
    if (cardElement) {
      observer.observe(cardElement)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      id={`team-card-${index}`}
      className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-yellow-400/20 hover:border-yellow-400/30 cursor-pointer mb-8 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: isVisible ? "0ms" : `${index * 100}ms`,
      }}
    >
      {/* Profile Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          style={{
            objectPosition:
              member.name === "Satyam Jha"
                ? "center 20%"
                : member.name === "Tashif Syed"
                  ? "center 5%"
                  : member.name === "Gaurav Sharma"
                    ? "center 15%"
                    : member.name === "Mathew George"
                      ? "center 10%"
                      : "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Name Badge */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700 group-hover:border-yellow-400/50 transition-all duration-300 text-center">
          <h3 className="text-white font-bold text-sm mb-1 transition-all duration-300 group-hover:text-yellow-400">
            {member.name}
          </h3>
          <p className="text-gray-400 text-xs font-medium transition-colors duration-300 group-hover:text-gray-300">
            {member.title}
          </p>
        </div>
      </div>

      {/* Hover Tagline */}
      <div
        className={`absolute top-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="bg-yellow-400/90 backdrop-blur-sm rounded-full px-3 py-1">
          <p className="text-black text-xs font-medium text-center">"{member.tagline}"</p>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}

function ParallaxColumn({
  members,
  speed,
  columnIndex,
}: {
  members: TeamMember[]
  speed: number
  columnIndex: number
}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translateY = -(scrollY * speed * 0.15) // Reduced parallax intensity

  return (
    <div className="flex-1">
      <div
        className="transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${translateY}px)`,
        }}
      >
        {members.map((member, index) => (
          <TeamCard key={`${columnIndex}-${index}`} member={member} index={columnIndex * 3 + index} />
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-yellow-400 transition-all duration-300 font-medium">
                Home
              </a>
              <a href="/about" className="text-yellow-400 font-medium">
                About Us
              </a>
              <a href="/technology" className="hover:text-yellow-400 transition-all duration-300 font-medium">
                Technology
              </a>
              <a href="/career" className="hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-lg border border-transparent hover:border-yellow-400/30 hover:bg-yellow-400/5 font-medium">
                Career
              </a>
            </div>
            <div className="flex items-center space-x-4">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            ABOUT <span className="text-yellow-400">US</span>
          </h1>
          <p
            className={`text-gray-400 text-xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Pioneering the future of aerial mobility
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-relaxed">
              Established in 2023, Khageshvara Aviation Technology Private Limited is at the forefront of innovation in
              aerial mobility. Our focus lies in developing cutting-edge Electric Vertical Take-Off and Landing (E-VTOL)
              solutions. Committed to revolutionizing air travel, we combine state-of-the-art technology with a passion
              for sustainability. At Khageshvara Aviation, we aspire to redefine the future of transportation, creating
              a world where efficient and eco-friendly aerial mobility is accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo and Title Section */}
      <section className="py-16 overflow-hidden">
        <div className="w-full flex items-center justify-center mb-12">
          <img
            src="/team-photo-new.png"
            alt="K.A.T Team Photo"
            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              MEET OUR <span className="text-yellow-400">TEAM</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              The brilliant minds behind the future of air mobility in India
            </p>
          </div>
        </div>
      </section>

      {/* Spacer to push team cards lower */}
      <div className="h-32"></div>

      {/* Team Section with Column Parallax - Desktop Only */}
      <section className="pt-16 pb-20 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {/* Column 1 - Slow Speed */}
            <ParallaxColumn members={teamMembers.column1} speed={0.6} columnIndex={1} />

            {/* Column 2 - Fast Speed */}
            <ParallaxColumn members={teamMembers.column2} speed={1.2} columnIndex={2} />

            {/* Column 3 - Slow Speed */}
            <ParallaxColumn members={teamMembers.column3} speed={0.6} columnIndex={3} />

            {/* Column 4 - Fast Speed */}
            <ParallaxColumn members={teamMembers.column4} speed={1.2} columnIndex={4} />
          </div>
        </div>
      </section>

      {/* Mobile Responsive Grid */}
      <section className="lg:hidden pt-16 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(teamMembers)
              .flat()
              .map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
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
              © 2024 Khageshvara Aviation Technology private limited, all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
