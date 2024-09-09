"use client";

import { Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { Link } from 'next/link';
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
        path: "/curriculum",
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
                <div className='mt-32 mb-48 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Felipe<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                {/* NAV */}
                <nav>
                    {links.map((link,index) => {
                        return (
                            <Link 
                                href={link.path} 
                                key={index}
                                className={`${link.path === pathname && "text-accent boder-b-2 border-accent" } text-xl capitalize 
                            hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
  );
};

export default MobileNav;