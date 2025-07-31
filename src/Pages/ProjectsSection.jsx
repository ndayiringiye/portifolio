import React, { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Globe, ShoppingCart, Calendar, Cloud, Smartphone } from "lucide-react"

import ecommerceImage from "../../public/images/ecommerce.png"
import medicalImage from "../../public/images/medical.png"
import alightImage from "../../public/images/alight.png"
import bankImage from "../../public/images/bank.png"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/user/ecommerce",
      icon: ShoppingCart,
      category: "fullstack",
    },
    {
      id: 2,
      title: "E-Medical Management System",
      description:
        "A comprehensive medical management system with patient records, appointment scheduling, and real-time updates.",
      image: medicalImage,
      technologies: ["React", "TypeScript", "Firebase", "Framer Motion", "Node.js", "Tailwind CSS"],
      liveUrl: "https://e-medical-reports-fr.netlify.app/",
      githubUrl: "https://github.com/ndayiringiye/E_Medical_Reports",
      icon: Calendar,
      category: "frontend",
    },
    {
      id: 3,
      title: "Alight Coding School",
      description:
        "A modern educational platform with course management, student tracking, and interactive learning features.",
      image: alightImage,
      technologies: ["React", "Chart.js", "Node.js", "Express", "CSS Grid"],
      liveUrl: "https://alight-coding-school-website-frontend.onrender.com/",
      githubUrl: "https://github.com/eugide/alight-coding-school-website",
      icon: Cloud,
      category: "fullstack",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "A secure mobile banking interface with biometric authentication, transaction history, and budget tracking features.",
      image: bankImage,
      technologies: ["React Native", "Redux", "Node.js", "Express", "JWT"],
      liveUrl: "https://banking-ap.comp",
      githubUrl: "https://github.com/user/banking",
      icon: Smartphone,
      category: "mobile",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="w-11/12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in web development, featuring modern technologies and innovative solutions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.id
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800 border border-gray-200"
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                layout
              >
                <div className="group overflow-hidden rounded-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 border border-border">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute top-4 left-4 bg-card/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="border border-blue-500/20 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex  fold:flex-col gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white w-full px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center font-medium text-sm whitespace-nowrap"
                      >
                        <Globe className="w-4 h-4 mr-1 shrink-0" />
                        <span className="hidden fold:inline sm:hidden">Demo</span>
                        <span className="fold:hidden sm:inline">Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-full px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center font-medium text-sm whitespace-nowrap"
                      >
                        <Github className="w-4 h-4 mr-1 shrink-0" />
                        Code
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-gray-800 font-medium">
              Want to see more? Check out my{" "}
              <a
                href="https://github.com/ndayiringiye"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline-flex items-center gap-1"
              >
                GitHub profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects