import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube} from 'react-icons/fa'

const redes = [
   {
    icon: <FaGithub />,
    path: "https://github.com/felipevega-dev"
    },
    {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/felipevega-dev/"
    },
    {
    icon: <FaYoutube />,
    path: ""
    },
]


const Redes = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {redes.map((item, index) => {
        if (item.path.startsWith('http')) {
          // External link
          return (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyles}
            >
              {item.icon}
            </a>
          )
        } else {
          // Internal link
          return (
            <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          )
        }
      })}
    </div>
  )
}

export default Redes