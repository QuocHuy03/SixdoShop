import axios from "axios";
import axiosApi from "./axiosApi";


const productApi = {
  async getAll(params) {
    const newParams = { ...params };
    newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);

    // Remove un-needed key
    delete newParams._page;

    // Fetch product list + count
    const productList = await axiosApi.get('/products', { params: newParams });
    const count = await axiosApi.get('/products/count', { params: newParams });

    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosApi.get(url);
  },
  add(data) {
    const url = '/products';
    return axiosApi.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosApi.put(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosApi.delete(url);
  }
};


export default productApi;