// ============================================================
// ROBO HMS - Booking Engine Home
// ============================================================
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  UtensilsCrossed,
  ShieldCheck,
  CalendarDays,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Car, label: 'Parking' },
  { icon: Coffee, label: 'Breakfast' },
  { icon: Dumbbell, label: 'Gym' },
  { icon: UtensilsCrossed, label: 'Restaurant' },
  { icon: ShieldCheck, label: '24/7 Security' },
];

const testimonials = [
  { name: 'Anita S.', rating: 5, text: 'Excellent stay! The rooms were spotless and the staff was incredibly helpful.' },
  { name: 'Rohan M.', rating: 5, text: 'Best hotel in the area. The WhatsApp check-in feature saved us so much time!' },
  { name: 'Priya K.', rating: 4, text: 'Great location and wonderful food. Will definitely come back.' },
];

export default function BookingHome() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 overflow-hidden">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">★ 4.8 Rated on Google</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Welcome to Hotel Grand Palace
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Experience luxury and comfort in the heart of Bengaluru. Book your perfect stay with us.
          </p>
        </div>

        {/* Search Box */}
        <Card className="mt-8 max-w-4xl">
          <CardContent className="p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-4 items-end">
              <div className="space-y-2">
                <Label>Check-in</Label>
                <Input type="date" defaultValue="2025-01-15" />
              </div>
              <div className="space-y-2">
                <Label>Check-out</Label>
                <Input type="date" defaultValue="2025-01-17" />
              </div>
              <div className="space-y-2">
                <Label>Guests</Label>
                <Select defaultValue="2">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" className="w-full" onClick={() => navigate('/book/rooms')}>
                <Search className="size-4 mr-2" /> Search Rooms
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Our Amenities</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {amenities.map((a) => (
            <Card key={a.label} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-4">
                <a.icon className="size-8 mx-auto text-primary mb-2" />
                <p className="text-sm font-medium">{a.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Rooms */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">Featured Rooms</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'Deluxe Room', price: 3500, desc: 'Spacious room with city view, king bed, and modern amenities', maxGuests: 2, size: '320 sq ft' },
            { name: 'Premium Suite', price: 6000, desc: 'Luxury suite with separate living area, rain shower, and mini bar', maxGuests: 3, size: '520 sq ft' },
            { name: 'Family Room', price: 4500, desc: 'Perfect for families with two double beds and a kids corner', maxGuests: 4, size: '450 sq ft' },
          ].map((room) => (
            <Card key={room.name} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Room Photo</span>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{room.name}</h3>
                  <Badge variant="secondary">{room.size}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{room.desc}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Users className="size-3" /> Max {room.maxGuests} guests
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold">₹{room.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                  <Button size="sm" onClick={() => navigate('/book/rooms')}>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Guests Say</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="p-4">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">"{t.text}"</p>
                <p className="text-sm font-medium">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact/Map */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Contact Us</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              <span className="text-sm">123, MG Road, Bengaluru, Karnataka 560001</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" />
              <span className="text-sm">Open 24/7 · Check-in: 2:00 PM · Check-out: 11:00 AM</span>
            </div>
            <div className="mt-4 flex gap-2">
              <Button>Call Us: +91 98765 43210</Button>
              <Button variant="outline">WhatsApp</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-0 h-full min-h-[200px] flex items-center justify-center bg-muted rounded-xl">
            <p className="text-muted-foreground text-sm">Google Maps Embed</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
