'use client';

import { useState } from 'react';
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
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+569) 93023506"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "felipevega.dev@gmail.com"
  },
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzpqjeq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Mensaje enviado con éxito. ¡Gracias por contactarme!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Trabajemos juntos!</h3>
              <p className="text-white/60">Si tienes un proyecto en mente o necesitas ayuda con tu sitio web, no dudes en contactarme. Estoy disponible para trabajar en proyectos de desarrollo web, diseño UI/UX y desarrollo de aplicaciones móviles.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname" 
                  placeholder="Nombre" 
                  value={formData.firstname} 
                  onChange={handleChange}
                  aria-label="Nombre"
                  required
                />
                <Input 
                  type="text" 
                  name="lastname" 
                  placeholder="Apellido" 
                  value={formData.lastname} 
                  onChange={handleChange}
                  aria-label="Apellido"
                  required
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Correo Electrónico" 
                  value={formData.email} 
                  onChange={handleChange}
                  aria-label="Correo Electrónico"
                  required
                />
                <Input 
                  type="tel" 
                  name="phone" 
                  placeholder="Teléfono" 
                  value={formData.phone} 
                  onChange={handleChange}
                  aria-label="Teléfono"
                />
              </div>
              <Select onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un servicio"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un servicio</SelectLabel>
                    <SelectItem value="Desarrollo Web">Desarrollo Web</SelectItem>
                    <SelectItem value="Diseño UI/UX">Diseño UI/UX</SelectItem>
                    <SelectItem value="Desarrollo Móvil">Desarrollo Móvil</SelectItem>
                    <SelectItem value="Desarrollo Backend">Desarrollo Backend</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Escribe tu mensaje aquí."
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Mensaje"
                required
              />
              <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
              {successMessage && (
                <p className="text-green-500 mt-4" role="alert">
                  {successMessage}
                </p>
              )}
            </form> 
          </div>
          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]" aria-hidden="true">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>  
      </div>
    </motion.section>
  );
};

export default Contacto;