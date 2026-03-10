// ============================================================
// ROBO HMS - Bookings API Endpoints
// ============================================================
import apiClient from '../client';
import type { Booking, PaginatedResponse, ApiResponse } from '@/types';

export interface CreateBookingPayload {
  guestId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children?: number;
  source: string;
  specialRequests?: string;
}

const bookingsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Booking>>('/bookings', { params }),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Booking>>(`/bookings/${id}`),

  create: (data: CreateBookingPayload) =>
    apiClient.post<ApiResponse<Booking>>('/bookings', data),

  update: (id: string, data: Partial<CreateBookingPayload>) =>
    apiClient.put<ApiResponse<Booking>>(`/bookings/${id}`, data),

  cancel: (id: string, reason?: string) =>
    apiClient.post(`/bookings/${id}/cancel`, { reason }),

  checkIn: (id: string, data: { roomId: string }) =>
    apiClient.post(`/bookings/${id}/checkin`, data),

  checkOut: (id: string) =>
    apiClient.post(`/bookings/${id}/checkout`),

  getCalendar: (startDate: string, endDate: string) =>
    apiClient.get('/bookings/calendar', { params: { startDate, endDate } }),
};

export default bookingsApi;
