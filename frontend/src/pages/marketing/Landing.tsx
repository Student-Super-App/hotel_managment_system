// ============================================================
// ROBO HMS - Marketing Website Landing Page
// ============================================================
import { Link } from 'react-router-dom';
import {
  BarChart3,
  MessageSquare,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  BedDouble,
  IndianRupee,
  Play,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  { icon: BedDouble, title: 'Room Management', description: 'Manage rooms, types, floor plans, and real-time availability with visual dashboards' },
  { icon: Users, title: 'Guest Management', description: 'Complete CRM with guest profiles, preferences, stay history, and document storage' },
  { icon: MessageSquare, title: 'WhatsApp Integration', description: 'AI-powered chatbot for booking, check-in reminders, and guest communication' },
  { icon: IndianRupee, title: 'Billing & GST', description: 'Automated invoicing with GST compliance, multiple payment modes, and accounting' },
  { icon: BarChart3, title: 'Reports & Analytics', description: 'RevPAR, ADR, occupancy analytics with exportable reports and trend analysis' },
  { icon: Globe, title: 'Booking Engine', description: 'Commission-free direct booking website for your hotel with payment gateway' },
];

const stats = [
  { value: '500+', label: 'Hotels Trust Us' },
  { value: '50K+', label: 'Bookings/Month' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.8/5', label: 'Customer Rating' },
];

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Owner, Hotel Grand Palace', text: 'ROBO HMS transformed our operations. Check-in time reduced by 60% with WhatsApp automation.', rating: 5 },
  { name: 'Priya Patel', role: 'Manager, Sunrise Resort', text: 'The best HMS we\'ve used. Module marketplace lets us add features as we grow.', rating: 5 },
  { name: 'Suresh Menon', role: 'Owner, Lake Palace Heritage', text: 'Their support team is incredible. Onboarding was seamless and the ROI was immediate.', rating: 5 },
];

export default function Landing() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center pt-12 pb-8">
        <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
          🚀 India's #1 Hotel Management System
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
          The Smarter Way to
          <span className="text-primary"> Manage Your Hotel</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          All-in-one SaaS platform for hotel management with built-in WhatsApp automation,
          booking engine, and AI-powered guest communication. Start from ₹3,000/month.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/demo">Book a Free Demo <ArrowRight className="size-4 ml-1" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="size-4 text-emerald-500" />
          <span>14-day free trial</span>
          <span className="mx-2">·</span>
          <CheckCircle2 className="size-4 text-emerald-500" />
          <span>No credit card required</span>
          <span className="mx-2">·</span>
          <CheckCircle2 className="size-4 text-emerald-500" />
          <span>Setup in 15 minutes</span>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-5xl mx-auto">
        <div className="rounded-xl border bg-gradient-to-b from-muted to-background p-4 md:p-8 shadow-2xl">
          <div className="rounded-lg bg-card border h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <Play className="size-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Interactive Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">Features</Badge>
          <h2 className="text-3xl font-bold">Everything You Need to Run Your Hotel</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            From front desk to back office, ROBO HMS covers every aspect of hotel operations
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-2.5 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/features">View All Features <ArrowRight className="size-4 ml-1" /></Link>
          </Button>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <Badge className="bg-green-500/10 text-green-700 border-green-500/20 mb-3">
              <MessageSquare className="size-3 mr-1" /> WhatsApp First
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold">WhatsApp-Powered Hotel Management</h2>
            <p className="text-muted-foreground mt-3">
              Let your guests book rooms, do self-check-in, request room service, and get instant
              support — all through WhatsApp. AI chatbot handles 70% of queries automatically.
            </p>
            <div className="mt-4 space-y-2">
              {['Automated booking confirmations', 'AI-powered guest chatbot', 'Broadcast campaigns & offers', 'Pre check-in via WhatsApp'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-80 h-80 rounded-xl bg-card border flex items-center justify-center">
            <p className="text-muted-foreground text-sm">WhatsApp Chat Demo</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3">Testimonials</Badge>
          <h2 className="text-3xl font-bold">Loved by Hoteliers Across India</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 rounded-2xl bg-primary/5">
        <h2 className="text-3xl font-bold">Ready to Transform Your Hotel?</h2>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          Join 500+ hotels already using ROBO HMS. Start your free 14-day trial today.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/demo">Start Free Trial <ArrowRight className="size-4 ml-1" /></Link>
          </Button>
          <Button size="lg" variant="outline">Talk to Sales</Button>
        </div>
      </section>
    </div>
  );
}
