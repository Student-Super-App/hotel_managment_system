// ============================================================
// ROBO HMS - Reservations Page
// ============================================================
import { useState } from 'react';
import {
  Plus,
  Search,
  Filter,
  CalendarDays,
  List,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  XCircle,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageHeader from '@/components/shared/PageHeader';
import StatusBadge from '@/components/shared/StatusBadge';

const bookings = [
  { id: 'BK001', guest: 'Rahul Sharma', phone: '+91 98765 43210', room: '201', roomType: 'Deluxe', checkIn: '2026-03-10', checkOut: '2026-03-13', nights: 3, adults: 2, children: 0, source: 'Direct', status: 'confirmed', amount: 13500 },
  { id: 'BK002', guest: 'Priya Patel', phone: '+91 87654 32109', room: '305', roomType: 'Suite', checkIn: '2026-03-10', checkOut: '2026-03-15', nights: 5, adults: 2, children: 1, source: 'Booking.com', status: 'checked_in', amount: 41000 },
  { id: 'BK003', guest: 'Amit Kumar', phone: '+91 76543 21098', room: '102', roomType: 'Standard', checkIn: '2026-03-11', checkOut: '2026-03-12', nights: 1, adults: 1, children: 0, source: 'Walk-in', status: 'pending', amount: 2800 },
  { id: 'BK004', guest: 'Sarah Wilson', phone: '+1 555 0123', room: '401', roomType: 'Premium Suite', checkIn: '2026-03-11', checkOut: '2026-03-16', nights: 5, adults: 2, children: 2, source: 'Website', status: 'confirmed', amount: 30500 },
  { id: 'BK005', guest: 'David Chen', phone: '+86 138 0013', room: '203', roomType: 'Deluxe', checkIn: '2026-03-12', checkOut: '2026-03-14', nights: 2, adults: 2, children: 0, source: 'MakeMyTrip', status: 'confirmed', amount: 9000 },
  { id: 'BK006', guest: 'Meera Gupta', phone: '+91 99887 76655', room: '104', roomType: 'Standard', checkIn: '2026-03-08', checkOut: '2026-03-10', nights: 2, adults: 1, children: 0, source: 'WhatsApp', status: 'checked_out', amount: 5600 },
  { id: 'BK007', guest: 'James Taylor', phone: '+1 555 0456', room: '302', roomType: 'Suite', checkIn: '2026-03-09', checkOut: '2026-03-11', nights: 2, adults: 2, children: 0, source: 'Agoda', status: 'cancelled', amount: 16400 },
];

// Calendar grid for the booking calendar view
const calendarDays = Array.from({ length: 14 }, (_, i) => {
  const date = new Date(2026, 2, 8 + i);
  return {
    date: date.toISOString().slice(0, 10),
    day: date.getDate(),
    dayName: date.toLocaleDateString('en', { weekday: 'short' }),
    isToday: date.getDate() === 10,
  };
});

const rooms = ['101', '102', '103', '104', '201', '202', '203', '204', '301', '302', '303', '304', '305', '401', '402'];

export default function Reservations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [createOpen, setCreateOpen] = useState(false);

  const filtered = bookings.filter((b) =>
    b.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Reservations" description="Manage all hotel bookings and reservations">
        <Button variant="outline" size="sm">
          <Download className="size-4 mr-1" /> Export
        </Button>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="size-4 mr-1" /> New Booking
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Booking</DialogTitle>
              <DialogDescription>Fill in the booking details below</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Guest Name</Label>
                  <Input placeholder="Full name" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input placeholder="guest@email.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>Booking Source</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select source" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct">Direct</SelectItem>
                      <SelectItem value="walk_in">Walk-in</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="booking_com">Booking.com</SelectItem>
                      <SelectItem value="makemytrip">MakeMyTrip</SelectItem>
                      <SelectItem value="agoda">Agoda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Room Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="deluxe">Deluxe</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                      <SelectItem value="premium">Premium Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Check-in</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Check-out</Label>
                  <Input type="date" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Adults</Label>
                  <Input type="number" defaultValue={1} min={1} />
                </div>
                <div className="space-y-2">
                  <Label>Children</Label>
                  <Input type="number" defaultValue={0} min={0} />
                </div>
                <div className="space-y-2">
                  <Label>Room Number</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Assign room" /></SelectTrigger>
                    <SelectContent>
                      {['201', '202', '203', '301', '401'].map((r) => (
                        <SelectItem key={r} value={r}>Room {r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Special Requests</Label>
                <Textarea placeholder="Any special requests from the guest..." />
              </div>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3">Price Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Room Charges (3 nights × ₹4,500)</span><span>₹13,500</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">GST (12%)</span><span>₹1,620</span></div>
                    <div className="flex justify-between border-t pt-2 font-semibold"><span>Total</span><span>₹15,120</span></div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
                <Button onClick={() => setCreateOpen(false)}>Create Booking</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      <Tabs defaultValue="list">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="list"><List className="size-4 mr-1" /> List View</TabsTrigger>
            <TabsTrigger value="calendar"><CalendarDays className="size-4 mr-1" /> Calendar</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search bookings..."
                className="pl-8 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon"><Filter className="size-4" /></Button>
          </div>
        </div>

        <TabsContent value="list">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell className="font-medium">{b.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{b.guest}</p>
                          <p className="text-xs text-muted-foreground">{b.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{b.room}</span>
                        <span className="text-xs text-muted-foreground ml-1">({b.roomType})</span>
                      </TableCell>
                      <TableCell>{b.checkIn}</TableCell>
                      <TableCell>{b.checkOut}</TableCell>
                      <TableCell><Badge variant="secondary">{b.source}</Badge></TableCell>
                      <TableCell><StatusBadge status={b.status} /></TableCell>
                      <TableCell className="text-right font-medium">₹{b.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem><Eye className="size-4 mr-2" /> View Details</DropdownMenuItem>
                            <DropdownMenuItem><Edit className="size-4 mr-2" /> Edit Booking</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive"><XCircle className="size-4 mr-2" /> Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardContent className="p-4">
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  {/* Calendar Header */}
                  <div className="grid gap-0" style={{ gridTemplateColumns: `100px repeat(${calendarDays.length}, 1fr)` }}>
                    <div className="p-2 border-b font-semibold text-sm text-muted-foreground">Rooms</div>
                    {calendarDays.map((d) => (
                      <div key={d.date} className={`p-2 border-b border-l text-center text-xs ${d.isToday ? 'bg-primary/5 font-bold' : ''}`}>
                        <div className="text-muted-foreground">{d.dayName}</div>
                        <div className={`text-sm font-medium ${d.isToday ? 'text-primary' : ''}`}>{d.day}</div>
                      </div>
                    ))}
                  </div>
                  {/* Calendar Body */}
                  {rooms.slice(0, 8).map((room) => (
                    <div key={room} className="grid gap-0" style={{ gridTemplateColumns: `100px repeat(${calendarDays.length}, 1fr)` }}>
                      <div className="p-2 border-b text-sm font-medium flex items-center">Room {room}</div>
                      {calendarDays.map((d) => {
                        const booking = bookings.find((b) => b.room === room && d.date >= b.checkIn && d.date < b.checkOut);
                        return (
                          <div key={d.date} className={`p-1 border-b border-l min-h-[40px] ${d.isToday ? 'bg-primary/5' : ''}`}>
                            {booking && d.date === booking.checkIn && (
                              <div className="bg-primary/10 text-primary text-[10px] rounded px-1 py-0.5 truncate font-medium">
                                {booking.guest.split(' ')[0]}
                              </div>
                            )}
                            {booking && d.date !== booking.checkIn && (
                              <div className="bg-primary/5 h-full rounded" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
