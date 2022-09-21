
import axiosApi from "./axiosApi";

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosApi.post(url, data);
  },
  login(data) {
    const url = '/auth/local';
    return axiosApi.post(url, data);
  },
};


export default userApi;
