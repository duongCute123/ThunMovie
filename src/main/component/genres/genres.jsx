import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { genresmovie } from "../../../store/genremovies";
import { Link, useParams } from "react-router-dom";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import ReactPaginate from "react-paginate"
import FallBack from "../fallback/fallback";
import { BeatLoader } from "react-spinners";
const Genres = () => {
    const { slug } = useParams()
    const genres = useSelector(state => state.genres)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(genresmovie.categoriesfilm({ slug: slug, page: page, limit: 24 }))
    }, [dispatch, slug, page])
    const toTalPage = genres?.genres?.data?.params?.pagination?.totalPages
    const handlePageChange = (selectedPage) => {
        setPage(selectedPage.selected + 1);
        window.scrollTo({
            top: 0
        })
    };
    useEffect(() => {
        window.screenTop = 0
    }, [])
    useEffect(() => {
        document.title = `Phim ${slug} | VueMov`
    }, [slug, page])
    if (genres.error)
        return <FallBack error={genres.error.message} />
    if (genres.loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#f1c40f" loading={genres.loading} size={15} />
            </div>
        );
    }
    return (
        <>

            <div className="flex flex-col mx-5 min-h-screen">
                <h1 className="text-white mt-24 w-full h-full text-3xl font-bold">{genres?.genres?.data?.titlePage}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-4 gap-y-10 mt-5">
                    {
                        genres?.genres?.data?.items && genres?.genres?.data?.items.map(
                            (movie, idx) => (
                                <div className="relative" key={idx}>
                                    <div className="aspect-[2/3] relative">
                                        <img src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} loading="lazy" width={320} height={450} className="w-full rounded-lg h-full object-cover bg-no-repeat" alt="" />
                                        <div className={`absolute inset-0 bg-black/60 none flex-col items-center justify-center gap-4 text-sm font-bold opacity-0 hover:opacity-100 duration-300 text-center hidden md:flex`}>
                                            <Link to={""} className='rounded-full w-36 px-6 py-2.5 translate-y-3 hover:translate-y-0 duration-300 bg-yellow-500 text-black'>Yêu thích</Link>
                                            <Link to={`/detail-movie/${movie.slug}`} className='rounded-full border-2 bg- border-yellow-500 w-36 px-6 py-2.5 bg-white  translate-y-3 hover:translate-y-0 duration-300 hover:bg-yellow-500 hover:text-black'>Chi tiết</Link>
                                        </div>
                                    </div>
                                    <Link to={`/detail-movie/${movie.slug}`} className='md:hidden inset-0 absolute'></Link>

                                    <span className="absolute top-1 left-2 bg-yellow-400 border rounded-lg px-2">{movie.episode_current}</span>
                                    <div className='flex justify-between my-2'>
                                        <Link to={`/detail-movie/${movie.slug}`} className='font-bold line-clamp-1 hover:text-yellow-400 text-white text-lg'>{movie.name}</Link>
                                        <p className='hidden md:block text-yellow-400'>{movie.year}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <ul className=' flex gap-1'>
                                            <li className='text-yellow-400 text-center border-y-white border-2 flex justify-center mx-auto items-center px-0.5'>{movie.quality}</li>
                                            <li className='bg-white px-0.5 flex justify-center mx-auto items-center font-bold text-center'>{movie.lang}</li>
                                        </ul>
                                        <p className='hidden md:block text-white'>{movie.time}</p>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                {
                    genres.loading ?
                        <></>
                        :
                        <div className='text-white my-6 mt-8'>
                            <ReactPaginate
                                className='flex gap-4 justify-center hover:no-underline font-bold  items-center text-center'
                                pageCount={toTalPage} // Tổng số trang
                                pageRangeDisplayed={2} // Số lượng nút phân trang hiển thị
                                marginPagesDisplayed={1} // Số lượng nút phân trang hiển thị ở hai đầu
                                onPageChange={handlePageChange}
                                containerClassName="pagination"
                                activeClassName="text-white bg-emerald-400"
                                disabledClassName="disabled"
                                nextLabel={<BiChevronRight size={"25px"} />}
                                pageClassName="rounded-full justify-center items-center w-10"
                                forcePage={page - 1}
                                previousClassName={page === 1 ? 'hidden' : ''}
                                previousLabel={
                                    <div className="flex items-center justify-center text-center">
                                        <BiChevronLeft size={"25px"} />
                                    </div>
                                }
                                pageLinkClassName={""}
                                activeLinkClassName={""}
                            />
                            {/* <Pagination currentPage={currentPage} totalPages={toTalPage} onPageChange={handlePageChange}/> */}
                        </div>
                }
            </div>

        </>
    )
}
export default Genres