import { useDispatch, useSelector } from "react-redux"
import { search } from "../../../store/searchmovie";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "../../../menu/menu";

const SearchMovie = () => {
    const timkiem = useSelector(state => state.search)
    const { inputext } = useParams()
    const dispatch = useDispatch()
    console.log(timkiem);
    console.log(inputext);

    useEffect(() => {
        dispatch(search.timkiem({ keyword: inputext }))
    }, [dispatch, inputext])
    return (
        <div className="flex flex-col mx-5">
            <h1 className="text-white mt-24 w-full h-full text-3xl font-bold">Tìm kiếm</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 mt-5">
                {
                    timkiem?.movie?.data?.items && timkiem?.movie?.data?.items.map(
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
export default SearchMovie