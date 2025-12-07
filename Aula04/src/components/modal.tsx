interface IModal{
    isOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setModalOpen }: IModal) {
    if(isOpen){
        return (
            <div>
                <h1>Meu Modal</h1>
                <div>

                </div>
                <button onClick={() => setModalOpen(false) }>Fechar</button>
            </div>
        )
    }
}