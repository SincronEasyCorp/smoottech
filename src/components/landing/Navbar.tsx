import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-[rgba(33,37,41,1)] w-full overflow-hidden text-base text-white font-normal whitespace-nowrap">
      <div className="flex min-h-[72px] w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap px-16 max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f85485977c1b53a32481a4f8d42803c7bf5d3f50e2998596fc205327d8ad28?placeholderIfAbsent=true"
          alt="SmootTech Logo"
          className="aspect-[1.04] object-contain w-[58px] self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch flex items-center gap-4 justify-center my-auto">
          <button className="self-stretch bg-[rgba(109,141,176,1)] border gap-2 my-auto px-5 py-2 border-[rgba(109,141,176,1)] border-solid hover:opacity-90 transition-opacity">
            Acessar
          </button>
        </div>
      </div>
    </nav>
  );
};
