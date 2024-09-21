import { useDispatch, useSelector } from "react-redux"
import { countries } from "../../../store/countries";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CountriesSlide = () => {
    const quocgia = "han-quoc"
    const page = 1
    const countri = useSelector(state => state.quocgia)
    const dispatch = useDispatch()
    const LayQuocGia = () => {
        dispatch(countries.getMoviesCountries({ slug: quocgia, page: page, limit: 10 }))
    }
    useEffect(() => {
        LayQuocGia()
    }, [])
    return (
        <div className="mx-4">
            <h1 className="text-4xl font-bold text-white mt-10 mb-5">Phim theo quốc gia</h1>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {
                    countri?.moviecountries?.data?.items && countri?.moviecountries?.data?.items.map((countries, idx) => (
                        <div className='mt-3 relative' key={idx}>
                            <div className='w-full h-auto relative aspect-[2/3]'>
                                <img src={`${process.env.REACT_APP_API_IMG}/${countries.poster_url}`} loading='lazy' className='w-full rounded-lg overflow-hidden h-full duration-300 ' width={300} height={450} alt="" />
                                <div className={`absolute inset-0 bg-black/60 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 hover:opacity-100 duration-300 text-center hidden md:flex`}>
                                    <Link to={""} className='rounded-full w-36 px-6 py-2.5 translate-y-3 hover:translate-y-0 duration-300 bg-yellow-500 text-black'>Yêu thích</Link>
                                    <Link to={`/detail-movie/${countries.slug}`} className='rounded-full border-2 bg-white border-yellow-500 w-36 px-6 py-2.5 bg-black/70 translate-y-3 hover:translate-y-0 duration-300 hover:bg-yellow-500 hover:text-white'>Chi tiết</Link>
                                </div>
                            </div>
                            <span className='absolute top-3 left-1 border border-yellow-400 rounded-md px-2 bg-yellow-300'>{countries.episode_current}</span>
                            <Link to={`/detail-movie/${countries.slug}`} className='md:hidden inset-0 absolute'></Link>
                            <div className='flex justify-between my-2'>
                                <Link to={`/detail-movie/${countries.slug}`} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{countries.name}</Link>
                                <p className='hidden md:block text-yellow-400'>{countries.year}</p>
                            </div>
                            <div className='flex  justify-between mx-auto items-center'>
                                <ul className=' flex gap-1'>
                                    <li className='text-yellow-400 border-y-white text-center mx-auto flex justify-center items-center  border xl:w-[80px] xl:h-[25px]  px-0.5'>{countries.quality}</li>
                                    <li className='bg-white px-0.5 xl:w-[100px] lg:h-[25px] font-bold line-clamp-1  md:flex justify-center items-center text-center'>{countries.lang
                                        .replace("+ Thuyết Minh", "")
                                        .replace("+ Lồng Tiếng", "")}
                                    </li>
                                </ul>
                                <p className='block text-white'>{countries.time.replace("/tập", "")}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Link to={`/phim/${quocgia}`} className='mx-auto my-6 justify-center flex text-white hover:text-black hover:bg-yellow-400 text-center align-baseline items-center w-[150px]  font-bold text-lg
             h-[50px] border border-y-amber-300'>Xem tất cả</Link>
        </div>
    )
}
export default CountriesSlide