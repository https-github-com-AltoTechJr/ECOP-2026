"use client";

import Image from "next/image";
import Button from "../../atoms/Button";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-96px)]relative h-screen font-press_start flex items-center justify-center text-center overflow-hidden">
            <Image
                src="/forest.svg"
                alt="Imagem de fundo da seção principal do site"
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center"
            />

            <div className="relative z-20 flex flex-col items-center gap-10 px-4 max-w-4xl uppercase text-wrap">
                <h2 className="lg:text-2xl text-black/65">Suba de nível na sua jornada tech</h2>
                <h1 className="text-2xl lg:text-6xl text-white font-bold">Encontro de Computação do Oeste Potiguar</h1>
                <Button variant="default" size="lg" className="cursor-pointer uppercase" asChild>
                    <Link href="/">
                        Inscreva-se
                    </Link>
                </Button>
            </div>
        </section>
    );
};

export default Hero;