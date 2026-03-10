// ============================================================
// ROBO HMS - Hotel Settings Page
// ============================================================
import {
  Building2,
  Clock,
  CreditCard,
  Bell,
  Shield,
  Palette,
  Upload,
  Save,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

export default function Settings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage hotel configuration and preferences">
        <Button size="sm"><Save className="size-4 mr-1" /> Save All Changes</Button>
      </PageHeader>

      <Tabs defaultValue="general">
        <TabsList className="flex-wrap">
          <TabsTrigger value="general"><Building2 className="size-4 mr-1" /> General</TabsTrigger>
          <TabsTrigger value="operations"><Clock className="size-4 mr-1" /> Operations</TabsTrigger>
          <TabsTrigger value="billing"><CreditCard className="size-4 mr-1" /> Billing</TabsTrigger>
          <TabsTrigger value="notifications"><Bell className="size-4 mr-1" /> Notifications</TabsTrigger>
          <TabsTrigger value="appearance"><Palette className="size-4 mr-1" /> Appearance</TabsTrigger>
          <TabsTrigger value="security"><Shield className="size-4 mr-1" /> Security</TabsTrigger>
        </TabsList>

        {/* General */}
        <TabsContent value="general" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hotel Information</CardTitle>
              <CardDescription>Basic information about your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Hotel Name</Label>
                  <Input defaultValue="Hotel Grand Palace" />
                </div>
                <div className="space-y-2">
                  <Label>Hotel Code</Label>
                  <Input defaultValue="HGP-001" readOnly className="bg-muted" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="info@hotelgrandpalace.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea defaultValue="123, MG Road, Bengaluru, Karnataka 560001" rows={2} />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input defaultValue="Bengaluru" />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input defaultValue="Karnataka" />
                </div>
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select defaultValue="IN">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IN">India</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hotel Logo</CardTitle>
              <CardDescription>Upload your hotel logo for branding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="size-8 mx-auto text-muted-foreground" />
                <p className="mt-2 text-sm font-medium">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground">PNG, JPG or SVG (max 2MB)</p>
                <Button variant="outline" size="sm" className="mt-3">Choose File</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Operations */}
        <TabsContent value="operations" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Check-in / Check-out</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Standard Check-in Time</Label>
                  <Input type="time" defaultValue="14:00" />
                </div>
                <div className="space-y-2">
                  <Label>Standard Check-out Time</Label>
                  <Input type="time" defaultValue="11:00" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Early Check-in Charge (₹/hour)</Label>
                  <Input type="number" defaultValue="500" />
                </div>
                <div className="space-y-2">
                  <Label>Late Check-out Charge (₹/hour)</Label>
                  <Input type="number" defaultValue="500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Room Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-assign Rooms</p>
                  <p className="text-sm text-muted-foreground">Automatically assign best available room on booking</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Overbooking Protection</p>
                  <p className="text-sm text-muted-foreground">Prevent booking beyond available rooms</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Housekeeping Auto-schedule</Label>
                  <Select defaultValue="on_checkout">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="on_checkout">After Each Checkout</SelectItem>
                      <SelectItem value="daily">Daily Morning</SelectItem>
                      <SelectItem value="manual">Manual Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Default Cleaning Time (minutes)</Label>
                  <Input type="number" defaultValue="30" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tax Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>GSTIN</Label>
                  <Input defaultValue="29ABCDE1234F1ZK" />
                </div>
                <div className="space-y-2">
                  <Label>PAN</Label>
                  <Input defaultValue="ABCDE1234F" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>GST Rate (Room &lt; ₹7,500)</Label>
                  <Input type="number" defaultValue="12" />
                </div>
                <div className="space-y-2">
                  <Label>GST Rate (Room ≥ ₹7,500)</Label>
                  <Input type="number" defaultValue="18" />
                </div>
                <div className="space-y-2">
                  <Label>Service Tax</Label>
                  <Input type="number" defaultValue="0" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Accept Online Payments</p>
                  <p className="text-sm text-muted-foreground">Razorpay payment gateway integration</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Razorpay Key ID</Label>
                  <Input type="password" defaultValue="rzp_live_xxxxxxxx" />
                </div>
                <div className="space-y-2">
                  <Label>Razorpay Secret</Label>
                  <Input type="password" defaultValue="xxxxxxxxxxxxxxxx" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Select defaultValue="INR">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Invoice Prefix</Label>
                  <Input defaultValue="INV" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Email Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'New Booking', desc: 'Receive email for every new booking', checked: true },
                { label: 'Booking Cancellation', desc: 'Notify when a booking is cancelled', checked: true },
                { label: 'Check-in Alert', desc: 'Alert 1 hour before expected check-in', checked: true },
                { label: 'Payment Received', desc: 'Notify on payment received', checked: false },
                { label: 'Daily Summary', desc: 'Daily report of operations', checked: true },
                { label: 'Low Occupancy Alert', desc: 'Alert when occupancy drops below 40%', checked: false },
              ].map((notif, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{notif.label}</p>
                      <p className="text-sm text-muted-foreground">{notif.desc}</p>
                    </div>
                    <Switch defaultChecked={notif.checked} />
                  </div>
                  {i < 5 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Theme & Branding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="flex gap-3">
                  {['#2563eb', '#7c3aed', '#059669', '#d97706', '#dc2626', '#0891b2'].map((color) => (
                    <button
                      key={color}
                      className="w-8 h-8 rounded-full ring-2 ring-offset-2 ring-transparent hover:ring-primary transition-all"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Use dark theme for the dashboard</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Compact Sidebar</p>
                  <p className="text-sm text-muted-foreground">Use icon-only sidebar by default</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Require 2FA for all staff logins</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">IP Whitelisting</p>
                  <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Change Password</Label>
                <div className="grid gap-3 max-w-md">
                  <Input type="password" placeholder="Current password" />
                  <Input type="password" placeholder="New password" />
                  <Input type="password" placeholder="Confirm new password" />
                  <Button className="w-fit">Update Password</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
