// ============================================================
// ROBO HMS Admin Portal - Dashboard
// ============================================================
import {
  Building2,
  IndianRupee,
  CreditCard,
  MessageSquare,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

const revenueData = [
  { month: 'Jan', revenue: 240000, hotels: 42 },
  { month: 'Feb', revenue: 280000, hotels: 45 },
  { month: 'Mar', revenue: 320000, hotels: 48 },
  { month: 'Apr', revenue: 350000, hotels: 52 },
  { month: 'May', revenue: 310000, hotels: 55 },
  { month: 'Jun', revenue: 380000, hotels: 58 },
  { month: 'Jul', revenue: 420000, hotels: 62 },
  { month: 'Aug', revenue: 450000, hotels: 65 },
  { month: 'Sep', revenue: 410000, hotels: 68 },
  { month: 'Oct', revenue: 480000, hotels: 72 },
  { month: 'Nov', revenue: 520000, hotels: 76 },
  { month: 'Dec', revenue: 560000, hotels: 78 },
];

const planDistribution = [
  { name: 'Starter', value: 35, color: '#3b82f6' },
  { name: 'Professional', value: 42, color: '#8b5cf6' },
  { name: 'Enterprise', value: 18, color: '#f59e0b' },
  { name: 'Free Trial', value: 5, color: '#94a3b8' },
];

const recentHotels = [
  { id: 'H078', name: 'Hotel Sunrise', city: 'Jaipur', plan: 'Professional', status: 'active', rooms: 45, created: '2024-12-01' },
  { id: 'H077', name: 'The Palm Resort', city: 'Goa', plan: 'Enterprise', status: 'active', rooms: 120, created: '2024-11-28' },
  { id: 'H076', name: 'City Inn', city: 'Delhi', plan: 'Starter', status: 'active', rooms: 22, created: '2024-11-25' },
  { id: 'H075', name: 'Mountain View', city: 'Shimla', plan: 'Professional', status: 'trial', rooms: 38, created: '2024-11-20' },
  { id: 'H074', name: 'Lake Palace', city: 'Udaipur', plan: 'Enterprise', status: 'active', rooms: 85, created: '2024-11-15' },
];

const whatsAppUsage = [
  { month: 'Oct', messages: 45000, conversations: 8200 },
  { month: 'Nov', messages: 52000, conversations: 9400 },
  { month: 'Dec', messages: 61000, conversations: 10800 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin Dashboard" description="Platform overview and system health" />

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Hotels" value="78" change="+8" icon={Building2} iconColor="text-blue-500" />
        <StatsCard title="MRR" value="₹5,60,000" change="+12%" icon={IndianRupee} iconColor="text-emerald-500" />
        <StatsCard title="Active Plans" value="73" change="+5" icon={CreditCard} iconColor="text-purple-500" />
        <StatsCard title="WhatsApp Messages" value="61K" change="+17%" icon={MessageSquare} iconColor="text-green-500" />
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Revenue & Hotel Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="adminRevGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
                <Tooltip formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fill="url(#adminRevGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Plan Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={planDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                  {planDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {planDistribution.map((plan) => (
                <div key={plan.name} className="flex items-center gap-2 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: plan.color }} />
                  <span>{plan.name}</span>
                  <span className="ml-auto font-medium">{plan.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health + WhatsApp */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">System Health</CardTitle>
            <CardDescription>Real-time platform metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: 'API Uptime', value: 99.98, color: 'bg-emerald-500' },
              { label: 'Database Load', value: 42, color: 'bg-blue-500' },
              { label: 'WhatsApp API', value: 99.5, color: 'bg-green-500' },
              { label: 'Storage Used', value: 67, color: 'bg-amber-500' },
              { label: 'CDN Cache Hit', value: 94, color: 'bg-purple-500' },
            ].map((metric) => (
              <div key={metric.label} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{metric.label}</span>
                  <span className="font-medium">{metric.value}%</span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">WhatsApp Usage (Last 3 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={whatsAppUsage}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
                <Tooltip />
                <Legend />
                <Bar dataKey="messages" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Messages" />
                <Bar dataKey="conversations" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Conversations" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Hotels */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Recently Onboarded Hotels</CardTitle>
            <Badge variant="outline">Last 30 days</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hotel</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Rooms</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Onboarded</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentHotels.map((h) => (
                <TableRow key={h.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{h.name}</p>
                      <p className="text-xs text-muted-foreground">{h.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{h.city}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{h.plan}</Badge>
                  </TableCell>
                  <TableCell>{h.rooms}</TableCell>
                  <TableCell>
                    <Badge variant={h.status === 'active' ? 'default' : 'secondary'}>{h.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{h.created}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
