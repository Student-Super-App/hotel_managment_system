// ============================================================
// ROBO HMS - Module Marketplace Page
// ============================================================
import { useState } from 'react';
import {
  MessageSquare,
  Bot,
  Globe,
  BarChart3,
  Brain,
  Zap,
  Check,
  Star,
  ExternalLink,
  Search,
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import PageHeader from '@/components/shared/PageHeader';

interface Module {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  period: string;
  icon: React.ElementType;
  category: string;
  features: string[];
  rating: number;
  installs: string;
  isInstalled: boolean;
  isPopular: boolean;
  badge?: string;
}

const modules: Module[] = [
  {
    id: 'whatsapp-ai',
    name: 'WhatsApp AI Assistant',
    description: 'AI-powered guest communication via WhatsApp with automated responses',
    longDescription: 'Transform your guest communication with our AI-powered WhatsApp integration. Automate booking confirmations, check-in reminders, room service requests, and more. The AI learns from your hotel\'s context to provide personalized responses.',
    price: 6000,
    period: '/year',
    icon: MessageSquare,
    category: 'communication',
    features: ['Auto booking confirmations', 'AI guest responses', 'Multi-language support', 'Template messages', 'Broadcast campaigns', '24/7 chatbot'],
    rating: 4.8,
    installs: '2.3K+',
    isInstalled: true,
    isPopular: true,
    badge: 'Most Popular',
  },
  {
    id: 'whatsapp-booking',
    name: 'WhatsApp Booking Bot',
    description: 'Let guests book rooms directly through WhatsApp conversations',
    longDescription: 'Enable guests to search rooms, check availability, and complete bookings entirely through WhatsApp. The bot guides them through the entire booking process with an intuitive conversational flow.',
    price: 4000,
    period: '/year',
    icon: Bot,
    category: 'communication',
    features: ['Room search via chat', 'Availability checking', 'In-chat payments', 'Booking modifications', 'Cancellation handling', 'Waitlist management'],
    rating: 4.6,
    installs: '1.8K+',
    isInstalled: false,
    isPopular: true,
  },
  {
    id: 'custom-website',
    name: 'Custom Hotel Website',
    description: 'Professional hotel website with integrated booking engine',
    longDescription: 'Get a beautiful, SEO-optimized hotel website with an integrated direct booking engine. Choose from multiple templates, customize colors and content, and start receiving direct bookings without commission fees.',
    price: 8000,
    period: '/year',
    icon: Globe,
    category: 'marketing',
    features: ['SEO optimized', 'Mobile responsive', 'Booking engine', 'Photo gallery', 'Google Maps integration', 'Review widgets'],
    rating: 4.7,
    installs: '3.1K+',
    isInstalled: false,
    isPopular: true,
    badge: 'Recommended',
  },
  {
    id: 'ota-manager',
    name: 'OTA Channel Manager',
    description: 'Sync inventory across Booking.com, MakeMyTrip, Goibibo, and more',
    longDescription: 'Manage all your OTA listings from a single dashboard. Automatically sync room availability, rates, and restrictions across 15+ channels in real-time. Prevent overbookings and maximize revenue.',
    price: 10000,
    period: '/year',
    icon: BarChart3,
    category: 'distribution',
    features: ['15+ OTA channels', 'Real-time sync', 'Rate management', 'Inventory control', 'Booking import', 'Performance analytics'],
    rating: 4.9,
    installs: '1.5K+',
    isInstalled: false,
    isPopular: false,
    badge: 'Premium',
  },
  {
    id: 'smart-pricing',
    name: 'Smart Pricing AI',
    description: 'Dynamic pricing engine that maximizes revenue using AI',
    longDescription: 'Let AI optimize your room rates in real-time based on demand, competition, events, seasonality, and historical data. Hotels using Smart Pricing see an average 18% revenue increase.',
    price: 7000,
    period: '/year',
    icon: Brain,
    category: 'revenue',
    features: ['Dynamic rate optimization', 'Competitor monitoring', 'Demand forecasting', 'Event-based pricing', 'Revenue dashboards', 'Auto-pilot mode'],
    rating: 4.5,
    installs: '980+',
    isInstalled: false,
    isPopular: false,
  },
  {
    id: 'express-checkin',
    name: 'Express Check-in',
    description: 'Digital check-in with QR codes and ID verification',
    longDescription: 'Reduce front desk queues with digital pre check-in. Guests can upload IDs, sign registration cards, and receive QR room keys before arrival. Integrates with your existing door lock systems.',
    price: 5000,
    period: '/year',
    icon: Zap,
    category: 'operations',
    features: ['QR code check-in', 'ID verification', 'Digital registration', 'Room key via phone', 'Pre-arrival forms', 'Guest preferences'],
    rating: 4.4,
    installs: '750+',
    isInstalled: false,
    isPopular: false,
  },
];

const categories = [
  { value: 'all', label: 'All Modules' },
  { value: 'communication', label: 'Communication' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'distribution', label: 'Distribution' },
  { value: 'revenue', label: 'Revenue' },
  { value: 'operations', label: 'Operations' },
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const filtered = modules.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Module Marketplace" description="Enhance your hotel with powerful add-on modules" />

      {/* Hero Banner */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Supercharge Your Hotel Operations</h2>
              <p className="text-muted-foreground mt-1">Choose from our curated modules to add powerful features to your HMS</p>
            </div>
            <Badge variant="outline" className="hidden sm:flex gap-1 text-primary border-primary/30">
              <Zap className="size-3" /> {modules.length} Modules Available
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search modules..." className="pl-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList>
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>{cat.label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Installed */}
      {modules.some((m) => m.isInstalled) && (
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Installed Modules</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.filter((m) => m.isInstalled).map((mod) => {
              const Icon = mod.icon;
              return (
                <Card key={mod.id} className="border-primary/20 bg-primary/5">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-2.5"><Icon className="size-5 text-primary" /></div>
                        <div>
                          <CardTitle className="text-base">{mod.name}</CardTitle>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Star className="size-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs text-muted-foreground">{mod.rating} · {mod.installs}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="default" className="text-xs"><Check className="size-3 mr-1" />Installed</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm text-muted-foreground">{mod.description}</p>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Configure</Button>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedModule(mod)}>View Details</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Available */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Available Modules</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.filter((m) => !m.isInstalled).map((mod) => {
            const Icon = mod.icon;
            return (
              <Card key={mod.id} className="group hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-muted p-2.5 group-hover:bg-primary/10 transition-colors">
                        <Icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{mod.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="size-3 fill-amber-400 text-amber-400" />
                          <span className="text-xs text-muted-foreground">{mod.rating} · {mod.installs}</span>
                        </div>
                      </div>
                    </div>
                    {mod.badge && (
                      <Badge variant="secondary" className="text-xs">{mod.badge}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <p className="text-sm text-muted-foreground">{mod.description}</p>
                </CardContent>
                <CardFooter className="pt-0 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">₹{mod.price.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">{mod.period}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedModule(mod)}>Details</Button>
                    <Button size="sm">Subscribe</Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Module Detail Dialog */}
      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        {selectedModule && (
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3">
                  <selectedModule.icon className="size-6 text-primary" />
                </div>
                <div>
                  <DialogTitle className="text-lg">{selectedModule.name}</DialogTitle>
                  <DialogDescription className="flex items-center gap-2 mt-1">
                    <Star className="size-3 fill-amber-400 text-amber-400" />
                    {selectedModule.rating} rating · {selectedModule.installs} installs
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-sm text-muted-foreground">{selectedModule.longDescription}</p>
              <Separator />
              <div>
                <h4 className="font-semibold mb-3">Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedModule.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check className="size-4 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">₹{selectedModule.price.toLocaleString()}</span>
                  <span className="text-muted-foreground">{selectedModule.period}</span>
                </div>
                {selectedModule.isInstalled ? (
                  <Button variant="outline">Configure <ExternalLink className="size-4 ml-1" /></Button>
                ) : (
                  <Button>Subscribe Now</Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
