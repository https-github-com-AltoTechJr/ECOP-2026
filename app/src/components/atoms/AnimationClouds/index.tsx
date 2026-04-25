'use client'

import Image from "next/image";

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

export default function CloudsAnimation() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
        {clouds.map((cloud, index) => (
            <Image
                key={index}
                src={cloud.src}
                alt={cloud.alt}
                width={Number(cloud.width)}
                height={Number(cloud.height)}
                className="absolute cloud-drift [image-rendering:pixelated]"
                style={{
                    top: cloud.top,
                    animationDuration: cloud.duration,
                    animationDelay: cloud.delay,
                    width: 'auto',
                    height: 'auto'
                }}
            />
        ))}
    </div>
  )
}

