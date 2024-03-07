import { manrope } from "lib/util/get-class";
import React from "react";
import clsx from "clsx";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className={clsx(
        manrope,
        "text-secondary-white text-hero-primary-para",
        "space-y-6 mb-12"
      )}
    >
      <p className="leading-normal tracking-wide">
        Onlook lets anyone write production ready code. 
      </p>
    </div>
  );
};

export default Hero;
