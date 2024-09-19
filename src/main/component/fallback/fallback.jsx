import { Link } from "react-router-dom"

const FallBack = ({error}) => {
    return (
        <div className="text-white min-h-screen mx-auto justify-center items-center flex flex-col">
            <h1>Lỗi truy cập vui lòng quay lại sau</h1>
            <p>{error}</p>
            <Link className="mt-10 w-36 transition duration-300 h-10 text-lg lg:text-xl font-semibold rounded-full border-2 bg-yellow-500 flex mx-auto items-center text-center justify-center text-black" to={"/"}>Trang Chủ</Link>
        </div>
    )
}
export default FallBack