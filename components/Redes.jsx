import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

const redes = [
   {
    icon: <FaGithub />,
    path: ""
    },
    {
    icon: <FaLinkedinIn />,
    path: ""
    },
    {
    icon: <FaYoutube />,
    path: ""
    },
]


const Redes = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {redes.map((item, index) =>  {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}   
                </Link>
            );
        })}
    </div>
  )
}

export default Redes