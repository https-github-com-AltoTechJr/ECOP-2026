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
    <header className="fixed top-8 left-0 w-full flex justify-center">
        <nav className="flex justify-center items-center max-w-full sm:max-w-125 md:max-w-137.5 xl:max-w-162.5 bg-white pt-4 pb-4 pl-8 pr-8 rounded-[50px]">
            <ul className={`flex justify-center items-center w-full gap-2 xl:gap-8 list-none font-press_start text-[.5rem] sm:text-[.6rem] md:text-[.68rem] xl:text-[.7rem]`}>
                {routes.map((el, index) => (
                    <li 
                    key={index}
                    className={`${pathname === el.route ? 'border-3 border-secondary' : ''} p-1 hover:scale-105`} >
                        <Link 
                        className="hover:underline"
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

