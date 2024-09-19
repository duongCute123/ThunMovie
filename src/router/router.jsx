import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "../menu/menu"
import Home from "../main/component/home/home"
import SearchMovie from "../main/component/search/searchmovie"
import DetailPage from "../main/component/detail/DetailPage"
import Movies from "../main/component/anime/movie"
import Footer from "../main/component/footer/footer."
import CountriesMovies from "../main/component/countries/countries"
import Genres from "../main/component/genres/genres"

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
                    <Route path="/countries/:slug" element={<CountriesMovies />} />
                    <Route path="/genres/:slug" element={<Genres />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default Routeer