import React, { useState } from "react";

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  companyLogo?: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    quote:
      "A SmootTech transformou a maneira como gerenciamos nosso restaurante. A agilidade e eficiência que está nos proporcionando são incomparáveis!",
    author: "Kevin Sena",
    role: "Proprietário",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/acb3dd7e0ae31acf0c1d760f9d2dcbdf450404ce998860824346882940d8efa1?placeholderIfAbsent=true",
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4910d350cb6e8f08ad9900a8ab5784390d9637fa2579312bb3b52265b5ebe5a7?placeholderIfAbsent=true",
    rating: 5,
  },
  {
    quote:
      "Desde que começamos a usar o Smoottech, nossa produtividade aumentou significativamente. Recomendo para qualquer estabelecimento!",
    author: "João Silva",
    role: "Gerente",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ca046a62429c37a5d23bb1958ac42ad182f0ee37fd489e5948612e413e1fc012?placeholderIfAbsent=true",
    rating: 5,
  },
];

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-[rgba(56,70,116,1)] min-h-[540px] w-full overflow-hidden pt-[136px] pb-[81px] px-16 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full items-center max-md:max-w-full">
          <div className="self-stretch flex min-w-60 flex-col overflow-hidden items-center w-[1312px] my-auto max-md:max-w-full">
            <div className="flex w-[768px] max-w-full flex-col overflow-hidden items-center">
              <div className="flex gap-1 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={`URL_${21 + i}`}
                    alt="Star"
                    className="aspect-[1.05] object-contain w-5 shrink-0"
                  />
                ))}
              </div>
              <blockquote className="self-stretch text-white text-center text-2xl font-bold leading-[34px] mt-8 max-md:max-w-full">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              <div className="flex items-center gap-5 text-base text-white mt-8">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="aspect-[1] object-contain w-14 self-stretch shrink-0 my-auto rounded-[50%]"
                />
                <div className="self-stretch my-auto">
                  <div className="font-semibold">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="font-normal">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
                {testimonials[currentIndex].companyLogo && (
                  <img
                    src={testimonials[currentIndex].companyLogo}
                    alt="Company logo"
                    className="aspect-[1.03] object-contain w-16 self-stretch shrink-0 my-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-[9px] justify-center flex-wrap mt-12 p-2.5 max-md:max-w-full max-md:mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-[50%] ${
                index === currentIndex
                  ? "bg-[rgba(109,141,176,1)]"
                  : "bg-[rgba(204,204,204,1)]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
