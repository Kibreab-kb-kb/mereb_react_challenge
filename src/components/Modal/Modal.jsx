import React from "react";

const Modal = ({ close }) => {
    return (
        <div className="fixed flex justify-center items-center w-screen h-screen top-0 left-0 backdrop-blur-md bg-neutral-100/10">
            <div className="w-[50vw] h-[60vh] border flex-col gap-4 p-4 bg-white rounded-lg shadow-md z-10">
                <div className="flex w-full h-6 justify-end px-2">
                    <span
                        className="text-red-500 text-2xl cursor-pointer origin-center animation-spin hover:animation-ping transition-all duration-100"
                        onClick={close}
                    >
                        ×
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Modal;
