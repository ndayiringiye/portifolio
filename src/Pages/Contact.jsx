"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ndayiringiyedavid394@gmail.com",
      href: "mailto:ndayiringiyedavid394@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+250 791 613 1891",
      href: "tel:+2507916131891",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kigali, Rwanda",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/ndayiringiye", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-12 fold:py-16 sm:py-20 bg-muted/30">
      <div className="w-11/12 mx-auto px-2 fold:px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 fold:mb-12 sm:mb-16"
        >
          <h2 className="text-2xl fold:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 fold:mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base fold:text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2 fold:px-0">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fold:gap-10 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 fold:space-y-8"
          >
            <div>
              <h3 className="text-xl fold:text-2xl font-bold mb-4 fold:mb-6">Let's start a conversation</h3>
              <p className="text-muted-foreground text-sm fold:text-base sm:text-lg leading-relaxed mb-6 fold:mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4 fold:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4 fold:p-5 sm:p-6">
                        <div className="flex items-center space-x-3 fold:space-x-4">
                          <div className="p-2 fold:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                            <Icon className="w-4 h-4 fold:w-5 fold:h-5 sm:w-6 sm:h-6 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-sm fold:text-base sm:text-lg">{info.title}</h4>
                            <a
                              href={info.href}
                              className="text-xs fold:text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6 fold:pt-8">
              <h4 className="font-semibold text-sm fold:text-base sm:text-lg mb-3 fold:mb-4">Follow me on social media</h4>
              <div className="flex space-x-3 fold:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 fold:p-3 bg-background/50 backdrop-blur-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200 border border-border"
                    >
                      <Icon size={16} className="fold:w-5 fold:h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-background/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4 fold:p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 fold:space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 iphone:grid-cols-2 gap-4 fold:gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs fold:text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary text-sm fold:text-base h-10 fold:h-11"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs fold:text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary text-sm fold:text-base h-10 fold:h-11"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs fold:text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border focus:border-primary text-sm fold:text-base h-10 fold:h-11"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs fold:text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-background/50 border-border focus:border-primary resize-none text-sm fold:text-base min-h-[100px] fold:min-h-[120px] sm:min-h-[150px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 fold:py-4 sm:py-6 text-sm fold:text-base sm:text-lg font-semibold h-auto"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-4 h-4 fold:w-5 fold:h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-4 h-4 fold:w-5 fold:h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact