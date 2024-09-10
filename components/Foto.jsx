"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Foto = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div>
            <div className="w-[298px] h-[298px] xl:w-[498px]
            xl:h-[498px] mix-blend-lighten">
                <Image 
                    src="/assets/BGFELIX.png" 
                    priority 
                    quality={100} 
                    fill
                    alt="" 
                    className= "object-contain" 
                />
            </div>
        </motion.div>
    </div>
  )
}

export default Foto