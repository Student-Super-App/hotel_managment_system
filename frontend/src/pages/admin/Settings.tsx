// ============================================================
// ROBO HMS Admin Portal - Admin Settings
// ============================================================
import {
  Shield,
  Globe,
  Mail,
  Database,
  Save,
  Upload,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageHeader from '@/components/shared/PageHeader';

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Admin Settings" description="Configure platform-level settings">
        <Button size="sm"><Save className="size-4 mr-1" /> Save Changes</Button>
      </PageHeader>

      <Tabs defaultValue="platform">
        <TabsList>
          <TabsTrigger value="platform"><Globe className="size-4 mr-1" /> Platform</TabsTrigger>
          <TabsTrigger value="email"><Mail className="size-4 mr-1" /> Email</TabsTrigger>
          <TabsTrigger value="security"><Shield className="size-4 mr-1" /> Security</TabsTrigger>
          <TabsTrigger value="database"><Database className="size-4 mr-1" /> Database</TabsTrigger>
        </TabsList>

        {/* Platform */}
        <TabsContent value="platform" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Platform Configuration</CardTitle>
              <CardDescription>Global platform settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Platform Name</Label>
                  <Input defaultValue="ROBO HMS" />
                </div>
                <div className="space-y-2">
                  <Label>Support Email</Label>
                  <Input defaultValue="support@robohms.com" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>API Base URL</Label>
                  <Input defaultValue="https://api.robohms.com" />
                </div>
                <div className="space-y-2">
                  <Label>Frontend URL</Label>
                  <Input defaultValue="https://app.robohms.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Maintenance Mode</Label>
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="font-medium">Enable Maintenance Mode</p>
                    <p className="text-sm text-muted-foreground">Temporarily disable access to all hotel portals</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Hotel Registration</p>
                  <p className="text-sm text-muted-foreground">Allow new hotels to sign up</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Free Trial Duration</p>
                  <p className="text-sm text-muted-foreground">Days of free access for new hotels</p>
                </div>
                <Select defaultValue="14">
                  <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="14">14 Days</SelectItem>
                    <SelectItem value="30">30 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Subscription Plans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { plan: 'Starter', price: 3000, rooms: 25, staff: 5 },
                { plan: 'Professional', price: 8000, rooms: 75, staff: 20 },
                { plan: 'Enterprise', price: 15000, rooms: 'Unlimited', staff: 'Unlimited' },
              ].map((plan) => (
                <div key={plan.plan} className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className="flex-1">
                    <p className="font-medium">{plan.plan}</p>
                    <p className="text-sm text-muted-foreground">Up to {plan.rooms} rooms · {plan.staff} staff</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{plan.price.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span></p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email */}
        <TabsContent value="email" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">SMTP Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>SMTP Host</Label>
                  <Input defaultValue="smtp.gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label>SMTP Port</Label>
                  <Input defaultValue="587" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input defaultValue="noreply@robohms.com" />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" defaultValue="app_password_xxxx" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>From Name</Label>
                  <Input defaultValue="ROBO HMS" />
                </div>
                <div className="space-y-2">
                  <Label>From Email</Label>
                  <Input defaultValue="noreply@robohms.com" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Test Connection</Button>
                <Button>Save</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Admin Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enforce 2FA for Admin Users</p>
                  <p className="text-sm text-muted-foreground">Require two-factor authentication</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Admin Session Duration</p>
                  <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                </div>
                <Select defaultValue="60">
                  <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">API Rate Limiting</p>
                  <p className="text-sm text-muted-foreground">Limit API requests per hotel</p>
                </div>
                <Select defaultValue="1000">
                  <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">500/min</SelectItem>
                    <SelectItem value="1000">1000/min</SelectItem>
                    <SelectItem value="5000">5000/min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>JWT Secret Key</Label>
                <div className="flex gap-2">
                  <Input type="password" defaultValue="super_secret_jwt_key_xxxxx" />
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-xs text-destructive">Warning: Regenerating will log out all users</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Database */}
        <TabsContent value="database" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Database Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Total Records', value: '2.4M' },
                  { label: 'Database Size', value: '840 MB' },
                  { label: 'Connections', value: '24/100' },
                  { label: 'Avg Query Time', value: '12ms' },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-lg border text-center">
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex gap-2">
                <Button variant="outline"><Upload className="size-4 mr-1" /> Backup Now</Button>
                <Button variant="outline">View Logs</Button>
              </div>
              <p className="text-sm text-muted-foreground">Last backup: December 30, 2024 at 02:00 AM IST</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
