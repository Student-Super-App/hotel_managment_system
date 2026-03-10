// ============================================================
// ROBO HMS - Router Configuration
// ============================================================
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// --- Layouts ---
import HotelLayout from '@/layouts/HotelLayout';
import AdminLayout from '@/layouts/AdminLayout';
import BookingLayout from '@/layouts/BookingLayout';
import MarketingLayout from '@/layouts/MarketingLayout';

// Skeleton loader for lazy pages
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="animate-pulse text-muted-foreground">Loading…</div>
    </div>
  );
}

function withSuspense(Component: React.LazyExoticComponent<React.ComponentType>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

// --- Lazy-loaded Pages ---

// Hotel Portal
const HotelLogin = lazy(() => import('@/pages/hotel/Login'));
const HotelDashboard = lazy(() => import('@/pages/hotel/Dashboard'));
const Reservations = lazy(() => import('@/pages/hotel/Reservations'));
const HotelRooms = lazy(() => import('@/pages/hotel/Rooms'));
const Guests = lazy(() => import('@/pages/hotel/Guests'));
const CheckInOut = lazy(() => import('@/pages/hotel/CheckInOut'));
const Housekeeping = lazy(() => import('@/pages/hotel/Housekeeping'));
const Billing = lazy(() => import('@/pages/hotel/Billing'));
const Reports = lazy(() => import('@/pages/hotel/Reports'));
const Staff = lazy(() => import('@/pages/hotel/Staff'));
const Marketplace = lazy(() => import('@/pages/hotel/Marketplace'));
const WhatsApp = lazy(() => import('@/pages/hotel/WhatsApp'));
const HotelSettings = lazy(() => import('@/pages/hotel/Settings'));

// Admin Portal
const AdminLogin = lazy(() => import('@/pages/admin/Login'));
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'));
const AdminHotels = lazy(() => import('@/pages/admin/Hotels'));
const Subscriptions = lazy(() => import('@/pages/admin/Subscriptions'));
const WhatsAppInfra = lazy(() => import('@/pages/admin/WhatsAppInfra'));
const Analytics = lazy(() => import('@/pages/admin/Analytics'));
const AdminSettings = lazy(() => import('@/pages/admin/Settings'));

// Booking Engine
const BookingHome = lazy(() => import('@/pages/booking/Home'));
const BookingRooms = lazy(() => import('@/pages/booking/Rooms'));
const BookingPayment = lazy(() => import('@/pages/booking/Payment'));
const BookingConfirmation = lazy(() => import('@/pages/booking/Confirmation'));

// Marketing Website
const Landing = lazy(() => import('@/pages/marketing/Landing'));
const Features = lazy(() => import('@/pages/marketing/Features'));
const Pricing = lazy(() => import('@/pages/marketing/Pricing'));
const Modules = lazy(() => import('@/pages/marketing/Modules'));
const Demo = lazy(() => import('@/pages/marketing/Demo'));

// ----------------------------------------------------------------
// Router
// ----------------------------------------------------------------
export const router = createBrowserRouter([
  // ==================== Marketing Website ====================
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: withSuspense(Landing) },
      { path: '/features', element: withSuspense(Features) },
      { path: '/pricing', element: withSuspense(Pricing) },
      { path: '/modules', element: withSuspense(Modules) },
      { path: '/demo', element: withSuspense(Demo) },
    ],
  },

  // ==================== Hotel Portal ====================
  { path: '/hotel/login', element: withSuspense(HotelLogin) },
  {
    path: '/hotel',
    element: <HotelLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: withSuspense(HotelDashboard) },
      { path: 'reservations', element: withSuspense(Reservations) },
      { path: 'rooms', element: withSuspense(HotelRooms) },
      { path: 'guests', element: withSuspense(Guests) },
      { path: 'checkin', element: withSuspense(CheckInOut) },
      { path: 'housekeeping', element: withSuspense(Housekeeping) },
      { path: 'billing', element: withSuspense(Billing) },
      { path: 'reports', element: withSuspense(Reports) },
      { path: 'staff', element: withSuspense(Staff) },
      { path: 'marketplace', element: withSuspense(Marketplace) },
      { path: 'whatsapp', element: withSuspense(WhatsApp) },
      { path: 'settings', element: withSuspense(HotelSettings) },
    ],
  },

  // ==================== Admin Portal ====================
  { path: '/admin/login', element: withSuspense(AdminLogin) },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: withSuspense(AdminDashboard) },
      { path: 'hotels', element: withSuspense(AdminHotels) },
      { path: 'subscriptions', element: withSuspense(Subscriptions) },
      { path: 'whatsapp', element: withSuspense(WhatsAppInfra) },
      { path: 'analytics', element: withSuspense(Analytics) },
      { path: 'settings', element: withSuspense(AdminSettings) },
    ],
  },

  // ==================== Booking Engine ====================
  {
    path: '/book',
    element: <BookingLayout />,
    children: [
      { index: true, element: withSuspense(BookingHome) },
      { path: 'rooms', element: withSuspense(BookingRooms) },
      { path: 'payment', element: withSuspense(BookingPayment) },
      { path: 'confirmation', element: withSuspense(BookingConfirmation) },
    ],
  },

  // ==================== Catch-all ====================
  { path: '*', element: <Navigate to="/" replace /> },
]);
