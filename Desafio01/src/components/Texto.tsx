import type { ReactNode } from "react";

type Texto = {
    children: ReactNode;
}

export function Titulo ( {children}:Texto ) {
    return (
        <h1 className="
        text-[#2a2079]
        text-center
        font-bold
        text-[22px]
        md:text-[34px]
        lg:text-[7vh]
        " >
            { children }
        </h1>
    )
}

export function Titulo2 ( {children}:Texto ) {
    return (
        <h2 className="
        text-[#979bb4]
        text-[12px]
        md:text-[18px]
        lg:text-[2vh]
        " >
            {children}
        </h2>
    )
}

export function Subtitulo ( {children}:Texto ) {
    return (
        <h3 className="
        text-[#979bb4]
        text-[12px]
        md:text-[18px]
        lg:text-[3vh]
        font-bold
        " >
            {children}
        </h3>
    )
}

export function TextoOrcamento ( {children}:Texto ) {
    return (
        <h3 className="
        text-[18px]
        md:text-[24px]
        lg:text-[5vh]
        " >
            {children}
        </h3>
    )
}