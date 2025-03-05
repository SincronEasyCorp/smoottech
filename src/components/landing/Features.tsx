import React from "react";

const FeatureCard = ({ icon, text }: { icon: string; text: string }) => (
  <div className="min-w-60 flex-1 shrink basis-[0%]">
    <div className="flex w-full flex-col items-stretch">
      <img
        src={icon}
        alt="Feature icon"
        className="aspect-[1] object-contain w-12 self-center"
      />
      <div className="w-full mt-6 text-center">{text}</div>
    </div>
  </div>
);

export const Features = () => {
  return (
    <section className="bg-[rgba(56,70,116,1)] min-h-[257px] w-full overflow-hidden text-2xl text-white font-bold text-center leading-[34px] pt-[25px] pb-[43px] px-16 max-md:max-w-full max-md:px-5">
      <div className="min-h-[189px] w-full max-md:max-w-full">
        <div className="flex w-full gap-[40px_48px] justify-center flex-wrap max-md:max-w-full">
          <FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2ab2ad3cbee5012b1173bcdb85639484a52b18ca7839cd615cb79eee26bcd35f?placeholderIfAbsent=true"
            text="Simplificamos a gestão de bares e restaurantes com eficiência"
          />
          <FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc02a84d27f55f54fde61ed7f5f77926bae61a1198e4a6bcf3ba13f56f623c3?placeholderIfAbsent=true"
            text="Interface intuitiva e funcionalidades poderosas para aumentar sua lucratividade"
          />
          <FeatureCard
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/440794ff11440c0b59339df709f11ff85bf14d1265357ae42c54b02dd1df5de6?placeholderIfAbsent=true"
            text="Garantimos confiabilidade e proteção total para seus dados e operações"
          />
        </div>
      </div>
    </section>
  );
};
