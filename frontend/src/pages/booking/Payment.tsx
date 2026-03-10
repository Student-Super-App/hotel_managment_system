// ============================================================
// ROBO HMS - Booking Engine - Payment Page
// ============================================================
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CreditCard,
  Smartphone,
  Building,
  Shield,
  Clock,
  ChevronRight,
  User,
  IndianRupee,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function BookingPayment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const roomRate = 3500;
  const nights = 2;
  const subtotal = roomRate * nights;
  const gst = Math.round(subtotal * 0.12);
  const total = subtotal + gst;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <span>Search</span>
        <ChevronRight className="size-3" />
        <span>Select Room</span>
        <ChevronRight className="size-3" />
        <span className="text-foreground font-medium">Payment</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left - Guest & Payment */}
        <div className="lg:col-span-2 space-y-6">
          {/* Guest Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <User className="size-4" /> Guest Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name *</Label>
                  <Input placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name *</Label>
                  <Input placeholder="Last name" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label>Phone *</Label>
                  <Input placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Special Requests (optional)</Label>
                <Input placeholder="Any special requests for your stay..." />
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <CreditCard className="size-4" /> Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { value: 'upi', label: 'UPI', icon: Smartphone, desc: 'GPay, PhonePe, Paytm' },
                  { value: 'card', label: 'Card', icon: CreditCard, desc: 'Credit / Debit Card' },
                  { value: 'netbanking', label: 'Net Banking', icon: Building, desc: 'All major banks' },
                ].map((method) => (
                  <button
                    key={method.value}
                    onClick={() => setPaymentMethod(method.value)}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-colors text-left ${
                      paymentMethod === method.value ? 'border-primary bg-primary/5' : 'border-border hover:border-muted-foreground/30'
                    }`}
                  >
                    <method.icon className="size-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-sm">{method.label}</p>
                      <p className="text-xs text-muted-foreground">{method.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label>Card Number</Label>
                    <Input placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1">
                      <Label>Expiry</Label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2 col-span-1">
                      <Label>CVV</Label>
                      <Input placeholder="123" type="password" />
                    </div>
                    <div className="space-y-2 col-span-1">
                      <Label>Name on Card</Label>
                      <Input placeholder="Full name" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="space-y-2 pt-2">
                  <Label>UPI ID</Label>
                  <Input placeholder="yourname@upi" />
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="space-y-2 pt-2">
                  <Label>Select Bank</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Choose your bank" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sbi">State Bank of India</SelectItem>
                      <SelectItem value="hdfc">HDFC Bank</SelectItem>
                      <SelectItem value="icici">ICICI Bank</SelectItem>
                      <SelectItem value="axis">Axis Bank</SelectItem>
                      <SelectItem value="kotak">Kotak Mahindra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm">
              I agree to the <a href="#" className="text-primary underline">Terms & Conditions</a> and <a href="#" className="text-primary underline">Cancellation Policy</a>
            </label>
          </div>
        </div>

        {/* Right - Booking Summary */}
        <div className="space-y-4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="text-base">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted rounded-lg p-3">
                <h4 className="font-semibold">Deluxe Room</h4>
                <p className="text-sm text-muted-foreground">1 King Bed · 320 sq ft</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1"><Clock className="size-3" /> Check-in</span>
                  <span>Jan 15, 2025 (2:00 PM)</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1"><Clock className="size-3" /> Check-out</span>
                  <span>Jan 17, 2025 (11:00 AM)</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{nights} Nights</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Room charges ({nights} nights × ₹{roomRate.toLocaleString()})</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (12%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={() => navigate('/book/confirmation')}>
                <IndianRupee className="size-4 mr-1" /> Pay ₹{total.toLocaleString()}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="size-3" />
                <span>Secured by Razorpay · 256-bit encryption</span>
              </div>

              <div className="text-xs text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">Cancellation Policy:</p>
                <p>• Free cancellation up to 24 hours before check-in</p>
                <p>• 50% charge for late cancellation</p>
                <p>• No refund for no-show</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
