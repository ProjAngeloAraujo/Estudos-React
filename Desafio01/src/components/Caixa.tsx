import type { ReactNode } from "react";

type caixa = {
    children: ReactNode;
    className: string;
};

export function Caixa ( {children, className}: caixa ) {

    return (
        <div className={`
        ${className}
        flex-1
        bg-white
        rounded-2xl
        p-[1vw]
        font-medium
        `} >
            { children }
        </div>
    )
}