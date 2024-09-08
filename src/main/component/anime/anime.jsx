import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { anime } from '../../../store/anime';
import { Link } from 'react-router-dom';
const AnimeSlide = () => {
    const phim = useSelector(state => state.categorymovie)
    const [slug, setSlug] = useState("hoat-hinh")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(anime.getAnime({ slug: slug }))
    }, [dispatch])
    useEffect(() => {
        window.screenTop = 0
    }, [])
    return (
        <div>

            <div className="mx-4">
                <h1 className='text-4xl font-bold text-white mt-10 mb-5'>Phim hoat hinh</h1>
                <Swiper
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 2, // 1 slide cho màn hình rất nhỏ
                        },
                        480: {
                            slidesPerView: 2, // 2 slides cho màn hình nhỏ
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        phim?.movies?.data?.items && phim?.movies?.data?.items.map((movie, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='bg-black/95'>
                                    <div className='w-full h-auto relative aspect-[2/3]'>
                                        <img src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} loading='lazy' className='w-full rounded-lg overflow-hidden h-full duration-300 ' width={300} height={450} alt="" />
                                    </div>
                                    <span className='absolute top-3 left-4 border border-yellow-400 rounded-md mx-2 bg-yellow-300'>{movie.episode_current}</span>
                                    <div className='flex justify-between my-2'>
                                        <Link to={`/detail-movie/${movie.slug}`} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{movie.name}</Link>
                                        <p className='hidden md:block text-yellow-400'>{movie.year}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <ul className=' flex gap-1'>
                                            <li className='text-yellow-400 border-y-white border-2 mx-2 w-[80px] h-[25px]'>{movie.quality}</li>
                                            <li className='bg-white md:w-[100px] md:h-[25px] font-bold'>{movie.lang}</li>
                                        </ul>
                                        <p className='hidden md:block text-white'>{movie.time}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <h1 className='mx-auto my-6 justify-center text-white hover:text-black hover:bg-yellow-400 text-center align-baseline items-center w-[200px]  font-bold text-lg
             h-[30px] border border-y-amber-300'>Xem tất cả</h1>
            </div>

        </div>
    )
}
export default AnimeSlide