
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const Hero = () => {
  return (
    <section className="bg-[rgba(56,70,116,1)] flex w-full flex-col items-center pt-32 pb-16 px-6 md:px-16 max-w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/0f9a7f5b59654d7b8b62f07f220dd8b2?apiKey=TEMP')] bg-cover bg-center opacity-10"></div>
      
      <ContainerScroll
        titleComponent={
          <motion.div 
            className="max-w-4xl mx-auto text-center z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[28px] md:text-[34px] lg:text-[42px] text-white font-bold text-center tracking-[-0.68px] leading-tight">
              Tecnologia inovadora para a <span className="text-[rgba(109,141,176,1)]">gestão do seu negócio</span>
            </h1>
            
            <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Simplifique operações, encante clientes e eleve seus resultados com nossa plataforma completa.
            </p>
          </motion.div>
        }
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa10190ea77fd2c4f845cc3f2a30a7c1665da79259789e9655a8349b5d932b25?placeholderIfAbsent=true"
          alt="Platform Preview"
          className="w-full h-full object-contain"
        />
      </ContainerScroll>
    </section>
  );
};
