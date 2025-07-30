"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  User,
  MessageSquare,
  Sparkles,
  Loader2,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
         
const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { toast } = useToast()

  const EMAIL_SERVICE_ID = "service_ioo88l3"
  const EMAIL_TEMPLATE_ID = "template_xof4qjg"
  const EMAIL_PUBLIC_KEY = "wkrdCbu66hKdjpCA2"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)

      setShowSuccess(true)

      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        variant: "default",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)

    } catch (error) {
      console.error('Failed to send email:', error)

      toast({
        title: "❌ Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
    { icon: Linkedin, href: "https://www.linkedin.com/in/ndayiringiye-david-2aa403326/", label: "LinkedIn" },
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
            <div className="relative border-0 bg-background/50 backdrop-blur-sm shadow-xl rounded-xl p-4 fold:p-6 sm:p-8">
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute inset-0 bg-green-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-green-600">I'll get back to you soon.</p>
                  </motion.div>
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-4 fold:space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 iphone:grid-cols-2 gap-4 fold:gap-5 sm:gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-xs fold:text-sm font-medium mb-2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3 fold:w-4 fold:h-4" />
                        Name *
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 fold:py-3.5 pl-10 fold:pl-11 text-sm fold:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/60"
                        placeholder="Your name"
                      />
                      <User className="absolute left-3 fold:left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 fold:w-4 fold:h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-xs fold:text-sm font-medium mb-2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 fold:w-4 fold:h-4" />
                        Email *
                      </div>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 fold:py-3.5 pl-10 fold:pl-11 text-sm fold:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/60"
                        placeholder="your.email@example.com"
                      />
                      <Mail className="absolute left-3 fold:left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 fold:w-4 fold:h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-xs fold:text-sm font-medium mb-2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 fold:w-4 fold:h-4" />
                      Subject *
                    </div>
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                               required
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 fold:py-3.5 pl-10 fold:pl-11 text-sm fold:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/60"
                      placeholder="What's this about?"
                    />
                    <Sparkles className="absolute left-3 fold:left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 fold:w-4 fold:h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-xs fold:text-sm font-medium mb-2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 fold:w-4 fold:h-4" />
                      Message *
                    </div>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 fold:py-3.5 pl-10 fold:pl-11 text-sm fold:text-base min-h-[100px] fold:min-h-[120px] sm:min-h-[150px] resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary hover:border-primary/60"
                      placeholder="Tell me about your project..."
                    />
                    <MessageSquare className="absolute left-3 fold:left-3.5 top-4 w-4 h-4 fold:w-4 fold:h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground py-3 fold:py-4 sm:py-6 text-sm fold:text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 fold:w-5 fold:h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 fold:w-5 fold:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
