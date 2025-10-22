import api from "./config.js";

export const authService = {
  login: async (username, password) => {
    const response = await api.post("auth/login", { username, password });
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getCurrentUser: async () => {
    const response = await api.get("auth/me");
    return response.data;
  },

    changePassword: async (currentPassword, newPassword) => {
        const response = await api.post("auth/change-password", {
          currentPassword,
          newPassword,
        });
        return response.data
  }
};