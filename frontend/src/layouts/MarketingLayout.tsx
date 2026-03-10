// ============================================================
// ROBO HMS - Marketing Website Layout
// ============================================================
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Hotel, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function MarketingLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Modules', path: '/modules' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-xl bg-primary text-primary-foreground size-9">
              <Hotel className="size-5" />
            </div>
            <span className="text-xl font-bold">ROBO HMS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/hotel/login">Hotel Login</Link>
            </Button>
            <Button asChild>
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-card px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t">
              <Button variant="outline" asChild>
                <Link to="/hotel/login">Hotel Login</Link>
              </Button>
              <Button asChild>
                <Link to="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center rounded-xl bg-primary text-primary-foreground size-8">
                  <Hotel className="size-4" />
                </div>
                <span className="font-bold text-lg">ROBO HMS</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Complete Hotel Management System for modern hotels. Manage operations, bookings, and guests — all in one platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="flex flex-col gap-2">
                <Link to="/features" className="text-sm text-muted-foreground hover:text-primary">Features</Link>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link>
                <Link to="/modules" className="text-sm text-muted-foreground hover:text-primary">Add-on Modules</Link>
                <Link to="/demo" className="text-sm text-muted-foreground hover:text-primary">Book a Demo</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Portals</h4>
              <div className="flex flex-col gap-2">
                <Link to="/hotel/login" className="text-sm text-muted-foreground hover:text-primary">Hotel Login</Link>
                <Link to="/admin/login" className="text-sm text-muted-foreground hover:text-primary">Admin Portal</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Documentation</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</a>
                <a href="mailto:support@robohms.com" className="text-sm text-muted-foreground hover:text-primary">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2026 ROBO HMS. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
