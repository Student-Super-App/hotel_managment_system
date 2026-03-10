// ============================================================
// ROBO HMS - Auth API Endpoints
// ============================================================
import apiClient from '../client';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    hotelId?: string;
    avatar?: string;
  };
}

const authApi = {
  hotelLogin: (data: LoginPayload) =>
    apiClient.post<LoginResponse>('/auth/hotel/login', data),

  adminLogin: (data: LoginPayload) =>
    apiClient.post<LoginResponse>('/auth/admin/login', data),

  logout: () =>
    apiClient.post('/auth/logout'),

  me: () =>
    apiClient.get('/auth/me'),

  refreshToken: () =>
    apiClient.post('/auth/refresh'),
};

export default authApi;
