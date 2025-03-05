
import React from "react";
import { motion } from "framer-motion";

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
      className={`${containerClasses} py-20 w-full overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
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
            
            <motion.button 
              className={`mt-8 px-6 py-3 rounded-md font-medium transition-all ${
                darkBackground 
                  ? "bg-white text-[rgba(56,70,116,1)] hover:bg-white/90" 
                  : "bg-[rgba(56,70,116,1)] text-white hover:bg-[rgba(56,70,116,0.9)]"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Saiba mais
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
