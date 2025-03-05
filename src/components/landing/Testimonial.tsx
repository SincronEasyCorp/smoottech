
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  companyLogo?: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "A SmootTech transformou a maneira como gerenciamos nosso restaurante. A agilidade e eficiência que está nos proporcionando são incomparáveis!",
    author: "Kevin Sena",
    role: "Proprietário",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/acb3dd7e0ae31acf0c1d760f9d2dcbdf450404ce998860824346882940d8efa1?placeholderIfAbsent=true",
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4910d350cb6e8f08ad9900a8ab5784390d9637fa2579312bb3b52265b5ebe5a7?placeholderIfAbsent=true",
    rating: 5,
  },
  {
    quote:
      "Desde que começamos a usar o Smoottech, nossa produtividade aumentou significativamente. Recomendo para qualquer estabelecimento!",
    author: "João Silva",
    role: "Gerente",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true",
    rating: 5,
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[rgba(56,70,116,1)] w-full py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-1 justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#FFD700" color="#FFD700" size={24} />
            ))}
          </div>
          
          <blockquote className="text-white text-center text-xl md:text-2xl font-medium italic leading-relaxed mb-8">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          
          <div className="flex items-center gap-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            />
            <div className="text-white">
              <div className="font-bold text-lg">{testimonials[currentIndex].author}</div>
              <div className="text-white/80">{testimonials[currentIndex].role}</div>
            </div>
            {testimonials[currentIndex].companyLogo && (
              <img
                src={testimonials[currentIndex].companyLogo}
                alt="Company logo"
                className="w-16 h-auto ml-4"
              />
            )}
          </div>
        </motion.div>
        
        {/* Navigation controls */}
        <div className="flex justify-between items-center mt-12">
          <button 
            onClick={prevTestimonial} 
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[rgba(109,141,176,1)] w-8"
                    : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial} 
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
