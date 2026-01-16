interface Texto {
    children: string;
}

export function Titulo ( {children}:Texto ) {
    return (
        <h1 className="
        text-[#2a2079]
        font-bold
        text-[28px]
        md:text-[42px]
        lg:text-[7vh]
        " >
            { children }
        </h1>
    )
}