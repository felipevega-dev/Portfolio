"use client";

import { Button } from "@/components/ui/button";
import { FiDownload }  from "react-icons/fi";
import { useState } from "react";

//COMPONENTES
import Redes from "@/components/Redes";
import Foto from "@/components/Foto";
import Stats from "@/components/Stats";

const Inicio = () => {

  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

  // Ruta al archivo PDF
  const pdfPath = '/assets/resume/CV_FELIPEVEGA.pdf'

  // Obtén el nombre del archivo de la ruta
  const fileName = pdfPath.split('/').pop()

  // Crea un elemento <a> temporal
  const link = document.createElement('a')
  link.href = pdfPath
  link.download = fileName || 'CV_FELIPEVEGA.pdf' // Usa el nombre del archivo o un nombre por defecto
  document.body.appendChild(link)

  // Simula un clic en el enlace para iniciar la descarga
  link.click()

  // Elimina el elemento <a> temporal
  document.body.removeChild(link)

  setIsDownloading(false)
  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-2 xl:pb-8">
          {/* TEXTO */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desarrollador de Software</span>
            <h1 className="h1 mb-6">
              Hola, Soy <br /><span className="text-accent"> Felipe Vega</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Especializado en el desarrollo de aplicaciones web y móviles. Combino creatividad y experiencia técnica para crear soluciones digitales elegantes y funcionales, utilizando las últimas tecnologías y mejores prácticas de la industria.
            </p>
            {/* BTN Y REDES */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <span>{isDownloading ? 'Descargando...' : 'Descargar CV'}</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Redes 
                containerStyles="flex gap-6" 
                iconStyles= "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* FOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Foto />
          </div>
        </div> 
      </div>
      <Stats />
    </section>
  )
}

export default Inicio;
