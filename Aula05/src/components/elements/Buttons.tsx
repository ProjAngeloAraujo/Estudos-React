import type React from "react";

interface ButtonsProps {
    children?: React.ReactNode
    color: 'Green' | 'White'
    bold?: boolean
}

export function ButtonBase ( { children, color, bold }: ButtonsProps ) {

    const ButtonColor =
        color === 'Green'
        ? 'ButtonBaseGreen'
        : color === 'White'
        ? 'ButtonBaseWhite'
        : 'ButtonBaseDefault'

    return (
        <button className={`${ButtonColor} ${bold ? 'bold' : ''}`} >
            {children}
        </button>
    )

}