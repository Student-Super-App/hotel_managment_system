// ============================================================
// ROBO HMS - Guest Management Page
// ============================================================
import { useState } from 'react';
import {
  Plus,
  Search,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  IndianRupee,
  FileText,
  User,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageHeader from '@/components/shared/PageHeader';

const guestsData = [
  { id: 'G001', firstName: 'Rahul', lastName: 'Sharma', email: 'rahul@email.com', phone: '+91 98765 43210', country: 'India', city: 'Mumbai', totalStays: 5, totalSpent: 67500, lastVisit: '2026-03-10', idType: 'Aadhaar', preferences: ['Non-smoking', 'High floor'] },
  { id: 'G002', firstName: 'Priya', lastName: 'Patel', email: 'priya@email.com', phone: '+91 87654 32109', country: 'India', city: 'Delhi', totalStays: 3, totalSpent: 41000, lastVisit: '2026-03-10', idType: 'Passport', preferences: ['King bed', 'Late checkout'] },
  { id: 'G003', firstName: 'Sarah', lastName: 'Wilson', email: 'sarah@email.com', phone: '+1 555 0123', country: 'USA', city: 'New York', totalStays: 2, totalSpent: 61000, lastVisit: '2026-03-11', idType: 'Passport', preferences: ['Quiet room', 'Extra pillows'] },
  { id: 'G004', firstName: 'David', lastName: 'Chen', email: 'david@email.com', phone: '+86 138 0013', country: 'China', city: 'Beijing', totalStays: 1, totalSpent: 9000, lastVisit: '2026-03-12', idType: 'Passport', preferences: ['Near elevator'] },
  { id: 'G005', firstName: 'Meera', lastName: 'Gupta', email: 'meera@email.com', phone: '+91 99887 76655', country: 'India', city: 'Pune', totalStays: 8, totalSpent: 112000, lastVisit: '2026-03-08', idType: 'Aadhaar', preferences: ['Vegetarian', 'View room'] },
  { id: 'G006', firstName: 'James', lastName: 'Taylor', email: 'james@email.com', phone: '+1 555 0456', country: 'USA', city: 'LA', totalStays: 1, totalSpent: 16400, lastVisit: '2026-03-09', idType: 'Passport', preferences: [] },
  { id: 'G007', firstName: 'Anita', lastName: 'Desai', email: 'anita@email.com', phone: '+91 95544 33221', country: 'India', city: 'Bangalore', totalStays: 12, totalSpent: 178000, lastVisit: '2026-02-28', idType: 'Aadhaar', preferences: ['Corner room', 'Hypoallergenic bedding'] },
];

export default function Guests() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuest, setSelectedGuest] = useState<typeof guestsData[0] | null>(null);

  const filtered = guestsData.filter((g) =>
    `${g.firstName} ${g.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Guest Management" description="Manage guest profiles, history, and preferences">
        <Button variant="outline" size="sm"><Download className="size-4 mr-1" /> Export</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="size-4 mr-1" /> Add Guest</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add New Guest</DialogTitle>
              <DialogDescription>Create a new guest profile</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input placeholder="Last name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>ID Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select ID type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aadhaar">Aadhaar</SelectItem>
                      <SelectItem value="passport">Passport</SelectItem>
                      <SelectItem value="driving_license">Driving License</SelectItem>
                      <SelectItem value="voter_id">Voter ID</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>ID Number</Label>
                  <Input placeholder="ID number" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input placeholder="City" />
                </div>
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Input placeholder="Country" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Add Guest</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-blue-500/10 p-3"><User className="size-5 text-blue-600" /></div>
            <div>
              <p className="text-2xl font-bold">{guestsData.length}</p>
              <p className="text-sm text-muted-foreground">Total Guests</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-emerald-500/10 p-3"><Calendar className="size-5 text-emerald-600" /></div>
            <div>
              <p className="text-2xl font-bold">{guestsData.reduce((sum, g) => sum + g.totalStays, 0)}</p>
              <p className="text-sm text-muted-foreground">Total Stays</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-purple-500/10 p-3"><IndianRupee className="size-5 text-purple-600" /></div>
            <div>
              <p className="text-2xl font-bold">₹{(guestsData.reduce((sum, g) => sum + g.totalSpent, 0) / 1000).toFixed(0)}k</p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search guests..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      {/* Guests Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Total Stays</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((guest) => (
                <TableRow key={guest.id} className="cursor-pointer" onClick={() => setSelectedGuest(guest)}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {guest.firstName[0]}{guest.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{guest.firstName} {guest.lastName}</p>
                        <p className="text-xs text-muted-foreground">{guest.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-0.5">
                      <p className="text-sm">{guest.email}</p>
                      <p className="text-xs text-muted-foreground">{guest.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="size-3 text-muted-foreground" />
                      {guest.city}, {guest.country}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{guest.totalStays}</TableCell>
                  <TableCell className="font-medium">₹{guest.totalSpent.toLocaleString()}</TableCell>
                  <TableCell>{guest.lastVisit}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm" onClick={(e) => e.stopPropagation()}>
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedGuest(guest)}><Eye className="size-4 mr-2" /> View Profile</DropdownMenuItem>
                        <DropdownMenuItem><Edit className="size-4 mr-2" /> Edit</DropdownMenuItem>
                        <DropdownMenuItem><FileText className="size-4 mr-2" /> Documents</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Guest Detail Dialog */}
      <Dialog open={!!selectedGuest} onOpenChange={() => setSelectedGuest(null)}>
        <DialogContent className="max-w-lg">
          {selectedGuest && (
            <>
              <DialogHeader>
                <DialogTitle>Guest Profile</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="size-14">
                    <AvatarFallback className="bg-primary/10 text-primary text-lg">
                      {selectedGuest.firstName[0]}{selectedGuest.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{selectedGuest.firstName} {selectedGuest.lastName}</h3>
                    <p className="text-sm text-muted-foreground">{selectedGuest.id} • {selectedGuest.idType}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm"><Mail className="size-4 text-muted-foreground" />{selectedGuest.email}</div>
                  <div className="flex items-center gap-2 text-sm"><Phone className="size-4 text-muted-foreground" />{selectedGuest.phone}</div>
                  <div className="flex items-center gap-2 text-sm"><MapPin className="size-4 text-muted-foreground" />{selectedGuest.city}, {selectedGuest.country}</div>
                  <div className="flex items-center gap-2 text-sm"><Calendar className="size-4 text-muted-foreground" />Last: {selectedGuest.lastVisit}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-3 text-center">
                      <p className="text-2xl font-bold">{selectedGuest.totalStays}</p>
                      <p className="text-xs text-muted-foreground">Total Stays</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-3 text-center">
                      <p className="text-2xl font-bold">₹{selectedGuest.totalSpent.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Total Spent</p>
                    </CardContent>
                  </Card>
                </div>
                {selectedGuest.preferences.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">Preferences</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedGuest.preferences.map((p) => (
                        <Badge key={p} variant="secondary">{p}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
