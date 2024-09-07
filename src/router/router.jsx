import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "../menu/menu"
import Home from "../main/component/home/home"
// import Anime from "../main/component/anime/anime"
import AnimeSlide from "../main/component/anime/anime"
import MoviLeSlide from "../main/component/anime/phimle"
import MoviboSlide from "../main/component/anime/phimbo"
import SearchMovie from "../main/component/search/searchmovie"
import DetailPage from "../main/component/detail/DetailPage"
import Movies from "../main/component/anime/movie"

const Routeer = () => {
    return (
        <div className="">
            <BrowserRouter>
                <div className="">
                    <div className="header z-40">
                        <Menu />
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/phim/:fullname" element={<Movies />} />
                    <Route path="/tim-kiem/:inputext" element={<SearchMovie />} />
                    <Route path="/detail-movie/:slug" element={<DetailPage />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routeer