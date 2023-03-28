import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
interface ModalProps {
    buttonLabel: string;
    children: any;
}

const Modal = ({
    children,
    buttonLabel,
}:ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);

    const handleClickOutside = (event: { target: any; }) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
    };
    
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [modalRef, setIsOpen, isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {buttonLabel}
            </button>
            {isOpen &&
                
                <div className="fixed
                 top-0 left-0 right-0 bottom-0
               
                   flex items-center justify-center 
                   z-50 
                   bg-gray-500 bg-opacity-75
                    ">
                    <div ref={modalRef} className="bg-white
                       transition duration-500 ease-in-out
                    rounded-lg shadow-lg p-6 m-4 max-w-md w-full
                        ">
                        <button
                            title="Close"
                            onClick={handleClose} className="float-right ml-20 
                             mt-4 mr-4">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {children}
                    </div>
                </div>
                // document.getElementById('modal-root')
            }
        </div>
    );
};

export default Modal;