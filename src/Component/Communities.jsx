import React, { useState } from "react"
import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

import salaImage from "../../public/images/sala.png"
import chenImage from "../../public/images/chen.png"
import emilyImage from "../../public/images/emily.png"
import wilsonImage from "../../public/images/wilson.png"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      image: salaImage,
      rating: 5,
      text: "David's work on our e-commerce platform exceeded all expectations. His attention to detail and technical expertise helped us launch ahead of schedule. The user interface he created is both beautiful and highly functional.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      image: chenImage,
      rating: 5,
      text: "Working with David was a game-changer for our startup. He delivered a robust full-stack solution that scaled perfectly with our growth. His communication throughout the project was exceptional.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      image: emilyImage,
      rating: 5,
      text: "David has an incredible eye for design and the technical skills to bring any vision to life. Our collaboration on the medical management system resulted in an intuitive and powerful application.",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder",
      company: "EduTech Solutions",
      image: wilsonImage,
      rating: 5,
      text: "The educational platform David built for us has transformed how we deliver online courses. His understanding of both frontend and backend technologies made the entire process seamless.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="w-11/12 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">What my clients say about working with me</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm shadow-xl">
              <div className="p-8 lg:p-12">
                <div className="flex items-center justify-center mb-8">
                  <Quote className="w-12 h-12 text-blue-500/30" />
                </div>

                <blockquote className="text-xl lg:text-2xl text-center mb-8 leading-relaxed text-gray-600 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/20"
                    loading="lazy"
                  />
                  <div className="text-center">
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-500 font-medium">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-blue-500/20 hover:bg-blue-500 hover:text-white bg-transparent transition-colors duration-200 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-blue-500/20 hover:bg-blue-500 hover:text-white bg-transparent transition-colors duration-200 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials