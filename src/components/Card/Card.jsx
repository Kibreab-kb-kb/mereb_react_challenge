import React from "react";

const Card = ({ name, height, birth_year, detail, loading, actorURL }) => {
    return (
        <div className="flex flex-col gap-3 md:w-60 w-[80vw] drop-shadow-lg rounded-md p-4 shadow-sm shadow-black/20 bg-white md:h-40 h-52">
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
                    <div className="md:text-xl text-2xl">{name}</div>
                    <hr />
                    <div className="flex justify-between w-full h-full">
                        <div className="flex flex-col  justify-end gap-10">
                            <div className="md:text-sm text-neutral-600">
                                {height} cm
                            </div>
                            <div className="md:text-sm text-neutral-600">
                                {birth_year}
                            </div>
                        </div>
                        <div className="h-full flex items-end">
                            <div
                                onClick={() => {
                                    detail(actorURL);
                                }}
                                className="transition-all duration-75 cursor-pointer hover:scale-[100.5%] flex active:scale-100 justify-center rounded-md bg-violet-700 text-white md:w-20 w-24 items-center text-center md:h-6 h-8 text-lg md:text-base"
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
