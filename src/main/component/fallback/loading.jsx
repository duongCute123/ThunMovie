import { BeatLoader } from "react-spinners";

const LoadingPage = ({loading}) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <BeatLoader color="#f1c40f" loading={loading} size={15} />
            </div>
        );
    }
}
export default LoadingPage