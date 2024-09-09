"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "servicios",
        path: "/servicios",
    },
    {
        name: "Curriculum",
        path: "/curriculum",
    },
    {
        name: "Proyectos",
        path: "/proyectos",
    },
    {
        name: "contacto",
        path: "/contacto",
    }

]

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8"> 
            {links.map((link, index) => {
                return  (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            link.path === pathname && "text-accent border-b-2 boder-accent" 
                        } capitalize font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;