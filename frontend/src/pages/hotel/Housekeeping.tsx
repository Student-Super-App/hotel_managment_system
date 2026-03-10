// ============================================================
// ROBO HMS - Housekeeping Page
// ============================================================
import { useState } from 'react';
import {
  Plus,
  Search,
  Brush,
  Wrench,
  CheckCircle2,
  Clock,
  User,
  MoreHorizontal,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
import { Textarea } from '@/components/ui/textarea';
import PageHeader from '@/components/shared/PageHeader';
import StatusBadge from '@/components/shared/StatusBadge';

const cleaningTasks = [
  { id: 'HK001', room: '102', type: 'Checkout Clean', status: 'pending', priority: 'high', assignee: 'Sunita Devi', assigneeId: 'S1', notes: 'Guest checked out, full clean needed', createdAt: '09:00 AM' },
  { id: 'HK002', room: '205', type: 'Turndown Service', status: 'in_progress', priority: 'medium', assignee: 'Ravi Kumar', assigneeId: 'S2', notes: 'Evening turndown', createdAt: '06:00 PM' },
  { id: 'HK003', room: '301', type: 'Deep Clean', status: 'pending', priority: 'urgent', assignee: 'Meera Singh', assigneeId: 'S3', notes: 'Guest complaint about cleanliness', createdAt: '10:30 AM' },
  { id: 'HK004', room: '104', type: 'Stayover Clean', status: 'completed', priority: 'medium', assignee: 'Sunita Devi', assigneeId: 'S1', notes: '', createdAt: '08:00 AM' },
  { id: 'HK005', room: '402', type: 'Checkout Clean', status: 'pending', priority: 'high', assignee: 'Ravi Kumar', assigneeId: 'S2', notes: 'VIP guest room', createdAt: '11:00 AM' },
  { id: 'HK006', room: '203', type: 'Stayover Clean', status: 'in_progress', priority: 'low', assignee: 'Anil Thapa', assigneeId: 'S4', notes: '', createdAt: '02:00 PM' },
];

const maintenanceTasks = [
  { id: 'MT001', room: '203', type: 'AC Repair', status: 'pending', priority: 'high', assignee: 'Tech Team', notes: 'AC not cooling properly', createdAt: '2026-03-09' },
  { id: 'MT002', room: '305', type: 'Plumbing', status: 'in_progress', priority: 'urgent', assignee: 'Plumber', notes: 'Bathroom leak', createdAt: '2026-03-10' },
  { id: 'MT003', room: '101', type: 'Electrical', status: 'completed', priority: 'medium', assignee: 'Electrician', notes: 'Light fixture replaced', createdAt: '2026-03-08' },
];

const staff = [
  { id: 'S1', name: 'Sunita Devi', tasksToday: 4, completed: 2 },
  { id: 'S2', name: 'Ravi Kumar', tasksToday: 3, completed: 1 },
  { id: 'S3', name: 'Meera Singh', tasksToday: 2, completed: 0 },
  { id: 'S4', name: 'Anil Thapa', tasksToday: 3, completed: 2 },
];

const priorityColors: Record<string, string> = {
  urgent: 'bg-red-500/10 text-red-700 border-red-500/20',
  high: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
  medium: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  low: 'bg-gray-500/10 text-gray-700 border-gray-500/20',
};

export default function Housekeeping() {
  const [filter, setFilter] = useState('all');

  const filteredTasks = cleaningTasks.filter((t) => filter === 'all' || t.status === filter);

  return (
    <div className="space-y-6">
      <PageHeader title="Housekeeping" description="Manage cleaning tasks, staff assignments, and maintenance">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="size-4 mr-1" /> New Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Housekeeping Task</DialogTitle>
              <DialogDescription>Assign a new cleaning or maintenance task</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Room</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select room" /></SelectTrigger>
                    <SelectContent>
                      {['101', '102', '201', '202', '301', '401'].map((r) => (
                        <SelectItem key={r} value={r}>Room {r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Task Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checkout">Checkout Clean</SelectItem>
                      <SelectItem value="stayover">Stayover Clean</SelectItem>
                      <SelectItem value="deep">Deep Clean</SelectItem>
                      <SelectItem value="turndown">Turndown Service</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select priority" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Assign To</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select staff" /></SelectTrigger>
                    <SelectContent>
                      {staff.map((s) => (
                        <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Notes</Label>
                <Textarea placeholder="Any additional notes..." />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Task</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-amber-500/10 p-3"><Clock className="size-5 text-amber-600" /></div>
            <div><p className="text-2xl font-bold">{cleaningTasks.filter((t) => t.status === 'pending').length}</p><p className="text-sm text-muted-foreground">Pending</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-blue-500/10 p-3"><Brush className="size-5 text-blue-600" /></div>
            <div><p className="text-2xl font-bold">{cleaningTasks.filter((t) => t.status === 'in_progress').length}</p><p className="text-sm text-muted-foreground">In Progress</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-emerald-500/10 p-3"><CheckCircle2 className="size-5 text-emerald-600" /></div>
            <div><p className="text-2xl font-bold">{cleaningTasks.filter((t) => t.status === 'completed').length}</p><p className="text-sm text-muted-foreground">Completed</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="rounded-lg bg-red-500/10 p-3"><Wrench className="size-5 text-red-600" /></div>
            <div><p className="text-2xl font-bold">{maintenanceTasks.filter((t) => t.status !== 'completed').length}</p><p className="text-sm text-muted-foreground">Maintenance</p></div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="cleaning">
        <TabsList>
          <TabsTrigger value="cleaning"><Brush className="size-4 mr-1" /> Cleaning Tasks</TabsTrigger>
          <TabsTrigger value="maintenance"><Wrench className="size-4 mr-1" /> Maintenance</TabsTrigger>
          <TabsTrigger value="staff"><User className="size-4 mr-1" /> Staff</TabsTrigger>
        </TabsList>

        {/* Cleaning Tasks */}
        <TabsContent value="cleaning" className="mt-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-8" />
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            {filteredTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center rounded-lg bg-muted size-12 text-center">
                        <div>
                          <p className="text-xs text-muted-foreground">Room</p>
                          <p className="font-bold text-sm">{task.room}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{task.type}</h4>
                          <Badge variant="outline" className={priorityColors[task.priority]}>{task.priority}</Badge>
                          <StatusBadge status={task.status} />
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          Assigned to {task.assignee} • {task.createdAt}
                        </p>
                        {task.notes && <p className="text-xs text-muted-foreground mt-1">{task.notes}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {task.status === 'pending' && (
                        <Button size="sm" variant="outline">Start</Button>
                      )}
                      {task.status === 'in_progress' && (
                        <Button size="sm">Complete</Button>
                      )}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Reassign</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Maintenance */}
        <TabsContent value="maintenance" className="mt-4">
          <div className="grid gap-3">
            {maintenanceTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-orange-500/10 p-3">
                        <Wrench className="size-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">Room {task.room} - {task.type}</h4>
                          <Badge variant="outline" className={priorityColors[task.priority]}>{task.priority}</Badge>
                          <StatusBadge status={task.status} />
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{task.notes} • Assigned to {task.assignee}</p>
                      </div>
                    </div>
                    {task.status !== 'completed' && <Button size="sm">Mark Complete</Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Staff */}
        <TabsContent value="staff" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s) => (
              <Card key={s.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">{s.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-xs text-muted-foreground">Housekeeping Staff</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tasks Today</span>
                    <span className="font-medium">{s.completed}/{s.tasksToday}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${(s.completed / s.tasksToday) * 100}%` }} />
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
