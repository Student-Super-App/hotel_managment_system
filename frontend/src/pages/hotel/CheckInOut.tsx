// ============================================================
// ROBO HMS - Check-in / Check-out Page
// ============================================================
import { useState } from 'react';
import {
  LogIn,
  LogOut,
  Search,
  Upload,
  User,
  CreditCard,
  FileText,
  CheckCircle2,
  BedDouble,
  Clock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
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
import { Separator } from '@/components/ui/separator';
import PageHeader from '@/components/shared/PageHeader';
import StatusBadge from '@/components/shared/StatusBadge';

const pendingCheckins = [
  { id: 'BK001', guest: 'Rahul Sharma', phone: '+91 98765 43210', room: '201', type: 'Deluxe', checkIn: '2026-03-10', checkOut: '2026-03-13', status: 'confirmed', idUploaded: true },
  { id: 'BK003', guest: 'Amit Kumar', phone: '+91 76543 21098', room: '102', type: 'Standard', checkIn: '2026-03-10', checkOut: '2026-03-11', status: 'confirmed', idUploaded: false },
  { id: 'BK004', guest: 'Sarah Wilson', phone: '+1 555 0123', room: '401', type: 'Premium Suite', checkIn: '2026-03-10', checkOut: '2026-03-16', status: 'confirmed', idUploaded: true },
];

const pendingCheckouts = [
  { id: 'BK002', guest: 'Priya Patel', room: '305', type: 'Suite', checkIn: '2026-03-08', checkOut: '2026-03-10', amount: 41000, paid: 20000, balance: 21000 },
  { id: 'BK006', guest: 'Meera Gupta', room: '104', type: 'Standard', checkIn: '2026-03-08', checkOut: '2026-03-10', amount: 5600, paid: 5600, balance: 0 },
];

const activeStays = [
  { id: 'BK009', guest: 'Raj Malhotra', room: '203', type: 'Deluxe', checkIn: '2026-03-08', checkOut: '2026-03-12', nights: 4, status: 'checked_in' },
  { id: 'BK010', guest: 'Lisa Park', room: '301', type: 'Suite', checkIn: '2026-03-09', checkOut: '2026-03-13', nights: 4, status: 'checked_in' },
  { id: 'BK011', guest: 'Ahmed Hassan', room: '202', type: 'Deluxe', checkIn: '2026-03-07', checkOut: '2026-03-11', nights: 4, status: 'checked_in' },
];

export default function CheckInOut() {
  const [selectedCheckin, setSelectedCheckin] = useState<typeof pendingCheckins[0] | null>(null);

  return (
    <div className="space-y-6">
      <PageHeader title="Check-in / Check-out" description="Manage guest arrivals and departures" />

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-blue-500/10 p-3"><LogIn className="size-5 text-blue-600" /></div>
            <div>
              <p className="text-2xl font-bold">{pendingCheckins.length}</p>
              <p className="text-sm text-muted-foreground">Pending Check-ins</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-amber-500/10 p-3"><LogOut className="size-5 text-amber-600" /></div>
            <div>
              <p className="text-2xl font-bold">{pendingCheckouts.length}</p>
              <p className="text-sm text-muted-foreground">Pending Check-outs</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-emerald-500/10 p-3"><BedDouble className="size-5 text-emerald-600" /></div>
            <div>
              <p className="text-2xl font-bold">{activeStays.length}</p>
              <p className="text-sm text-muted-foreground">Active Stays</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="checkin">
        <TabsList>
          <TabsTrigger value="checkin"><LogIn className="size-4 mr-1" /> Check-in</TabsTrigger>
          <TabsTrigger value="checkout"><LogOut className="size-4 mr-1" /> Check-out</TabsTrigger>
          <TabsTrigger value="active"><BedDouble className="size-4 mr-1" /> Active Stays</TabsTrigger>
        </TabsList>

        {/* Check-in Tab */}
        <TabsContent value="checkin" className="mt-4">
          <div className="grid gap-4 lg:grid-cols-5">
            {/* List */}
            <div className="lg:col-span-2 space-y-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Search arrivals..." className="pl-8" />
              </div>
              {pendingCheckins.map((booking) => (
                <Card
                  key={booking.id}
                  className={`cursor-pointer transition-all ${selectedCheckin?.id === booking.id ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setSelectedCheckin(booking)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{booking.guest}</span>
                      <Badge variant="secondary">{booking.id}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div>Room {booking.room} ({booking.type})</div>
                      <div>{booking.checkIn} → {booking.checkOut}</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      {booking.idUploaded ? (
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-700 text-xs"><CheckCircle2 className="size-3 mr-1" /> ID Verified</Badge>
                      ) : (
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-700 text-xs"><Clock className="size-3 mr-1" /> ID Pending</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Check-in Form */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-base">
                  {selectedCheckin ? `Check-in: ${selectedCheckin.guest}` : 'Select a booking'}
                </CardTitle>
                <CardDescription>
                  {selectedCheckin ? `Booking ${selectedCheckin.id} • Room ${selectedCheckin.room}` : 'Click on a booking to start check-in'}
                </CardDescription>
              </CardHeader>
              {selectedCheckin && (
                <CardContent className="space-y-6">
                  {/* Guest Verification */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <User className="size-4" /> Guest Verification
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>ID Type</Label>
                        <Select defaultValue="aadhaar">
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aadhaar">Aadhaar</SelectItem>
                            <SelectItem value="passport">Passport</SelectItem>
                            <SelectItem value="driving_license">Driving License</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>ID Number</Label>
                        <Input placeholder="Enter ID number" />
                      </div>
                    </div>
                    <div className="mt-3">
                      <Label>Upload ID Document</Label>
                      <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
                        <Upload className="size-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Room Assignment */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BedDouble className="size-4" /> Room Assignment
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Assigned Room</Label>
                        <Select defaultValue={selectedCheckin.room}>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value={selectedCheckin.room}>Room {selectedCheckin.room} ({selectedCheckin.type})</SelectItem>
                            <SelectItem value="204">Room 204 (Premium)</SelectItem>
                            <SelectItem value="303">Room 303 (Suite)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Key Cards</Label>
                        <Input type="number" defaultValue={2} min={1} />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Advance Payment */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CreditCard className="size-4" /> Payment
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Advance Payment</Label>
                        <Input type="number" placeholder="₹0" />
                      </div>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <Select>
                          <SelectTrigger><SelectValue placeholder="Select method" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="upi">UPI</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1"><LogIn className="size-4 mr-1" /> Complete Check-in</Button>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* Check-out Tab */}
        <TabsContent value="checkout" className="mt-4">
          <div className="space-y-4">
            {pendingCheckouts.map((checkout) => (
              <Card key={checkout.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-muted p-3">
                        <LogOut className="size-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{checkout.guest}</h4>
                        <p className="text-sm text-muted-foreground">Room {checkout.room} ({checkout.type}) • {checkout.id}</p>
                        <p className="text-xs text-muted-foreground">{checkout.checkIn} → {checkout.checkOut}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Total Bill</p>
                        <p className="text-lg font-bold">₹{checkout.amount.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Paid</p>
                        <p className="text-lg font-bold text-emerald-600">₹{checkout.paid.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Balance</p>
                        <p className={`text-lg font-bold ${checkout.balance > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                          ₹{checkout.balance.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm"><FileText className="size-4 mr-1" /> Invoice</Button>
                        <Button size="sm"><LogOut className="size-4 mr-1" /> Checkout</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Active Stays Tab */}
        <TabsContent value="active" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>Nights</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeStays.map((stay) => (
                    <TableRow key={stay.id}>
                      <TableCell className="font-medium">{stay.id}</TableCell>
                      <TableCell className="font-medium">{stay.guest}</TableCell>
                      <TableCell>Room {stay.room} ({stay.type})</TableCell>
                      <TableCell>{stay.checkIn}</TableCell>
                      <TableCell>{stay.checkOut}</TableCell>
                      <TableCell>{stay.nights}</TableCell>
                      <TableCell><StatusBadge status={stay.status} /></TableCell>
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
