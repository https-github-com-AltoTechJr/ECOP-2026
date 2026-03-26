import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
    {
        variants: {
            variant: {
                default: "bg-secondary border-4 font-press_start border-dark-yellow hover:bg-secondary/80",
            },
            size: {
                default: "py-2 px-4 text-lg",
                sm: "py-1 px-3",
                lg: "py-3 px-6",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = ({
    className,
    variant = "default",
    size = "default",
    children,
    ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {

    return (
        <>
            <button className={buttonVariants({ variant, size, className })} {...props}>
                {children}
            </button>
        </>
    )
}

export default Button;