import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { IoEarthSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { PiTelevisionLight } from "react-icons/pi";
import ModalSocial from "../main/component/modal/modal";
import { TheLoai } from "../type";

const Menu = () => {
    const [y, setY] = useState(window.scrollY);
    const [bgnen, setBg] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setBg(false);
            } else if (y < window.scrollY) {
                setBg(true);
            }
            setY(window.scrollY);
        }, [y]
    );

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
        if (showModal) setShowModal(false); // Đóng modal nếu mở
    };

    return (
        <div className={`fixed z-40 ${bgnen ? 'bg-black' : 'bg-transparent'} top-0 inset-x-0 py-2 duration-300`}>
            <div className="px-4 mx-auto items-center flex justify-between flex-row gap-5 text-white font-semibold">
                <div className="flex flex-row items-center justify-end">
                    <div>
                        <img src="" alt="" />
                        <ul>
                            <li>
                                <Link className="font-bold size-8 text-white text-lg">ThunMov</Link>
                            </li>
                        </ul>
                    </div>
                    <FaSearch color="yellow" size={25} onClick={toggleModal} className="fixed right-20 lg:hidden" />
                    <ModalSocial closed={toggleModal} visible={showModal} />
                    {
                        !showModal && (
                            <div className="justify-end fixed flex items-center right-0 lg:hidden z-30">
                                <div className="text-3xl flex flex-row px-3 py-3 justify-end lg:hidden" onClick={toggleMenu}>
                                    <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                                </div>
                            </div>
                        )
                    }
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-5 justify-center mx-auto">
                        <li>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        {TheLoai.map((theloai, ID) => (
                            <li key={ID}>
                                <Link to={`/phim/${theloai.fullname}`}>{theloai.name}</Link>
                            </li>
                        ))}
                        <li><Link to="/loai-phim">Loại Phim</Link></li>
                        <li><Link to="/quoc-gia">Quốc Gia</Link></li>
                        <li><Link to="/sap-chieu">Sắp Chiếu</Link></li>
                    </ul>
                </nav>
                <ul className="hidden lg:block">
                    <FaSearch color="yellow" onClick={toggleModal} size={25} />
                </ul>
                <div className={`inset-y-0 lg:hidden fixed bg-zinc-900 w-8/12 overflow-y-auto overflow-x-hidden max-h-screen translate-x-0 pl-4 z-20 bottom-0 duration-500 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <nav className="mx-5 my-20 gap-10 text-lg grid font-semibold z-50">
                        <ul>
                            <li className="flex items-center border-b-2 my-2 border-white/10 gap-2">
                                <TiHomeOutline />
                                <Link>Trang chủ</Link>
                            </li>
                            <li className="flex items-center border-b-2 my-4 border-white/10 gap-2">
                                <RiMovie2Fill />
                                <Link>Thể loại</Link>
                            </li>
                            <li className="flex items-center border-b-2 my-4 border-white/10 gap-2">
                                <IoEarthSharp />
                                <Link>Quốc Gia</Link>
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