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
    stack: [{name: "ReactNative"}, {name: "PostgreSQL"}, {name: "NodeJS"}, {name: "Firebase"}],
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
  {
    num: '03',
    category: 'frontend',
    title: 'Mario Bros JS',
    description: 'Versión de Mario Bros en Javascript',
    stack: [{name: "HTML5"}, {name: "Javascript"}, {name: "Phaser"}],
    image: '/assets/work/thumb3.png',
    live: '',
    github: 'https://github.com/felipevega-dev/MarioBrosJS',
  },
  {
    num: '04',
    category: 'backend',
    title: 'Flask Swagger API',
    description: 'Clone de la pagina principal de Spotify',
    stack: [{name: "Flask"}, {name: "Swagger"}, {name: "Python"}, {name: "Transbank"}],
    image: '/assets/work/featuring.png',
    live: '',
    github: 'https://github.com/felipevega-dev/Flask-Swagger-Api',
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
          className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent
              text-outline'>
                {project.num}
              </div>
              {/* CATEGORIA */}
              <h2 className='text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize'>Proyecto {project.category}
              </h2>
              {/* DESCRIPCIÓN */}
              <p className='text-white/60'>{project.description}</p>
              {/* STACK */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return(
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className='border border-white/20'></div>
              {/* BTN */}
              <div className='flex items-center gap-4'>
                { /* PROYECTO EN VIVO*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight  className='text-white text-3xl
                        group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ver en vivo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                { /* github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group'>
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
          <div className='w-full xl:w-[50%]'>
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return ( 
                  <SwiperSlide key={index} className='w-full'>
                        <div className='h-[460px] relative group flex justify-center
                        items-center bg-pink-50/20'>
                          {/* Overlay*/}
                          <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                          {/* IMAGEN */}
                          <div className='relative w-full h-full'>
                            <Image 
                              src={project.image} 
                              fill 
                              className="object-cover"
                              alt=""/>
                          </div>
                        </div>
                        </SwiperSlide>
                      );
                  })}
                {/* Slider Buttons*/}
                <BotonesSliderProyectos 
                  containerStyles="flex gap-2 absolute right-0 
                  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                  w-[44px] h-[44px] flex justify-center items-center transition-all"
                  />
              </Swiper>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Proyectos
