// ============================================================
// ROBO HMS - Modules API Endpoints
// ============================================================
import apiClient from '../client';
import type { Module, ApiResponse } from '@/types';

const modulesApi = {
  getAll: () =>
    apiClient.get<ApiResponse<Module[]>>('/modules'),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Module>>(`/modules/${id}`),

  purchase: (moduleId: string) =>
    apiClient.post(`/modules/${moduleId}/purchase`),

  getSubscribed: () =>
    apiClient.get<ApiResponse<Module[]>>('/modules/subscribed'),

  cancel: (moduleId: string) =>
    apiClient.post(`/modules/${moduleId}/cancel`),
};

export default modulesApi;
