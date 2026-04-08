"use client";

import Image from "next/image";
import Button from "../../atoms/Button";
import Link from "next/link";
import CloudsAnimation from "../../atoms/AnimationClouds";

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen font-press_start flex items-center justify-center text-center overflow-hidden">
            <Image
                src="/scene-no-cloud.png"
                alt="Imagem de fundo da seção principal do site"
                fill
                unoptimized
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center"
            />
            
            <CloudsAnimation />

            <div className="relative z-15 flex flex-col items-center gap-10 px-4 max-w-4xl uppercase text-wrap">
                <h2 className="lg:text-2xl text-black/65">Suba de nível na sua jornada tech</h2>
                <h1 className="text-2xl lg:text-6xl text-white font-bold text-pixel-outline">Encontro de Computação do Oeste Potiguar</h1>
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