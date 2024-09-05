import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "../menu/menu"
import Home from "../main/component/home/home"

const Routeer = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routeer