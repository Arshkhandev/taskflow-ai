import api from "@/lib/axios";
import type {
  ApiResponse,
  AuthResponse,
  AuthUser,
  LoginData,
  RegisterData,
} from "@/types/auth";

export const registerUser = async (
  data: RegisterData
): Promise<ApiResponse<AuthResponse>> => {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: LoginData
): Promise<ApiResponse<AuthResponse>> => {
  const response = await api.post<ApiResponse<AuthResponse>>(
    "/auth/login",
    data
  );

  return response.data;
};

export const getCurrentUser = async (): Promise<ApiResponse<AuthUser>> => {
  const response = await api.get<ApiResponse<AuthUser>>("/auth/me");

  return response.data;
};