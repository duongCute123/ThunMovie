import { useDispatch, useSelector } from "react-redux"
import { search } from "../../../store/searchmovie";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import FallBack from "../fallback/fallback";

const SearchMovie = () => {
    const timkiem = useSelector(state => state.search)
    const { inputext } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(search.timkiem({ keyword: inputext }))
    }, [dispatch, inputext])
    if (timkiem.loading) {
        return (
            <div className="flex inset-0 bg-black/90 justify-center items-center h-screen">
                <BeatLoader color="#f1c40f" loading={timkiem.loading} size={15} />
            </div>
        );
    }
    if (timkiem?.movie?.data?.items.length === 0) {
        return <li className="min-h-screen mx-auto justify-center items-center text-yellow-500 flex">Phim tìm kiếm chưa có: <h3 className="uppercase">{inputext}</h3></li>
    }
    if (!timkiem) {
        return <FallBack error={timkiem.payload.message} />
    }
    return (
        <div className="flex flex-col mx-5 min-h-screen">
            <h1 className="text-white mt-24 w-full h-full text-3xl font-bold">Tìm kiếm</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 items-center gap-4 mt-5">
                {
                    timkiem?.movie?.data?.items && timkiem?.movie?.data?.items.map(
                        (movie) => (
                            <div className="relative">
                                <div className="aspect-[2/3] relative">
                                    <img loading="lazy" src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} width={320} height={450} className="w-full rounded-lg h-full object-cover bg-no-repeat" alt="" />
                                    <div className={`absolute inset-0 bg-black/60 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 hover:opacity-100 duration-300 text-center hidden md:flex`}>
                                        <Link to={""} className='rounded-full w-36 px-6 py-2.5 translate-y-3 hover:translate-y-0 duration-300 bg-yellow-500 text-black'>Yêu thích</Link>
                                        <Link to={`/detail-movie/${movie.slug}`} className='rounded-full border-2 bg-white border-yellow-500 w-36 px-6 py-2.5 bg-black/70 translate-y-3 hover:translate-y-0 duration-300 hover:bg-yellow-500 hover:text-black'>Chi tiết</Link>
                                    </div>
                                </div>
                                <Link to={`/detail-movie/${movie.slug}`} className='md:hidden inset-0 absolute'></Link>
                                <span className="absolute top-1 left-2 bg-yellow-400 border rounded-lg p-1">{movie.episode_current}</span>
                                <div className='flex justify-between my-2'>
                                    <Link to={`/detail-movie/${movie.slug}`} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{movie.name}</Link>
                                    <p className='hidden md:block text-yellow-400'>{movie.year}</p>
                                </div>
                                <div className='flex  justify-between'>
                                    <ul className=' flex gap-1'>
                                        <li className='text-yellow-400 border-y-white text-center mx-auto flex justify-center items-center  border  px-0.5'>{movie.quality}</li>
                                        <li className='bg-white px-0.5 font-bold  md:flex justify-center items-center text-center'>{movie.lang}</li>
                                    </ul>
                                    <p className='block text-white'>{movie.time.replace("/tập", "")}</p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}
export default SearchMovie