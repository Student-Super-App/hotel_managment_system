// ============================================================
// ROBO HMS - Guests API Endpoints
// ============================================================
import apiClient from '../client';
import type { Guest, PaginatedResponse, ApiResponse } from '@/types';

const guestsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Guest>>('/guests', { params }),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Guest>>(`/guests/${id}`),

  create: (data: Partial<Guest>) =>
    apiClient.post<ApiResponse<Guest>>('/guests', data),

  update: (id: string, data: Partial<Guest>) =>
    apiClient.put<ApiResponse<Guest>>(`/guests/${id}`, data),

  delete: (id: string) =>
    apiClient.delete(`/guests/${id}`),

  getStayHistory: (id: string) =>
    apiClient.get(`/guests/${id}/stays`),

  uploadDocument: (id: string, file: FormData) =>
    apiClient.post(`/guests/${id}/documents`, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export default guestsApi;
