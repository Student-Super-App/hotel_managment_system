// ============================================================
// ROBO HMS Admin Portal - WhatsApp Infrastructure
// ============================================================
import {
  MessageSquare,
  Phone,
  Server,
  Activity,
  Plus,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Copy,
  Eye,
  BarChart3,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

const phoneNumbers = [
  { id: 'WA-001', number: '+91 98765 43210', hotel: 'Hotel Grand Palace', status: 'connected', quality: 'High', messagesMonth: 4200, lastActive: '2 min ago' },
  { id: 'WA-002', number: '+91 87654 32109', hotel: 'The Sunrise Resort', status: 'connected', quality: 'High', messagesMonth: 2800, lastActive: '15 min ago' },
  { id: 'WA-003', number: '+91 76543 21098', hotel: 'Lake Palace Heritage', status: 'connected', quality: 'Medium', messagesMonth: 3600, lastActive: '1 hour ago' },
  { id: 'WA-004', number: '+91 65432 10987', hotel: 'City Inn Express', status: 'disconnected', quality: 'N/A', messagesMonth: 0, lastActive: '3 days ago' },
  { id: 'WA-005', number: '+91 54321 09876', hotel: 'Hill View Lodge', status: 'connected', quality: 'High', messagesMonth: 1900, lastActive: '30 min ago' },
];

const apiUsage = [
  { date: 'Dec 1', calls: 12000, errors: 45 },
  { date: 'Dec 5', calls: 14500, errors: 32 },
  { date: 'Dec 10', calls: 16200, errors: 28 },
  { date: 'Dec 15', calls: 15800, errors: 51 },
  { date: 'Dec 20', calls: 18400, errors: 38 },
  { date: 'Dec 25', calls: 13200, errors: 22 },
  { date: 'Dec 30', calls: 19100, errors: 41 },
];

export default function WhatsAppInfra() {
  return (
    <div className="space-y-6">
      <PageHeader title="WhatsApp Infrastructure" description="Manage WhatsApp Business API numbers and system configuration">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="size-4 mr-1" /> Add Number</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Register WhatsApp Number</DialogTitle>
              <DialogDescription>Add a new WhatsApp Business number to the platform</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="space-y-2">
                <Label>Assign to Hotel</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select hotel" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="h001">Hotel Grand Palace</SelectItem>
                    <SelectItem value="h002">The Sunrise Resort</SelectItem>
                    <SelectItem value="h003">Snow Peak Hotel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Business Display Name</Label>
                <Input placeholder="Display name on WhatsApp" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Register Number</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Active Numbers" value="4" change="+1" icon={Phone} iconColor="text-green-500" />
        <StatsCard title="Total Messages/mo" value="12.5K" change="+15%" icon={MessageSquare} iconColor="text-blue-500" />
        <StatsCard title="API Uptime" value="99.95%" change="+0.02%" icon={Server} iconColor="text-emerald-500" />
        <StatsCard title="Error Rate" value="0.23%" change="-0.05%" icon={Activity} iconColor="text-amber-500" />
      </div>

      <Tabs defaultValue="numbers">
        <TabsList>
          <TabsTrigger value="numbers"><Phone className="size-4 mr-1" /> Numbers</TabsTrigger>
          <TabsTrigger value="api"><Server className="size-4 mr-1" /> API Config</TabsTrigger>
          <TabsTrigger value="monitoring"><BarChart3 className="size-4 mr-1" /> Monitoring</TabsTrigger>
        </TabsList>

        {/* Numbers */}
        <TabsContent value="numbers" className="space-y-4 mt-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Number</TableHead>
                    <TableHead>Assigned Hotel</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Quality</TableHead>
                    <TableHead>Messages/mo</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="w-20">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {phoneNumbers.map((num) => (
                    <TableRow key={num.id}>
                      <TableCell>
                        <div>
                          <p className="font-mono font-medium">{num.number}</p>
                          <p className="text-xs text-muted-foreground">{num.id}</p>
                        </div>
                      </TableCell>
                      <TableCell>{num.hotel}</TableCell>
                      <TableCell>
                        <Badge variant={num.status === 'connected' ? 'default' : 'destructive'} className="gap-1">
                          {num.status === 'connected' ? <CheckCircle2 className="size-3" /> : <XCircle className="size-3" />}
                          {num.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={num.quality === 'High' ? 'default' : num.quality === 'Medium' ? 'secondary' : 'outline'}>
                          {num.quality}
                        </Badge>
                      </TableCell>
                      <TableCell>{num.messagesMonth.toLocaleString()}</TableCell>
                      <TableCell className="text-muted-foreground">{num.lastActive}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon-sm"><RefreshCw className="size-3.5" /></Button>
                          <Button variant="ghost" size="icon-sm"><Settings className="size-3.5" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Config */}
        <TabsContent value="api" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">WhatsApp Business API Configuration</CardTitle>
              <CardDescription>Meta Business API credentials and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Meta App ID</Label>
                  <div className="flex gap-2">
                    <Input type="password" defaultValue="1234567890123456" />
                    <Button variant="outline" size="icon"><Eye className="size-4" /></Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Meta App Secret</Label>
                  <div className="flex gap-2">
                    <Input type="password" defaultValue="abcdef1234567890abcdef" />
                    <Button variant="outline" size="icon"><Eye className="size-4" /></Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Permanent Access Token</Label>
                <div className="flex gap-2">
                  <Input type="password" defaultValue="EAA..." className="font-mono text-xs" />
                  <Button variant="outline" size="icon"><Copy className="size-4" /></Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Webhook Callback URL</Label>
                <div className="flex gap-2">
                  <Input defaultValue="https://api.robohms.com/webhook/meta/callback" readOnly className="bg-muted text-xs" />
                  <Button variant="outline" size="icon"><Copy className="size-4" /></Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Webhook Verify Token</Label>
                <div className="flex gap-2">
                  <Input type="password" defaultValue="robo_verify_xxxxx" />
                  <Button variant="outline" size="icon"><Copy className="size-4" /></Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Rate Limiting</p>
                  <p className="text-sm text-muted-foreground">Max 80 messages/second per number</p>
                </div>
                <Select defaultValue="80">
                  <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="40">40/sec</SelectItem>
                    <SelectItem value="80">80/sec</SelectItem>
                    <SelectItem value="120">120/sec</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Save Configuration</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Monitoring */}
        <TabsContent value="monitoring" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">API Usage & Error Rates (December)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={apiUsage}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="date" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="calls" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} name="API Calls" />
                  <Line type="monotone" dataKey="errors" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} name="Errors" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader><CardTitle className="text-base">Message Delivery Stats</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: 'Delivered', value: 98.5, color: 'bg-emerald-500' },
                  { label: 'Read', value: 82.3, color: 'bg-blue-500' },
                  { label: 'Failed', value: 1.2, color: 'bg-red-500' },
                  { label: 'Pending', value: 0.3, color: 'bg-amber-500' },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{stat.label}</span>
                      <span className="font-medium">{stat.value}%</span>
                    </div>
                    <Progress value={stat.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-base">System Alerts</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {[
                  { message: 'City Inn Express number disconnected', severity: 'error', time: '3 days ago' },
                  { message: 'Lake Palace quality dropped to Medium', severity: 'warning', time: '2 days ago' },
                  { message: 'API rate limit reached briefly', severity: 'warning', time: '1 day ago' },
                  { message: 'All systems normal', severity: 'info', time: 'Now' },
                ].map((alert, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg border">
                    {alert.severity === 'error' && <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />}
                    {alert.severity === 'warning' && <AlertTriangle className="size-4 text-amber-500 mt-0.5 shrink-0" />}
                    {alert.severity === 'info' && <CheckCircle2 className="size-4 text-emerald-500 mt-0.5 shrink-0" />}
                    <div className="flex-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
