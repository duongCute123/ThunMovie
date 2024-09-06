import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { movie } from "../../../store/movieupdate"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Menu from "../../../menu/menu";
// import Anime from "../anime/anime";
import AnimeSlide from "../anime/anime";
import MoviLeSlide from "../anime/phimle";
import MoviboSlide from "../anime/phimbo";
const Home = () => {
    const phim = useSelector(state => state.film)
    console.log(phim?.movies?.items);
    const page = 1
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(movie.getmoviehomepage())
    }, [dispatch, page])

    return (
        <div>
            <div className="home relative">
                <div className="">
                    <div className="header z-40">
                        <Menu />
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        phim?.movies?.items && phim?.movies?.items.map((movie, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-cover bg-no-repeat w-full min-h-screen mx-auto max-h-[800px] relative bg-center bg-black"
                                    style={{
                                        backgroundImage: `url('${movie.thumb_url}')`
                                    }}>
                                    <div className="inset-0 absolute bg-black/80">

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
            <AnimeSlide />
            <MoviLeSlide />
            <MoviboSlide />
        </div>
    )
}
export default Home