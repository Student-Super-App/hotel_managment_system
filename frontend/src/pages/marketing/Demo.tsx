// ============================================================
// ROBO HMS - Marketing - Demo / Free Trial Page
// ============================================================
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const trialPerks = [
  'Full access to all features for 14 days',
  'Unlimited rooms & staff accounts',
  'WhatsApp AI Assistant included',
  'Dedicated onboarding support',
  'No credit card required',
  'Cancel anytime, no questions asked',
];

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full text-center p-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-emerald-100 p-4">
              <CheckCircle2 className="size-8 text-emerald-600" />
            </div>
          </div>
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl">Thank You!</CardTitle>
            <CardDescription className="text-base">
              Our team will contact you within 2 hours to set up your free trial.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 space-y-3">
            <p className="text-sm text-muted-foreground">
              In the meantime, check out our features and pricing to explore what ROBO HMS can do for you.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" asChild>
                <Link to="/features">View Features</Link>
              </Button>
              <Button asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">Free 14-Day Trial</Badge>
        <h1 className="text-4xl font-bold">Get Started with ROBO HMS</h1>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Fill out the form below and our team will set up your personalized hotel management dashboard
        </p>
      </section>

      {/* Form + Info Layout */}
      <section className="grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Request a Demo</CardTitle>
            <CardDescription>We'll get back to you within 2 hours during business hours</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Rajesh Kumar" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="rajesh@hotel.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotel">Hotel Name *</Label>
                <Input id="hotel" placeholder="Grand Palace Hotel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Mumbai" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rooms">Number of Rooms</Label>
                <Select>
                  <SelectTrigger id="rooms">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1 – 20 rooms</SelectItem>
                    <SelectItem value="21-50">21 – 50 rooms</SelectItem>
                    <SelectItem value="51-100">51 – 100 rooms</SelectItem>
                    <SelectItem value="101-200">101 – 200 rooms</SelectItem>
                    <SelectItem value="200+">200+ rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Anything specific you'd like in the demo?</Label>
                <Textarea
                  id="message"
                  placeholder="We are interested in the WhatsApp integration and OTA channel manager..."
                  rows={4}
                />
              </div>
              <div className="sm:col-span-2">
                <Button size="lg" type="submit" className="w-full sm:w-auto">
                  Request Demo <ArrowRight className="size-4 ml-1" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trial Perks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {trialPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contact Us Directly</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-muted-foreground" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-muted-foreground" />
                <span>sales@robohms.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-muted-foreground" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-muted-foreground" />
                <span>Mon–Sat 9AM – 7PM IST</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="size-4 text-muted-foreground" />
                <span>400+ Hotels Trust ROBO HMS</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
