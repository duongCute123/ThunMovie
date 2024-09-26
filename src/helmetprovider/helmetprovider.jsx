import { Helmet } from "react-helmet"
const HelmetProvider = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>VueMov - Xem phim online miễn phí không quảng cáo || VueMov</title>
                <link rel="canonical" href="https://thun-movie.vercel.app" />
            </Helmet>
        </div>
    )
}
export default HelmetProvider