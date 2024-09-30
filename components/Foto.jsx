"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Foto = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="flex justify-center items-center h-full"
      >
        {/* FOTO CON MARCO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative"
        >
          {/* CIRCULO */}
          <motion.div className="absolute w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] xl:w-[490px] xl:h-[490px] -top-[15px] -left-[15px] sm:-top-[16px] sm:-left-[16px] xl:-top-[20px] xl:-left-[20px]">
            <motion.svg
              className="w-full h-full"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#61dafb"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
          
          {/* FOTO */}
          <div className="w-[250px] h-[250px] sm:w-[298px] sm:h-[298px] xl:w-[450px] xl:h-[450px] relative">
            <Image
              src="/assets/yo1.png"
              priority
              quality={100}
              fill
              alt="Profile picture"
              className="object-contain mix-blend-lighten"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Foto