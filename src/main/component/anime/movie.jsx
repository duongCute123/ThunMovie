import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { anime } from "../../../store/anime";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import ReactPaginate from "react-paginate"
const Movies = () => {
    const { fullname } = useParams()
    const timkiem = useSelector(state => state.categorymovie)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(anime.getMoviePageLimit({ slug: fullname, page: page, limit: 24 }))
    }, [dispatch, fullname, page])
    const toTalPage = timkiem?.movies?.data?.params?.pagination?.totalPages
    const handlePageChange = (selectedPage) => {
        setPage(selectedPage.selected + 1);
        window.scrollTo({
            top: 0
        })
    };
    useEffect(() => {
        window.screenTop = 0
    }, [])
    return (
        <>

            <div className="flex flex-col mx-5 min-h-screen">
                <h1 className="text-white mt-24 w-full h-full text-3xl font-bold">{timkiem?.movies?.data?.titlePage}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-4 gap-y-10 mt-5">
                    {
                        timkiem?.movies?.data?.items && timkiem?.movies?.data?.items.map(
                            (movie, idx) => (
                                <div className="relative" key={idx}>
                                    <div className="aspect-[2/3]">
                                        <img src={`${process.env.REACT_APP_API_IMG}/${movie.thumb_url}`} loading="lazy" width={320} height={450} className="w-full rounded-lg h-full object-cover bg-no-repeat" alt="" />
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
                {
                    timkiem.loading ?
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
export default Movies