import { Link } from "react-router-dom";
const LoadingPage = () => {
    return (
        <div className="bg-cover min-h-screen w-full relative bg-center max-h-[800px] lg:min-h-0 lg:aspect-video bg-black"
            style={{
                backgroundImage: `url()`
            }}>
            <div className="absolute inset-0 bg-black/60 md:bg-black/90 flex">
                <div className="w-full animate-pulse max-w-7xl px-4 mx-auto flex items-center justify-between gap-8">
                    <div className="flex flex-col text-xs">
                        <h2 className="text-white font-extrabold text-4xl lg:text-5xl leading-snug flex"></h2>
                        <h5 className="text-yellow-400 font-bold left-0 flex my-2"></h5>
                        <ul className="text-white gap-3 mt-8 line-clamp-1 items-center lg:flex">
                            <ul className="flex gap-5 md:my-2">
                                <li className="border bg-white text-black px-1"></li>
                                <li className="flex font-bold border-2 border-white px-1"></li>
                            </ul>

                            <li className=""></li>

                            <ul className="flex gap-3">
                                <li className="flex gap-1 items-center"></li>
                                <li className="flex gap-1 items-center"></li>
                                <li className="flex gap-1 items-center"> </li>
                            </ul>

                        </ul>
                        <Link to={`/detail-movie/`} className="text-white hover:bg-yellow-400 h-14 w-40 rounded-full border-2 border-yellow-400 flex items-center my-5"></Link>
                    </div>
                    <div className="bg-stone-900 overflow-hidden animate-none hidden aspect-[2/3] w-full max-w-[320px]  md:block">
                        <img  loading="lazy" alt="" className="w-full animate-pulse object-cover bg-cover duration-300 bg-no-repeat" width={300} height={450} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoadingPage