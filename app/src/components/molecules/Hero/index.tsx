"use client";

import Image from "next/image";
import Button from "../../atoms/Button";
import Link from "next/link";

const Hero: React.FC = () => {

    const clouds = [
        {
            src: "/first-cloud.svg",
            alt: "Nuvem 1",
            width: 180,
            height: 90,
            top: "12%",
            duration: "19s",
            delay: "-5s",
        },
        {
            src: "/second-cloud.svg",
            alt: "Nuvem 2",
            width: 220,
            height: 110,
            top: "28%",
            duration: "23s",
            delay: "-1s",
        },
        {
            src: "/third-cloud.svg",
            alt: "Nuvem 3",
            width: 140,
            height: 70,
            top: "45%",
            duration: "26s",
            delay: "-3s",
        },
        {
            src: "/fourth-cloud.svg",
            alt: "Nuvem 4",
            width: 170,
            height: 85,
            top: "20%",
            duration: "22s",
            delay: "-7s",
        },
    ];

    return (
        <section className="relative w-full h-screen font-press_start flex items-center justify-center text-center overflow-hidden">
            <Image
                src="/scene-no-cloud.png"
                alt="Imagem de fundo da seção principal do site"
                fill
                priority
                quality={100}
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 z-10 pointer-events-none">
                {clouds.map((cloud, index) => (
                    <Image
                        key={index}
                        src={cloud.src}
                        alt={cloud.alt}
                        width={cloud.width}
                        height={cloud.height}
                        className="absolute cloud-drift [image-rendering:pixelated]"
                        style={{
                            top: cloud.top,
                            animationDuration: cloud.duration,
                            animationDelay: cloud.delay,
                        }}
                    />
                ))}
            </div>

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