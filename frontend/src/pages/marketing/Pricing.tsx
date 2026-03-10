// ============================================================
// ROBO HMS - Marketing - Pricing Page
// ============================================================
import { Link } from 'react-router-dom';
import {
  Check,
  X,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Starter',
    price: 3000,
    description: 'Perfect for small hotels and guest houses',
    highlight: false,
    limits: 'Up to 25 rooms · 5 staff',
    features: [
      { text: 'Room Management', included: true },
      { text: 'Reservation System', included: true },
      { text: 'Guest Management', included: true },
      { text: 'Check-in / Check-out', included: true },
      { text: 'Basic Housekeeping', included: true },
      { text: 'Billing & Invoicing (GST)', included: true },
      { text: 'Basic Reports', included: true },
      { text: 'Email Support', included: true },
      { text: 'WhatsApp Integration', included: false },
      { text: 'Advanced Analytics', included: false },
      { text: 'Module Marketplace', included: false },
      { text: 'API Access', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 8000,
    description: 'For growing hotels that need more power',
    highlight: true,
    badge: 'Most Popular',
    limits: 'Up to 75 rooms · 20 staff',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'WhatsApp Basic Integration', included: true },
      { text: 'Advanced Reports & Analytics', included: true },
      { text: 'Module Marketplace Access', included: true },
      { text: 'Staff Role Management', included: true },
      { text: 'Booking Engine', included: true },
      { text: 'Priority Email & Chat Support', included: true },
      { text: 'Data Export', included: true },
      { text: 'WhatsApp AI Chatbot', included: false },
      { text: 'OTA Channel Manager', included: false },
      { text: 'API Access', included: false },
      { text: 'Dedicated Account Manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 15000,
    description: 'For large hotels and hotel chains',
    highlight: false,
    limits: 'Unlimited rooms · Unlimited staff',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'WhatsApp AI Chatbot', included: true },
      { text: 'OTA Channel Manager', included: true },
      { text: 'Full API Access', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'White-label Booking Engine', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Phone + Priority Support', included: true },
      { text: 'Custom Reports', included: true },
      { text: 'Multi-property Support', included: true },
      { text: 'SLA Guarantee (99.9%)', included: true },
      { text: 'On-site Training', included: true },
    ],
  },
];

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes! All plans come with a 14-day free trial. No credit card required.' },
  { q: 'Can I upgrade/downgrade anytime?', a: 'Absolutely. You can change your plan at any time. Upgrades are instant, downgrades take effect at the next billing cycle.' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, net banking, and wire transfers for annual plans.' },
  { q: 'Is there a setup fee?', a: 'No. There are zero setup fees. We help you onboard for free.' },
  { q: 'Do you offer annual discounts?', a: 'Yes — pay annually and get 2 months free on all plans.' },
  { q: 'What about add-on modules?', a: 'Add-on modules from our Marketplace are billed separately starting at ₹4,000/year.' },
];

export default function Pricing() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center pt-8">
        <Badge variant="outline" className="mb-4">Pricing</Badge>
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          Choose the plan that fits your hotel. All plans include core HMS features with a 14-day free trial.
        </p>
      </section>

      {/* Plans */}
      <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.highlight ? 'border-primary shadow-lg scale-[1.02]' : ''}`}>
            {plan.badge && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{plan.badge}</Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="pt-3">
                <span className="text-4xl font-bold">₹{plan.price.toLocaleString()}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{plan.limits}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check className="size-4 text-emerald-500 shrink-0" />
                    ) : (
                      <X className="size-4 text-muted-foreground/40 shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground/60'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'} asChild>
                <Link to="/demo">Start Free Trial</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Annual Banner */}
      <section className="text-center p-6 rounded-xl bg-primary/5 max-w-3xl mx-auto">
        <Zap className="size-8 mx-auto text-primary mb-2" />
        <h3 className="text-xl font-bold">Save 16% with Annual Billing</h3>
        <p className="text-muted-foreground mt-1 text-sm">Pay annually and get 2 months free on any plan</p>
      </section>

      {/* Add-on Modules */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Add-on Modules</h2>
          <p className="text-muted-foreground mt-1">Extend your HMS with powerful add-ons from our Marketplace</p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">
          {[
            { name: 'WhatsApp AI Assistant', price: '₹6,000/yr' },
            { name: 'WhatsApp Booking Bot', price: '₹4,000/yr' },
            { name: 'Custom Hotel Website', price: '₹8,000/yr' },
            { name: 'OTA Channel Manager', price: '₹10,000/yr' },
            { name: 'Smart Pricing AI', price: '₹7,000/yr' },
            { name: 'Express Check-in', price: '₹5,000/yr' },
          ].map((mod) => (
            <Card key={mod.name}>
              <CardContent className="p-4 text-center">
                <p className="font-medium text-sm">{mod.name}</p>
                <p className="text-primary font-bold mt-1">{mod.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.q}>
              <CardContent className="p-4">
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 rounded-2xl bg-primary/5">
        <h2 className="text-2xl font-bold">Start Your 14-Day Free Trial</h2>
        <p className="text-muted-foreground mt-2">No credit card required. Full access to all features.</p>
        <Button size="lg" className="mt-6" asChild>
          <Link to="/demo">Get Started Free <ArrowRight className="size-4 ml-1" /></Link>
        </Button>
      </section>
    </div>
  );
}
