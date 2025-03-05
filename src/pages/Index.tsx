import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { ProductSection } from "@/components/landing/ProductSection";
import { Testimonial } from "@/components/landing/Testimonial";
import { CallToAction } from "@/components/landing/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductSection
        title="Cansado de sistemas complicados e poluídos?"
        description="Nós oferecemos um PDV intuitivo, modular e eficiente, permitindo que você personalize sua operação conforme suas necessidades. O sistema modular permite configurar seu caixa do seu jeito, garantindo total controle sobre a operação."
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea053ec5837646b3143f3b845e2ce06a8df0b2325ebd0bf0a73ce5718d2b26?placeholderIfAbsent=true"
        imageAlt="Sistema PDV intuitivo"
      />
      <ProductSection
        title="Aumente seus lucros e encante seus clientes"
        description="Transforme a gestão do seu bar, restaurante ou loja com a SmootTech. Uma solução feita por quem entende do setor, unindo tecnologia e praticidade para otimizar sua operação, aumentar seus lucros e proporcionar uma experiência impecável para seus clientes."
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3b37e36f3f25391d00ca89b88453795db279b6f65ed2495674102698dc162?placeholderIfAbsent=true"
        imageAlt="Gestão de restaurante"
        darkBackground
        reversed
      />
      <ProductSection
        title="Nosso propósito vai além da tecnologia!"
        description="Sabemos na pele os desafios de gerenciar um bar, restaurante ou loja. Foi por isso que criamos a SmootTech: uma solução desenvolvida por quem já enfrentou as mesmas dificuldades e conhece as necessidades reais do setor. Nosso compromisso é oferecer uma gestão eficiente, ágil e integrada, elevando a experiência do cliente e a rentabilidade do seu negócio."
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/287b877c8fcb3c64388b07d452a728de456389fa4e08e94c8e94b979f4aebdfd?placeholderIfAbsent=true"
        imageAlt="Propósito SmootTech"
      />
      <Testimonial />
      <CallToAction />
    </main>
  );
};

export default Index;
