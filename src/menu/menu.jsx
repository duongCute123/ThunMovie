import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { TiHomeOutline } from "react-icons/ti";
import { IoEarthSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionLight } from "react-icons/pi";
const Menu = () => {
    const [y, setY] = useState(window.scrollY);
    const [bgnen, setBg] = useState(false)
    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setBg(false)

            } else if (y < window.scrollY) {
                setBg(true)

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
    const [open, setOpen] = useState(false)
    return (
        <div className={`fixed z-40 ${bgnen ? 'bg-black' : 'bg-transparent'} overflow-y-hidden inset-x-0 py-3 duration-300`}>
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
                    <div className="justify-end fixed right-0 lg:hidden z-50">
                        <div className="text-3xl flex flex-row px-3 py-3 justify-end  lg:hidden" onClick={() => { setOpen(!open) }}>
                            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                        </div>
                    </div>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-5 justify-center mx-auto">
                        <li>
                            <Link>Trang chủ</Link>
                        </li>
                        <li>
                            <Link>Thể loại</Link>
                        </li>
                        <li>
                            <Link>Loại Phim</Link>
                        </li>
                        <li>
                            <Link>Quốc Gia</Link>
                        </li>
                        <li>
                            <Link>Sắp Chiếu</Link>
                        </li>
                        <li>
                            <Link>Tv Shows</Link>
                        </li>
                    </ul>
                </nav>
                <ul className="hidden lg:block">
                    Tìm kiếm
                </ul>
                {/* Trên thiết bị điện thoại có màn hình nhỏ */}
                <div className={` inset-y-0
                    lg:hidden fixed bg-zinc-900 w-8/12 overflow-y-auto overflow-x-hidden max-h-screen translate-x-0 pl-4 z-20 bottom-0
                     duration-500  ${open ? 'right-0' : 'right-[-100%]'}
                    `}>
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
                            <li className="flex items-center my-4  gap-2">
                                <PiTelevisionLight />
                                <Link>TV Shows</Link>
                            </li>
                        </ul>
                    </nav>
                </div>



            </div>
        </div>
    )
}
export default Menu