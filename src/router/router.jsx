import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "../menu/menu"
import Home from "../main/component/home/home"
// import Anime from "../main/component/anime/anime"
import AnimeSlide from "../main/component/anime/anime"
import MoviLeSlide from "../main/component/anime/phimle"
import MoviboSlide from "../main/component/anime/phimbo"

const Routeer = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/phim-hoat-hinh" element={<AnimeSlide/>}/>
                    <Route path="/phim-le" element={<MoviLeSlide/>}/>
                    <Route path="/phim-bo" element={<MoviboSlide/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routeer