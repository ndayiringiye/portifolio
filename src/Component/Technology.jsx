"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Server, Palette, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

import reactImg from "../../public/images/react.png"
import nextjsImg from "../../public/images/next.png"
import typescriptImg from "../../public/images/ts.png"
import tailwindImg from "../../public/images/tailwind.png"
import javascriptImg from "../../public/images/javascript.png"
import htmlcssImg from "../../public/images/html.png"
import nodejsImg from "../../public/images/node.png"
import expressImg from "../../public/images/express.png"
import pythonImg from "../../public/images/python.png"
import javaImg from "../../public/images/java.png"
import restApiImg from "../../public/images/api.png"
import graphqlImg from "../../public/images/graphic.png"
import mongodbImg from "../../public/images/mongodb.png"
import postgresqlImg from "../../public/images/know.png"
import mysqlImg from "../../public/images/mysql.png"
import redisImg from "../../public/images/redis.png"
import mongooseImg from "../../public/images/mongose.png"
import prismaImg from "../../public/images/pasma.png"
import gitImg from "../../public/images/git.png"
import figmaImg from "../../public/images/figma.png"
import dockerImg from "../../public/images/docker.png"
import awsImg from "../../public/images/aws.png"
import vercelImg from "../../public/images/vercel.png"
import vscodeImg from "../../public/images/vscode.png"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [animatedProgress, setAnimatedProgress] = useState({})
  const [statsCount, setStatsCount] = useState({})
  
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = {
    frontend: {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React.js", level: 90, image: reactImg },
        { name: "Next.js", level: 85, image: nextjsImg },
        { name: "TypeScript", level: 80, image: typescriptImg },
        { name: "Tailwind CSS", level: 92, image: tailwindImg },
        { name: "JavaScript", level: 88, image: javascriptImg },
        { name: "HTML/CSS", level: 95, image: htmlcssImg },
      ],
    },
    backend: {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "Node.js", level: 85, image: nodejsImg },
        { name: "Express.js", level: 80, image: expressImg },
        { name: "Python", level: 75, image: pythonImg },
        { name: "Java", level: 65, image: javaImg },
        { name: "REST APIs", level: 88, image: restApiImg },
        { name: "GraphQL", level: 70, image: graphqlImg },
      ],
    },
    database: {
      icon: Database,
      title: "Database",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "MongoDB", level: 85, image: mongodbImg },
        { name: "PostgreSQL", level: 75, image: postgresqlImg },
        { name: "MySQL", level: 70, image: mysqlImg },
        { name: "Redis", level: 65, image: redisImg },
        { name: "Mongoose", level: 80, image: mongooseImg },
        { name: "Prisma", level: 70, image: prismaImg },
      ],
    },
    tools: {
      icon: Palette,
      title: "Tools & Design",
      color: "from-orange-500 to-red-400",
      skills: [
        { name: "Git/GitHub", level: 90, image: gitImg },
        { name: "Figma", level: 85, image: figmaImg },
        { name: "Docker", level: 70, image: dockerImg },
        { name: "AWS", level: 65, image: awsImg },
        { name: "Vercel", level: 88, image: vercelImg },
        { name: "VS Code", level: 95, image: vscodeImg },
      ],
    },
  }

  useEffect(() => {
    if (skillsInView) {
      const currentSkills = skillCategories[activeCategory].skills
      const newAnimatedProgress = {}
      
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          newAnimatedProgress[skill.name] = skill.level
          setAnimatedProgress(prev => ({
            ...prev,
            [skill.name]: skill.level
          }))
        }, index * 150)
      })
    }
  }, [skillsInView, activeCategory])

  useEffect(() => {
    setAnimatedProgress({})
    if (skillsInView) {
      const currentSkills = skillCategories[activeCategory].skills
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedProgress(prev => ({
            ...prev,
            [skill.name]: skill.level
          }))
        }, index * 150)
      })
    }
  }, [activeCategory])

  useEffect(() => {
    if (statsInView) {
      const stats = [
        { key: "experience", target: 2.5, suffix: "+" },
        { key: "projects", target: 20, suffix: "+" },
        { key: "technologies", target: 15, suffix: "+" },
        { key: "satisfaction", target: 100, suffix: "%" },
      ]

      stats.forEach((stat, index) => {
        setTimeout(() => {
          let current = 0
          const increment = stat.target / 50 
          const timer = setInterval(() => {
            current += increment
            if (current >= stat.target) {
              current = stat.target
              clearInterval(timer)
            }
            setStatsCount(prev => ({
              ...prev,
              [stat.key]: stat.target === 100 ? Math.floor(current) : current.toFixed(1)
            }))
          }, 30) 
        }, index * 200) 
      })
    }
  }, [statsInView])

  return (
    <section id="skills" className="py-20 bg-background min-h-screen">
      <div className="w-11/12 mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6 text-foreground"
            animate={headerInView ? { scale: [0.9, 1.05, 1] } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Skills & <span className="animate-glow-pulse text-blue-500">Technologies</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive showcase of my technical expertise with scroll-triggered animations
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon
            const isActive = activeCategory === key
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "text-primary-foreground shadow-glow"
                    : "bg-card hover:bg-card/80 text-card-foreground hover:shadow-card border border-border"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500 rounded-2xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <Icon size={20} className="relative z-10" />
                <span className="relative z-10">{category.title}</span>
              </motion.button>
            )
          })}
        </motion.div>
        <motion.div
          ref={skillsRef}
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={skillsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="h-full bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-skill overflow-hidden">
                <CardContent className="p-6">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center group-hover:shadow-glow transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <img 
                          src={skill.image} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Intermediate"}
                        </p>
                      </div>
                    </div>
                    <motion.span 
                      className="text-2xl font-bold bg-gradient-skill bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      animate={skillsInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                    >
                      {animatedProgress[skill.name] || 0}%
                    </motion.span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-foreground font-medium">{animatedProgress[skill.name] || 0}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={animatedProgress[skill.name] || 0} 
                        className="h-3 bg-muted/50"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-skill rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ width: `${animatedProgress[skill.name] || 0}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { key: "experience", label: "Years Experience", suffix: "+" },
            { key: "projects", label: "Projects Completed", suffix: "+" },
            { key: "technologies", label: "Technologies", suffix: "+" },
            { key: "satisfaction", label: "Client Satisfaction", suffix: "%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div 
                className="text-5xl font-bold mb-3 text-blue-500 group-hover:animate-glow-pulse transition-all duration-300"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {(statsCount[stat.key] || 0)}{stat.suffix}
              </motion.div>
              <div className="text-muted-foreground font-medium text-lg group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills