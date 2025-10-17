"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Mail, Linkedin, X } from "lucide-react"

const teamMembers = {
  column1: [
    {
      name: "Vedansh Aggarwal",
      title: "Business Development Lead",
      tagline: "Scaling new heights",
      image: "/vedansh-aggrawal.png",
      description: "I am a Fourth-year Bachelor's student at BITS Pilani and currently lead Business Development. With prior experience at VC firms, I bring a strategic approach to driving growth and building key partnerships. My responsibilities include securing funding and developing the company's business and financial plans.",
    },
    {
      name: "Satyam Jha",
      title: "Creative Content Associate",
      tagline: "Crafting visual stories",
      image: "/satyam-jha.png",
      description: "I am a student at BITS Pilani and serve as the Creative Content Associate for the team. I lead the creative direction and execution of our digital presence. My work includes conceptualizing and designing digital assets, managing social media content, and developing our website.",
    },
  ],
  column2: [
    {
      name: "Ritvik Yadav",
      title: "Co-Founder",
      tagline: "Visionary behind the revolution",
      image: "/ritvik-yadav.png",
      description: "I'm co-founder at Khageshvara Aviation Technology, with a master's degree from BITS Pilani. My professional journey began with learnings from Uber Elevate, where I contributed to the development of their Air Taxi concept. This was followed by projects at CSIR-NAL & DRDO-ADE labs followed by key supply chain roles at ITC and Yokohama. My current responsibilities include the design and analysis of our EVTOL's key components, with a strong focus on parts procurement and supply chain management.",
    },
    {
      name: "Ujjwal Kumar",
      title: "Design Lead",
      tagline: "Form meets function",
      image: "/ujjwal-kumar.jpeg",
      description: "As Design Lead, I focus on creating innovative and functional designs that push the boundaries of what's possible in aerial mobility. My work encompasses both aesthetic and engineering considerations, ensuring our products are not only cutting-edge but also user-friendly and efficient.",
    },
    {
      name: "Gaurav Sharma",
      title: "Machine Learning & SLAM Lead",
      tagline: "Teaching machines to see",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gaurav-sharma-PhQPLK2oH6daLTW0AL5MjnaJENcnkc.jpeg",
      description: "I am pursuing a Bachelor's degree at VIT Vellore and serve as the Machine Learning and SLAM Lead. I develop algorithms that enable autonomous vehicles to perceive, map, and navigate their environment with high precision. I have been part of my college's aerospace team, contributing to hands-on projects in autonomous systems and robotics.",
    },
  ],
  column3: [
    {
      name: "Swasti Dubey",
      title: "Marketing & Content Lead",
      tagline: "Storytelling the future",
      image: "/swasti-dubey.jpeg",
      description: "As a Marketing and Content Lead, I assist in strategic decision-making and optimize operational processes. I analyze data to provide insights and handle multiple responsibilities with adaptability. I embody and promote the brand's values and possess in-depth product knowledge. I engage in public relations, actively promote the brand on social media, and represent the brand at events. I interact with customers, gather feedback, and generate leads, ensuring effective brand presence and loyalty.",
    },
    {
      name: "Tashif Sayed Ali",
      title: "Strategic Aeropropulsion Lead",
      tagline: "Defying gravity daily",
      image: "/tashif-ali-final.jpeg",
      description: "I am pursuing my Bachelor's in Marine Engineering at IIT Roorkee, I serve as the Strategic Aeropropulsion Lead. My work focuses on propulsion system design, aeroacoustic modeling for noise reduction, and performance optimization. I manage system integration, testing, and technical documentation.",
    },
  ],
  column4: [
    {
      name: "Shayandeep Das",
      title: "Co-Founder",
      tagline: "Leading strategic vision",
      image: "/shayandeep-das.png",
      description: "I am co-founder at Khageshvara Aviation Technology, pursuing a Master's degree in Health Economics and Statistics from Oxford University, while completed my Bachelors from York University. My professional journey has included a consulting role at EY and serving as a Board Member of a nonprofit. My current responsibilities include business development and strategy.",
    },
    {
      name: "Madhav Menon",
      title: "Propulsion Team Lead",
      tagline: "Engineering propulsion excellence",
      image: "/madhav-menon.jpeg",
      description: "I did Bachelor's from BITS Pilani and pursued Master's from TU Munich. As the Propulsion Team Lead, I lead the design, development, and testing of electro-mechanical systems. My role involves overseeing the creation and integration of advanced propulsion technologies to achieve precise control throughout flight.",
    },
    {
      name: "Mathew George",
      title: "Wing and Tail Design Lead",
      tagline: "Perfecting aerodynamic excellence",
      image: "/mathew-george.jpeg",
      description: "I am a student at BITS Pilani and RMIT. I lead the design of eVTOL's wing and tail systems. My focus is on creating aerodynamically efficient and structurally reliable designs that enhance stability and performance.",
    },
  ],
}

interface TeamMember {
  name: string
  title: string
  tagline: string
  image: string
  description: string
}

interface TeamCardProps {
  member: TeamMember
  index: number
  onMemberClick: (member: TeamMember) => void
}

function TeamCard({ member, index, onMemberClick }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      id={`team-card-${index}`}
      className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-yellow-400/20 hover:border-yellow-400/30 cursor-pointer mb-8 transform translate-y-0 opacity-100`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onMemberClick(member)}
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
  onMemberClick,
}: {
  members: TeamMember[]
  speed: number
  columnIndex: number
  onMemberClick: (member: TeamMember) => void
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
          <TeamCard 
            key={`${columnIndex}-${index}`} 
            member={member} 
            index={columnIndex * 3 + index} 
            onMemberClick={onMemberClick}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      return () => {
        document.removeEventListener('keydown', handleEscapeKey)
      }
    }
  }, [isModalOpen])

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
    document.body.style.overflow = 'unset' // Restore scrolling
  }

  // Close modal when clicking outside
  const handleModalOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
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
              <a href="/about" className="text-yellow-400 font-medium px-4 py-2 rounded-lg border border-yellow-400/30 bg-yellow-400/5">
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
                ? "max-h-96 opacity-100 mt-4"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-4 py-8 pb-10 bg-black/50 backdrop-blur-sm rounded-lg px-4">
              <a
                href="/"
                className="text-white hover:text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-yellow-400 font-medium text-center hover:bg-yellow-400/10 py-2 rounded-lg transition-colors"
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

      {/* About Us Section */}
      <section className="pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              ABOUT <span className="text-yellow-400">US</span>
            </h1>
            <p
              className={`text-gray-400 text-xl max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Pioneering the future of aerial mobility
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="w-full flex items-center justify-center mb-16">
            <img
              src="/team-photo-new.png"
              alt="K.A.T Team Photo"
              className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-300 text-lg leading-relaxed">
              Established in 2023, Khageshvara Aviation Technology Private Limited is at the forefront of innovation in
              Aerial Mobility. Our focus lies in developing cutting-edge Electric Vertical Take-Off and Landing (E-VTOL)
              solutions. Committed to revolutionizing air travel, we combine state-of-the-art Technology with a passion
              for Sustainability. At Khageshvara Aviation, we aspire to redefine the future of transportation, creating
              a world where efficient and eco-friendly Aerial Mobility is accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="pb-8">
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
      <div className="h-16"></div>

      {/* Team Section with Column Parallax - Desktop Only */}
      <section className="pt-16 pb-20 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {/* Column 1 - Slow Speed */}
            <ParallaxColumn members={teamMembers.column1} speed={0.6} columnIndex={1} onMemberClick={handleMemberClick} />

            {/* Column 2 - Fast Speed */}
            <ParallaxColumn members={teamMembers.column2} speed={1.2} columnIndex={2} onMemberClick={handleMemberClick} />

            {/* Column 3 - Slow Speed */}
            <ParallaxColumn members={teamMembers.column3} speed={0.6} columnIndex={3} onMemberClick={handleMemberClick} />

            {/* Column 4 - Fast Speed */}
            <ParallaxColumn members={teamMembers.column4} speed={1.2} columnIndex={4} onMemberClick={handleMemberClick} />
          </div>
        </div>
      </section>

      {/* Mobile Responsive Grid */}
      <section className="lg:hidden pt-16 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {(() => {
              // Get all team members from all columns
              const allMembers = [
                ...teamMembers.column1,
                ...teamMembers.column2,
                ...teamMembers.column3,
                ...teamMembers.column4
              ];

              // Define priority order
              const priorityNames = [
                "Ritvik Yadav",
                "Shyaandeep Das", 
                "Vedansh Agrawal",
                "Swasti Dubey",
                "Satyam Jha"
              ];

              // Create ordered array
              const orderedMembers: TeamMember[] = [];

              // Add priority members first
              priorityNames.forEach(priorityName => {
                const member = allMembers.find(m => m.name === priorityName);
                if (member) {
                  orderedMembers.push(member);
                }
              });

              // Add remaining members
              allMembers.forEach(member => {
                if (!priorityNames.includes(member.name)) {
                  orderedMembers.push(member);
                }
              });

              // Debugging: Log orderedMembers to verify
              console.log("Ordered Members:", orderedMembers);

              return orderedMembers.map((member, index) => (
                <TeamCard key={`mobile-${member.name}-${index}`} member={member} index={index} onMemberClick={handleMemberClick} />
              ))
            })()}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {isModalOpen && selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleModalOverlayClick}
        >
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 max-w-4xl w-full max-h-[80vh] overflow-hidden animate-modal-appear">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-red-500/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <X className="w-5 h-5 text-white group-hover:text-white" />
            </button>

            <div className="grid md:grid-cols-2 gap-0 h-full max-h-[80vh]">
              {/* Left Side - Photo */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition:
                      selectedMember.name === "Satyam Jha"
                        ? "center 20%"
                        : selectedMember.name === "Tashif"
                          ? "center 5%"
                          : selectedMember.name === "Gaurav Sharma"
                            ? "center 15%"
                            : selectedMember.name === "Mathew George"
                              ? "center 10%"
                              : "center center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 flex items-center justify-center">
                  <img 
                    src="/images/kat-logo-white.png" 
                    alt="KAT Logo" 
                    className="w-full h-full object-contain opacity-70 animate-pulse"
                  />
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-yellow-400/20 rotate-45"></div>
              </div>

              {/* Right Side - Content with Scrollable Area */}
              <div className="flex flex-col overflow-hidden h-64 md:h-auto">
                <div className="p-6 md:p-8 overflow-y-auto overflow-x-hidden" style={{ maxHeight: '500px', WebkitOverflowScrolling: 'touch' }}>
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 leading-tight">
                      {selectedMember.name}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 font-medium">
                      {selectedMember.title}
                    </p>
                    <div className="w-16 h-1 bg-yellow-400 mt-3 rounded-full"></div>
                  </div>

                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {selectedMember.description}
                    </p>
                  </div>

                  {/* Tagline at bottom */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-yellow-400/80 italic text-sm md:text-base">
                      "{selectedMember.tagline}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
