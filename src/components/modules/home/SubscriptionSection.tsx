"use client";

import Link from "next/link";
import {
  MessageSquare,
  Gauge,
  Plug,
  ReceiptText,
  ClipboardCheck,
  BellRing,
  History,
  Headset,
  CheckCircle2,
  CalendarCheck,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const benefits = [
  {
    icon: MessageSquare,
    title: "Submit Complaints",
    description: "Submit electricity-related complaints to the authority.",
  },
  {
    icon: Gauge,
    title: "Meter Services",
    description: "Request meter installation or replacement.",
  },
  {
    icon: Plug,
    title: "New Electricity Connection",
    description: "Request a new electricity connection for your property.",
  },
  {
    icon: ReceiptText,
    title: "Billing & Voltage Issues",
    description: "Report billing problems and voltage fluctuations.",
  },
  {
    icon: ClipboardCheck,
    title: "Track Service Requests",
    description: "Track the progress of complaints and requests.",
  },
  {
    icon: BellRing,
    title: "Status Notifications",
    description: "Receive updates when your request status changes.",
  },
  {
    icon: History,
    title: "Request History",
    description: "View your previous complaints and service requests.",
  },
  {
    icon: Headset,
    title: "Priority Support",
    description: "Get priority assistance for eligible service requests.",
  },
];

const SubscriptionSection = () => {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 gap-2 px-3 py-1">
            <Zap className="size-4 text-primary" />
            PowerSync Subscription
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Better Electricity Services,
            <span className="text-primary"> All Year Long</span>
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Get access to complaint management, electricity service requests,
            status notifications and more with one affordable yearly
            subscription.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-5">
          {/* Benefits */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Everything You Need</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your subscription includes these benefits:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex gap-3 rounded-xl border bg-background p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm leading-5 text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing card */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden border-primary/30 shadow-lg">
              <div className="h-2 bg-primary" />

              <CardHeader className="pb-4 pt-7">
                <Badge className="mb-2 w-fit">Yearly Plan</Badge>

                <CardTitle className="text-2xl">PowerSync Premium</CardTitle>

                <CardDescription>
                  More control over your electricity services.
                </CardDescription>

                <div className="flex items-baseline gap-2 pt-4">
                  <span className="text-5xl font-bold tracking-tight">
                    ৳100
                  </span>
                  <span className="text-muted-foreground">/ year</span>
                </div>

                <p className="text-sm text-muted-foreground">
                  Just ৳8.33 per month on average
                </p>
              </CardHeader>

              <CardContent className="space-y-5">
                <Separator />

                <div className="flex items-start gap-3">
                  <CalendarCheck className="mt-0.5 size-5 shrink-0 text-primary" />

                  <div>
                    <p className="font-semibold">1 Year Subscription</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Access the included premium features for 365 days after
                      activation.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "All 8 subscription benefits",
                    "Complaint and request tracking",
                    "Request status notifications",
                    "Priority support",
                  ].map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Total payment
                  </span>
                  <span className="text-xl font-bold">৳100</span>
                </div>

                <Button
                  nativeButton={false}
                  render={
                    <Link href="/subscription">
                      <Zap className="mr-2 size-4" />
                      Subscribe Now · ৳100
                      <ArrowRight className="ml-auto size-4" />
                    </Link>
                  }
                  size="lg"
                  className="w-full"
                ></Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4" />
                  Secure payment processing
                </div>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  Subscription fees and benefits are subject to the service
                  terms displayed at checkout.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
