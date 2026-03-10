// ============================================================
// ROBO HMS - Staff API Endpoints
// ============================================================
import apiClient from '../client';
import type { Staff, PaginatedResponse, ApiResponse } from '@/types';

const staffApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Staff>>('/staff', { params }),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Staff>>(`/staff/${id}`),

  create: (data: Partial<Staff>) =>
    apiClient.post<ApiResponse<Staff>>('/staff', data),

  update: (id: string, data: Partial<Staff>) =>
    apiClient.put<ApiResponse<Staff>>(`/staff/${id}`, data),

  delete: (id: string) =>
    apiClient.delete(`/staff/${id}`),

  updatePermissions: (id: string, permissions: string[]) =>
    apiClient.put(`/staff/${id}/permissions`, { permissions }),
};

export default staffApi;
