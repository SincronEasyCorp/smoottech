import React from "react";

interface ProductSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reversed?: boolean;
  darkBackground?: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  description,
  image,
  imageAlt,
  reversed = false,
  darkBackground = false,
}) => {
  const containerClasses = darkBackground
    ? "bg-[rgba(56,70,116,1)] text-white"
    : "bg-neutral-200 text-[#384674]";

  const content = (
    <>
      <div className="self-stretch min-w-60 w-[403px] my-auto">
        <div className="w-full">
          <h2 className="text-[40px] font-bold leading-[48px]">{title}</h2>
          <p className="text-lg font-normal leading-[27px] mt-6">
            {description}
          </p>
        </div>
      </div>
      <img
        src={image}
        alt={imageAlt}
        className="aspect-[1.28] object-contain w-[947px] self-stretch min-w-60 my-auto max-md:max-w-full"
      />
    </>
  );

  return (
    <section
      className={`${containerClasses} flex min-h-[837px] w-full flex-col overflow-hidden items-stretch justify-center px-16 py-12 max-md:max-w-full max-md:px-5`}
    >
      <div className="flex w-full items-center gap-[27px] max-md:max-w-full">
        {reversed ? (
          <>{content}</>
        ) : (
          <>{[...Array.from(content.props.children)].reverse()}</>
        )}
      </div>
    </section>
  );
};
