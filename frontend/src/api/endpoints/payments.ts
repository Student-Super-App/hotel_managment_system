// ============================================================
// ROBO HMS - Payments API Endpoints
// ============================================================
import apiClient from '../client';
import type { Payment, Invoice, PaginatedResponse, ApiResponse } from '@/types';

const paymentsApi = {
  getAll: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Payment>>('/payments', { params }),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Payment>>(`/payments/${id}`),

  create: (data: Partial<Payment>) =>
    apiClient.post<ApiResponse<Payment>>('/payments', data),

  // Invoices
  getInvoices: (params?: Record<string, unknown>) =>
    apiClient.get<PaginatedResponse<Invoice>>('/invoices', { params }),

  getInvoice: (id: string) =>
    apiClient.get<ApiResponse<Invoice>>(`/invoices/${id}`),

  createInvoice: (bookingId: string) =>
    apiClient.post<ApiResponse<Invoice>>('/invoices', { bookingId }),

  downloadInvoice: (id: string) =>
    apiClient.get(`/invoices/${id}/download`, { responseType: 'blob' }),
};

export default paymentsApi;
