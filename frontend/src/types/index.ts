// ============================================================
// ROBO HMS - Type Definitions
// ============================================================

// Auth & User Types
export type UserRole = 'owner' | 'manager' | 'reception' | 'housekeeping' | 'accountant';
export type AdminRole = 'super_admin' | 'admin' | 'support';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  hotelId: string;
  avatar?: string;
  phone?: string;
  isActive: boolean;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Hotel Types
export interface Hotel {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  logo?: string;
  plan: 'starter' | 'professional' | 'enterprise';
  isActive: boolean;
  totalRooms: number;
  createdAt: string;
}

// Room Types
export type RoomStatus = 'available' | 'occupied' | 'cleaning' | 'maintenance' | 'blocked';

export interface RoomType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  maxOccupancy: number;
  amenities: string[];
  images: string[];
}

export interface Room {
  id: string;
  number: string;
  floor: number;
  typeId: string;
  typeName: string;
  status: RoomStatus;
  currentGuestId?: string;
  currentBookingId?: string;
  lastCleaned?: string;
}

// Booking Types
export type BookingStatus = 'confirmed' | 'checked_in' | 'checked_out' | 'cancelled' | 'no_show' | 'pending';
export type BookingSource = 'direct' | 'website' | 'whatsapp' | 'booking_com' | 'makemytrip' | 'agoda' | 'walk_in';

export interface Booking {
  id: string;
  guestId: string;
  guestName: string;
  roomId: string;
  roomNumber: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
  source: BookingSource;
  totalAmount: number;
  paidAmount: number;
  adults: number;
  children: number;
  specialRequests?: string;
  createdAt: string;
}

// Guest Types
export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idType?: string;
  idNumber?: string;
  address?: string;
  city?: string;
  country: string;
  totalStays: number;
  totalSpent: number;
  preferences?: string[];
  createdAt: string;
}

// Housekeeping Types
export type TaskStatus = 'pending' | 'in_progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface HousekeepingTask {
  id: string;
  roomId: string;
  roomNumber: string;
  type: 'cleaning' | 'maintenance' | 'inspection';
  status: TaskStatus;
  priority: TaskPriority;
  assignedTo?: string;
  assignedToName?: string;
  notes?: string;
  createdAt: string;
  completedAt?: string;
}

// Payment Types
export type PaymentMethod = 'cash' | 'upi' | 'card' | 'bank_transfer' | 'split';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface Payment {
  id: string;
  bookingId: string;
  guestName: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  invoiceNumber?: string;
  gstAmount?: number;
  createdAt: string;
}

export interface Invoice {
  id: string;
  bookingId: string;
  guestName: string;
  hotelName: string;
  invoiceNumber: string;
  items: InvoiceItem[];
  subtotal: number;
  gstRate: number;
  gstAmount: number;
  totalAmount: number;
  paidAmount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  createdAt: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

// Staff Types
export interface Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  department: string;
  isActive: boolean;
  joinedAt: string;
}

// Module / Marketplace Types
export interface Module {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  price: number;
  priceUnit: 'month' | 'year';
  icon: string;
  isActive: boolean;
  category: string;
}

// WhatsApp Types
export interface WhatsAppConfig {
  id: string;
  hotelId: string;
  phoneNumber: string;
  isConnected: boolean;
  webhookUrl?: string;
  apiKey?: string;
  templates: WhatsAppTemplate[];
}

export interface WhatsAppTemplate {
  id: string;
  name: string;
  content: string;
  category: 'booking' | 'notification' | 'marketing';
  isApproved: boolean;
}

// Dashboard Stats
export interface DashboardStats {
  occupancyRate: number;
  revenueToday: number;
  availableRooms: number;
  pendingCheckins: number;
  housekeepingTasks: number;
  totalBookings: number;
}

// Admin Dashboard Stats
export interface AdminDashboardStats {
  totalHotels: number;
  totalRevenue: number;
  activeSubscriptions: number;
  whatsappUsage: number;
  newHotelsThisMonth: number;
  totalBookingsProcessed: number;
}

// Subscription Types
export interface Subscription {
  id: string;
  hotelId: string;
  hotelName: string;
  plan: 'starter' | 'professional' | 'enterprise';
  status: 'active' | 'expired' | 'cancelled' | 'trial';
  startDate: string;
  endDate: string;
  amount: number;
  modules: string[];
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
