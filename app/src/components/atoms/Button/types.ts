import { VariantProps } from "class-variance-authority";
import { ComponentProps, ComponentPropsWithoutRef, ReactElement } from "react";
import { buttonVariants } from "./buttonVariants";

type ButtonBaseProps = VariantProps<typeof buttonVariants>;

type ButtonAsButton = ComponentProps<"button"> & ButtonBaseProps & {
    asChild?: false;
};

type ButtonAsChild = Omit<ComponentPropsWithoutRef<"button">, "children"> & ButtonBaseProps & {
    asChild: true;
    children: ReactElement<ComponentPropsWithoutRef<"button"> & { className?: string }>;
};

type IButton = ButtonAsButton | ButtonAsChild;

interface ISlot extends ComponentPropsWithoutRef<"button"> {
    children: ReactElement<ComponentPropsWithoutRef<"button"> & { className?: string }>;
    className?: string;
}

export type { IButton, ISlot };