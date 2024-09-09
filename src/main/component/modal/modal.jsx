import {  useNavigate } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import React, { useEffect, useRef, useState } from "react"
const ModalSocial = ({ visible, closed }) => {
    const [inputext, setInputext] = useState("")
    const inputRef = useRef(null)
    useEffect(() => {
        if (visible) {
            inputRef.current.focus();
        }
    }, [visible]);

    const navigation = useNavigate()
    const handleNavigation = (e) => {
        if (e.key === "Enter") {
            navigation(`/tim-kiem/${inputext}`)
            setInputext("")
            closed()
        }
    }
    if (!visible) return null
    return (
        <div className="fixed  inset-0 bg-black/90
        backdrop-blur-sm flex flex-col items-center justify-center overflow-y-hidden">
            <div onClick={closed} className="">
                <AiOutlineClose size={"25px"} color="white" className="absolute top-3 right-2 z-50" />
            </div>
            <input type="text" ref={inputRef} placeholder="Vui lòng nhập tên phim cần tìm........." onKeyPress={handleNavigation} value={inputext} onChange={(e) => setInputext(e.target.value)} className="border-b-2 border-white/10 bg-transparent outline-none w-8/12 px-0.5 py-1" />
        </div>
    )
}
export default ModalSocial