
import React from "react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  const handleContact = () => {
    // Implement contact functionality
    console.log("Contact specialist clicked");
  };

  return (
    <section className="bg-[rgba(33,37,41,1)] py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[rgba(109,141,176,0.2)] to-transparent opacity-20 rounded-full -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-[rgba(109,141,176,0.2)] to-transparent opacity-20 rounded-full translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Transforme sua gestão <span className="text-[rgba(109,141,176,1)]">agora mesmo!</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mt-6 mb-8 max-w-lg">
              Leve seu negócio a um novo patamar de eficiência com a gente. 
              Experimente por 14 dias sem compromisso.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={handleContact}
                className="bg-[rgba(109,141,176,1)] hover:bg-[rgba(89,121,156,1)] text-white font-medium px-6 py-3 rounded-md transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Falar com um especialista
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca8def902c57abb5ed46812411d9e0e88bd1356e4e1269efcc5f981beb94395?placeholderIfAbsent=true"
              alt="Business transformation"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
