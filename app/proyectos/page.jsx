"use client"

import { motion } from 'framer-motion'
import React, {useState } from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from "next/link";
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Featuring',
    description: 'Aplicación de colaboraciones musicales y visibilidad para artistas emergentes',
    stack: [{name:"Expo"},{name: "ReactNative"}, {name: "TypeScript"}, {name: "PostgreSQL"}, {name: "NodeJS"}, {name: "Express"}, {name: "Firebase"}],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Spotify Clone',
    description: 'Clone de la pagina principal de Spotify',
    stack: [{name: "React"}, {name: "TailwindCSS"}, {name: "NextJS"}, {name: "Supabase"}],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Mario Bros JS',
    description: 'Versión de Mario Bros en Javascript',
    stack: [{name: "HTML5"}, {name: "Javascript"}, {name: "Phaser"}],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'backend',
    title: 'Flask Swagger API',
    description: 'Clone de la pagina principal de Spotify',
    stack: [{name: "Flask"}, {name: "Swagger"}, {name: "Python"}, {name: "Transbank"}],
    image: '/assets/thumb4.png',
    live: '',
    github: '',
  },


]

const Proyectos = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity:1}}
    className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none'>
            <div>
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
              <div>
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
                        <BsArrowUpRight  className='text-white text-3xl
                        group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ver en vivo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default Proyectos
