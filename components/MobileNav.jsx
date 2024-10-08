"use client";

import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "inicio",
        path: "/",
    },
    {
        name: "servicios",
        path: "/servicios",
    },
    {
        name: "curriculum",
        path: "/cv",
    },
    {
        name: "proyectos",
        path: "/proyectos",
    },
    {
        name: "contacto",
        path: "/contacto",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className='text-[32px] text-accent'/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* LOGO */}
                <div className='mt-24 mb-20 text-center'>
                    <Link href="/" passHref>
                        <h1 className='text-3xl font-semibold'>
                            Felipe<span className='text-accent'>.</span>Vega
                        </h1>
                    </Link>
                </div>
                {/* NAV */}
                <nav className='flex flex-col justify-start items-center gap-8'>
                    {links.map((link, index) => (
                        <Link 
                            href={link.path} 
                            key={index}
                            passHref
                            legacyBehavior
                        >
                            <a 
                                className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} 
                                text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </a>
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;