"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Server, Palette, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  const [animated, setAnimated] = useState(false)
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "🔺" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
      ],
    },
    backend: {
      icon: Server,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Java", level: 65, icon: "☕" },
        { name: "REST APIs", level: 88, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ],
    },
    database: {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "MySQL", level: 70, icon: "🗄️" },
        { name: "Redis", level: 65, icon: "🔴" },
        { name: "Mongoose", level: 80, icon: "📦" },
        { name: "Prisma", level: 70, icon: "⚡" },
      ],
    },
    tools: {
      icon: Palette,
      title: "Tools & Design",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🐙" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Vercel", level: 88, icon: "▲" },
        { name: "VS Code", level: 95, icon: "💻" },
      ],
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                <span>{category.title}</span>
              </button>
            )
          })}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    <span className="text-sm font-medium text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={animated ? skill.level : 0} className="h-2" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "2.5+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
