
import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  text: string;
  delay: number;
}

const FeatureCard = ({ icon, text, delay }: FeatureCardProps) => (
  <motion.div 
    className="flex-1 min-w-[280px] bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[rgba(109,141,176,0.2)] flex items-center justify-center mb-6">
        <img
          src={icon}
          alt="Feature icon"
          className="w-9 h-9 object-contain"
        />
      </div>
      <p className="text-xl text-white font-semibold leading-tight">{text}</p>
    </div>
  </motion.div>
);

export const Features = () => {
  return (
    <section className="bg-[rgba(56,70,116,1)] w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-white text-2xl md:text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Por que escolher a SmootTech?
        </motion.h2>
        
        <div className="flex flex-wrap gap-6 justify-center">
          <FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2ab2ad3cbee5012b1173bcdb85639484a52b18ca7839cd615cb79eee26bcd35f?placeholderIfAbsent=true"
            text="Simplificamos a gestão de bares e restaurantes com eficiência"
            delay={0.1}
          />
          <FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc02a84d27f55f54fde61ed7f5f77926bae61a1198e4a6bcf3ba13f56f623c3?placeholderIfAbsent=true"
            text="Interface intuitiva e funcionalidades poderosas para aumentar sua lucratividade"
            delay={0.2}
          />
          <FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/440794ff11440c0b59339df709f11ff85bf14d1265357ae42c54b02dd1df5de6?placeholderIfAbsent=true"
            text="Garantimos confiabilidade e proteção total para seus dados e operações"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
