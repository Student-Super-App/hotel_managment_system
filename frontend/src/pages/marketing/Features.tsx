// ============================================================
// ROBO HMS - Marketing - Features Page
// ============================================================
import { Link } from 'react-router-dom';
import {
  BedDouble,
  Users,
  CalendarDays,
  ClipboardCheck,
  IndianRupee,
  BarChart3,
  MessageSquare,
  Bot,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featureGroups = [
  {
    title: 'Front Desk Operations',
    description: 'Streamline your daily front desk workflow',
    features: [
      { icon: CalendarDays, title: 'Reservation Management', points: ['Calendar & list view', 'Drag-and-drop scheduling', 'OTA booking import', 'Waitlist management'] },
      { icon: BedDouble, title: 'Room Management', points: ['Visual floor plans', 'Room type configuration', 'Status tracking', 'Maintenance alerts'] },
      { icon: Users, title: 'Guest Management', points: ['Guest profiles & CRM', 'Preferences tracking', 'Stay history', 'Document storage'] },
      { icon: Zap, title: 'Check-in / Check-out', points: ['Express check-in', 'ID verification', 'Digital registration', 'Room key management'] },
    ],
  },
  {
    title: 'Housekeeping & Operations',
    description: 'Keep your property in perfect condition',
    features: [
      { icon: ClipboardCheck, title: 'Housekeeping', points: ['Task assignment', 'Priority management', 'Staff workload view', 'Maintenance tracking'] },
    ],
  },
  {
    title: 'Finance & Reporting',
    description: 'Complete financial management',
    features: [
      { icon: IndianRupee, title: 'Billing & Payments', points: ['GST-compliant invoices', 'Multiple payment modes', 'Split billing', 'Advance payments'] },
      { icon: BarChart3, title: 'Reports & Analytics', points: ['RevPAR & ADR metrics', 'Occupancy trends', 'Revenue analysis', 'Exportable reports'] },
    ],
  },
  {
    title: 'Communication & Marketing',
    description: 'Engage guests and boost direct bookings',
    features: [
      { icon: MessageSquare, title: 'WhatsApp Integration', points: ['Business API', 'Auto confirmations', 'Template messages', 'Broadcast campaigns'] },
      { icon: Bot, title: 'AI Chatbot', points: ['24/7 automated replies', 'Booking via chat', 'FAQ handling', 'Multi-language'] },
      { icon: Globe, title: 'Booking Engine', points: ['Direct booking website', 'Commission-free', 'Payment gateway', 'Mobile optimized'] },
    ],
  },
];

export default function Features() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center pt-8">
        <Badge variant="outline" className="mb-4">Features</Badge>
        <h1 className="text-4xl font-bold">Powerful Features for Modern Hotels</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Everything you need to manage your hotel efficiently, from front desk to finance
        </p>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group) => (
        <section key={group.title}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{group.title}</h2>
            <p className="text-muted-foreground mt-1">{group.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {group.features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                      <feature.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                      <ul className="space-y-2">
                        {feature.points.map((point) => (
                          <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="text-center py-12 rounded-2xl bg-primary/5">
        <h2 className="text-2xl font-bold">See All Features in Action</h2>
        <p className="text-muted-foreground mt-2">Schedule a personalized demo with our team</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/demo">Book a Demo <ArrowRight className="size-4 ml-1" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
