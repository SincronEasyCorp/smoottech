
import React from "react";
import { motion } from "framer-motion";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface ProductSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  darkBackground?: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  image,
  imageAlt,
  reversed = false,
  darkBackground = false,
}) => {
  const containerClasses = darkBackground
    ? "bg-[rgba(56,70,116,1)] text-white"
    : "bg-neutral-200 text-[#384674]";

  return (
    <section
      className={`${containerClasses} py-20 w-full overflow-hidden relative`}
    >
      {/* Grade animada como fundo */}
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={darkBackground ? 0.1 : 0.05}
        duration={5}
        repeatDelay={0.8}
        className={`${darkBackground ? "fill-white/5 stroke-white/5" : "fill-[#384674]/5 stroke-[#384674]/5"} [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]`}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight">{title}</h2>
            <p className="text-lg mt-6 leading-relaxed opacity-90">{description}</p>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
