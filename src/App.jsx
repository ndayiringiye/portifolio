"use client"

import { ThemeProvider } from "./Component/theme-provider"
import Header from "./Component/Head"
import Hero from "./Component/Home"
import About from "./Pages/AboutuS"
import Skills from "./Component/Technology"
import Projects from "./Pages/ProjectsSection"
import Testimonials from "./Component/Communities"
import Contact from "./Pages/Contact"
import Footer from "./Component/Footer"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
  
}
