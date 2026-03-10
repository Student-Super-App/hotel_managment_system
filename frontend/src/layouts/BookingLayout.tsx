// ============================================================
// ROBO HMS - Booking Engine Layout (Public)
// ============================================================
import { Outlet, Link } from 'react-router-dom';
import { Hotel, Phone, Mail, MapPin } from 'lucide-react';

export default function BookingLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/book" className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground size-9">
              <Hotel className="size-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Grand Hotel</h1>
              <p className="text-xs text-muted-foreground">Powered by ROBO HMS</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/book" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/book/rooms" className="text-sm font-medium hover:text-primary transition-colors">Rooms</Link>
            <Link to="/book/search" className="text-sm font-medium hover:text-primary transition-colors">Book Now</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+911234567890" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
              <Phone className="size-3.5" />
              +91 12345 67890
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center rounded-lg bg-primary text-primary-foreground size-8">
                  <Hotel className="size-4" />
                </div>
                <span className="font-bold">Grand Hotel</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Experience luxury and comfort at Grand Hotel. Book your stay with us for an unforgettable experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <Link to="/book" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
                <Link to="/book/rooms" className="text-sm text-muted-foreground hover:text-primary">Rooms & Suites</Link>
                <Link to="/book/search" className="text-sm text-muted-foreground hover:text-primary">Book Now</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4" />
                  123 Hotel Street, City, State 110001
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="size-4" />
                  +91 12345 67890
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4" />
                  info@grandhotel.com
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 Grand Hotel. Powered by <Link to="/" className="text-primary hover:underline">ROBO HMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
