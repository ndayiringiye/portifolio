"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="w-11/12 mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              David Ndayiringiye
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions and building meaningful digital
              experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 ndayiringiyedavid394@gmail.com</p>
              <p>📱 +250 791 613 1891</p>
              <p>📍 Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground flex items-center gap-2 mb-4 md:mb-0"
          >
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by David Ndayiringiye
          </motion.p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
