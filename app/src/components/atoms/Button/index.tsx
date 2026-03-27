import { buttonVariants } from "./buttonVariants";
import { Slot } from "./slot";
import { IButton } from "./types";

const Button = ({
    className,
    variant = "default",
    size = "default",
    children,
    asChild,
    ...props
}: IButton) => {
    if (asChild) {
        return (
            <Slot
                className={buttonVariants({ variant, size, className })}
                {...props}
            >
                {children}
            </Slot>
        )
    }

    return (
        <button
            className={buttonVariants({ variant, size, className })}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;