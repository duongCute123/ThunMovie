import { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { movie } from "../../../store/movieupdate"
const Home = () => {
    const phim = useSelector(state => state.film)
    console.log(phim);
    const page= 1
    console.log(typeof page);
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(movie.getmoviehomepage())
    }, [dispatch,page])
    return (
        <div className="home">

        </div>
    )
}
export default Home