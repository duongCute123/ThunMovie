import { Link } from "react-router-dom"


const Menu = () => {
    return (
        <div className="flex flex-row gap-5">
            <ul>
                <li>
                    <Link>ThunMov</Link>
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
            <ul>
                Tìm kiếm
            </ul>
        </div>
    )
}
export default Menu