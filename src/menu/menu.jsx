import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"


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
    return (
        <div className={`fixed z-40 ${bgnen ? 'bg-black' : 'bg-transparent'} inset-x-0 py-3 duration-300`}>
            <div className="px-4 mx-auto items-center flex flex-row gap-5 text-white font-semibold">
                <ul>
                    <li>
                        <Link className="font-bold size-8 text-white text-lg">ThunMov</Link>
                    </li>
                </ul>
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
                <ul className="">
                    Tìm kiếm
                </ul>
            </div>
        </div>
    )
}
export default Menu