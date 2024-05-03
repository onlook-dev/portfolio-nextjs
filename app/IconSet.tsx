"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { IconObjctType } from "types/icons";
import clsx from "clsx";

export const icons: IconObjctType[] = [
  {
    component: FaGithub,
    href: "https://github.com/onlook-dev",
    className:
      "hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
  },
  {
    component: FaTwitter,
    href: "https://twitter.com/onlookdev",
    className: "hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500",
  },
  {
    component: FaEnvelope,
    href: "mailto:support@onlook.dev",
    className: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500",
  },
];

const IconSet = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[100px]">
        {icons.map((icon: IconObjctType, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8, transition: { duration: 0 } }}
            key={index}
            className={clsx(
              "transition duration-300",
              "hover:bg-zinc-700 hover:shadow-blue-500/50",
              "text-xl text-[#e0e0e0] bg-zinc-800",
              "shadow-lg cursor-pointer p-1 rounded-md",
              icon.className
            )}
          >
            <a href={icon.href} target="_blank">
              <icon.component />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default IconSet;
