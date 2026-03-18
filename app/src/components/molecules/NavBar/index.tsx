'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

const routes = [
    { name: 'Início', route: '/' },
    { name: 'Sobre', route: '/sobre' },
    { name: 'Programação', route: '/programacao' },
    { name: 'Eventos', route: '/eventos' },
    { name: 'Artigos', route: '/artigos' }
]

export default function NavBar() {
    const pathname = usePathname()

  return (
    <header className="flex justify-center fixed top-8 w-full">
        <nav className="flex justify-center items-center w-[46%] bg-white pt-4 pb-4 pl-8 pr-8 rounded-[50px]">
            <ul className={`flex justify-center items-center w-full gap-8 list-none font-press_start text-[.7rem]`}>
                {routes.map((el, index) => (
                    <li 
                    key={index}
                    className={`${pathname === el.route ? 'border-3 border-secondary' : ''} p-1`} >
                        <Link 
                        
                        href={el.route} >
                            {el.name} 
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

