import React from "react";

const Card = ({ name, height, birth_year, detail, loading }) => {
    return (
        <div className="flex flex-col gap-3 w-60 drop-shadow-lg rounded-md p-4 shadow-sm shadow-black/20 bg-white h-40">
            {loading && (
                <div className="h-full">
                    <div className="loading bg-neutral-300 w-full h-5 rounded-sm transition-all duration-150 "></div>
                    <hr />
                    <div className="flex justify-between w-full h-full">
                        <div className="flex flex-col justify-evenly">
                            <div className="loading w-20 h-4 bg-neutral-300"></div>
                            <div className="loading w-20 h-4 bg-neutral-300"></div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && (
                <>
                    <div className="text-xl">{name}</div>
                    <hr />
                    <div className="flex justify-between w-full h-full">
                        <div className="flex flex-col  justify-around">
                            <div className="text-sm text-neutral-600">
                                {height} cm
                            </div>
                            <div className="text-sm text-neutral-600">
                                {birth_year}
                            </div>
                        </div>
                        <div className="h-full flex items-end">
                            <div
                                onClick={detail}
                                className="transition-all duration-75 cursor-pointer hover:scale-[100.5%] flex active:scale-100 justify-center rounded-md bg-violet-700 text-white w-20 text-center h-6"
                            >
                                Detail
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
