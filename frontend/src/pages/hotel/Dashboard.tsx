// ============================================================
// ROBO HMS - Hotel Dashboard Page
// ============================================================
import {
  BedDouble,
  CalendarCheck,
  IndianRupee,
  Users,
  Brush,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
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
} from 'recharts';
import StatsCard from '@/components/shared/StatsCard';
import StatusBadge from '@/components/shared/StatusBadge';
import PageHeader from '@/components/shared/PageHeader';

// Demo data
const revenueData = [
  { name: 'Mon', revenue: 24500 },
  { name: 'Tue', revenue: 31200 },
  { name: 'Wed', revenue: 28800 },
  { name: 'Thu', revenue: 35600 },
  { name: 'Fri', revenue: 42100 },
  { name: 'Sat', revenue: 51800 },
  { name: 'Sun', revenue: 47300 },
];

const occupancyData = [
  { name: 'Mon', rate: 72 },
  { name: 'Tue', rate: 78 },
  { name: 'Wed', rate: 74 },
  { name: 'Thu', rate: 85 },
  { name: 'Fri', rate: 92 },
  { name: 'Sat', rate: 96 },
  { name: 'Sun', rate: 88 },
];

const bookingSourceData = [
  { name: 'Direct', value: 35, color: 'var(--color-chart-1)' },
  { name: 'Website', value: 25, color: 'var(--color-chart-2)' },
  { name: 'Booking.com', value: 20, color: 'var(--color-chart-3)' },
  { name: 'MakeMyTrip', value: 12, color: 'var(--color-chart-4)' },
  { name: 'WhatsApp', value: 8, color: 'var(--color-chart-5)' },
];

const recentBookings = [
  { id: 'BK001', guest: 'Rahul Sharma', room: '201', type: 'Deluxe', checkIn: '2026-03-10', status: 'confirmed', amount: 4500 },
  { id: 'BK002', guest: 'Priya Patel', room: '305', type: 'Suite', checkIn: '2026-03-10', status: 'checked_in', amount: 8200 },
  { id: 'BK003', guest: 'Amit Kumar', room: '102', type: 'Standard', checkIn: '2026-03-11', status: 'pending', amount: 2800 },
  { id: 'BK004', guest: 'Sarah Wilson', room: '401', type: 'Premium', checkIn: '2026-03-11', status: 'confirmed', amount: 6100 },
  { id: 'BK005', guest: 'David Chen', room: '203', type: 'Deluxe', checkIn: '2026-03-12', status: 'confirmed', amount: 4500 },
];

const housekeepingTasks = [
  { room: '102', task: 'Deep Clean', priority: 'high', assignee: 'Sunita' },
  { room: '205', task: 'Turndown', priority: 'medium', assignee: 'Ravi' },
  { room: '301', task: 'Checkout Clean', priority: 'urgent', assignee: 'Meera' },
  { room: '404', task: 'Maintenance', priority: 'low', assignee: 'Anil' },
];

export default function HotelDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Overview of your hotel operations for today"
      />

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Occupancy Rate"
          value="85%"
          change="+5.2% from yesterday"
          changeType="positive"
          icon={BedDouble}
        />
        <StatsCard
          title="Revenue Today"
          value="₹1,24,500"
          change="+12.3% from yesterday"
          changeType="positive"
          icon={IndianRupee}
        />
        <StatsCard
          title="Available Rooms"
          value="12"
          change="out of 80 total"
          changeType="neutral"
          icon={CalendarCheck}
        />
        <StatsCard
          title="Pending Check-ins"
          value="8"
          change="3 arriving soon"
          changeType="neutral"
          icon={Users}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Revenue Chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Weekly Revenue</CardTitle>
                <CardDescription>Revenue trend for the current week</CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600">
                <ArrowUpRight className="size-4" />
                +18.2%
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" tick={{ fill: 'var(--color-muted-foreground)' }} />
                <YAxis className="text-xs" tick={{ fill: 'var(--color-muted-foreground)' }} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                <RechartsTooltip
                  contentStyle={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}
                  labelStyle={{ color: 'var(--color-foreground)' }}
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-chart-1)" fill="url(#revGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Booking Sources */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Booking Sources</CardTitle>
            <CardDescription>Where your bookings come from</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={bookingSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {bookingSourceData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip
                  contentStyle={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {bookingSourceData.map((source) => (
                <div key={source.name} className="flex items-center gap-2 text-sm">
                  <div className="size-2.5 rounded-full" style={{ backgroundColor: source.color }} />
                  <span className="text-muted-foreground">{source.name}</span>
                  <span className="ml-auto font-medium">{source.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Occupancy + Housekeeping Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Occupancy Chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base">Occupancy Trend</CardTitle>
            <CardDescription>Daily occupancy rate this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" tick={{ fill: 'var(--color-muted-foreground)' }} />
                <YAxis className="text-xs" tick={{ fill: 'var(--color-muted-foreground)' }} tickFormatter={(v) => `${v}%`} />
                <RechartsTooltip
                  contentStyle={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '8px' }}
                  formatter={(value: number) => [`${value}%`, 'Occupancy']}
                />
                <Bar dataKey="rate" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Housekeeping Tasks */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Housekeeping</CardTitle>
                <CardDescription>Active tasks for today</CardDescription>
              </div>
              <Badge variant="secondary">{housekeepingTasks.length} tasks</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {housekeepingTasks.map((task, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center rounded-md bg-muted size-9">
                      <Brush className="size-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Room {task.room}</p>
                      <p className="text-xs text-muted-foreground">{task.task} • {task.assignee}</p>
                    </div>
                  </div>
                  <Badge variant={
                    task.priority === 'urgent' ? 'destructive' :
                    task.priority === 'high' ? 'default' :
                    'secondary'
                  }>
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Recent Bookings</CardTitle>
              <CardDescription>Latest booking activity</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.guest}</TableCell>
                  <TableCell>
                    <span className="font-medium">{booking.room}</span>
                    <span className="text-muted-foreground ml-1 text-xs">({booking.type})</span>
                  </TableCell>
                  <TableCell>{booking.checkIn}</TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="text-right font-medium">₹{booking.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Floor Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { floor: '1st Floor', total: 20, occupied: 16, cleaning: 2, available: 2 },
          { floor: '2nd Floor', total: 20, occupied: 18, cleaning: 1, available: 1 },
          { floor: '3rd Floor', total: 20, occupied: 15, cleaning: 1, available: 4 },
          { floor: '4th Floor', total: 20, occupied: 14, cleaning: 1, available: 5 },
        ].map((floor) => (
          <Card key={floor.floor}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm">{floor.floor}</h4>
                <span className="text-xs text-muted-foreground">{floor.total} rooms</span>
              </div>
              <Progress value={(floor.occupied / floor.total) * 100} className="mb-3 h-2" />
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-bold text-emerald-600">{floor.available}</p>
                  <p className="text-[10px] text-muted-foreground">Available</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-blue-600">{floor.occupied}</p>
                  <p className="text-[10px] text-muted-foreground">Occupied</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-amber-600">{floor.cleaning}</p>
                  <p className="text-[10px] text-muted-foreground">Cleaning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
