// ============================================================
// ROBO HMS - Stats Card Component
// ============================================================
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: string;
}

export default function StatsCard({ title, value, change, changeType = 'neutral', icon: Icon, iconColor = 'text-primary' }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <p className={`text-xs font-medium ${
                changeType === 'positive' ? 'text-emerald-600' :
                changeType === 'negative' ? 'text-red-600' :
                'text-muted-foreground'
              }`}>
                {change}
              </p>
            )}
          </div>
          <div className={`flex items-center justify-center rounded-lg bg-muted size-12 ${iconColor}`}>
            <Icon className="size-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
