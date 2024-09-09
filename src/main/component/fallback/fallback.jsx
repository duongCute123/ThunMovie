const FallBack = ({error}) => {
    return (
        <div className="text-white min-h-screen mx-auto justify-center items-center flex">
            <h1>Lỗi truy cập vui lòng quay lại sau</h1>
            <p>{error}</p>
        </div>
    )
}
export default FallBack