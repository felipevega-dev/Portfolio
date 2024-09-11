"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,  } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs  } from "react-icons/si";

//Acerca de mi
const about = {
  title: 'Acerca de mi',
  description: "Soy un desarrollador de software con 4 años de experiencia en el desarrollo de aplicaciones web y móviles. Me especializo en la creación de experiencias digitales elegantes y funcionales, utilizando tecnologías modernas y escalables. Mi objetivo es ayudar a las empresas a alcanzar sus objetivos de negocio, a través de soluciones tecnológicas innovadoras y de alta calidad.",
  info: [
    {
      title: 'Nombre',
      value: 'Felipe Vega',
    },
    {
      title: 'Numero de telefono',
      value: '(+569) 93023506',
    },
    {
      title: 'Email',
      value: 'felipevega.dev@gmail.com',
    },
    {
      title: 'Ubicación',
      value: 'Concepción, Chile',
    },
    {
      title: 'Experiencia',
      value: '4+ Años',
    },
    {
      title: 'Freelance',
      value: 'Disponible',
    },
    {
      title: 'Idiomas',
      value: 'Ingles, Español',
    },
  ]
}

// Esperiencia

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Mi experiencia',
  description: 'He trabajado en varios proyectos de desarrollo de software, tanto en empresas como de forma independiente. A continuación, se detallan algunos de los proyectos más destacados en los que he participado:',
  items: [
    {
      company: 'E-commerce Startups',
      position: 'Freelance',
      duration: '2021 - Presente',
    },
    {
      company: 'Harrys Boutique',
      position: 'Desarrollador Web / Diseñador UI/UX',
      duration: '2019 - 2020',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Mi educación',
  description: 'He estudiado en varias instituciones educativas, obteniendo conocimientos en diversas áreas de la informática y la tecnología. A continuación, se detallan algunos de los cursos y certificaciones más relevantes que he realizado:',
  items: [
    {
      institution: 'DuocUC',
      degree: 'Ingeniería en Informática',
      duration: '2021 - Presente',
    },
    {
      institution: 'ETS',
      degree: 'TOEIC: 800 Puntos', 
      duration: '2023',
    },
    {
      institution: 'Coursera',
      degree: 'Certificado Analisís de Datos de Google', 
      duration: '2023',
    },
    {
      institution: 'Talento Digital',
      degree: 'Prueba Manejo Inglés MC (86%)', 
      duration: '2022',
    },
    {
      institution: 'Universidad de Tarapacá',
      degree: 'Pedagogía en Inglés',
      duration: '2018 - 2020',
    },
    
  ],
}

const skills = {
  title: "Mis habilidades",
  description: "He adquirido habilidades en diversas tecnologías y herramientas, que me permiten crear aplicaciones web y móviles de alta calidad. A continuación, se detallan algunas de las tecnologías en las que tengo experiencia:",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Cv = () => {
  return (
    <motion.div initial={{opacity: 0}} 
                animate={{opacity:1, transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
                }}
                className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
                >

      <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
            gap-6">
                <TabsTrigger value="experience">Experiencia</TabsTrigger>
                <TabsTrigger value="education">Educación</TabsTrigger>
                <TabsTrigger value="skills">Habilidades</TabsTrigger>
                <TabsTrigger value="about">Acerca de mi</TabsTrigger>
            </TabsList>
          
          
          { /* CONTENIDO */}

          <div className="min-h-[70vh] w-full">
                {/* Experiencia */}
                <TabsContent value="experience" className="w-full">
                  Experiencia
                </TabsContent>  
                {/* Educación */}
                <TabsContent value="education" className="w-full">
                  Educación
                </TabsContent> 
                {/* Habilidades */}
                <TabsContent value="skills" className="w-full">
                  Habilidades
                </TabsContent> 
                {/* Acerca de mi */}
                <TabsContent value="about" className="w-full">
                  Acerca de mi
                </TabsContent> 
          </div>
          </Tabs>
      </div>
    </motion.div>
      
  )
};

export default Cv
