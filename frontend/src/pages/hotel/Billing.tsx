// ============================================================
// ROBO HMS - Billing & Payments Page
// ============================================================
import { useState } from 'react';
import {
  Search,
  Download,
  IndianRupee,
  FileText,
  CreditCard,
  Wallet,
  Smartphone,
  Banknote,
  Eye,
  Send,
  MoreHorizontal,
  TrendingUp,
  Printer,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import PageHeader from '@/components/shared/PageHeader';
import StatusBadge from '@/components/shared/StatusBadge';
import StatsCard from '@/components/shared/StatsCard';

const payments = [
  { id: 'PAY001', bookingId: 'BK001', guest: 'Rahul Sharma', amount: 13500, method: 'UPI', status: 'completed', invoiceNo: 'INV-2026-001', date: '2026-03-10', gst: 1620 },
  { id: 'PAY002', bookingId: 'BK002', guest: 'Priya Patel', amount: 20000, method: 'Card', status: 'completed', invoiceNo: 'INV-2026-002', date: '2026-03-10', gst: 2400 },
  { id: 'PAY003', bookingId: 'BK003', guest: 'Amit Kumar', amount: 2800, method: 'Cash', status: 'pending', invoiceNo: 'INV-2026-003', date: '2026-03-11', gst: 336 },
  { id: 'PAY004', bookingId: 'BK004', guest: 'Sarah Wilson', amount: 30500, method: 'Card', status: 'completed', invoiceNo: 'INV-2026-004', date: '2026-03-11', gst: 3660 },
  { id: 'PAY005', bookingId: 'BK005', guest: 'David Chen', amount: 9000, method: 'UPI', status: 'completed', invoiceNo: 'INV-2026-005', date: '2026-03-12', gst: 1080 },
  { id: 'PAY006', bookingId: 'BK002', guest: 'Priya Patel', amount: 21000, method: 'Cash', status: 'pending', invoiceNo: null, date: '2026-03-10', gst: 2520 },
];

const invoices = [
  { id: 'INV-2026-001', bookingId: 'BK001', guest: 'Rahul Sharma', subtotal: 13500, gst: 1620, total: 15120, status: 'paid', date: '2026-03-10' },
  { id: 'INV-2026-002', bookingId: 'BK002', guest: 'Priya Patel', subtotal: 41000, gst: 4920, total: 45920, status: 'sent', date: '2026-03-10' },
  { id: 'INV-2026-003', bookingId: 'BK003', guest: 'Amit Kumar', subtotal: 2800, gst: 336, total: 3136, status: 'draft', date: '2026-03-11' },
  { id: 'INV-2026-004', bookingId: 'BK004', guest: 'Sarah Wilson', subtotal: 30500, gst: 3660, total: 34160, status: 'paid', date: '2026-03-11' },
];

const methodIcons: Record<string, React.ReactNode> = {
  UPI: <Smartphone className="size-4" />,
  Card: <CreditCard className="size-4" />,
  Cash: <Banknote className="size-4" />,
};

export default function Billing() {
  const [invoicePreview, setInvoicePreview] = useState<typeof invoices[0] | null>(null);

  return (
    <div className="space-y-6">
      <PageHeader title="Billing & Payments" description="Manage invoices, payments, and financial records">
        <Button variant="outline" size="sm"><Download className="size-4 mr-1" /> Export</Button>
      </PageHeader>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Revenue Today" value="₹96,800" change="+15% from yesterday" changeType="positive" icon={IndianRupee} />
        <StatsCard title="Pending Payments" value="₹23,800" change="2 payments pending" changeType="neutral" icon={Wallet} />
        <StatsCard title="Invoices Sent" value="18" change="This month" changeType="neutral" icon={FileText} />
        <StatsCard title="Monthly Revenue" value="₹12.4L" change="+22% vs last month" changeType="positive" icon={TrendingUp} />
      </div>

      <Tabs defaultValue="payments">
        <TabsList>
          <TabsTrigger value="payments"><CreditCard className="size-4 mr-1" /> Payments</TabsTrigger>
          <TabsTrigger value="invoices"><FileText className="size-4 mr-1" /> Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Payment History</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input placeholder="Search payments..." className="pl-8 w-56" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead>Booking</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.id}</TableCell>
                      <TableCell>{p.guest}</TableCell>
                      <TableCell><Badge variant="secondary">{p.bookingId}</Badge></TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          {methodIcons[p.method]}
                          <span>{p.method}</span>
                        </div>
                      </TableCell>
                      <TableCell>{p.date}</TableCell>
                      <TableCell><StatusBadge status={p.status} /></TableCell>
                      <TableCell className="text-right font-medium">₹{p.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem><Eye className="size-4 mr-2" /> View</DropdownMenuItem>
                            <DropdownMenuItem><FileText className="size-4 mr-2" /> Invoice</DropdownMenuItem>
                            <DropdownMenuItem><Download className="size-4 mr-2" /> Receipt</DropdownMenuItem>
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

        <TabsContent value="invoices" className="mt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Invoices</CardTitle>
                <Button size="sm"><FileText className="size-4 mr-1" /> Generate Invoice</Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Guest</TableHead>
                    <TableHead>Booking</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>GST</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((inv) => (
                    <TableRow key={inv.id}>
                      <TableCell className="font-medium">{inv.id}</TableCell>
                      <TableCell>{inv.guest}</TableCell>
                      <TableCell><Badge variant="secondary">{inv.bookingId}</Badge></TableCell>
                      <TableCell>{inv.date}</TableCell>
                      <TableCell>₹{inv.gst.toLocaleString()}</TableCell>
                      <TableCell><StatusBadge status={inv.status} /></TableCell>
                      <TableCell className="text-right font-bold">₹{inv.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm"><MoreHorizontal className="size-4" /></Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setInvoicePreview(inv)}><Eye className="size-4 mr-2" /> Preview</DropdownMenuItem>
                            <DropdownMenuItem><Send className="size-4 mr-2" /> Send</DropdownMenuItem>
                            <DropdownMenuItem><Download className="size-4 mr-2" /> Download</DropdownMenuItem>
                            <DropdownMenuItem><Printer className="size-4 mr-2" /> Print</DropdownMenuItem>
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
      </Tabs>

      {/* Invoice Preview Dialog */}
      <Dialog open={!!invoicePreview} onOpenChange={() => setInvoicePreview(null)}>
        <DialogContent className="max-w-lg">
          {invoicePreview && (
            <>
              <DialogHeader>
                <DialogTitle>Invoice Preview</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">ROBO HMS</h3>
                    <p className="text-sm text-muted-foreground">Grand Hotel</p>
                    <p className="text-xs text-muted-foreground">GSTIN: 27AXXXX1234X1ZX</p>
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-lg">INVOICE</h4>
                    <p className="text-sm">{invoicePreview.id}</p>
                    <p className="text-sm text-muted-foreground">{invoicePreview.date}</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium">Bill To:</p>
                  <p className="text-sm">{invoicePreview.guest}</p>
                  <p className="text-xs text-muted-foreground">Booking: {invoicePreview.bookingId}</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Description</span>
                    <span>Amount</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Room Charges</span>
                    <span>₹{invoicePreview.subtotal.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{invoicePreview.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>GST (12%)</span>
                    <span>₹{invoicePreview.gst.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{invoicePreview.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline"><Printer className="size-4 mr-1" /> Print</Button>
                <Button><Download className="size-4 mr-1" /> Download PDF</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
