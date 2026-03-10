// ============================================================
// ROBO HMS Admin Portal - Platform Analytics
// ============================================================
import {
  BedDouble,
  MessageSquare,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

const bookingTrends = [
  { month: 'Jan', bookings: 3200, revenue: 24000000 },
  { month: 'Feb', bookings: 3800, revenue: 28000000 },
  { month: 'Mar', bookings: 4200, revenue: 32000000 },
  { month: 'Apr', bookings: 4800, revenue: 38000000 },
  { month: 'May', bookings: 4500, revenue: 35000000 },
  { month: 'Jun', bookings: 5200, revenue: 42000000 },
  { month: 'Jul', bookings: 5800, revenue: 48000000 },
  { month: 'Aug', bookings: 6200, revenue: 52000000 },
  { month: 'Sep', bookings: 5500, revenue: 45000000 },
  { month: 'Oct', bookings: 6800, revenue: 56000000 },
  { month: 'Nov', bookings: 7200, revenue: 62000000 },
  { month: 'Dec', bookings: 7800, revenue: 68000000 },
];

const moduleAdoption = [
  { name: 'WhatsApp AI', adoption: 72, color: '#22c55e' },
  { name: 'Booking Bot', adoption: 45, color: '#3b82f6' },
  { name: 'Custom Website', adoption: 68, color: '#a855f7' },
  { name: 'OTA Manager', adoption: 35, color: '#f59e0b' },
  { name: 'Smart Pricing', adoption: 28, color: '#ef4444' },
  { name: 'Express Check-in', adoption: 22, color: '#06b6d4' },
];

const cityDistribution = [
  { city: 'Bengaluru', hotels: 12 },
  { city: 'Mumbai', hotels: 10 },
  { city: 'Delhi', hotels: 8 },
  { city: 'Goa', hotels: 7 },
  { city: 'Jaipur', hotels: 6 },
  { city: 'Udaipur', hotels: 5 },
  { city: 'Shimla', hotels: 4 },
  { city: 'Others', hotels: 26 },
];

const conversationStats = [
  { day: 'Mon', human: 320, bot: 680 },
  { day: 'Tue', human: 280, bot: 720 },
  { day: 'Wed', human: 350, bot: 650 },
  { day: 'Thu', human: 300, bot: 700 },
  { day: 'Fri', human: 380, bot: 620 },
  { day: 'Sat', human: 420, bot: 580 },
  { day: 'Sun', human: 250, bot: 750 },
];

const topHotels = [
  { name: 'Lake Palace Heritage', bookings: 890, revenue: 8500000, occupancy: 92 },
  { name: 'Hotel Grand Palace', bookings: 720, revenue: 6800000, occupancy: 88 },
  { name: 'The Sunrise Resort', bookings: 650, revenue: 5200000, occupancy: 85 },
  { name: 'Hill View Lodge', bookings: 480, revenue: 3600000, occupancy: 78 },
  { name: 'Snow Peak Hotel', bookings: 320, revenue: 2800000, occupancy: 72 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader title="Platform Analytics" description="Comprehensive analytics across all hotels" />

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Bookings" value="65.2K" change="+18%" icon={Calendar} iconColor="text-blue-500" />
        <StatsCard title="Total Revenue" value="₹4.8 Cr" change="+24%" icon={TrendingUp} iconColor="text-emerald-500" />
        <StatsCard title="Avg Occupancy" value="78%" change="+3%" icon={BedDouble} iconColor="text-purple-500" />
        <StatsCard title="WhatsApp Conversations" value="42K" change="+32%" icon={MessageSquare} iconColor="text-green-500" />
      </div>

      <Tabs defaultValue="bookings">
        <TabsList>
          <TabsTrigger value="bookings">Bookings & Revenue</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp Analytics</TabsTrigger>
          <TabsTrigger value="hotels">Hotel Performance</TabsTrigger>
        </TabsList>

        {/* Bookings & Revenue */}
        <TabsContent value="bookings" className="space-y-4 mt-4">
          <Card>
            <CardHeader><CardTitle className="text-base">Platform Booking & Revenue Trends</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={bookingTrends}>
                  <defs>
                    <linearGradient id="bookingGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis yAxisId="left" className="text-xs" />
                  <YAxis yAxisId="right" orientation="right" className="text-xs" tickFormatter={(v) => `₹${(v / 1000000).toFixed(0)}M`} />
                  <Tooltip />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="bookings" stroke="hsl(var(--primary))" fill="url(#bookingGrad)" strokeWidth={2} name="Bookings" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={false} name="Revenue (₹)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader><CardTitle className="text-base">Hotels by City</CardTitle></CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={cityDistribution} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis type="number" className="text-xs" />
                    <YAxis dataKey="city" type="category" className="text-xs" width={75} />
                    <Tooltip />
                    <Bar dataKey="hotels" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">Module Adoption Rate</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {moduleAdoption.map((mod) => (
                  <div key={mod.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{mod.name}</span>
                      <span className="font-medium">{mod.adoption}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${mod.adoption}%`, backgroundColor: mod.color }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* WhatsApp Analytics */}
        <TabsContent value="whatsapp" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Human vs Bot Conversations (This Week)</CardTitle>
              <CardDescription>Breakdown of conversations handled by staff vs AI chatbot</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={conversationStats}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bot" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Bot" stackId="a" />
                  <Bar dataKey="human" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Human" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Bot Resolution Rate', value: '68%', desc: 'Queries resolved by AI' },
              { label: 'Avg Response Time', value: '1.2s', desc: 'Bot response latency' },
              { label: 'Customer Satisfaction', value: '4.6/5', desc: 'Post-chat rating' },
              { label: 'Escalation Rate', value: '12%', desc: 'Transferred to human' },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm font-medium">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Hotel Performance */}
        <TabsContent value="hotels" className="space-y-4 mt-4">
          <Card>
            <CardHeader><CardTitle className="text-base">Top Performing Hotels (This Year)</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topHotels.map((hotel, i) => (
                  <div key={hotel.name} className="flex items-center gap-4 p-3 rounded-lg border">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                      #{i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{hotel.name}</p>
                      <p className="text-sm text-muted-foreground">{hotel.bookings} bookings</p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="font-medium">₹{(hotel.revenue / 100000).toFixed(1)}L</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={hotel.occupancy >= 85 ? 'default' : 'secondary'}>
                        {hotel.occupancy}% Occ.
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
