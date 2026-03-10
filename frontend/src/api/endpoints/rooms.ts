// ============================================================
// ROBO HMS - Rooms API Endpoints
// ============================================================
import apiClient from '../client';
import type { Room, RoomType, PaginatedResponse, ApiResponse } from '@/types';

const roomsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Room>>('/rooms', { params }),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Room>>(`/rooms/${id}`),

  create: (data: Partial<Room>) =>
    apiClient.post<ApiResponse<Room>>('/rooms', data),

  update: (id: string, data: Partial<Room>) =>
    apiClient.put<ApiResponse<Room>>(`/rooms/${id}`, data),

  updateStatus: (id: string, status: string) =>
    apiClient.patch(`/rooms/${id}/status`, { status }),

  delete: (id: string) =>
    apiClient.delete(`/rooms/${id}`),

  // Room Types
  getTypes: () =>
    apiClient.get<ApiResponse<RoomType[]>>('/rooms/types'),

  createType: (data: Partial<RoomType>) =>
    apiClient.post<ApiResponse<RoomType>>('/rooms/types', data),

  updateType: (id: string, data: Partial<RoomType>) =>
    apiClient.put<ApiResponse<RoomType>>(`/rooms/types/${id}`, data),

  deleteType: (id: string) =>
    apiClient.delete(`/rooms/types/${id}`),
};

export default roomsApi;
