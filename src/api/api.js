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
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return axiosInstance.put("profile/photo/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  saveProfileData(profile) {
    return axiosInstance.put("profile", profile);
  },
};

export const authAPI = {
  getMyProfile() {
    return axiosInstance.get("auth/me");
  },
  login(email, password, rememberMe = false, captcha = null) {
    return axiosInstance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return axiosInstance.delete("auth/login");
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return axiosInstance.get("security/get-captcha-url");
  },
};
