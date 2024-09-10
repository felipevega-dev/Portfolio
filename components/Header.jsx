import Link from "next/link";
import { Button } from "./ui/button";

// COMPONENTES
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold"> 
                    Felipe Vega <span className="text-accent">.</span>Dev
                </h1>
            </Link>



            {/* Barra de navegación Escritorio & Botón de contratación */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contacto">
                    <Button>Contratame</Button>
                </Link>
            </div>

            {/* Barra de navegación Movil */}

            <div className="xl:hidden">
                <MobileNav />
            </div>
            
        </div>
    </header>
  );
};

export default Header;