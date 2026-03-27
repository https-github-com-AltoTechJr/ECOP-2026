import Link from "next/link";
import Button from "./src/components/atoms/Button";
import Image from "next/image";
import { Route } from "next";

const NotFound = () => {
    const items = {
        title: "error 404 - Perdido no Semiárido Digital",
        description: "A página que você está procurando não existe ou foi movida para outro lugar. Não se preocupe, o caminho de volta é logo ali embaixo.",
        buttonBack: { label: "início", link: "/" },
        image: "/monster.svg",
    }

    return (
        <div className="flex justify-center bg-[linear-gradient(to_right,#00000039_1px,transparent_1px),linear-gradient(to_bottom,#00000030_1px,transparent_1px)] bg-size-[24px_24px]">
            <div className="mx-12 max-w-5xl flex flex-col sm:flex-row items-center justify-center h-screen gap-20">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-4xl font-bold mb-4 font-press_start uppercase">{items.title}</h1>
                    <div className="h-1 w-2xs bg-secondary"></div>
                    <p className="text-lg text-gray-600">{items.description}</p>
                    <Button className="uppercase" asChild>
                        <Link href={items.buttonBack.link as Route}>
                            {items.buttonBack.label}
                        </Link>
                    </Button>
                </div>
                <div className="hidden md:block">
                    <Image
                        src={items.image}
                        alt="Not Found"
                        width={1200}
                        height={1200}
                        className="mt-8 w-55 sm:w-280 h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound;