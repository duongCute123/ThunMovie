import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { moviele } from '../../../store/moviele';
import { Link } from 'react-router-dom';
const MoviLeSlide = () => {
    const phim = useSelector(state => state.le)
    const [slug, setSlug] = useState("phim-le")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(moviele.getAnime({ slug: slug }))
    }, [dispatch])

    return (
        <div>
            {
                phim.loading ?
                    <></>
                    :
                    <div className="mx-4">
                        <h1 className='text-4xl font-bold text-white mt-10 mb-5'>Phim lẻ</h1>
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
                                                <img src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} loading='lazy' className='w-full rounded-md h-full duration-300 ' width={300} height={450} alt="" />
                                                <div className={`absolute inset-0 bg-black/60 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 hover:opacity-100 duration-300 text-center hidden md:flex`}>
                                                    <Link to={""} className='rounded-full w-36 px-6 py-2.5 translate-y-3 hover:translate-y-0 duration-300 bg-yellow-500 text-black'>Yêu thích</Link>
                                                    <Link to={`/detail-movie/${movie.slug}`} className='rounded-full border-2 bg- border-yellow-500 w-36 px-6 py-2.5 bg-black/70 translate-y-3 hover:translate-y-0 duration-300 hover:bg-yellow-500 hover:text-black'>Chi tiết</Link>
                                                </div>
                                            </div>
                                            <Link to={`/detail-movie/${movie.slug}`} className='md:hidden inset-0 absolute'></Link>
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
                        <Link to={`/phim/${slug}`} className='mx-auto my-6 justify-center flex text-white hover:text-black hover:bg-yellow-400 text-center align-baseline items-center w-[150px]  font-bold text-lg
             h-[50px] border border-y-amber-300'>Xem tất cả</Link>
                    </div>
            }
        </div>
    )
}
export default MoviLeSlide