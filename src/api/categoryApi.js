import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params) => {
        const url = "/categories";
        return axiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;
