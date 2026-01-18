import type { ReactNode } from "react";

type caixa = {
    children: ReactNode;
};

export function Caixa ( {children}: caixa ) {

    return (
        <div className="
        flex-1
        bg-white
        rounded-2xl
        p-[1vw]
        " >
            { children }
        </div>
    )
}