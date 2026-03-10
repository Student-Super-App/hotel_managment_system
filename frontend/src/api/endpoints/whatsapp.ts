// ============================================================
// ROBO HMS - WhatsApp API Endpoints
// ============================================================
import apiClient from '../client';
import type { WhatsAppConfig, WhatsAppTemplate, ApiResponse } from '@/types';

const whatsappApi = {
  getConfig: () =>
    apiClient.get<ApiResponse<WhatsAppConfig>>('/whatsapp/config'),

  updateConfig: (data: Partial<WhatsAppConfig>) =>
    apiClient.put<ApiResponse<WhatsAppConfig>>('/whatsapp/config', data),

  connect: (phoneNumber: string) =>
    apiClient.post('/whatsapp/connect', { phoneNumber }),

  disconnect: () =>
    apiClient.post('/whatsapp/disconnect'),

  getTemplates: () =>
    apiClient.get<ApiResponse<WhatsAppTemplate[]>>('/whatsapp/templates'),

  createTemplate: (data: Partial<WhatsAppTemplate>) =>
    apiClient.post<ApiResponse<WhatsAppTemplate>>('/whatsapp/templates', data),

  updateTemplate: (id: string, data: Partial<WhatsAppTemplate>) =>
    apiClient.put<ApiResponse<WhatsAppTemplate>>(`/whatsapp/templates/${id}`, data),

  deleteTemplate: (id: string) =>
    apiClient.delete(`/whatsapp/templates/${id}`),

  testWebhook: () =>
    apiClient.post('/whatsapp/webhook/test'),
};

export default whatsappApi;
