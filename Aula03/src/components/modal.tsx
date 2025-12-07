interface IModal{
    isOpen: boolean;
}

export function Modal({ isOpen }: IModal) {
    if(isOpen){
        return (
            <div>
                <p>Modal</p>
            </div>
        )
    }
}