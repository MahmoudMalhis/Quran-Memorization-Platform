import { createContext, useState, useEffect, useContext } from "react";
import { authService } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const isAuthenticated = !!user;

  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await authService.login(username, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      return data.user;
    } catch (error) {
      const errorMassage =
        error.response?.data.massage || "حدث خطأ في تسجيل الدخول";
      setError(errorMassage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, error, user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
