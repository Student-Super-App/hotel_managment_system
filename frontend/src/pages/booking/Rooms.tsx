// ============================================================
// ROBO HMS - Booking Engine - Room Listing & Selection
// ============================================================
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Maximize2,
  SlidersHorizontal,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const rooms = [
  {
    id: 'RT001',
    name: 'Standard Room',
    description: 'Comfortable room with essential amenities for a pleasant stay',
    price: 2500,
    originalPrice: 3000,
    maxGuests: 2,
    size: '260 sq ft',
    bed: '1 Queen Bed',
    available: 5,
    amenities: ['WiFi', 'AC', 'TV', 'Bathroom', 'Desk'],
    images: [],
  },
  {
    id: 'RT002',
    name: 'Deluxe Room',
    description: 'Spacious room with city view, premium bedding, and minibar',
    price: 3500,
    originalPrice: 4000,
    maxGuests: 2,
    size: '320 sq ft',
    bed: '1 King Bed',
    available: 3,
    amenities: ['WiFi', 'AC', 'TV', 'Bathroom', 'Minibar', 'Coffee Maker', 'Safe'],
    images: [],
  },
  {
    id: 'RT003',
    name: 'Premium Suite',
    description: 'Luxury suite with separate living area, premium amenities, and stunning views',
    price: 6000,
    originalPrice: 7000,
    maxGuests: 3,
    size: '520 sq ft',
    bed: '1 King Bed + Sofa Bed',
    available: 2,
    amenities: ['WiFi', 'AC', 'TV', 'Rain Shower', 'Minibar', 'Coffee Maker', 'Safe', 'Living Area', 'Work Desk'],
    images: [],
  },
  {
    id: 'RT004',
    name: 'Family Room',
    description: 'Spacious room perfect for families with children, includes kids amenities',
    price: 4500,
    originalPrice: 5000,
    maxGuests: 4,
    size: '450 sq ft',
    bed: '2 Double Beds',
    available: 4,
    amenities: ['WiFi', 'AC', 'TV', 'Bathroom', 'Kids Corner', 'Extra Bedding', 'Safe'],
    images: [],
  },
  {
    id: 'RT005',
    name: 'Executive Suite',
    description: 'Top-tier suite with panoramic views, jacuzzi, and butler service',
    price: 10000,
    originalPrice: 12000,
    maxGuests: 2,
    size: '700 sq ft',
    bed: '1 King Bed',
    available: 1,
    amenities: ['WiFi', 'AC', 'TV', 'Jacuzzi', 'Minibar', 'Butler Service', 'Safe', 'Living Area', 'Dining Area', 'Balcony'],
    images: [],
  },
];

export default function BookingRooms() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('recommended');

  const sorted = [...rooms].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="space-y-6">
      {/* Search Summary */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 grid gap-3 grid-cols-2 md:grid-cols-4 items-end">
              <div className="space-y-1">
                <Label className="text-xs">Check-in</Label>
                <Input type="date" defaultValue="2025-01-15" className="h-9" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Check-out</Label>
                <Input type="date" defaultValue="2025-01-17" className="h-9" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Guests</Label>
                <Select defaultValue="2">
                  <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="sm">Update Search</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{rooms.length} rooms available for 2 nights</p>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden"><SlidersHorizontal className="size-4 mr-1" /> Filters</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Refine your room search</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Min" className="w-full" />
                    <Input type="number" placeholder="Max" className="w-full" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Amenities</Label>
                  {['WiFi', 'AC', 'Minibar', 'Jacuzzi', 'Balcony'].map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <Checkbox id={a} />
                      <label htmlFor={a} className="text-sm">{a}</label>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40 h-9"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Room Cards */}
      <div className="space-y-4">
        {sorted.map((room) => (
          <Card key={room.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shrink-0">
                  <span className="text-sm text-muted-foreground">Room Photo</span>
                </div>
                {/* Details */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{room.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><Maximize2 className="size-3" /> {room.size}</span>
                        <span className="flex items-center gap-1"><Users className="size-3" /> Max {room.maxGuests}</span>
                        <span>{room.bed}</span>
                      </div>
                    </div>
                    {room.available <= 2 && (
                      <Badge variant="destructive" className="text-xs">Only {room.available} left!</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{room.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.amenities.slice(0, 6).map((a) => (
                      <Badge key={a} variant="outline" className="text-xs font-normal">{a}</Badge>
                    ))}
                    {room.amenities.length > 6 && (
                      <Badge variant="outline" className="text-xs font-normal">+{room.amenities.length - 6} more</Badge>
                    )}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">₹{room.price.toLocaleString()}</span>
                        {room.originalPrice > room.price && (
                          <span className="text-sm text-muted-foreground line-through">₹{room.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">per night · excludes taxes</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm" onClick={() => navigate('/book/payment')}>Select Room</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
