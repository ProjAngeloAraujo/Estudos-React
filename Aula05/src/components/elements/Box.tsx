import type React from "react";

interface BoxProps {
    children?: React.ReactNode
}

export function BoxBase ( { children }: BoxProps ) {
    return (
        <div className={`boxbase`} >
            {children}
        </div>
    )
}

export function BoxCenter ( { children }: BoxProps ) {
    return (
        <div className={`boxcenter`} >
            {children}
        </div>
    )
}

export function BoxCenterY ( { children }: BoxProps ) {
    return (
        <div className={`boxcenterY`} >
            {children}
        </div>
    )
}