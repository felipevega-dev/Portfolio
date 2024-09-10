import { Button } from "@/components/ui/button";
import { FiDownload }  from "react-icons/fi";

//COMPONENTES
import Redes from "@/components/Redes";
import Foto from "@/components/Foto";

const Inicio = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">Inicio
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          {/* TEXTO */}
          <div className="text-center xl:text-left ">
            <span className="text-xl">Desarrollador de Software</span>
            <h1 className="h1 mb-6">
              Hola, Soy <br /><span className="text-accent"> Felipe Vega</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Destaco en la creación de experiencias digitales elegantes 
            y domino varios lenguajes y tecnologías de programación.
            </p>
            {/* BTN Y REDES */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Descargar CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Redes 
                containerStyles="flex gap-6" 
                iconStyles= "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* FOTO */}
          <div>
            <Foto />
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Inicio;
