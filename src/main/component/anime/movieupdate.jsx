import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { movie } from '../../../store/movieupdate';
const MovieNewUpDate = () => {
    const page = 1
    const newupdate = useSelector(state => state.film)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movie.getmoviehomepage({ page: page}))
    }, [dispatch])
    return (
        <div className="mx-8">
            <h1 className='text-3xl lg:text-4xl text-white font-bold mt-10 mb-4'>Phim mới cập nhật</h1>
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
                    newupdate?.movies?.items && newupdate?.movies?.items.map((movie, idx) => (
                        <SwiperSlide key={idx}>
                            <div className='bg-black/95'>
                                <div className='w-full h-auto relative aspect-[2/3]'>
                                    <img src={`${movie.thumb_url}`} loading='lazy' className='w-full rounded-lg overflow-hidden h-full duration-300 ' width={300} height={450} alt="" />
                                </div>
                                <span className='absolute top-3 left-4 border border-yellow-400 rounded-md mx-2 bg-yellow-300'>{movie.episode_current}</span>
                                <div className='flex justify-between my-2'>
                                    <Link to={`/detail-movie/${movie.slug}`} onClick={() => {
                                        window.scrollTo({
                                            top: 0
                                        })
                                    }} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{movie.name}</Link>
                                    <p className='hidden md:block text-yellow-400'>{movie.year}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className='line-clamp-1 text-yellow-500'>{movie.origin_name}</p>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
export default MovieNewUpDate