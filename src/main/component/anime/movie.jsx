import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { anime } from "../../../store/anime";

const Movies = () => {
    const { fullname } = useParams()
    const timkiem = useSelector(state => state.categorymovie)
    console.log(fullname);
    const [page,setCurrentPage]=useState(1)
    console.log(timkiem?.movies?.data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(anime.getMoviePageLimit({ slug: fullname , page: page, limit: 20}))
    }, [dispatch,fullname   ])
    return (
        <div className="flex flex-col mx-5">
            <h1 className="text-white mt-24 w-full h-full text-3xl font-bold">{timkiem?.movies?.data?.titlePage}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-4 gap-y-10 mt-5">
                {
                    timkiem?.movies?.data?.items && timkiem?.movies?.data?.items.map(
                        (movie) => (
                            <div className="relative">
                                <div className="aspect-[2/3]">
                                    <img src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} width={320} height={450} className="w-full rounded-lg h-full object-cover bg-no-repeat" alt="" />
                                </div>
                                <span className="absolute top-1 left-2 bg-yellow-400 border rounded-lg p-1">{movie.episode_current}</span>
                                <div className='flex justify-between my-2'>
                                    <Link to={`/detail-movie/${movie.slug}`} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{movie.name}</Link>
                                    <p className='hidden md:block text-yellow-400'>{movie.year}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <ul className=' flex gap-1'>
                                        <li className='text-yellow-400 text-center border-y-white border-2 mx-2 w-[80px] h-[25px]'>{movie.quality}</li>
                                        <li className='bg-white md:w-[100px] md:h-[25px] font-bold text-center'>{movie.lang}</li>
                                    </ul>
                                    <p className='hidden md:block text-white'>{movie.time}</p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}
export default Movies