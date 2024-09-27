import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { episode } from "../../../store/filmepisode";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { IoIosTime } from "react-icons/io";
import { FaRegClosedCaptioning } from "react-icons/fa6";
import { FcOvertime } from "react-icons/fc";
import { IoEarthSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import ModalSocials from "../modal/modalmedial";
import MovieNewUpDate from "../anime/movieupdate";
import FallBack from "../fallback/fallback";
import BeatLoader from "react-spinners/BeatLoader"
import { Helmet } from "react-helmet";
const DetailPage = () => {
    const { slug } = useParams()
    const detais = useSelector(state => state.taps)

    const dispatch = useDispatch()
    const [current, setcurrent] = useState()
    const [server, setServer] = useState(true)
    const iframeRef = useRef()
    useEffect(() => {
        if (detais?.movie?.episodes && detais.movie.episodes.length > 0) {
            const tap1 = detais.movie.episodes[0].server_data[0]
            setcurrent(tap1)
        }
    }, [detais])

    useEffect(() => {
        dispatch(episode.episodemovie({ slug: slug }))
    }, [dispatch, slug])
    const changeServer = () => {
        setServer(!server)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    const [showModal, setShowModal] = useState(false)
    const HandlerCloseModal = () => {
        setShowModal(false)
    }
    const scrollToVideo = (episodes) => {
        setcurrent(episodes)
        if (iframeRef.current) {
            iframeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const note = useSelector(state => state.message)
    if (detais?.error)
        return <FallBack error={detais?.error?.message} />
    if (detais.loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#f1c40f" loading={detais.loading} size={15} />
            </div>
        );
    }
    if (!detais) {
        return <FallBack error={detais.payload.message} />
    }
    return (
        <div className="">
            <Helmet>
                <title>{detais?.movie?.movie?.name || 'VueMov'} | VueMov</title>
                <meta name="description" content={`${detais?.movie?.movie?.name} tại VueMov.`} />
                <meta name="keywords" content={`${detais?.movie?.movie?.name},${detais?.movie?.movie?.origin_name}, ${detais?.movie?.movie?.content}, VueMov`} />
            </Helmet>
            <div className="bg-cover w-full aspect-video relative bg-center lg:max-h-[800px]" style={
                { backgroundImage: `url(${detais?.movie?.movie?.thumb_url})` }
            }>
                <div className="inset-0 bg-black/90 px-4 pb-10 pt-24 flex items-center lg:absolute">
                    <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8 md:flex-row">
                        <div className="bg-stone-900 overflow-hidden animate-none aspect-[2/3] rounded w-full max-w-[300px]">
                            <img loading="lazy" src={detais?.movie?.movie?.poster_url} draggable="false" alt="" className="duration-300 object-cover h-full w-full opacity-100 blur-none " width={300} height={450} />
                        </div>
                        <div className="w-full gap-4">
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{detais?.movie?.movie?.name}</h2>
                            <a className="text-yellow-500">{detais?.movie?.movie?.origin_name}</a>
                            <div className="flex flex-row text-white gap-4 mt-8 items-center">
                                <li className="w-28 bg-white p-0.5 border text-black text-center">{detais?.movie?.movie?.episode_current}</li>
                                <li className="border-2 border-white p-0.5">{detais?.movie?.movie?.quality}</li>
                                <ul className="flex gap-4">
                                    {
                                        detais?.movie?.movie?.category.map((category) => (
                                            <li key={category.slug}>{category.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <ul className="flex text-white items-center gap-4 mt-4">
                                <li className="flex items-center"> <IoIosTime color="yellow" />{detais?.movie?.movie?.year}</li>
                                <li className="flex items-center"> <FcOvertime color="yellow" />{detais?.movie?.movie?.time}</li>
                                <li className="flex items-center"><FaRegClosedCaptioning color="yellow" />{detais?.movie?.movie?.lang}</li>
                            </ul>
                            <ul className="flex gap-4 text-white mt-4">
                                <li className="flex items-center gap-2"><RiMovie2Fill color="yellow" />{detais?.movie?.movie?.episode_current}</li>
                                <ul>
                                    {
                                        detais?.movie?.movie?.country.map((country) => (
                                            <li key={country.id} className="flex gap-2 items-center"><IoEarthSharp color="yellow" />{country.name}</li>
                                        ))
                                    }
                                </ul>
                            </ul>
                            <p className="text-white mt-4">
                                {detais?.movie?.movie?.content.replace("&quot;", "")}
                            </p>
                            <div className="mt-8 flex gap-8 items-center rounded-full border-2 p-1 lg:w-[400px] h-16">
                                <button className="text-white hover:text-yellow-500 text-center border-r-2 w-20 flex flex-col items-center" onClick={() => { setShowModal(true) }} ><IoMdShare color="white" />Share</button>
                                <ModalSocials visible={showModal} closed={HandlerCloseModal} />
                                <div className="flex text-white gap-8 items-center">
                                    <li className="rounded-full bg-slate-600 w-28 mx-auto flex justify-center h-10 text-center items-center font-bold">Trailer</li>
                                    <li className="rounded-full border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black w-28 mx-auto flex gap-2 justify-center h-10 text-center items-center font-bold"> <GiSelfLove />Yêu thích</li>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <h1 className="text-white text-3xl font-bold mt-8 mb-3 mx-5">Danh sách tập</h1>
            <div className={`text-white  mx-10 ${detais?.movie?.episodes?.length > 60 ? 'h-[400px] overflow-y-auto' : "overflow-y-auto"}`}>
                {
                    detais?.movie?.episodes && (detais?.movie?.episodes.map((data) => (
                        <div className="grid grid-cols-6 gap-2 lg:grid-cols-12" key={data.server_name}>
                            {
                                data?.server_data.map((episodes, idx) => (
                                    <div className={`items-center hover:bg-yellow-400 p-1.5 hover:text-black ${current?.name === episodes.name ? 'bg-yellow-400' : 'bg-black/95'}  text-center rounded-xl`} key={idx}>
                                        <button onClick={() => scrollToVideo(episodes)} className="">{episodes.name.replace("Tập ", "")}</button>
                                    </div>
                                ))
                            }
                        </div>
                    )))
                }
            </div>
            <div className="mt-10 mb-5">
                <div className="flex text-white mx-0 justify-center gap-4">
                    <button className={`w-28 rounded-xl ${server ? '' : 'bg-blue-600'} hover:bg-blue-600 bg-black p-2 hover:text-white`} onClick={changeServer}>Server 1</button>
                    <button className={`w-28 rounded-xl ${server ? 'bg-blue-600' : ''}  hover:bg-blue-600 bg-black p-2 hover:text-white`} onClick={changeServer}>Server 2</button>
                </div>
                <p className="text-red-700 text-center">Vui lòng đổi server nếu không xem được</p>
            </div>
            {
                current && (
                    <div ref={iframeRef} className="relative w-11/12 flex items-center mx-auto pb-[56.25%] overflow-hidden">
                        {
                            server ?
                                <ReactPlayer
                                    controls={true}
                                    url={current.link_m3u8}
                                    playing={true}
                                    volume={1}
                                    width="100%"
                                    height="100%"
                                    className="absolute top-0 left-0"
                                    pip={true}
                                />
                                : <>
                                    <iframe
                                        src={current.link_embed}
                                        className="absolute top-0 left-0 w-full h-full"
                                        title={current.name}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </>
                        }
                    </div>
                )
            }
            <MovieNewUpDate />
        </div>
    )
}
export default DetailPage