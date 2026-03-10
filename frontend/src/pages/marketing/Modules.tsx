// ============================================================
// ROBO HMS - Marketing - Modules Page
// ============================================================
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Bot,
  Globe,
  BarChart3,
  Brain,
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const modules = [
  {
    icon: MessageSquare,
    name: 'WhatsApp AI Assistant',
    price: '₹6,000/year',
    description: 'AI-powered guest communication via WhatsApp with automated responses, booking confirmations, and broadcast campaigns.',
    features: ['Auto booking confirmations', 'AI guest responses', 'Multi-language support', 'Template messages', 'Broadcast campaigns', '24/7 chatbot'],
    badge: 'Most Popular',
    rating: 4.8,
  },
  {
    icon: Bot,
    name: 'WhatsApp Booking Bot',
    price: '₹4,000/year',
    description: 'Let guests search rooms, check availability, and complete bookings entirely through WhatsApp conversations.',
    features: ['Room search via chat', 'Availability checking', 'In-chat payments', 'Booking modifications', 'Cancellation handling', 'Waitlist management'],
    rating: 4.6,
  },
  {
    icon: Globe,
    name: 'Custom Hotel Website',
    price: '₹8,000/year',
    description: 'Professional, SEO-optimized hotel website with an integrated direct booking engine and payment gateway.',
    features: ['SEO optimized', 'Mobile responsive', 'Integrated booking engine', 'Photo gallery', 'Google Maps', 'Review widgets'],
    badge: 'Recommended',
    rating: 4.7,
  },
  {
    icon: BarChart3,
    name: 'OTA Channel Manager',
    price: '₹10,000/year',
    description: 'Manage all OTA listings from a single dashboard. Sync rooms across 15+ channels in real-time.',
    features: ['15+ OTA channels', 'Real-time sync', 'Rate management', 'Inventory control', 'Booking import', 'Analytics'],
    badge: 'Premium',
    rating: 4.9,
  },
  {
    icon: Brain,
    name: 'Smart Pricing AI',
    price: '₹7,000/year',
    description: 'Dynamic pricing engine that maximizes revenue using AI. Average 18% revenue increase reported.',
    features: ['Dynamic rate optimization', 'Competitor monitoring', 'Demand forecasting', 'Event-based pricing', 'Revenue dashboards', 'Auto-pilot mode'],
    rating: 4.5,
  },
  {
    icon: Zap,
    name: 'Express Check-in',
    price: '₹5,000/year',
    description: 'Digital check-in with QR codes and ID verification. Reduce front desk queues and improve guest experience.',
    features: ['QR code check-in', 'ID verification', 'Digital registration', 'Room key via phone', 'Pre-arrival forms', 'Guest preferences'],
    rating: 4.4,
  },
];

export default function Modules() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center pt-8">
        <Badge variant="outline" className="mb-4">Module Marketplace</Badge>
        <h1 className="text-4xl font-bold">Extend Your HMS</h1>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Add powerful capabilities to your hotel management system with our curated add-on modules
        </p>
      </section>

      {/* Modules Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <Card key={mod.name} className="flex flex-col group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-primary/10 p-3 group-hover:scale-110 transition-transform">
                  <mod.icon className="size-6 text-primary" />
                </div>
                {mod.badge && <Badge variant="secondary">{mod.badge}</Badge>}
              </div>
              <CardTitle className="text-lg mt-3">{mod.name}</CardTitle>
              <div className="flex items-center gap-1">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                <span className="text-sm text-muted-foreground">{mod.rating}</span>
              </div>
              <CardDescription>{mod.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-4 border-t">
              <span className="text-lg font-bold text-primary">{mod.price}</span>
              <Button size="sm" asChild>
                <Link to="/demo">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Custom Modules */}
      <section className="text-center p-8 rounded-2xl bg-muted/50">
        <h2 className="text-2xl font-bold">Need a Custom Module?</h2>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          We build custom integrations and modules for enterprise customers. Tell us what you need.
        </p>
        <Button size="lg" className="mt-6" variant="outline">
          Contact Sales <ArrowRight className="size-4 ml-1" />
        </Button>
      </section>

      {/* CTA */}
      <section className="text-center py-12 rounded-2xl bg-primary/5">
        <h2 className="text-2xl font-bold">Try All Modules Free for 14 Days</h2>
        <p className="text-muted-foreground mt-2">Start your trial and explore the full marketplace</p>
        <Button size="lg" className="mt-6" asChild>
          <Link to="/demo">Start Free Trial <ArrowRight className="size-4 ml-1" /></Link>
        </Button>
      </section>
    </div>
  );
}
