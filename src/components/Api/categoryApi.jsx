import axios from "axios";
import axiosApi from "./axiosApi";


const categoryApi = {
  getAll(params) {
    const url = '/products';
    return axiosApi.get(url, {
      params
    })
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


export default categoryApi;