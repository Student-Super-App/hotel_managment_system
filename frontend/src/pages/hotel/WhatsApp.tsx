// ============================================================
// ROBO HMS - WhatsApp Management Page
// ============================================================
import { useState } from 'react';
import {
  MessageSquare,
  Plug,
  Send,
  Bot,
  Settings,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  BarChart3,
  Plus,
  Copy,
  Eye,
  RefreshCw,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { Separator } from '@/components/ui/separator';
import PageHeader from '@/components/shared/PageHeader';
import StatsCard from '@/components/shared/StatsCard';

const templates = [
  { id: 'T001', name: 'Booking Confirmation', category: 'Transactional', status: 'approved', language: 'en', lastUsed: '2 hours ago', sends: 1240 },
  { id: 'T002', name: 'Check-in Reminder', category: 'Transactional', status: 'approved', language: 'en', lastUsed: '5 hours ago', sends: 890 },
  { id: 'T003', name: 'Check-out Summary', category: 'Transactional', status: 'approved', language: 'en', lastUsed: '1 day ago', sends: 756 },
  { id: 'T004', name: 'Welcome Message', category: 'Marketing', status: 'approved', language: 'en,hi', lastUsed: '3 hours ago', sends: 2100 },
  { id: 'T005', name: 'Special Offer', category: 'Marketing', status: 'pending', language: 'en', lastUsed: 'Never', sends: 0 },
  { id: 'T006', name: 'Feedback Request', category: 'Utility', status: 'approved', language: 'en', lastUsed: '12 hours ago', sends: 430 },
  { id: 'T007', name: 'Room Service Menu', category: 'Utility', status: 'rejected', language: 'en', lastUsed: 'Never', sends: 0 },
];

const chatbotResponses = [
  { trigger: 'Room availability', response: 'Let me check room availability for you. What dates are you looking for?', isActive: true },
  { trigger: 'Booking inquiry', response: 'I can help you with your booking. Please share your name or booking ID.', isActive: true },
  { trigger: 'Check-in time', response: 'Our standard check-in time is 2:00 PM. Early check-in is available on request.', isActive: true },
  { trigger: 'Checkout time', response: 'Standard checkout is 11:00 AM. Late checkout can be arranged for ₹500/hour.', isActive: true },
  { trigger: 'Room service', response: 'Our room service is available 24/7. I\'ll share the menu with you.', isActive: false },
  { trigger: 'WiFi password', response: 'The WiFi network is "HotelGuest" and the password will be shared at check-in.', isActive: true },
];

export default function WhatsApp() {
  const [isConnected] = useState(true);

  return (
    <div className="space-y-6">
      <PageHeader title="WhatsApp Management" description="Manage WhatsApp Business integration and communication">
        <Button variant="outline" size="sm"><RefreshCw className="size-4 mr-1" /> Sync Status</Button>
      </PageHeader>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Messages Sent" value="3,420" change="+12%" icon={Send} iconColor="text-emerald-500" />
        <StatsCard title="Active Chats" value="48" change="+5%" icon={Users} iconColor="text-blue-500" />
        <StatsCard title="Bot Responses" value="1,890" change="+22%" icon={Bot} iconColor="text-purple-500" />
        <StatsCard title="Delivery Rate" value="98.5%" change="+0.3%" icon={BarChart3} iconColor="text-amber-500" />
      </div>

      <Tabs defaultValue="connection">
        <TabsList>
          <TabsTrigger value="connection"><Plug className="size-4 mr-1" /> Connection</TabsTrigger>
          <TabsTrigger value="templates"><MessageSquare className="size-4 mr-1" /> Templates</TabsTrigger>
          <TabsTrigger value="chatbot"><Bot className="size-4 mr-1" /> Chatbot</TabsTrigger>
          <TabsTrigger value="settings"><Settings className="size-4 mr-1" /> Settings</TabsTrigger>
        </TabsList>

        {/* Connection Tab */}
        <TabsContent value="connection" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>WhatsApp Business API</CardTitle>
                  <CardDescription>Connection status and configuration</CardDescription>
                </div>
                <Badge variant={isConnected ? 'default' : 'destructive'} className="gap-1">
                  {isConnected ? <CheckCircle2 className="size-3" /> : <XCircle className="size-3" />}
                  {isConnected ? 'Connected' : 'Disconnected'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Business Phone Number</Label>
                  <div className="flex gap-2">
                    <Input value="+91 98765 43210" readOnly className="bg-muted" />
                    <Button variant="outline" size="icon"><Copy className="size-4" /></Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Business Display Name</Label>
                  <Input value="Hotel Grand Palace" readOnly className="bg-muted" />
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <div className="flex gap-2">
                    <Input value="https://api.robohms.com/webhook/wa/xxx" readOnly className="bg-muted text-xs" />
                    <Button variant="outline" size="icon"><Copy className="size-4" /></Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>API Key</Label>
                  <div className="flex gap-2">
                    <Input type="password" value="sk_live_xxxxxxxxxxxxx" readOnly className="bg-muted" />
                    <Button variant="outline" size="icon"><Eye className="size-4" /></Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline">Test Connection</Button>
                <Button variant="outline">Reconnect</Button>
              </div>
            </CardContent>
          </Card>

          {/* Message Quality */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Message Quality Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-12 h-3 rounded-full ${i <= 4 ? 'bg-emerald-500' : 'bg-muted'}`} />
                  ))}
                </div>
                <span className="font-semibold text-emerald-600">High Quality</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Your messaging quality is excellent. Keep maintaining low spam reports.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates Tab */}
        <TabsContent value="templates" className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Manage your WhatsApp message templates</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm"><Plus className="size-4 mr-1" /> New Template</Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Create Template</DialogTitle>
                  <DialogDescription>Create a new WhatsApp message template</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label>Template Name</Label>
                    <Input placeholder="e.g., booking_reminder" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transactional">Transactional</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="utility">Utility</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Header (optional)</Label>
                    <Input placeholder="Template header text" />
                  </div>
                  <div className="space-y-2">
                    <Label>Body</Label>
                    <Textarea placeholder="Hello {{1}}, your booking {{2}} has been confirmed..." rows={4} />
                    <p className="text-xs text-muted-foreground">Use {'{{1}}'}, {'{{2}}'} etc. for dynamic variables</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Footer (optional)</Label>
                    <Input placeholder="e.g., Reply STOP to unsubscribe" />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Preview</Button>
                    <Button>Submit for Review</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Template Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Sends</TableHead>
                    <TableHead>Last Used</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="font-medium">{t.name}</TableCell>
                      <TableCell><Badge variant="outline">{t.category}</Badge></TableCell>
                      <TableCell>
                        <Badge variant={t.status === 'approved' ? 'default' : t.status === 'pending' ? 'secondary' : 'destructive'} className="gap-1">
                          {t.status === 'approved' && <CheckCircle2 className="size-3" />}
                          {t.status === 'pending' && <Clock className="size-3" />}
                          {t.status === 'rejected' && <XCircle className="size-3" />}
                          {t.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{t.language}</TableCell>
                      <TableCell>{t.sends.toLocaleString()}</TableCell>
                      <TableCell className="text-muted-foreground">{t.lastUsed}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Chatbot Tab */}
        <TabsContent value="chatbot" className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">AI Chatbot Configuration</h3>
              <p className="text-sm text-muted-foreground">Configure automated responses for common guest queries</p>
            </div>
            <div className="flex items-center gap-2">
              <Label>Chatbot Active</Label>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-3">
            {chatbotResponses.map((bot, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{bot.trigger}</Badge>
                        <Badge variant={bot.isActive ? 'default' : 'secondary'} className="text-xs">
                          {bot.isActive ? 'Active' : 'Disabled'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{bot.response}</p>
                    </div>
                    <Switch checked={bot.isActive} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button variant="outline" className="w-full"><Plus className="size-4 mr-1" /> Add Response Rule</Button>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-reply Outside Business Hours</p>
                  <p className="text-sm text-muted-foreground">Send auto-reply when staff is unavailable</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Read Receipts</p>
                  <p className="text-sm text-muted-foreground">Show read receipts for sent messages</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-send Booking Confirmations</p>
                  <p className="text-sm text-muted-foreground">Automatically send confirmations on new bookings</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Check-in Reminders</p>
                  <p className="text-sm text-muted-foreground">Send reminders 24 hours before check-in</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Feedback Collection</p>
                  <p className="text-sm text-muted-foreground">Request feedback after checkout</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {['Monday - Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-sm font-medium w-36">{day}</span>
                  <div className="flex items-center gap-2">
                    <Input type="time" defaultValue="09:00" className="w-28" />
                    <span className="text-muted-foreground">to</span>
                    <Input type="time" defaultValue={day === 'Sunday' ? '18:00' : '22:00'} className="w-28" />
                  </div>
                </div>
              ))}
              <Button className="mt-2 w-fit">Save Hours</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
