"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Desarrollo Web',
    description: 'Desarrollo de sitios web y aplicaciones web a medida, con las últimas tecnologías y tendencias del mercado.',
    href: ""
  },
  {
    num: '02',
    title: 'Desarrollo Movil',
    description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma, utilizando tecnologías modernas y escalables.',
    href: ""
  },
  {
    num: '03',
    title: 'Diseño UI/UX',
    description: 'Diseño de interfaces de usuario y experiencia de usuario, con un enfoque en la usabilidad y accesibilidad.',
    href: ""
  },
  {
    num: '04',
    title: 'Backend Development',
    description: 'Desarrollo de servidores y APIs, utilizando tecnologías robustas y escalables, para aplicaciones web y móviles.',
    href: ""
  },
]

import { motion } from "framer-motion";

const Servicios = () => {
  return (
    <section className='min-h-[80] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div 
                initial= {{opacity: 0}} 
                animate={{ 
                  opacity:1,
                  transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                }}
                className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return <div 
                    key={index} 
                    className="flex-1 flex flex-col justify-center gap-6 group">
                {/* TOP */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold 
                  text-outline text-transparent group-hover:text-outline-hover transition-all
                  duration-500">{service.num}</div>
                  <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all
                  duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight  className='text-primary text-3xl'/>
                  </Link>
                </div> 
                { /* TITLE */}
                <h2 className='text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                { /* DESCRIPTION */}
                <p className='text-white/60'>{service.description}</p>
                { /* BORDER  */}
                <div className='border-b border-white/20 w-full'></div>
            </div>;  
          })}
        </motion.div>
      </div>
    </section>)
};

export default Servicios;