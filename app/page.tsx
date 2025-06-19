"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  Code,
  Database,
  GraduationCap,
  Brain,
  Palette,
  FileText,
  Clock,
  Shield,
  Zap,
  MessageCircle,
  Phone,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Target,
  Terminal,
  Laptop,
  Server,
  Globe,
  Cpu,
  HardDrive,
} from "lucide-react"

export default function LastMinuteLabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & Mobile App Development",
      description: "React, MERN Stack, Java, Laravel applications built to your specifications",
      tags: ["React", "MERN", "Java", "Laravel"],
      gradient: "from-[#EAEFEF] to-[#B8CFCE]",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRUD Applications",
      description: "Complete database-driven applications with full functionality",
      tags: ["MySQL", "MongoDB", "Firebase"],
      gradient: "from-[#B8CFCE] to-[#7F8CAA]",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Final Year Projects & Reports",
      description: "End-to-end project development with comprehensive documentation",
      tags: ["Research", "Implementation", "Documentation"],
      gradient: "from-[#7F8CAA] to-[#333446]",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Mini Projects",
      description: "ML models, data analysis, and predictive systems",
      tags: ["Python", "TensorFlow", "Scikit-learn"],
      gradient: "from-[#EAEFEF] to-[#7F8CAA]",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Professional designs using Figma and Adobe XD",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      gradient: "from-[#B8CFCE] to-[#333446]",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation + Viva Slides",
      description: "Professional reports and presentation materials",
      tags: ["Reports", "Presentations", "Viva Prep"],
      gradient: "from-[#7F8CAA] to-[#EAEFEF]",
    },
  ]

  const projects = [
    {
      title: "Library Management System",
      tech: "React + Firebase",
      deliveredIn: "3 Days",
      status: "Completed",
      tag: "Final Year Project",
      image: "/last-minute-labs/placeholder.svg?height=200&width=300",
    },
    {
      title: "E-Commerce Mobile App",
      tech: "React Native + Node.js",
      deliveredIn: "5 Days",
      status: "Completed",
      tag: "Mobile Development",
      image: "/last-minute-labs/placeholder.svg?height=200&width=300",
    },
    {
      title: "Student Grade Predictor",
      tech: "Python + Machine Learning",
      deliveredIn: "2 Days",
      status: "Completed",
      tag: "ML Mini Project",
      image: "/last-minute-labs/placeholder.svg?height=200&width=300",
    },
    {
      title: "Hospital Management System",
      tech: "Java + MySQL",
      deliveredIn: "4 Days",
      status: "Completed",
      tag: "CRUD Application",
      image: "/last-minute-labs/placeholder.svg?height=200&width=300",
    },
    {
      title: "Social Media Dashboard",
      tech: "MERN Stack",
      deliveredIn: "6 Days",
      status: "Completed",
      tag: "Web Development",
      image: "/last-minute-labs/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "200+", label: "Happy Students", icon: <Users className="w-6 h-6" /> },
  ]

  const techIcons = [
    { icon: <Terminal className="w-8 h-8" />, x: 15, y: 20, duration: 6, delay: 0 },
    { icon: <Laptop className="w-6 h-6" />, x: 85, y: 15, duration: 8, delay: 1 },
    { icon: <Server className="w-7 h-7" />, x: 10, y: 70, duration: 7, delay: 2 },
    { icon: <Globe className="w-9 h-9" />, x: 80, y: 75, duration: 9, delay: 0.5 },
    { icon: <Cpu className="w-6 h-6" />, x: 25, y: 45, duration: 5, delay: 1.5 },
    { icon: <HardDrive className="w-8 h-8" />, x: 70, y: 40, duration: 6.5, delay: 2.5 },
    { icon: <Code className="w-7 h-7" />, x: 45, y: 25, duration: 7.5, delay: 3 },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setInterval(nextProject, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1B262C] shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/last-minute-labs/last-minute-labs-logo.png" alt="Last Minute Labs Logo" className="w-10 h-10 mr-3" />
              <div className="text-2xl font-bold text-[#BBE1FA]">Last Minute Labs</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-[#BBE1FA] hover:text-[#3282B8] transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3282B8] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#BBE1FA] hover:text-[#3282B8] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-[#0F4C75]">
              <div className="flex flex-col space-y-4 mt-4">
                {["Home", "Services", "About", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-[#BBE1FA] hover:text-[#3282B8] transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#1B262C] via-[#0F4C75] to-[#1B262C] text-white py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/last-minute-labs/stressed-developer.png"
            alt="Stressed IT Student"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B262C]/90 via-[#0F4C75]/70 to-[#1B262C]/90"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {techIcons.map((item, index) => (
            <div
              key={index}
              className="absolute text-[#3282B8] opacity-30"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                animation: `float-${index} ${item.duration}s ease-in-out infinite`,
                animationDelay: `${item.delay}s`,
              }}
            >
              {item.icon}
            </div>
          ))}

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#3282B8] rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `particle-float ${3 + Math.random() * 4}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float-0 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-1 {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
            33% { transform: translateX(10px) translateY(-15px) rotate(-3deg); }
            66% { transform: translateX(-5px) translateY(-10px) rotate(3deg); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-25px) scale(1.1); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
            25% { transform: translateX(-8px) translateY(-12px) rotate(2deg); }
            75% { transform: translateX(8px) translateY(-18px) rotate(-2deg); }
          }
          @keyframes float-4 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-5deg); }
          }
          @keyframes float-5 {
            0%, 100% { transform: translateX(0px) translateY(0px) scale(1); }
            33% { transform: translateX(12px) translateY(-20px) scale(0.9); }
            66% { transform: translateX(-8px) translateY(-8px) scale(1.1); }
          }
          @keyframes float-6 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-22px) rotate(8deg); }
          }
          @keyframes particle-float {
            0% { transform: translateY(100vh) opacity(0); }
            10% { opacity: 0.4; }
            90% { opacity: 0.4; }
            100% { transform: translateY(-100px) opacity(0); }
          }
        `}</style>

        <div
          className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Struggling With Your <span className="text-[#3282B8] animate-pulse">IT Assignment?</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#BBE1FA] max-w-3xl mx-auto leading-relaxed">
            We help students finish their toughest university projects — on time, with confidence.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <div className="text-[#3282B8] mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-[#BBE1FA]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#3282B8] hover:bg-[#0F4C75] text-[#1B262C] font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://wa.me/94771909141", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Help Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#3282B8] text-[#3282B8] hover:bg-[#3282B8] hover:text-[#1B262C] px-8 py-3 transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-[#BBE1FA] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B262C] mb-4">Our Services</h2>
            <p className="text-xl text-[#0F4C75] max-w-2xl mx-auto">
              From simple assignments to complex final year projects, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 group overflow-hidden"
              >
                <CardContent className="p-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-[#0F4C75] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1B262C] mb-3 group-hover:text-[#0F4C75] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#0F4C75] mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#BBE1FA] text-[#1B262C] text-sm rounded-full hover:bg-[#3282B8] hover:text-white transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B262C] mb-4">Our Recent Projects</h2>
            <p className="text-xl text-[#0F4C75] max-w-3xl mx-auto">
              From CRUD apps to final year research – here's what we've done for students like you.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4 shadow-2xl border-0 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="md:flex">
                          <div className="md:w-1/2 relative overflow-hidden">
                            <img
                              src={project.image || "/last-minute-labs/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-48 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1B262C]/50 to-transparent"></div>
                          </div>
                          <div className="md:w-1/2 p-6 bg-gradient-to-br from-white to-[#BBE1FA]">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-[#3282B8] text-[#1B262C] text-sm rounded-full font-medium">
                                {project.tag}
                              </span>
                              <div className="flex items-center text-green-600">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                <span className="text-sm">{project.status}</span>
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1B262C] mb-3">{project.title}</h3>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-[#0F4C75]">
                                <Code className="w-4 h-4 mr-2" />
                                <span>{project.tech}</span>
                              </div>
                              <div className="flex items-center text-[#0F4C75]">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>Delivered in: {project.deliveredIn}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-[#3282B8] fill-current" />
                              ))}
                              <span className="ml-2 text-[#0F4C75] text-sm">Student Satisfied</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3282B8] hover:bg-[#0F4C75] text-[#1B262C] shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3282B8] hover:bg-[#0F4C75] text-[#1B262C] shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? "bg-[#3282B8] scale-125" : "bg-[#BBE1FA] hover:bg-[#3282B8]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-[#1B262C] to-[#0F4C75] text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#BBE1FA]">About Last Minute Labs</h2>
            <p className="text-xl text-[#BBE1FA] mb-12 leading-relaxed">
              Born out of the chaos of deadline nights, we are a team of developers who know what students need. We
              offer student-friendly, plagiarism-safe, presentable work with end-to-end support.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Lightning Fast",
                  desc: "Quick turnaround times to meet your deadlines",
                  color: "from-[#3282B8] to-[#0F4C75]",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "100% Original",
                  desc: "Plagiarism-free, custom solutions for every project",
                  color: "from-[#0F4C75] to-[#3282B8]",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "24/7 Support",
                  desc: "Available in Sinhala + English at affordable rates",
                  color: "from-[#BBE1FA] to-[#3282B8]",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <div className="text-[#1B262C]">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#BBE1FA]">{item.title}</h3>
                  <p className="text-[#3282B8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#BBE1FA] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1B262C] mb-4">Let's Finish That Project</h2>
              <p className="text-xl text-[#0F4C75]">
                Ready to get started? Message us on WhatsApp for the fastest response!
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-[#1B262C]">WhatsApp Us</h3>
                </div>
                <p className="text-[#0F4C75] mb-6">Get instant responses and quick project quotes</p>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => window.open("https://wa.me/94771909141", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message: +94 77 190 9141
                </Button>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-[#1B262C] mb-2">Why WhatsApp?</p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="flex items-center text-[#0F4C75]">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Instant responses
                  </div>
                  <div className="flex items-center text-[#0F4C75]">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Share files easily
                  </div>
                  <div className="flex items-center text-[#0F4C75]">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Real-time updates
                  </div>
                  <div className="flex items-center text-[#0F4C75]">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B262C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/last-minute-labs-logo.png" alt="Last Minute Labs Logo" className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-[#3282B8]">Last Minute Labs</h3>
              </div>
              <p className="text-[#BBE1FA] mb-4">Helping students succeed with quality academic project support.</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.open("https://wa.me/94771909141", "_blank")}
                  className="text-green-400 hover:text-green-300 transform hover:scale-110 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="text-pink-400 hover:text-pink-300 transform hover:scale-110 transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#3282B8]">Quick Links</h4>
              <ul className="space-y-2">
                {["Services", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-[#BBE1FA] hover:text-[#3282B8] transition-colors hover:translate-x-2 transform duration-300 flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 hover:opacity-100 transition-opacity" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#3282B8]">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#3282B8]" />
                  <span className="text-[#BBE1FA]">+94 77 190 9141</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-[#3282B8]" />
                  <span className="text-[#BBE1FA]">WhatsApp Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#0F4C75] mt-8 pt-8 text-center">
            <p className="text-[#BBE1FA] mb-2">© 2024 Last Minute Labs. All rights reserved.</p>
            <p className="text-sm text-[#3282B8]">
              <strong>Disclaimer:</strong> We provide academic support services for educational use only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
