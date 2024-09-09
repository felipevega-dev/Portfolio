import { motion } from "framer-motion"

// VARIANTES
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    },
};

// CALCULAR REVERSED INDEX

const reverseIndex = (index) => {
    const totalSteps = 6;   // Numero de pasos
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_, index) => {
    return (
      <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{
                duration: 0.2,
                ease: 'easeInOut',
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>  
  );
}

export default Stairs