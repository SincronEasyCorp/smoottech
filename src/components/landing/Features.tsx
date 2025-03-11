
import React from "react";
import { motion } from "framer-motion";
import { Utensils, LayoutDashboard, ShieldCheck } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
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
        {icon}
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
            icon={<Utensils className="w-9 h-9 text-white" />}
            text="Simplificamos a gestão de bares e restaurantes com eficiência"
            delay={0.1}
          />
          <FeatureCard
            icon={<LayoutDashboard className="w-9 h-9 text-white" />}
            text="Interface intuitiva e funcionalidades poderosas para aumentar sua lucratividade"
            delay={0.2}
          />
          <FeatureCard
            icon={<ShieldCheck className="w-9 h-9 text-white" />}
            text="Garantimos confiabilidade e proteção total para seus dados e operações"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};
