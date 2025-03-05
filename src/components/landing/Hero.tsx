import React from "react";

export const Hero = () => {
  return (
    <section className="bg-[rgba(56,70,116,1)] flex min-h-[794px] w-full flex-col items-center text-[34px] text-white font-bold text-center tracking-[-0.68px] pt-[50px] max-md:max-w-full">
      <h1 className="max-md:max-w-full">
        Tecnologia inovadora para a gestão do seu negócio
      </h1>
      <div className="self-stretch flex min-h-[109px] w-full gap-[40px_80px] max-md:max-w-full" />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa10190ea77fd2c4f845cc3f2a30a7c1665da79259789e9655a8349b5d932b25?placeholderIfAbsent=true"
        alt="Platform Preview"
        className="aspect-[1.98] object-contain w-[1274px] max-w-full"
      />
    </section>
  );
};
