import axios from "axios";
import React, { useEffect, useState } from "react";

const Modal = ({ url, close }) => {
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(false);

    const fetchActor = async () => {
        setLoading(true);
        console.log(url);
        try {
            const res = await axios.get(url).then((res) => res.data);

            setCharacter(res);
        } catch (e) {
            console.error(e);
            return;
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchActor();
    }, []);

    return (
        <div className="fixed flex justify-center items-center w-screen h-screen top-0 left-0 backdrop-blur-md bg-violet-800/10">
            <div className=" w-[300px] md:w-[600px] h-[500px] md:h-[440px] border border-violet-500 flex-col gap-4 p-4 bg-white relative overflow-hidden rounded-lg shadow-md z-10">
                <div className="flex w-full pt-6 h-6 justify-end px-6">
                    <img
                        src="/assets/star_wars_details.jpg"
                        className="absolute top-0 left-0 object-cover w-full h-full -z-10 opacity-0.5"
                    />
                    <div className="w-full h-full absolute top-0 left-0 -z-10 bg-violet-800/70"></div>
                    <span
                        className="text-red-500 z-50 font-bold absolute top-2 right-[20px] text-2xl cursor-pointer origin-center animation-spin hover:animation-ping transition-all duration-100"
                        onClick={close}
                    >
                        ×
                    </span>
                    {loading && (
                        <div className="w-full">
                            <div
                                className={`text-3xl h-8 w-full loading rounded font-bold bg-neutral-100 text-white                                
                            `}
                            ></div>
                            <div
                                className={`text-3xl h-8 w-40 mt-12 loading rounded font-bold bg-neutral-100 text-white                                
                            `}
                            ></div>
                            <div
                                className={`text-3xl h-8 w-40 mt-6 loading rounded font-bold bg-neutral-100 text-white                                
                            `}
                            ></div>
                            <div
                                className={`text-3xl h-8 w-40 mt-6 loading rounded font-bold bg-neutral-100 text-white                                
                            `}
                            ></div>
                            <div
                                className={`text-3xl h-8 w-40 mt-6 loading rounded font-bold bg-neutral-100 text-white                                
                            `}
                            ></div>
                            <div
                                className={`text-3xl h-8 w-40 mt-6 loading rounded font-bold bg-neutral-100 text-white                                
                            `}
                            ></div>
                        </div>
                    )}
                    {!loading && (
                        <div className="flex flex-col items-center w-full gap-4 ">
                            <div
                                className={`text-4xl w-full font-bold  text-white `}
                            >
                                {character?.name}
                            </div>
                            <hr className="border-1 stroke-white border-white w-full" />
                            <div className="flex flex-col w-full items-start text-white text-xl gap-3">
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">🧍‍♂️</span>
                                    {character?.height} cm
                                </span>
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">⚖</span>
                                    {character?.mass}
                                </span>
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">💈</span>
                                    {character?.hair_color}
                                </span>
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">🟡</span>
                                    {character?.skin_color}
                                </span>
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">👁</span>
                                    {character?.eye_color}
                                </span>
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">🎂</span>
                                    {character?.birth_year}
                                </span>
                                <span className="w-full flex gap-2 items-center">
                                    <span className="w-6">🚹</span>
                                    {character?.gender}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
