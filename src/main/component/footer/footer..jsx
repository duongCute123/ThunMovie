import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="text-white text-center  bottom-0 w-full h-24 bg-black flex mt-5 items-center">
            <p className="mx-auto">Copyright &#169; 2024. All Rights Reserved By <Link to={"https://www.facebook.com/profile.php?id=100012079154711"} className="text-yellow-500">Nguyễn Văn Dương</Link></p>
        </div>
    )
}
export default Footer