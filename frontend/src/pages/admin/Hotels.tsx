// ============================================================
// ROBO HMS Admin Portal - Hotels Management
// ============================================================
import { useState } from 'react';
import {
  Building2,
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Eye,
  Ban,
  CheckCircle2,
  MapPin,
  Users,
  BedDouble,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageHeader from '@/components/shared/PageHeader';

const hotels = [
  { id: 'H001', name: 'Hotel Grand Palace', owner: 'Rajesh Kumar', city: 'Bengaluru', state: 'Karnataka', plan: 'Enterprise', rooms: 85, staff: 24, status: 'active', mrr: 15000, created: '2024-01-10', lastActive: '2 min ago' },
  { id: 'H002', name: 'The Sunrise Resort', owner: 'Priya Patel', city: 'Goa', state: 'Goa', plan: 'Professional', rooms: 45, staff: 12, status: 'active', mrr: 8000, created: '2024-02-15', lastActive: '15 min ago' },
  { id: 'H003', name: 'City Inn Express', owner: 'Amit Verma', city: 'Mumbai', state: 'Maharashtra', plan: 'Starter', rooms: 20, staff: 6, status: 'active', mrr: 3000, created: '2024-03-20', lastActive: '1 hour ago' },
  { id: 'H004', name: 'Hill View Lodge', owner: 'Kavitha Nair', city: 'Ooty', state: 'Tamil Nadu', plan: 'Professional', rooms: 32, staff: 10, status: 'active', mrr: 8000, created: '2024-04-05', lastActive: '3 hours ago' },
  { id: 'H005', name: 'Lake Palace Heritage', owner: 'Suresh Menon', city: 'Udaipur', state: 'Rajasthan', plan: 'Enterprise', rooms: 120, staff: 35, status: 'active', mrr: 15000, created: '2024-06-12', lastActive: '30 min ago' },
  { id: 'H006', name: 'Beach House Retreat', owner: 'Deepak Shetty', city: 'Pondicherry', state: 'Puducherry', plan: 'Starter', rooms: 15, staff: 4, status: 'suspended', mrr: 0, created: '2024-07-01', lastActive: '5 days ago' },
  { id: 'H007', name: 'Snow Peak Hotel', owner: 'Rajan Thapa', city: 'Manali', state: 'Himachal Pradesh', plan: 'Professional', rooms: 40, staff: 14, status: 'trial', mrr: 0, created: '2024-11-25', lastActive: '1 hour ago' },
];

const planColors: Record<string, string> = {
  Starter: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  Professional: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
  Enterprise: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
};

export default function Hotels() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [detailHotel, setDetailHotel] = useState<(typeof hotels)[0] | null>(null);

  const filtered = hotels.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase()) || h.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || h.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Hotels Management" description="Manage all hotels on the platform">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="size-4 mr-1" /> Onboard Hotel</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Onboard New Hotel</DialogTitle>
              <DialogDescription>Register a new hotel on the platform</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Hotel Name</Label>
                  <Input placeholder="Hotel name" />
                </div>
                <div className="space-y-2">
                  <Label>Owner Name</Label>
                  <Input placeholder="Owner full name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Owner Email</Label>
                  <Input type="email" placeholder="owner@hotel.com" />
                </div>
                <div className="space-y-2">
                  <Label>Owner Phone</Label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea placeholder="Hotel address" rows={2} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input placeholder="State" />
                </div>
                <div className="space-y-2">
                  <Label>Total Rooms</Label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Subscription Plan</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select plan" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter - ₹3,000/mo</SelectItem>
                    <SelectItem value="professional">Professional - ₹8,000/mo</SelectItem>
                    <SelectItem value="enterprise">Enterprise - ₹15,000/mo</SelectItem>
                    <SelectItem value="trial">Free Trial - 14 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Hotel</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Summary */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
        {[
          { label: 'Active', count: hotels.filter((h) => h.status === 'active').length, color: 'text-emerald-500' },
          { label: 'Trial', count: hotels.filter((h) => h.status === 'trial').length, color: 'text-blue-500' },
          { label: 'Suspended', count: hotels.filter((h) => h.status === 'suspended').length, color: 'text-red-500' },
          { label: 'Total', count: hotels.length, color: 'text-primary' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 flex items-center gap-3">
              <Building2 className={`size-5 ${stat.color}`} />
              <div>
                <p className="text-xl font-bold">{stat.count}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search hotels..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="trial">Trial</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hotel</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Rooms</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead>MRR</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((hotel) => (
                <TableRow key={hotel.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{hotel.name}</p>
                      <p className="text-xs text-muted-foreground">{hotel.owner}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="size-3" />{hotel.city}, {hotel.state}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={planColors[hotel.plan] || ''}>{hotel.plan}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1"><BedDouble className="size-3" />{hotel.rooms}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1"><Users className="size-3" />{hotel.staff}</div>
                  </TableCell>
                  <TableCell className="font-medium">₹{hotel.mrr.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={hotel.status === 'active' ? 'default' : hotel.status === 'trial' ? 'secondary' : 'destructive'}>{hotel.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{hotel.lastActive}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setDetailHotel(hotel)}><Eye className="size-4 mr-2" /> View Details</DropdownMenuItem>
                        <DropdownMenuItem><Edit className="size-4 mr-2" /> Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {hotel.status === 'suspended' ? (
                          <DropdownMenuItem><CheckCircle2 className="size-4 mr-2" /> Activate</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-destructive"><Ban className="size-4 mr-2" /> Suspend</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={!!detailHotel} onOpenChange={() => setDetailHotel(null)}>
        {detailHotel && (
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{detailHotel.name}</DialogTitle>
              <DialogDescription>{detailHotel.city}, {detailHotel.state}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <Card><CardContent className="p-3"><p className="text-xl font-bold">{detailHotel.rooms}</p><p className="text-xs text-muted-foreground">Rooms</p></CardContent></Card>
                <Card><CardContent className="p-3"><p className="text-xl font-bold">{detailHotel.staff}</p><p className="text-xs text-muted-foreground">Staff</p></CardContent></Card>
                <Card><CardContent className="p-3"><p className="text-xl font-bold">₹{detailHotel.mrr.toLocaleString()}</p><p className="text-xs text-muted-foreground">MRR</p></CardContent></Card>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Owner:</span> <span className="font-medium">{detailHotel.owner}</span></div>
                <div><span className="text-muted-foreground">Plan:</span> <Badge variant="outline" className={planColors[detailHotel.plan]}>{detailHotel.plan}</Badge></div>
                <div><span className="text-muted-foreground">Status:</span> <Badge variant={detailHotel.status === 'active' ? 'default' : 'destructive'}>{detailHotel.status}</Badge></div>
                <div><span className="text-muted-foreground">Created:</span> <span>{detailHotel.created}</span></div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Change Plan</Button>
                <Button variant="outline" className="flex-1">View Analytics</Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
