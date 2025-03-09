
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out text-base text-white font-normal", 
        isScrolled ? "bg-[#212529] shadow-md py-0.5" : "bg-[#212529] py-1"
      )}
    >
      <div className="flex min-h-[50px] w-full items-center justify-between flex-wrap px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f85485977c1b53a32481a4f8d42803c7bf5d3f50e2998596fc205327d8ad28?placeholderIfAbsent=true"
            alt="SmootTech Logo"
            className="aspect-[1.04] object-contain w-[45px] h-auto"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[rgba(109,141,176,1)] hover:bg-[rgba(89,121,156,1)] border gap-2 px-3 py-1 border-[rgba(109,141,176,1)] border-solid transition-all duration-300 rounded-md">
            Acessar
          </button>
        </div>
      </div>
    </nav>
  );
};
