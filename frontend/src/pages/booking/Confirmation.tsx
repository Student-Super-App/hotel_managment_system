// ============================================================
// ROBO HMS - Booking Confirmation Page
// ============================================================
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  Mail,
  Download,
  Share2,
  MessageSquare,
  Home,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BookingConfirmation() {
  const booking = {
    id: 'BK-20250115-001',
    room: 'Deluxe Room',
    checkIn: 'January 15, 2025',
    checkOut: 'January 17, 2025',
    nights: 2,
    guests: 2,
    guest: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
    },
    payment: {
      subtotal: 7000,
      gst: 840,
      total: 7840,
      method: 'UPI',
      txnId: 'TXN-123456789',
    },
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Icon */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 mb-4">
          <CheckCircle2 className="size-10 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
        <p className="text-muted-foreground mt-1">Your reservation has been successfully booked</p>
        <Badge variant="outline" className="mt-2 font-mono text-base px-4 py-1">
          {booking.id}
        </Badge>
      </div>

      {/* Booking Details */}
      <Card className="text-left">
        <CardHeader>
          <CardTitle className="text-base">Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-lg">{booking.room}</h3>
            <p className="text-sm text-muted-foreground">Hotel Grand Palace, Bengaluru</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarDays className="size-3" /> Check-in
              </div>
              <p className="font-medium">{booking.checkIn}</p>
              <p className="text-xs text-muted-foreground">After 2:00 PM</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarDays className="size-3" /> Check-out
              </div>
              <p className="font-medium">{booking.checkOut}</p>
              <p className="text-xs text-muted-foreground">Before 11:00 AM</p>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium text-sm mb-2">Guest Information</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2"><span className="text-muted-foreground">Name:</span> {booking.guest.name}</div>
              <div className="flex items-center gap-2"><Mail className="size-3 text-muted-foreground" /> {booking.guest.email}</div>
              <div className="flex items-center gap-2"><Phone className="size-3 text-muted-foreground" /> {booking.guest.phone}</div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium text-sm mb-2">Payment Summary</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Room ({booking.nights} nights)</span>
                <span>₹{booking.payment.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (12%)</span>
                <span>₹{booking.payment.gst.toLocaleString()}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total Paid</span>
                <span>₹{booking.payment.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Payment Method</span>
                <span>{booking.payment.method}</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Transaction ID</span>
                <span className="font-mono">{booking.payment.txnId}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What's Next */}
      <Card className="mt-4 text-left">
        <CardHeader>
          <CardTitle className="text-base">What's Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { icon: Mail, text: 'Confirmation email sent to your registered email' },
            { icon: MessageSquare, text: 'You\'ll receive check-in details via WhatsApp' },
            { icon: Clock, text: 'Pre check-in link will be sent 24 hours before arrival' },
            { icon: MapPin, text: 'Hotel address: 123, MG Road, Bengaluru, KA 560001' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                <item.icon className="size-3.5 text-primary" />
              </div>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button variant="outline" className="flex-1"><Download className="size-4 mr-1" /> Download Receipt</Button>
        <Button variant="outline" className="flex-1"><Share2 className="size-4 mr-1" /> Share Booking</Button>
        <Button asChild className="flex-1">
          <Link to="/book"><Home className="size-4 mr-1" /> Back to Home</Link>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-6">
        Need help? Contact us at +91 98765 43210 or <a href="mailto:info@hotel.com" className="text-primary underline">info@hotel.com</a>
      </p>
    </div>
  );
}
