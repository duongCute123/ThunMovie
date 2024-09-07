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
import { IoIosTime } from "react-icons/io";
import { FaRegClosedCaptioning } from "react-icons/fa6";
import { FcOvertime } from "react-icons/fc";
import { CiPlay1 } from "react-icons/ci";
import MoviLeSlide from "../anime/phimle";
import MoviboSlide from "../anime/phimbo";
import { anime } from "../../../store/anime";
import { Link } from "react-router-dom";
const Home = () => {
    const phim = useSelector(state => state.categorymovie)
    const [slug, setSlug] = useState("hoat-hinh")
    const dispatch = useDispatch()
    console.log(phim?.movies);

    useEffect(() => {
        dispatch(anime.getAnime({ slug: slug }))
    }, [dispatch])

    return (
        <div>
            <div className="home relative">
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
                        phim?.movies?.data?.items && phim?.movies?.data?.items.map((movie, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-cover min-h-screen w-full relative bg-center max-h-[800px] lg:min-h-0 lg:aspect-video bg-black"
                                    style={{
                                        backgroundImage: `url('${process.env.REACT_APP_API_IMG}/${movie.thumb_url}')`
                                    }}>
                                    <div className="absolute inset-0 bg-black/80 md:bg-black/90 flex">
                                        <div className="w-full max-w-7xl px-4 mx-auto flex items-center justify-between gap-8">
                                            <div className="flex flex-col text-xs">
                                                <h2 className="text-white font-extrabold text-4xl lg:text-5xl leading-snug flex">{movie.name}</h2>
                                                <h5 className="text-yellow-400 font-bold left-0 flex my-2">{movie.origin_name}</h5>
                                                <ul className="text-white gap-3 mt-8 line-clamp-1 items-center lg:flex">
                                                    <ul className="flex gap-5 md:my-2">
                                                        <li className="border bg-white text-black px-1">{movie.episode_current}</li>
                                                        <li className="flex font-bold border-2 border-white px-1">{movie.quality}</li>
                                                    </ul>
                                                    <li className="flex gap-3 my-2">{movie.category.map((list, id) => (
                                                        <li key={id} className="">{list.name}</li>
                                                    ))}</li>
                                                    <ul className="flex gap-3">
                                                        <li className="flex gap-1 items-center"> <FcOvertime color="yellow" />{movie.year}</li>
                                                        <li className="flex gap-1 items-center"> <IoIosTime color="yellow" />{movie.time}</li>
                                                        <li className="flex gap-1 items-center"> <FaRegClosedCaptioning /> {movie.lang}</li>
                                                    </ul>

                                                </ul>
                                                <Link to={`/detail-movie/${movie.slug}`} className="text-white hover:bg-yellow-400 h-14 w-40 rounded-full border-2 border-yellow-400 flex items-center my-5"> <CiPlay1 className="mx-2" size={30} /> Xem Ngay</Link>
                                            </div>
                                            <div className="bg-stone-900 overflow-hidden animate-none hidden aspect-[2/3] w-full max-w-[320px] rounded-lg border-[14px] border-yellow-400 md:block">
                                                <img src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} alt="" className="w-full object-cover bg-cover duration-300 bg-no-repeat" width={300} height={450} />
                                            </div>
                                        </div>
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