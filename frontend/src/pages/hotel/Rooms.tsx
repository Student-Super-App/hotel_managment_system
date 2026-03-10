// ============================================================
// ROBO HMS - Room Management Page
// ============================================================
import { useState } from 'react';
import {
  Plus,
  Search,
  Grid3X3,
  List,
  BedDouble,
  Settings,
  Edit,
  Trash2,
  MoreHorizontal,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import PageHeader from '@/components/shared/PageHeader';
import StatusBadge from '@/components/shared/StatusBadge';

const roomsData = [
  { id: '1', number: '101', floor: 1, type: 'Standard', status: 'available', price: 2800, guest: null },
  { id: '2', number: '102', floor: 1, type: 'Standard', status: 'occupied', price: 2800, guest: 'Amit Kumar' },
  { id: '3', number: '103', floor: 1, type: 'Standard', status: 'cleaning', price: 2800, guest: null },
  { id: '4', number: '104', floor: 1, type: 'Deluxe', status: 'available', price: 4500, guest: null },
  { id: '5', number: '201', floor: 2, type: 'Deluxe', status: 'occupied', price: 4500, guest: 'Rahul Sharma' },
  { id: '6', number: '202', floor: 2, type: 'Deluxe', status: 'occupied', price: 4500, guest: 'David Chen' },
  { id: '7', number: '203', floor: 2, type: 'Deluxe', status: 'maintenance', price: 4500, guest: null },
  { id: '8', number: '204', floor: 2, type: 'Premium', status: 'available', price: 6500, guest: null },
  { id: '9', number: '301', floor: 3, type: 'Suite', status: 'occupied', price: 8200, guest: 'Sarah Wilson' },
  { id: '10', number: '302', floor: 3, type: 'Suite', status: 'blocked', price: 8200, guest: null },
  { id: '11', number: '303', floor: 3, type: 'Suite', status: 'available', price: 8200, guest: null },
  { id: '12', number: '304', floor: 3, type: 'Premium', status: 'occupied', price: 6500, guest: 'Priya Patel' },
  { id: '13', number: '305', floor: 3, type: 'Suite', status: 'occupied', price: 8200, guest: 'James Taylor' },
  { id: '14', number: '401', floor: 4, type: 'Presidential', status: 'available', price: 15000, guest: null },
  { id: '15', number: '402', floor: 4, type: 'Presidential', status: 'occupied', price: 15000, guest: 'VIP Guest' },
];

const roomTypes = [
  { name: 'Standard', count: 3, price: 2800, amenities: ['Wi-Fi', 'TV', 'AC'], maxOccupancy: 2 },
  { name: 'Deluxe', count: 4, price: 4500, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar', 'Balcony'], maxOccupancy: 3 },
  { name: 'Premium', count: 2, price: 6500, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar', 'Balcony', 'Bathtub'], maxOccupancy: 3 },
  { name: 'Suite', count: 4, price: 8200, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar', 'Balcony', 'Bathtub', 'Living Area'], maxOccupancy: 4 },
  { name: 'Presidential', count: 2, price: 15000, amenities: ['Wi-Fi', 'TV', 'AC', 'Mini Bar', 'Balcony', 'Bathtub', 'Living Area', 'Kitchen', 'Butler'], maxOccupancy: 4 },
];

const statusColors: Record<string, string> = {
  available: 'bg-emerald-500 hover:bg-emerald-600',
  occupied: 'bg-blue-500 hover:bg-blue-600',
  cleaning: 'bg-amber-500 hover:bg-amber-600',
  maintenance: 'bg-orange-500 hover:bg-orange-600',
  blocked: 'bg-red-500 hover:bg-red-600',
};

export default function Rooms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filtered = roomsData.filter((r) => {
    const matchesSearch = r.number.includes(searchTerm) || r.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || r.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    available: roomsData.filter((r) => r.status === 'available').length,
    occupied: roomsData.filter((r) => r.status === 'occupied').length,
    cleaning: roomsData.filter((r) => r.status === 'cleaning').length,
    maintenance: roomsData.filter((r) => r.status === 'maintenance').length,
    blocked: roomsData.filter((r) => r.status === 'blocked').length,
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Room Management" description="Manage rooms, types, and availability">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="size-4 mr-1" /> Add Room</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Room</DialogTitle>
              <DialogDescription>Add a new room to the inventory</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Room Number</Label>
                  <Input placeholder="e.g., 501" />
                </div>
                <div className="space-y-2">
                  <Label>Floor</Label>
                  <Input type="number" placeholder="e.g., 5" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Room Type</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((t) => (
                      <SelectItem key={t.name} value={t.name.toLowerCase()}>{t.name} - ₹{t.price}/night</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Add Room</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Status Summary */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-5">
        {Object.entries(statusCounts).map(([status, count]) => (
          <Card
            key={status}
            className={`cursor-pointer transition-all ${filterStatus === status ? 'ring-2 ring-primary' : ''}`}
            onClick={() => setFilterStatus(filterStatus === status ? 'all' : status)}
          >
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`size-3 rounded-full ${statusColors[status]?.split(' ')[0]}`} />
              <div>
                <p className="text-2xl font-bold">{count}</p>
                <p className="text-xs text-muted-foreground capitalize">{status}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="floor">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <TabsList>
            <TabsTrigger value="floor"><Grid3X3 className="size-4 mr-1" /> Floor View</TabsTrigger>
            <TabsTrigger value="list"><List className="size-4 mr-1" /> List View</TabsTrigger>
            <TabsTrigger value="types"><Settings className="size-4 mr-1" /> Room Types</TabsTrigger>
          </TabsList>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search rooms..." className="pl-8 w-56" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>

        {/* Floor View */}
        <TabsContent value="floor">
          <div className="space-y-6">
            {[1, 2, 3, 4].map((floor) => {
              const floorRooms = filtered.filter((r) => r.floor === floor);
              if (floorRooms.length === 0) return null;
              return (
                <Card key={floor}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Floor {floor}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                      {floorRooms.map((room) => (
                        <div
                          key={room.id}
                          className={`relative rounded-lg border p-3 cursor-pointer transition-all hover:shadow-md ${
                            room.status === 'available' ? 'border-emerald-500/30 bg-emerald-500/5' :
                            room.status === 'occupied' ? 'border-blue-500/30 bg-blue-500/5' :
                            room.status === 'cleaning' ? 'border-amber-500/30 bg-amber-500/5' :
                            room.status === 'maintenance' ? 'border-orange-500/30 bg-orange-500/5' :
                            'border-red-500/30 bg-red-500/5'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-lg">{room.number}</span>
                            <div className={`size-2.5 rounded-full ${statusColors[room.status]?.split(' ')[0]}`} />
                          </div>
                          <p className="text-xs text-muted-foreground">{room.type}</p>
                          {room.guest && (
                            <p className="text-xs font-medium mt-1 truncate">{room.guest}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">₹{room.price.toLocaleString()}/night</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* List View */}
        <TabsContent value="list">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Room</TableHead>
                    <TableHead>Floor</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead className="text-right">Price/Night</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((room) => (
                    <TableRow key={room.id}>
                      <TableCell className="font-bold">{room.number}</TableCell>
                      <TableCell>Floor {room.floor}</TableCell>
                      <TableCell>{room.type}</TableCell>
                      <TableCell><StatusBadge status={room.status} /></TableCell>
                      <TableCell>{room.guest || <span className="text-muted-foreground">—</span>}</TableCell>
                      <TableCell className="text-right">₹{room.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem><Edit className="size-4 mr-2" /> Edit</DropdownMenuItem>
                            <DropdownMenuItem><BedDouble className="size-4 mr-2" /> Change Status</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive"><Trash2 className="size-4 mr-2" /> Delete</DropdownMenuItem>
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

        {/* Room Types */}
        <TabsContent value="types">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roomTypes.map((type) => (
              <Card key={type.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{type.name}</CardTitle>
                    <Badge variant="secondary">{type.count} rooms</Badge>
                  </div>
                  <CardDescription>Max occupancy: {type.maxOccupancy} guests</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-3">₹{type.price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/night</span></p>
                  <div className="flex flex-wrap gap-2">
                    {type.amenities.map((a) => (
                      <Badge key={a} variant="outline" className="text-xs">{a}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1"><Edit className="size-3 mr-1" /> Edit</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
