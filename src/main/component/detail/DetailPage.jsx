import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { episode } from "../../../store/filmepisode";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const DetailPage = () => {
    const { slug } = useParams()
    const detais = useSelector(state => state.taps)
    const dispatch = useDispatch()
    const [current, setcurrent] = useState()
    const [server, setServer] = useState(false)
    useEffect(() => {
        if (detais?.movie?.episodes && detais.movie.episodes.length > 0) {
            const tap1 = detais.movie.episodes[0].server_data[0]
            setcurrent(tap1)
        }
    }, [detais])

    useEffect(() => {
        dispatch(episode.episodemovie({ slug: slug }))
    }, [dispatch])
    const changeServer = () => {
        setServer(!server)
    }
    return (
        <div>
            <div className="bg-cover w-full aspect-video relative bg-center lg:max-h-[800px]" style={
                { backgroundImage: `url(${detais?.movie?.movie?.thumb_url})` }
            }>
                <div className="bg-black/90 inset-0 flex absolute">
                    <div className="flex items-center">
                        <div className="aspect-[2/3] w-full hidden lg:block max-w-[320px]">
                            <img src={detais?.movie?.movie?.poster_url} alt="" />
                        </div>
                        <div className="">
                            <h2>{detais?.movie?.movie?.name}</h2>
                            <li>{detais?.movie?.movie?.origin_name}</li>
                            <li>{detais?.movie?.movie?.episode_current}</li>
                            <li>{detais?.movie?.movie?.quality}</li>
                            <ul>
                                {
                                    detais?.movie?.movie?.category.map((category) => (
                                        <li key={category.slug}>{category.name}</li>
                                    ))
                                }
                            </ul>
                            <ul>
                                <li>{detais?.movie?.movie?.year}</li>
                                <li>{detais?.movie?.movie?.time}</li>
                                <li>{detais?.movie?.movie?.lang}</li>
                            </ul>
                            <ul>
                                <li>{detais?.movie?.movie?.episode_current}/{detais?.movie?.movie?.episode_total}</li>
                                <li>
                                    {
                                        detais?.movie?.movie?.country.map((country) => (
                                            <li key={country.id}>{country.name}</li>
                                        ))
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <h1 className="text-white text-3xl font-bold mt-8 mb-3 mx-5">Danh sách tập</h1>
            <div className="text-white  mx-10">
                {
                    detais?.movie?.episodes && (detais?.movie?.episodes.map((data) => (
                        <div className="grid grid-cols-8 gap-2 lg:grid-cols-12" key={data.server_name}>
                            {
                                data?.server_data.map((episodes, idx) => (
                                    <div className={`items-center hover:bg-yellow-400 p-1.5 hover:text-black ${current?.name === episodes.name ? 'bg-yellow-400' : 'bg-black/95'}  text-center rounded-xl`} key={idx}>
                                        <button onClick={() => setcurrent(episodes)} className="">{episodes.name.replace("Tập ", "")}</button>
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
                    <div className="mx-8 lg:mx-14 items-center justify-center text-center">
                        {
                            server ?
                                <ReactPlayer
                                    controls={true}
                                    url={current.link_m3u8}
                                    playing={true}
                                    volume={1}
                                    width="100%"
                                    height="100%"
                                    pip={true}
                                />
                                :
                                <>
                                    <iframe
                                        src={current.link_embed}
                                        className="w-11/12 items-center justify-center mx-auto"
                                        height="450"
                                        title={current.name}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </>
                        }
                    </div>
                )
            }
        </div>
    )
}
export default DetailPage