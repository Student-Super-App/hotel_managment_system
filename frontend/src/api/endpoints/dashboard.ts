// ============================================================
// ROBO HMS - Dashboard API Endpoints
// ============================================================
import apiClient from '../client';
import type { DashboardStats, ApiResponse } from '@/types';

const dashboardApi = {
  getStats: () =>
    apiClient.get<ApiResponse<DashboardStats>>('/dashboard/stats'),

  getRevenueChart: (period: string) =>
    apiClient.get('/dashboard/revenue', { params: { period } }),

  getOccupancyChart: (period: string) =>
    apiClient.get('/dashboard/occupancy', { params: { period } }),

  getBookingSourceChart: () =>
    apiClient.get('/dashboard/booking-sources'),

  getRecentBookings: () =>
    apiClient.get('/dashboard/recent-bookings'),

  getReports: (params: Record<string, unknown>) =>
    apiClient.get('/reports', { params }),
};

export default dashboardApi;
