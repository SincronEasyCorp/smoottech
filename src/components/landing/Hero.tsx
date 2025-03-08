
import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const Hero = () => {
  return (
    <section className="bg-[rgba(56,70,116,1)] flex w-full flex-col items-center pt-20 pb-16 px-6 md:px-16 max-w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/0f9a7f5b59654d7b8b62f07f220dd8b2?apiKey=TEMP')] bg-cover bg-center opacity-10"></div>
      
      <ContainerScroll
        titleComponent={
          <motion.div 
            className="max-w-4xl mx-auto text-center z-10 py-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[28px] md:text-[34px] lg:text-[42px] text-white font-bold text-center tracking-[-0.68px] leading-tight mb-4">
              Tecnologia inovadora para a <span className="text-[rgba(109,141,176,1)]">gestão do seu negócio</span>
            </h1>
            
            <p className="mt-4 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Simplifique operações, encante clientes e eleve seus resultados com nossa plataforma completa.
            </p>
          </motion.div>
        }
      >
        <img
          src="public/lovable-uploads/3a430718-0af7-4a58-b985-2afc4d1a4be2.png"
          alt="Platform Preview"
          className="w-full h-full object-cover"
        />
      </ContainerScroll>
    </section>
  );
};
