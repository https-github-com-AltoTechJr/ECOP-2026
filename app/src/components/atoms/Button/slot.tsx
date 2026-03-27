import { isValidElement, cloneElement, Children } from "react"
import { ISlot } from "./types"

const Slot = ({ children, className, ...props }: ISlot) => {
    const child = Children.only(children);

    if (!isValidElement(child)) return null;

    return cloneElement(child, {
        ...props,
        className: `${child.props.className || ""} ${className || ""}`.trim(),
    })
}

export { Slot }