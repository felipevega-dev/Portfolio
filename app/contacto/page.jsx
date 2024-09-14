"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefono",
    description: "(+569) 93023506"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "felipevega.dev@gmail.com"
  },
]

import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <motion.section 
            initial= {{ opacity: 0 }}
            animate= {{ 
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="py-6">

            <div className="container mx-auto">
              <div className="flex flex-col xl:flex-row gap-[30px]">
                { /* FORM */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                  <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                    <h3 className="text-4xl text-accent">Trabajemos juntos!</h3>
                    <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni iusto minus vero eum, incidunt dignissimos iste mollitia velit, repellendus, ducimus aliquid consectetur qui laboriosam ipsum est animi numquam vel!
                    </p>
                  
                  { /* INPUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input type="firstname" placeholder="Nombre"/>
                      <Input type="lastname" placeholder="Apellido"/>
                      <Input type="email" placeholder="Correo Electronico"/>
                      <Input type="phone" placeholder="Telefono"/>
                    </div>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona un servicio"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Selecciona un servicio</SelectLabel>
                          <SelectItem value="est">Desarrollo Web</SelectItem>
                          <SelectItem value="cst">Diseño UI/UX</SelectItem>
                          <SelectItem value="mst">Desarrollo Movil</SelectItem>
                          <SelectItem value="bkd">Desarrollo Backend</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {/* text area*/}
                    <Textarea
                      className= "h-[200px]"
                      placeholder= "Escribe tu mensaje aquí."
                    />
                    {/* btn */}
                    <Button size="md" className="max-w-40">
                      Enviar mensaje
                    </Button>
                  </form> 
                </div>
                { /* INFO */}
                <div className="flex-1 flex items-center xl:justify-end order-1
                xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                      {info.map((item, index) => {
                        return <li key={index} className="flex items-center gap-6">
                          <div className="w-[52px] h-[52px] xl:w-[72px] xl:-[72px] bg-[#27272c] text-accent 
                          rounded-md flex items-center justify-center">
                            <div className="text-[28px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <p className="text-white/60">{item.title}</p>
                            <h3 className="text-xl">{item.description}</h3>
                          </div>
                        </li>
                      })}
                    </ul>
                </div>
              </div>  
            </div>
    </motion.section>
  )
}

export default Contacto