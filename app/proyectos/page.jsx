"use client"

import { motion } from 'framer-motion'
import React, {useState } from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from "next/link";
import Image from 'next/image';
import BotonesSliderProyectos from "@/components/BotonesSliderProyectos";

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Featuring',
    description: 'Aplicación de colaboraciones musicales y visibilidad para artistas emergentes',
    stack: [{name: "ReactNative"}, {name: "PostgreSQL"}, {name: "NativeWind"}, {name: "Supabase"}],
    image: '/assets/work/featuring.png',
    live: '',
    github: 'https://github.com/felipevega-dev/Featuring',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Spotify Clone',
    description: 'Clon de la pagina principal de Spotify',
    stack: [{name: "NextJS"}, {name: "TailwindCSS"}, {name: "Supabase"}],
    image: '/assets/work/spotifyclone.png',
    live: 'https://vegadev-spotifyclone.vercel.app/',
    github: 'https://github.com/felipevega-dev/next13-spotifyclone',
  },
]

const Proyectos = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // obtener el slide actual
    const currentIndex = swiper.activeIndex;
    // Actualizar el proyecto actual con el slide actual
    setProject(projects[currentIndex]);

  }


  return (
    <motion.section 
          initial={{ opacity: 0}} 
          animate={{ 
              opacity:1, 
              transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
         }}
          className='min-h-screen flex flex-col justify-center py-12 px-4 xl:px-0 bg-inherit'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          {/* Imagen del proyecto */}
          <div className='w-full xl:w-[50%] mb-8 xl:mb-0'>
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className='h-[300px] sm:h-[400px] xl:h-[520px]'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-full relative group flex justify-center items-center bg-pink-50/20'>
                    {/* Overlay*/}
                    <div className='absolute inset-0 bg-black/10 z-10'></div>
                    {/* IMAGEN */}
                    <div className='relative w-full h-full'>
                      <Image 
                        src={project.image} 
                        fill 
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons*/}
              <BotonesSliderProyectos 
                containerStyles="flex gap-2 absolute left-0 right-0 
                bottom-4 z-20 w-full justify-center xl:justify-end" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>

          {/* Información del proyecto */}
          <div className='w-full xl:w-[50%] xl:h-[520px] flex flex-col justify-between'>
            <div className='flex flex-col gap-4 xl:gap-[30px]'>
              <div className='text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-3xl xl:text-[42px] font-bold leading-tight text-white capitalize'>
                {project.title}
              </h2>
              <h4 className='text-xl xl:text-[30px] font-bold leading-tight text-accent capitalize'>
                Proyecto {project.category}
              </h4>
              <p className='text-white/80'>{project.description}</p>
              <ul className='flex flex-wrap gap-2 xl:gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-lg xl:text-xl text-accent'>
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className='border border-white/20 my-1'></div>
              <div className='flex items-center gap-4 justify-end'>
                {/* PROYECTO EN VIVO */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                    bg-white/10 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-3xl
                      group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ver en vivo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              { /* github */}
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                    bg-white/10 flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl
                      group-hover:text-accent'/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repositorio de Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Proyectos
