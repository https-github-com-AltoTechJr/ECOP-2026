'use client'

import { ROUTES } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { VscClose } from "react-icons/vsc";

export default function NavBar() {
    const [ isModal, setIsModal ] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        document.body.style.overflow = isModal ? "hidden" : "auto"

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isModal])

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center">
        <nav className="flex justify-between items-center w-full bg-white pt-4 pb-4 pl-2 md:pl-8 pr-2 md:pr-8">
            <Image 
            className="h-12 w-32 sm:h-16 sm:w-40 object-contain"
            src='/Logo.svg'
            alt="Logo"
            height={100}
            width={100}
            priority={true}
            />  

            <ul className={`hidden md:flex justify-center items-center w-full gap-2 xl:gap-8 list-none font-press_start text-[.5rem] sm:text-[.6rem] md:text-[.68rem] xl:text-[.7rem]`}>
                {ROUTES.map((el, index) => (
                    <li 
                    key={index}
                    className={`${pathname === el.route ? 'border-3 border-secondary' : ''} p-1 `} >
                        <Link 
                        className="inline-block transform hover:scale-105 hover:underline"
                        href={el.route} >
                            {el.name} 
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex w-full md:w-32 justify-center items-center gap-2">
                <Image 
                className="w-6 md:w-8 object-contain animate-bounce"
                style={{ animationDelay: '0s' }}
                src='/heart.svg'
                alt="heart"
                height={100}
                width={100}
                priority={false}
                />

                <Image 
                className="w-6 md:w-8 object-contain animate-bounce"
                style={{ animationDelay: '0.2s' }}
                src='/heart.svg'
                alt="heart"
                height={100}
                width={100}
                priority={false}
                />

                <Image 
                className="w-6 md:w-8 object-contain animate-bounce"
                style={{ animationDelay: '0.4s' }}
                src='/heart.svg'
                alt="heart"
                height={100}
                width={100}
                priority={false}
                />
            </div>

            <Image 
            className="w-6 md:w-8 md:hidden object-contain"
            src='/heart.svg'
            alt="Vercel"
            height={100}
            width={100}
            onClick={() => setIsModal(true)}
            priority={false}
            />

            {/* MODAL */}
            {isModal && (
            <>
                {/* Overlay */}
                <div
                className="fixed top-0 left-0 w-screen h-screen bg-black/70 z-40"
                />

                {/* Container */}
                <div 
                style={{animation: 'popIn 0.25s ease forwards'}} 
                className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 ">
                
                    {/* Box */}
                    <div
                    className={`
                    relative
                    w-[85%] max-w-md
                    bg-primary bg-[url('/Scene.png')] object-contain
                    border-4 border-secondary
                    shadow-[6px_6px_0_#000]
                    p-6
                    font-press_start
                    `}>
                        <h2 className="text-white text-sm mb-6 text-center tracking-widest">
                        Menu
                        </h2>

                        <VscClose 
                        onClick={() => setIsModal(false)}
                        className="absolute h-6 w-6 top-2 right-2" />

                        <ul className="flex flex-col gap-4">
                            {ROUTES.map((el, index) => (
                                <li
                                key={index}
                                className={`
                                relative pl-4
                                text-left
                                text-white text-xs tracking-widest
                                transition-all
                                ${pathname === el.route ? 'text-yellow-400' : ''}
                                `}>
                                    {/* Cursor */}
                                    <span
                                    className={`
                                    absolute left-0 top-1/2 -translate-y-1/2
                                    ${pathname === el.route ? 'text-yellow-400' : 'opacity-0'}
                                    `}>
                                        <MdPlayArrow className="h-3.5 w-4.5 text-bold" />
                                    </span>

                                    <Link
                                    href={el.route}
                                    className="
                                    inline-block
                                    hover:translate-x-1
                                    hover:text-yellow-300
                                    ">
                                        {el.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
            )}
        </nav>
    </header>
  )
}

