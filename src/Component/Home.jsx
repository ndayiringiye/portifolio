import { useState } from "react"
import { motion } from "framer-motion"
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

import profile from "../../public/images/profile.png"

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownloadCV = async () => {
    const link = document.createElement("a")
    link.href = "public/DavidNdayiringiyeResume_fullstack.pdf" 
    link.download = "David_Ndayiringiye_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/ndayiringiye", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ndayiringiye-david-2aa403326/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ndayiringiyedavid394@gmail.com", label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-11/12 mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-primary font-medium text-lg">👋 Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">David</span>
                <br />
                <span className="text-foreground">Ndayiringiye</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">Full-Stack Developer & UI/UX Enthusiast</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              I'm a passionate Full-Stack Developer with 2.5+ years of experience building scalable web applications. I
              specialize in the MERN stack and love creating beautiful, functional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleDownloadCV}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Download className="w-5 h-5 mr-2" />
                )}
                {isLoading ? "Downloading..." : "Download CV"}
              </Button>

              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
                onClick={handleViewProjects}
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-6"
            >
              <span className="text-muted-foreground font-medium">Follow me:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-200"
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-full blur-xl opacity-30"
              />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={profile}
                  alt="David Ndayiringiye"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero