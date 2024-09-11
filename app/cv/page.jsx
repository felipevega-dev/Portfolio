"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaAws,  } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiPostgresql, SiMysql } from "react-icons/si";

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
      title: 'Telefono',
      value: '(+569)93023506',
    },
    {
      title: 'Experiencia',
      value: '4+ Años',
    },
    {
      title: 'Nacionalidad',
      value: 'Chilena',
    },
    {
      title: 'Freelance',
      value: 'Disponible',
    },
    {
      title: 'Email',
      value: 'felipevega.dev@gmail.com',
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
      company: 'Freelance',
      position: 'Desarrollo de Software',
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
      institution: 'DUOC UC',
      degree: 'Ingeniería en Informática',
      duration: '2021 - Presente',
    },
    {
      institution: 'EDUC. TESTING SERVICE',
      degree: 'TOEIC | 800 Puntos', 
      duration: '2023',
    },
    {
      institution: 'COURSERA',
      degree: 'Certificado Analisís de Datos de Google', 
      duration: '2023',
    },
    {
      institution: 'TALENTO DIGITAL',
      degree: 'Prueba Manejo de Inglés MC (86%)', 
      duration: '2022',
    },
    {
      institution: 'UNIVERSIDAD DE TARAPACÁ',
      degree: 'Pedagogía en Inglés (No Finalizada)',
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
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaAws />,
      name: "Amazon Web Services",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
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
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                    </p>
                  <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                          return(
                            <li key={index} className="bg-[#232329] h-[182px] py-6
                            px-10 rounded-xl flex flex-col justify-center items-center 
                            lg:items-start gap-1 "
                              >
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px]
                              text-center lg:text-left">{item.position}</h3>
                              <div className="flex items-center gap-3">
                                {/* PUNTO */}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                  </ScrollArea>
                  </div>
                </TabsContent>  
                {/* Educación */}
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                    </p>
                  <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return(
                            <li key={index} className="bg-[#232329] h-[182px] py-6
                            px-10 rounded-xl flex flex-col justify-center items-center 
                            lg:items-start gap-1 "
                              >
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px]
                              text-center lg:text-left">{item.degree}</h3>
                              <div className="flex items-center gap-3">
                                {/* PUNTO */}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                  </ScrollArea>
                  </div>
                </TabsContent> 
                {/* Habilidades */}
                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                        </p>
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                        {skills.skillList.map((skill, index) => {
                            return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                      <div className="text-6xl group-hover:text-accent
                                      transition-all duration-300">
                                        {skill.icon}
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                          </li>
                          );
                        })}
                      </ul>
                  </div>
                </TabsContent> 
                {/* Acerca de mi */}
                <TabsContent value="about" className="w-full">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                    mx-auto xl:mx-0">
                      {about.info.map((item, index) => {
                        return (
                          <li 
                            key={index} 
                            className="flex items-center justify-center 
                            xl:justify-start gap-4">
                            <span className="text-white/60">{item.title}</span>
                            <span className="text-xl">{item.value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                </TabsContent> 
          </div>
          </Tabs>
      </div>
    </motion.div>
      
  )
};

export default Cv
