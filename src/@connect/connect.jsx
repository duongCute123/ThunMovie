import axios from "axios";

export default {
    // Lấy danh sách phim lên trang chủ nhé https://phimapi.com/danh-sach/phim-moi-cap-nhat?page={ID Page}
    film: {
        getlistfilm: (params) => axios.get(`${process.env.REACT_APP_HOSTNAME}/danh-sach/phim-moi-cap-nhat`, { params })
    },
    // Lấy phim theo thể loại  https://phimapi.com/v1/api/danh-sach/phim-le
    updatefilm: {
        filmnotpagelimit: (params) => axios.get(`${process.env.REACT_APP_HOSTNAME}/v1/api/danh-sach/${params.slug}`),
        filmnewupdate: (params) => axios.get(`${process.env.REACT_APP_HOSTNAME}/v1/api/danh-sach/${params.slug}?page=${params.page}&limit=${params.limit}`)
    },
    // Thông tin Phim & Danh sách tập phim  https://phimapi.com/phim/khi-anh-chay-ve-phia-em
    filmepisode: {
        episode: (param) => axios.get(`${process.env.REACT_APP_HOSTNAME}/phim/${param.slug}`)
    },
    // Tiềm kiếm phim theo dữ liệu nhập vào https://phimapi.com/v1/api/tim-kiem?keyword={Từ khóa}&limit={number}
    searchmovie: {
        seekingmovie: (params) => axios.get(`${process.env.REACT_APP_HOSTNAME}/v1/api/tim-kiem`, { params })
    },
    // Lấy phim theo danh sách quốc gia
    countries: {
        quocgia: (params) => axios.get(`${process.env.REACT_APP_HOSTNAME}/v1/api/quoc-gia/${params.slug}?page=${params.page}&limit=${params.limit}`,)
    },
    // Lấy  danh sách phim theo thể loại phim nhé
    moviegenres: {
        theloai: (params) => axios.get(`${process.env.REACT_APP_HOSTNAME}/v1/api/the-loai/${params.slug}?page=${params.page}&limit=${params.limit}`)
    }



}