import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { CiClock1 } from "react-icons/ci";
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { moviele } from '../../../store/moviele';
import { Link } from 'react-router-dom';

const MoviLeSlide = () => {
    const phim = useSelector(state => state.le);
    const [slug, setSlug] = useState("phim-le");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviele.getAnime({ slug }));
    }, [dispatch, slug]);

    if (phim.loading) {
        return (
            <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-4">
            <h1 className='text-4xl font-bold text-white mt-10 mb-5'>Phim lẻ</h1>
            <Swiper
                spaceBetween={20}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {
                    phim?.movies?.data?.items?.map((movie, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='bg-black/95'>
                                <div className='w-full h-auto relative aspect-[2/3]'>
                                    <img
                                        src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`}
                                        loading='lazy'
                                        className='w-full rounded-md h-full duration-300'
                                        width={300}
                                        height={450}
                                        alt={movie.name}
                                    />
                                    <div className={`absolute inset-0 bg-black/60 flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 hover:opacity-100 duration-300 text-center hidden md:flex`}>
                                        <Link to={""} className='rounded-full w-36 px-6 py-2.5 translate-y-3 hover:translate-y-0 duration-300 bg-yellow-500 text-black'>Yêu thích</Link>
                                        <Link to={`/detail-movie/${movie.slug}`} className='rounded-full border-2 border-yellow-500 w-36 px-6 py-2.5 bg-white translate-y-3 hover:translate-y-0 duration-300 hover:bg-yellow-500 hover:text-white'>Chi tiết</Link>
                                    </div>
                                </div>
                                <Link to={`/detail-movie/${movie.slug}`} className='md:hidden inset-0 absolute'></Link>
                                <span className='absolute top-3 left-1 border border-yellow-400 rounded-md mx-2 bg-yellow-300'>{movie.episode_current}</span>
                                <div className='flex justify-between my-2'>
                                    <Link to={`/detail-movie/${movie.slug}`} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{movie.name}</Link>
                                    <p className='hidden md:block text-yellow-400'>{movie.year}</p>
                                </div>
                                <div className='flex flex-col gap-1 lg:flex-row lg:justify-between'>
                                    <ul className='flex gap-1'>
                                        <li className='text-yellow-400 border-y-white text-center xl:px-[0.5] lg:flex lg:mx-auto lg:items-center border'>{movie.quality}</li>
                                        <li className='bg-white xl:px-[0.5] font-bold md:flex justify-center items-center text-center'>{movie.lang}</li>
                                    </ul>
                                    <ul className='flex gap-1 items-center'>
                                        <CiClock1 color='yellow' />
                                        <p className='block text-white line-clamp-1'>{movie.time}</p>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Link to={`/phim/${slug}`} className='mx-auto my-6 justify-center flex text-white hover:text-black hover:bg-yellow-400 text-center align-baseline items-center w-[150px] font-bold text-lg h-[40px] border border-y-amber-300'>Xem tất cả</Link>
        </div>
    );
}

export default MoviLeSlide;