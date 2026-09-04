"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  getCurrentUser,
  loginUser,
  registerUser,
} from "@/services/auth.service";

import type {
  AuthResponse,
  AuthUser,
  LoginData,
  RegisterData,
} from "@/types/auth";

type AuthContextType = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const TOKEN_KEY = "taskflow_token";

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreAuthentication = async () => {
      await Promise.resolve();

      const storedToken = localStorage.getItem(TOKEN_KEY);

      if (!storedToken) {
        setLoading(false);
        return;
      }

      setToken(storedToken);

      try {
        const response = await getCurrentUser();

        setUser(response.data);
      } catch (error) {
        console.error(
          "Failed to restore authentication:",
          error
        );

        localStorage.removeItem(TOKEN_KEY);

        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    void restoreAuthentication();
  }, []);

  const login = async (data: LoginData) => {
    const response = await loginUser(data);

    const authData: AuthResponse = response.data;

    localStorage.setItem(TOKEN_KEY, authData.token);

    setToken(authData.token);
    setUser(authData.user);
  };

  const register = async (data: RegisterData) => {
    const response = await registerUser(data);

    const authData: AuthResponse = response.data;

    localStorage.setItem(TOKEN_KEY, authData.token);

    setToken(authData.token);
    setUser(authData.user);
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}