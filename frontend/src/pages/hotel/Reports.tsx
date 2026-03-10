// ============================================================
// ROBO HMS - Reports & Analytics Page
// ============================================================
import {
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
} from 'recharts';
import PageHeader from '@/components/shared/PageHeader';

const monthlyRevenue = [
  { name: 'Jan', revenue: 980000, expenses: 620000 },
  { name: 'Feb', revenue: 1120000, expenses: 680000 },
  { name: 'Mar', revenue: 1240000, expenses: 710000 },
  { name: 'Apr', revenue: 1080000, expenses: 650000 },
  { name: 'May', revenue: 1350000, expenses: 720000 },
  { name: 'Jun', revenue: 1560000, expenses: 780000 },
  { name: 'Jul', revenue: 1780000, expenses: 830000 },
  { name: 'Aug', revenue: 1620000, expenses: 790000 },
  { name: 'Sep', revenue: 1450000, expenses: 750000 },
  { name: 'Oct', revenue: 1380000, expenses: 730000 },
  { name: 'Nov', revenue: 1290000, expenses: 700000 },
  { name: 'Dec', revenue: 1540000, expenses: 770000 },
];

const occupancyTrend = [
  { name: 'Jan', rate: 65 },
  { name: 'Feb', rate: 72 },
  { name: 'Mar', rate: 78 },
  { name: 'Apr', rate: 68 },
  { name: 'May', rate: 82 },
  { name: 'Jun', rate: 90 },
  { name: 'Jul', rate: 95 },
  { name: 'Aug', rate: 88 },
  { name: 'Sep', rate: 82 },
  { name: 'Oct', rate: 76 },
  { name: 'Nov', rate: 70 },
  { name: 'Dec', rate: 85 },
];

const bookingSourceData = [
  { name: 'Direct', value: 35, color: 'var(--color-chart-1)' },
  { name: 'Booking.com', value: 22, color: 'var(--color-chart-2)' },
  { name: 'Website', value: 18, color: 'var(--color-chart-3)' },
  { name: 'MakeMyTrip', value: 13, color: 'var(--color-chart-4)' },
  { name: 'WhatsApp', value: 8, color: 'var(--color-chart-5)' },
  { name: 'Agoda', value: 4, color: 'var(--color-chart-1)' },
];

const roomTypeRevenue = [
  { type: 'Standard', revenue: 280000, bookings: 100 },
  { type: 'Deluxe', revenue: 540000, bookings: 120 },
  { type: 'Premium', revenue: 390000, bookings: 60 },
  { type: 'Suite', revenue: 656000, bookings: 80 },
  { type: 'Presidential', revenue: 300000, bookings: 20 },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <PageHeader title="Reports & Analytics" description="Comprehensive insights into your hotel performance">
        <div className="flex items-center gap-2">
          <Select defaultValue="this_month">
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this_week">This Week</SelectItem>
              <SelectItem value="this_month">This Month</SelectItem>
              <SelectItem value="this_year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm"><Download className="size-4 mr-1" /> Export</Button>
        </div>
      </PageHeader>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Occupancy Rate</p>
            <p className="text-2xl font-bold mt-1">78.5%</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1"><ArrowUpRight className="size-3" /> +5.2% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">ADR</p>
            <p className="text-2xl font-bold mt-1">₹5,420</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1"><ArrowUpRight className="size-3" /> +8.1% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">RevPAR</p>
            <p className="text-2xl font-bold mt-1">₹4,255</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1"><ArrowUpRight className="size-3" /> +12.3% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-bold mt-1">₹12.4L</p>
            <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1"><ArrowUpRight className="size-3" /> +22% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Bookings</p>
            <p className="text-2xl font-bold mt-1">342</p>
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1"><ArrowDownRight className="size-3" /> -3% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Revenue vs Expenses</CardTitle>
          <CardDescription>Monthly revenue and expense comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="name" tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }} />
              <YAxis tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }} tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} />
              <RechartsTooltip
                contentStyle={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}
                formatter={(value: number) => `₹${(value / 1000).toFixed(0)}k`}
              />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Expenses" fill="var(--color-chart-4)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Occupancy Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Occupancy Rate Trend</CardTitle>
            <CardDescription>Monthly occupancy percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={occupancyTrend}>
                <defs>
                  <linearGradient id="occGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }} />
                <YAxis tick={{ fill: 'var(--color-muted-foreground)', fontSize: 12 }} tickFormatter={(v) => `${v}%`} />
                <RechartsTooltip
                  contentStyle={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}
                  formatter={(value: number) => [`${value}%`, 'Occupancy']}
                />
                <Area type="monotone" dataKey="rate" stroke="var(--color-chart-2)" fill="url(#occGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Booking Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Booking Sources</CardTitle>
            <CardDescription>Distribution of bookings by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width="50%" height={200}>
                <PieChart>
                  <Pie data={bookingSourceData} cx="50%" cy="50%" innerRadius={45} outerRadius={80} paddingAngle={3} dataKey="value">
                    {bookingSourceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <RechartsTooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2">
                {bookingSourceData.map((s) => (
                  <div key={s.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="size-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                      <span>{s.name}</span>
                    </div>
                    <span className="font-medium">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Room Type Revenue */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Revenue by Room Type</CardTitle>
          <CardDescription>Performance breakdown across room categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {roomTypeRevenue.map((r) => (
              <div key={r.type} className="flex items-center gap-4 p-3 rounded-lg border">
                <div className="min-w-[100px] font-medium">{r.type}</div>
                <div className="flex-1">
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-primary rounded-full h-3 transition-all"
                      style={{ width: `${(r.revenue / 700000) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="min-w-[100px] text-right font-bold">₹{(r.revenue / 1000).toFixed(0)}k</div>
                <Badge variant="secondary">{r.bookings} bookings</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
