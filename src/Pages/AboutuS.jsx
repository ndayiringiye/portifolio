"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, GraduationCap, Briefcase, MapPin, Clock, Code, Server, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const About = () => {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
  ]

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Express, and database integration.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences with modern design principles and tools.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into reality through code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "about" && (
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Hi, I'm David Ndayiringiye, a passionate Full-Stack Developer with over 2.5 years of hands-on
                      experience in building and deploying responsive applications. My expertise with the MERN stack,
                      along with proficiency in Java and Python, allows me to effectively address complex challenges.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I practice clean UI/UX design principles and enjoy collaborating on innovative projects,
                      particularly in blockchain technology. I'm passionate about making meaningful contributions to the
                      developer community and continuously learning new technologies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Kigali, Rwanda</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>CAT (UTC+2)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-2">Full-Stack Developer</h3>
                      <p className="text-primary font-medium mb-2">Freelance • 2022 - Present</p>
                      <p className="text-muted-foreground">
                        Developed and maintained multiple web applications using MERN stack. Collaborated with clients
                        to deliver custom solutions and improve user experiences.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                      <p className="text-primary font-medium mb-2">Various Projects • 2021 - 2022</p>
                      <p className="text-muted-foreground">
                        Focused on creating responsive and interactive user interfaces. Gained experience with modern
                        frontend frameworks and design systems.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-2">Bachelor's in Computer Science</h3>
                      <p className="text-primary font-medium mb-2">University of the People • 2018 - 2022</p>
                      <p className="text-muted-foreground">
                        Specialized in Software Engineering and Web Development. Gained strong foundation in programming
                        principles and software architecture.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-bold mb-2">Advanced Web Development</h3>
                      <p className="text-primary font-medium mb-2">Online Certification • 2022</p>
                      <p className="text-muted-foreground">
                        Completed intensive course on modern web technologies including React, Node.js, and cloud
                        deployment.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About
