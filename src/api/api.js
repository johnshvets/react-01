const { default: Axios } = require("axios");

const axiosInstance = Axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "075321c3-51db-4d59-83c5-87a5d72d925f",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return axiosInstance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return axiosInstance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return axiosInstance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return axiosInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return axiosInstance.put("profile/status/", { status });
  },
};

export const authAPI = {
  getMyProfile() {
    return axiosInstance.get("auth/me");
  },
  login(email, password, rememberMe = false) {
    return axiosInstance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return axiosInstance.delete("auth/login");
  },
};
