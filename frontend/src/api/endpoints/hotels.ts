// ============================================================
// ROBO HMS - Hotels API Endpoints (Admin Portal)
// ============================================================
import apiClient from '../client';
import type { Hotel, Subscription, PaginatedResponse, ApiResponse, AdminDashboardStats } from '@/types';

const hotelsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Hotel>>('/admin/hotels', { params }),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Hotel>>(`/admin/hotels/${id}`),

  create: (data: Partial<Hotel>) =>
    apiClient.post<ApiResponse<Hotel>>('/admin/hotels', data),

  update: (id: string, data: Partial<Hotel>) =>
    apiClient.put<ApiResponse<Hotel>>(`/admin/hotels/${id}`, data),

  suspend: (id: string, reason: string) =>
    apiClient.post(`/admin/hotels/${id}/suspend`, { reason }),

  activate: (id: string) =>
    apiClient.post(`/admin/hotels/${id}/activate`),

  changePlan: (id: string, plan: string) =>
    apiClient.post(`/admin/hotels/${id}/plan`, { plan }),

  // Subscriptions
  getSubscriptions: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Subscription>>('/admin/subscriptions', { params }),

  // Dashboard
  getDashboardStats: () =>
    apiClient.get<ApiResponse<AdminDashboardStats>>('/admin/dashboard'),

  // Analytics
  getAnalytics: (params?: Record<string, unknown>) =>
    apiClient.get('/admin/analytics', { params }),
};

export default hotelsApi;
