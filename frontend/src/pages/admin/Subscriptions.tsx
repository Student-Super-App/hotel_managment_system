// ============================================================
// ROBO HMS Admin Portal - Subscriptions Management
// ============================================================
import { useState } from 'react';
import {
  CreditCard,
  IndianRupee,
  TrendingUp,
  AlertCircle,
  Search,
  Download,
  CheckCircle2,
  Clock,
  XCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

const subscriptions = [
  { id: 'SUB-001', hotel: 'Hotel Grand Palace', plan: 'Enterprise', amount: 15000, status: 'active', nextBilling: '2025-01-10', startDate: '2024-01-10', modules: 3 },
  { id: 'SUB-002', hotel: 'The Sunrise Resort', plan: 'Professional', amount: 8000, status: 'active', nextBilling: '2025-01-15', startDate: '2024-02-15', modules: 2 },
  { id: 'SUB-003', hotel: 'City Inn Express', plan: 'Starter', amount: 3000, status: 'active', nextBilling: '2025-01-20', startDate: '2024-03-20', modules: 0 },
  { id: 'SUB-004', hotel: 'Hill View Lodge', plan: 'Professional', amount: 8000, status: 'active', nextBilling: '2025-01-05', startDate: '2024-04-05', modules: 1 },
  { id: 'SUB-005', hotel: 'Lake Palace Heritage', plan: 'Enterprise', amount: 15000, status: 'active', nextBilling: '2025-01-12', startDate: '2024-06-12', modules: 4 },
  { id: 'SUB-006', hotel: 'Beach House Retreat', plan: 'Starter', amount: 3000, status: 'overdue', nextBilling: '2024-12-01', startDate: '2024-07-01', modules: 0 },
  { id: 'SUB-007', hotel: 'Snow Peak Hotel', plan: 'Professional', amount: 0, status: 'trial', nextBilling: '2024-12-09', startDate: '2024-11-25', modules: 0 },
];

const payments = [
  { id: 'PAY-1201', hotel: 'Hotel Grand Palace', amount: 15000, method: 'UPI', status: 'success', date: '2024-12-10' },
  { id: 'PAY-1200', hotel: 'The Sunrise Resort', amount: 8000, method: 'Card', status: 'success', date: '2024-12-08' },
  { id: 'PAY-1199', hotel: 'Hill View Lodge', amount: 8000, method: 'Net Banking', status: 'success', date: '2024-12-05' },
  { id: 'PAY-1198', hotel: 'Lake Palace Heritage', amount: 21000, method: 'UPI', status: 'success', date: '2024-12-03' },
  { id: 'PAY-1197', hotel: 'Beach House Retreat', amount: 3000, method: 'Card', status: 'failed', date: '2024-12-01' },
  { id: 'PAY-1196', hotel: 'City Inn Express', amount: 3000, method: 'UPI', status: 'success', date: '2024-11-28' },
];

const mrrData = [
  { month: 'Jul', mrr: 380000 },
  { month: 'Aug', mrr: 420000 },
  { month: 'Sep', mrr: 450000 },
  { month: 'Oct', mrr: 480000 },
  { month: 'Nov', mrr: 520000 },
  { month: 'Dec', mrr: 560000 },
];

export default function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <PageHeader title="Subscriptions" description="Manage plans, payments, and billing">
        <Button variant="outline" size="sm"><Download className="size-4 mr-1" /> Export Report</Button>
      </PageHeader>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total MRR" value="₹5,60,000" change="+8.3%" icon={IndianRupee} iconColor="text-emerald-500" />
        <StatsCard title="Active Subscriptions" value="73" change="+5" icon={CreditCard} iconColor="text-blue-500" />
        <StatsCard title="Avg Revenue/Hotel" value="₹7,671" change="+3.2%" icon={TrendingUp} iconColor="text-purple-500" />
        <StatsCard title="Overdue Payments" value="3" change="-1" icon={AlertCircle} iconColor="text-red-500" />
      </div>

      {/* MRR Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Monthly Recurring Revenue (MRR)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mrrData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v: number) => [`₹${v.toLocaleString()}`, 'MRR']} />
              <Bar dataKey="mrr" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Tabs defaultValue="subscriptions">
        <TabsList>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="payments">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="subscriptions" className="space-y-4 mt-4">
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search subscriptions..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hotel</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Modules</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Next Billing</TableHead>
                    <TableHead>Since</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscriptions.map((sub) => (
                    <TableRow key={sub.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{sub.hotel}</p>
                          <p className="text-xs text-muted-foreground">{sub.id}</p>
                        </div>
                      </TableCell>
                      <TableCell><Badge variant="outline">{sub.plan}</Badge></TableCell>
                      <TableCell className="font-medium">
                        {sub.amount > 0 ? `₹${sub.amount.toLocaleString()}/mo` : 'Free Trial'}
                      </TableCell>
                      <TableCell>
                        {sub.modules > 0 ? (
                          <Badge variant="secondary">{sub.modules} add-ons</Badge>
                        ) : (
                          <span className="text-muted-foreground text-sm">None</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={sub.status === 'active' ? 'default' : sub.status === 'trial' ? 'secondary' : 'destructive'} className="gap-1">
                          {sub.status === 'active' && <CheckCircle2 className="size-3" />}
                          {sub.status === 'trial' && <Clock className="size-3" />}
                          {sub.status === 'overdue' && <AlertCircle className="size-3" />}
                          {sub.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{sub.nextBilling}</TableCell>
                      <TableCell className="text-muted-foreground">{sub.startDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Hotel</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-mono text-sm">{p.id}</TableCell>
                      <TableCell className="font-medium">{p.hotel}</TableCell>
                      <TableCell className="font-medium">₹{p.amount.toLocaleString()}</TableCell>
                      <TableCell><Badge variant="outline">{p.method}</Badge></TableCell>
                      <TableCell>
                        <Badge variant={p.status === 'success' ? 'default' : 'destructive'} className="gap-1">
                          {p.status === 'success' ? <CheckCircle2 className="size-3" /> : <XCircle className="size-3" />}
                          {p.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{p.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
