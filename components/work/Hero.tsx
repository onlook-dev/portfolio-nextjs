import { manrope } from "lib/util/get-class";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="text-secondary-white mb-14 relative">
      <div className={`${manrope} space-y-12 text-hero-primary-para`}>
        <p className="leading-normal tracking-wide">
          Add an your collection of
          projects here and keep shipping. 
        </p>
      </div>

      <div className="hidden sm:block absolute opacity-20 right-0 blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full w-[200px] h-[200px] -z-10" />
    </div>
  );
};

export default Hero;
