import React from "react";

export const CallToAction = () => {
  const handleContact = () => {
    // Implement contact functionality
    console.log("Contact specialist clicked");
  };

  return (
    <section className="bg-[rgba(33,37,41,1)] flex min-h-[355px] w-full flex-col overflow-hidden items-stretch justify-center px-16 py-[72px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full text-white max-md:max-w-full">
            <h2 className="text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
              Transforme sua gestão agora mesmo!
            </h2>
            <p className="text-lg font-normal mt-6 max-md:max-w-full">
              Leve seu negócio a um novo patamar de eficiência com a gente.
            </p>
          </div>
          <div className="flex gap-4 text-base text-white font-normal mt-8">
            <button
              onClick={handleContact}
              className="self-stretch bg-[rgba(109,141,176,1)] border min-w-60 gap-2 px-6 py-3 border-[rgba(109,141,176,1)] border-solid max-md:px-5 hover:opacity-90 transition-opacity"
            >
              Falar com um de nossos especialistas
            </button>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ca8def902c57abb5ed46812411d9e0e88bd1356e4e1269efcc5f981beb94395?placeholderIfAbsent=true"
          alt="Business transformation"
          className="aspect-[1.69] object-contain w-[358px] self-stretch min-w-60 my-auto"
        />
      </div>
    </section>
  );
};
