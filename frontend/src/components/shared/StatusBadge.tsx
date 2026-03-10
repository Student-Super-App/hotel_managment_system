// ============================================================
// ROBO HMS - Status Badge Component
// ============================================================
import { Badge } from '@/components/ui/badge';

type StatusType = 'available' | 'occupied' | 'cleaning' | 'maintenance' | 'blocked' |
  'confirmed' | 'checked_in' | 'checked_out' | 'cancelled' | 'no_show' | 'pending' |
  'completed' | 'in_progress' | 'active' | 'expired' | 'trial' | 'connected' | 'disconnected' |
  'paid' | 'overdue' | 'draft' | 'sent' | 'failed' | 'refunded';

interface StatusBadgeProps {
  status: StatusType | string;
  className?: string;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  // Room statuses
  available: { label: 'Available', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400' },
  occupied: { label: 'Occupied', className: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-400' },
  cleaning: { label: 'Cleaning', className: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400' },
  maintenance: { label: 'Maintenance', className: 'bg-orange-500/10 text-orange-700 border-orange-500/20 dark:text-orange-400' },
  blocked: { label: 'Blocked', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  // Booking statuses
  confirmed: { label: 'Confirmed', className: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-400' },
  checked_in: { label: 'Checked In', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400' },
  checked_out: { label: 'Checked Out', className: 'bg-gray-500/10 text-gray-700 border-gray-500/20 dark:text-gray-400' },
  cancelled: { label: 'Cancelled', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  no_show: { label: 'No Show', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  pending: { label: 'Pending', className: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400' },
  // Task statuses
  in_progress: { label: 'In Progress', className: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-400' },
  completed: { label: 'Completed', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400' },
  // Subscription statuses
  active: { label: 'Active', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400' },
  expired: { label: 'Expired', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  trial: { label: 'Trial', className: 'bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-400' },
  // Connection statuses
  connected: { label: 'Connected', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400' },
  disconnected: { label: 'Disconnected', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  // Payment statuses
  paid: { label: 'Paid', className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-400' },
  overdue: { label: 'Overdue', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  draft: { label: 'Draft', className: 'bg-gray-500/10 text-gray-700 border-gray-500/20 dark:text-gray-400' },
  sent: { label: 'Sent', className: 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-blue-400' },
  failed: { label: 'Failed', className: 'bg-red-500/10 text-red-700 border-red-500/20 dark:text-red-400' },
  refunded: { label: 'Refunded', className: 'bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-400' },
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] || { label: status, className: 'bg-gray-500/10 text-gray-700 border-gray-500/20' };
  return (
    <Badge variant="outline" className={`${config.className} ${className}`}>
      {config.label}
    </Badge>
  );
}
