// ============================================================
// ROBO HMS - Staff Management Page
// ============================================================
import { useState } from 'react';
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Shield,
  UserCog,
  Mail,
  Phone,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PageHeader from '@/components/shared/PageHeader';

const staffData = [
  { id: 'ST001', name: 'Rajesh Kumar', email: 'rajesh@hotel.com', phone: '+91 98765 43210', role: 'manager', department: 'Management', isActive: true, joinedAt: '2024-01-15' },
  { id: 'ST002', name: 'Priyanka Sharma', email: 'priyanka@hotel.com', phone: '+91 87654 32109', role: 'reception', department: 'Front Desk', isActive: true, joinedAt: '2024-03-20' },
  { id: 'ST003', name: 'Sunita Devi', email: 'sunita@hotel.com', phone: '+91 76543 21098', role: 'housekeeping', department: 'Housekeeping', isActive: true, joinedAt: '2024-02-10' },
  { id: 'ST004', name: 'Amit Verma', email: 'amit@hotel.com', phone: '+91 99887 76655', role: 'accountant', department: 'Finance', isActive: true, joinedAt: '2024-06-01' },
  { id: 'ST005', name: 'Ravi Kumar', email: 'ravi@hotel.com', phone: '+91 95544 33221', role: 'housekeeping', department: 'Housekeeping', isActive: true, joinedAt: '2024-04-15' },
  { id: 'ST006', name: 'Meera Singh', email: 'meera@hotel.com', phone: '+91 88776 65544', role: 'reception', department: 'Front Desk', isActive: false, joinedAt: '2024-05-20' },
];

const roleColors: Record<string, string> = {
  owner: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
  manager: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  reception: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  housekeeping: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  accountant: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
};

const permissions = [
  { key: 'dashboard', label: 'Dashboard', description: 'View dashboard and analytics' },
  { key: 'reservations', label: 'Reservations', description: 'Manage bookings' },
  { key: 'rooms', label: 'Room Management', description: 'Manage rooms and types' },
  { key: 'guests', label: 'Guest Management', description: 'View and manage guests' },
  { key: 'checkin', label: 'Check-in/out', description: 'Process arrivals and departures' },
  { key: 'housekeeping', label: 'Housekeeping', description: 'Manage cleaning tasks' },
  { key: 'billing', label: 'Billing & Payments', description: 'Manage invoices and payments' },
  { key: 'reports', label: 'Reports', description: 'View financial reports' },
  { key: 'staff', label: 'Staff Management', description: 'Manage staff accounts' },
  { key: 'settings', label: 'Settings', description: 'Hotel settings and configuration' },
];

export default function Staff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [permissionsOpen, setPermissionsOpen] = useState(false);

  const filtered = staffData.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader title="Staff Management" description="Manage hotel staff accounts, roles, and permissions">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="size-4 mr-1" /> Add Staff</Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Add Staff Member</DialogTitle>
              <DialogDescription>Create a new staff account</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input placeholder="Full name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="email@hotel.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="reception">Reception</SelectItem>
                      <SelectItem value="housekeeping">Housekeeping</SelectItem>
                      <SelectItem value="accountant">Accountant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Department</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select dept" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="front_desk">Front Desk</SelectItem>
                      <SelectItem value="housekeeping">Housekeeping</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Temporary Password</Label>
                <Input type="password" placeholder="Create temporary password" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Account</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Role Summary */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-5">
        {['manager', 'reception', 'housekeeping', 'accountant'].map((role) => (
          <Card key={role}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2"><UserCog className="size-4" /></div>
                <div>
                  <p className="text-lg font-bold">{staffData.filter((s) => s.role === role).length}</p>
                  <p className="text-xs text-muted-foreground capitalize">{role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-muted p-2"><UserCog className="size-4" /></div>
              <div>
                <p className="text-lg font-bold">{staffData.length}</p>
                <p className="text-xs text-muted-foreground">Total Staff</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search staff..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      {/* Staff Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Staff Member</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {member.name.split(' ').map((n) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1 text-sm"><Mail className="size-3" />{member.email}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Phone className="size-3" />{member.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={roleColors[member.role] || ''}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{member.department}</TableCell>
                  <TableCell>
                    <Badge variant={member.isActive ? 'default' : 'secondary'}>
                      {member.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>{member.joinedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem><Edit className="size-4 mr-2" /> Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setPermissionsOpen(true)}><Shield className="size-4 mr-2" /> Permissions</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive"><Trash2 className="size-4 mr-2" /> Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Permissions Dialog */}
      <Dialog open={permissionsOpen} onOpenChange={setPermissionsOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Manage Permissions</DialogTitle>
            <DialogDescription>Configure access permissions for this staff member</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4 max-h-[400px] overflow-y-auto">
            {permissions.map((perm) => (
              <div key={perm.key} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Checkbox id={perm.key} defaultChecked={Math.random() > 0.3} />
                  <div>
                    <label htmlFor={perm.key} className="text-sm font-medium cursor-pointer">{perm.label}</label>
                    <p className="text-xs text-muted-foreground">{perm.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setPermissionsOpen(false)}>Cancel</Button>
            <Button onClick={() => setPermissionsOpen(false)}>Save Permissions</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
