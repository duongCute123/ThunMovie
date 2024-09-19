import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { IoEarthSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { PiTelevisionLight } from "react-icons/pi";
import ModalSocial from "../main/component/modal/modal";
import { TheLoai } from "../type";
import { genres } from "../type/genres";
import { QuocGia } from "../type/countries";
import { SiVuetify } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
const Menu = () => {
    const [y, setY] = useState(window.scrollY);
    const [bgnen, setBg] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [isGenresShow, setIsGenresShow] = useState(false);
    const [isCountriesShow, setIsCountriesShow] = useState(false);
    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY === 0) {
                setBg(false)

            } else if (y < window.scrollY) {
                setBg(true);
            }
            setY(window.scrollY);
        }, [y]
    );
    const showGenres = () => {
        setIsGenresShow(!isGenresShow)
        setIsCountriesShow(false)
    }
    const showCountries = () => {
        setIsCountriesShow(!isCountriesShow)
        setIsGenresShow(false)
    }
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const toggleModal = () => {
        setShowModal(prev => !prev);

    };
    const toggleMenu = () => {
        setOpen(prev => !prev);
        if (showModal) setShowModal(false);
    };

    return (
        <div className={`fixed z-40 ${bgnen ? 'bg-black' : 'bg-transparent'} top-0 inset-x-0 py-4 duration-300`}>
            <div className="px-4 mx-auto items-center flex justify-between  flex-row gap-5 text-white font-semibold">
                <div className="flex flex-row items-center justify-end">
                    <Link to={"/"} className="flex items-center gap-2 hover:text-yellow-500">
                        <SiVuetify className="text-yellow-500" size={35} />
                        <ul>
                            <li>
                                <Link to={"/"} className="font-bold size-8 hover:text-yellow-500 text-white text-lg">VueMov</Link>
                            </li>
                        </ul>
                    </Link>
                    <FaSearch color="yellow" size={25} onClick={toggleModal} className="fixed right-20 lg:hidden" />
                    <ModalSocial closed={toggleModal} visible={showModal} />
                    {
                        !showModal && (
                            <div className="justify-end fixed flex items-center right-0 lg:hidden z-30">
                                <div className="text-3xl fixed flex flex-row px-3 py-3 justify-end lg:hidden" onClick={toggleMenu}>
                                    <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                                </div>
                            </div>
                        )
                    }
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-5 justify-center mx-auto uppercase font-bold text-sm">
                        {TheLoai.map((theloai, ID) => (
                            <li key={ID}>
                                <Link to={`/phim/${theloai.fullname}`} className="hover:text-yellow-500">{theloai.name}</Link>
                            </li>
                        ))}
                        <li className="group cursor-pointer">
                            <Link className="">Thể Loại</Link>
                            <ul className="hidden group-hover:block absolute  bg-black/95 px-4 transform -translate-x-1/2  py-4 mx-auto justify-center items-center duration-100">
                                <li className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
                                    {
                                        genres.map((genres, idx) => (
                                            <Link to={`/genres/${genres.slug}`} className="hover:text-yellow-600" key={idx}>{genres.name}</Link>
                                        ))
                                    }
                                </li>
                            </ul>
                        </li>
                        <li className="group">
                            <Link className="">Quốc Gia</Link>
                            <ul className="hidden group-hover:block absolute px-4 py-4 transform -translate-x-1/2   bg-black/95">
                                <li className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                                    {
                                        QuocGia.map((countries, idx) => (
                                            <Link className="hover:text-yellow-500" to={`/countries/${countries.slug}`} key={idx}>{countries.name.toUpperCase()}</Link>
                                        ))
                                    }
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/sap-chieu">Sắp Chiếu</Link></li>
                    </ul>
                </nav>
                <ul className="hidden lg:block">
                    <FaSearch color="yellow" onClick={toggleModal} size={25} />
                </ul>
                <div className={`inset-y-0 lg:hidden fixed bg-zinc-900 w-8/12 overflow-y-auto overflow-x-hidden max-h-screen translate-x-0 pl-4 z-20 bottom-0 duration-500 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <nav className="mx-5 my-20 gap-10 text-lg grid font-semibold z-50">
                        <ul >
                            <li onClick={toggleMenu} className="flex items-center border-b-2 my-2 border-white/10 gap-2">
                                <TiHomeOutline />
                                <Link to={"/"}>Trang chủ</Link>
                            </li>
                            {TheLoai.map((theloai, ID) => (
                                <li key={ID} className="flex items-center border-b-2 my-4 border-white/10 gap-2">
                                    <RiMovie2Fill />
                                    <Link onClick={toggleMenu} to={`/phim/${theloai.fullname}`}>{theloai.name}</Link>
                                </li>
                            ))}
                            <li className="">
                                <div className={`flex items-center border-b-2 my-4 border-white/10 gap-2 ${isGenresShow ? "text-yellow-500" : ""}`}>
                                    <RiMovie2Fill />
                                    <button className={`flex items-center gap-2 `} onClick={showGenres}>Thể Loại
                                        {
                                            isGenresShow ?
                                                <FaAngleDown />
                                                :
                                                <FaAngleRight />
                                        }
                                    </button>
                                </div>
                                <ul className={`${isGenresShow ? "block" : "hidden"}`}>
                                    <li className="grid grid-cols-2 gap-2">
                                        {
                                            genres.map((genres, idx) => (
                                                <Link onClick={toggleMenu} key={idx} to={`/genres/${genres.slug}`}>{genres.name}</Link>
                                            ))
                                        }
                                    </li>
                                </ul>

                            </li>
                            <li className="">
                                <div className={`flex items-center border-b-2 my-4 border-white/10 gap-2 ${isCountriesShow ? "text-yellow-500" : ""}`}>
                                    <IoEarthSharp />
                                    <button className={`flex items-center gap-2 `} onClick={showCountries}>Quốc Gia
                                        {
                                            isCountriesShow ?
                                                <FaAngleDown />
                                                :
                                                <FaAngleRight />
                                        }
                                    </button>
                                </div>
                                <ul className={`${isCountriesShow ? "block" : "hidden"}`}>
                                    <li className="grid grid-cols-2 gap-2">
                                        {
                                            QuocGia.map((countries, idx) => (
                                                <Link onClick={toggleMenu} className="hover:text-yellow-500" to={`/countries/${countries.slug}`} key={idx}>{countries.name}</Link>
                                            ))
                                        }
                                    </li>
                                </ul>
                            </li>
                            <li className="flex items-center my-4 gap-2">
                                <PiTelevisionLight />
                                <Link>TV Shows</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Menu;