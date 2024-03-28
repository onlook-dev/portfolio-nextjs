import { manrope } from "lib/util/get-class";
import Image from "next/image";
import clsx from "clsx";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="text-secondary-white mb-20">
      <div className={clsx(manrope, "space-y-12", "text-hero-primary-para")}>
        <p className="leading-normal tracking-wide">
          <span style={{ fontWeight: 700 }}>Welcome</span>, to the
          Onlook demo website. Put a brief background about yourself here.
        </p>
        <div className="w-full">
          <Image
            src="/assets/hero-main.jpg"
            className={clsx(
              "select-none",
              "rounded-full",
              "aspect-auto",
              "grayscale-0",
            "w-[704%]",
            "h-[690px]",
            "rounded-none"
            )}
            width={1000}
            height={1000}
          alt="main-image"
          draggable="false"
          quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
