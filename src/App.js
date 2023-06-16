import { useContext, useEffect, useState } from "react";
import Card from "./components/Card/Card";
import SearchBar from "./components/searchBar/SearchBar";
import axios from "axios";
import Modal from "./components/Modal/Modal";
import { ModalContext } from "./context/ModalContextProvider";
import Footer from "./components/Footer/Footer";

function App() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const { open: modalOpen, setOpen: setModalOpen } = useContext(ModalContext);
    const [url, setURL] = useState("https://swapi.dev/api/people");
    const [actorUrl, setActorURL] = useState();

    const openModal = (actorURL) => {
        console.log(actorURL);
        setActorURL(actorURL);
        setModalOpen(true);
    };

    const fn = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url).then((res) => res.data);
            console.log(res);

            setData(res);
        } catch (e) {
            console.error(e);
            return;
        } finally {
            setLoading(false);
        }
    };

    const onSearch = async (char) => {
        setLoading(true);
        try {
            if (!char?.trim()) {
                fn();
                return;
            }
            const res = await axios
                .get(`https://swapi.dev/api/people/?search=${char}`)
                .then((res) => res.data);

            setData(res);
            return;
        } catch (e) {
            console.error(e);
            return;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fn();
    }, [url]);

    return (
        <div className="w-screen flex justify-center items-center flex-col   -z-50">
            {/* **********************Hero Seciton******************* */}

            <div className="flex-col md:gap-14 gap-6 bg-violet-700/60  relative px-4 md:px-8 overflow-hidden hero shadow-md shadow-black/30 flex md:justify-end justify-around items-center md:pb-16 h-80 w-screen">
                <div className="w-full flex justify-start md:px-6">
                    <img src="/assets/star_wars.png" className="md:w-24 w-20" />
                </div>
                <img
                    src="/assets/star_wars.jpg"
                    className="absolute w-full h-full md:h-auto md:-top-1/2 left-0 -z-50"
                />
                <div className="md:text-4xl text-3xl text-center md:text-left font-bold text-white">
                    All the best star wars characters in one place.
                </div>
                <SearchBar onClick={onSearch} />
                <div className="md:hidden"></div>
            </div>

            {/* ***********************************Cards************************ */}

            <div className="flex flex-wrap justify-center gap-8 pt-10 px-8 z-1">
                {!data
                    ? Array.from("12345678").map(() => {
                          return <Card loading={loading} />;
                      })
                    : data?.results?.map((d) => {
                          return (
                              <Card
                                  key={d.name}
                                  loading={loading}
                                  name={d.name}
                                  height={d.height}
                                  birth_year={d.birth_year}
                                  actorURL={d.url}
                                  detail={openModal}
                              />
                          );
                      })}

                {modalOpen && (
                    <Modal close={() => setModalOpen(false)} url={actorUrl} />
                )}
            </div>
            <div className="h-20 pt-4 w-full flex justify-center items-center  ">
                {!loading && (
                    <div className="flex gap-8 w-full justify-center">
                        <div
                            className={`text-violet-600 font-bold cursor-pointer ${
                                !data?.previous &&
                                "opacity-50 cursor-not-allowed"
                            }`}
                            onClick={() => {
                                if (data?.previous) {
                                    setURL(data.previous);
                                }
                            }}
                        >
                            ‹ Prev
                        </div>
                        <div
                            className={`text-violet-600  font-bold cursor-pointer ${
                                !data?.next && "opacity-50 cursor-not-allowed"
                            }`}
                            onClick={() => {
                                if (data?.next) {
                                    setURL(data.next);
                                }
                            }}
                        >
                            Next ›
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
