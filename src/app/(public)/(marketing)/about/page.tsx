import Link from "next/link";
import {
  Zap,
  CalendarClock,
  BellRing,
  MessageSquareWarning,
  ShieldCheck,
  ArrowRight,
  Target,
  Eye,
  Users,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: CalendarClock,
    title: "Smart Outage Scheduling",
    description:
      "View planned load shedding schedules and prepare for upcoming power interruptions.",
  },
  {
    icon: BellRing,
    title: "Timely Notifications",
    description:
      "Stay informed about planned outages, unexpected interruptions, and service updates.",
  },
  {
    icon: MessageSquareWarning,
    title: "Citizen Complaints",
    description:
      "Report electricity problems and submit service requests through a centralized platform.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Management",
    description:
      "Help power authorities and service teams manage electricity services more efficiently.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-green-primary/10 blur-3xl" />

        <div className="container relative mx-auto grid gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <Badge className="border-yellow-400/30 bg-green-primary/10 text-green-primary">
              About Our Platform
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building a Smarter,
              <span className="text-green-primary"> Reliable Power Future</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              We connect electricity consumers, power authorities, and service
              teams through a unified platform designed to make power management
              more transparent and accessible.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={
                  <Link href="/load-shedding">
                    Explore Schedules
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                }
                className="bg-green-primary text-white hover:bg-green-primary"
              ></Button>

              <Button
                nativeButton={false}
                render={<Link href="/contact">Contact Us</Link>}
                variant="outline"
                className="border-slate-600 bg-transparent text-white hover:bg-white/10 hover:text-white"
              ></Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <img
                src="/images/power-grid.jpg"
                alt="Electricity transmission and power infrastructure"
                className="h-72 w-full rounded-xl object-cover sm:h-96"
              />
            </div>

            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-xl border bg-background p-4 text-foreground shadow-xl">
              <div className="rounded-lg bg-green-primary p-3">
                <Zap className="size-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Smarter Power</p>
                <p className="text-sm text-muted-foreground">
                  Better information for everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <Badge variant="outline">Who We Are</Badge>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Powering Communities Through Technology
          </h2>

          <p className="leading-8 text-muted-foreground">
            Our Load Shedding and Power Management System is designed to improve
            communication between electricity consumers and power service
            providers. From outage schedules to service complaints, we bring
            essential power-related information and services into one convenient
            platform.
          </p>
        </div>
      </section>

      <Separator />

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-0 bg-muted/50 shadow-none">
            <CardContent className="space-y-4 p-7 md:p-9">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-primary/20">
                <Target className="size-6 text-green-primary-600" />
              </div>

              <h3 className="text-2xl font-semibold">Our Mission</h3>

              <p className="leading-7 text-muted-foreground">
                To make electricity services easier to access by providing clear
                outage information, timely updates, and a structured way to
                report power-related problems.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-muted/50 shadow-none">
            <CardContent className="space-y-4 p-7 md:p-9">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10">
                <Eye className="size-6 text-blue-600" />
              </div>

              <h3 className="text-2xl font-semibold">Our Vision</h3>

              <p className="leading-7 text-muted-foreground">
                To contribute to a smarter electricity ecosystem where consumers
                stay informed and power authorities can coordinate services more
                effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto space-y-12 px-4">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Badge variant="outline">What We Offer</Badge>

            <h2 className="text-3xl font-bold md:text-4xl">
              Everything in One Place
            </h2>

            <p className="leading-7 text-muted-foreground">
              Useful tools designed to simplify everyday electricity management
              for consumers and service providers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="space-y-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-green-primary/15 transition-colors group-hover:bg-green-primary/25">
                      <Icon className="size-6 text-green-primary-600" />
                    </div>

                    <h3 className="text-lg font-semibold">{feature.title}</h3>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Badge variant="outline">Built for Everyone</Badge>

            <h2 className="text-3xl font-bold md:text-4xl">
              Connecting People and Power Services
            </h2>

            <p className="leading-7 text-muted-foreground">
              A shared platform can help consumers access information while
              giving authorized teams a more organized way to coordinate
              schedules, handle complaints, and maintain service records.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Users,
                title: "Consumers",
                description: "Check schedules and submit service requests.",
              },
              {
                icon: Activity,
                title: "Power Authorities",
                description:
                  "Coordinate power operations and service information.",
              },
              {
                icon: ShieldCheck,
                title: "Service Teams",
                description: "Manage assigned issues and repair workflows.",
              },
              {
                icon: BellRing,
                title: "Power Operators",
                description: "Publish schedules and share important updates.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-xl border bg-card p-5">
                  <Icon className="mb-3 size-6 text-green-primary-600" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl bg-slate-950 px-6 py-12 text-center text-white sm:px-12 md:py-16">
          <Zap className="mx-auto mb-5 size-10 text-green-primary" />

          <h2 className="text-3xl font-bold md:text-4xl">
            Stay Informed. Stay Prepared.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Access power schedules, stay updated on outages, and connect with
            electricity service providers.
          </p>

          <Button
            nativeButton={false}
            render={
              <Link href="/load-shedding">
                View Load Shedding Schedules
                <ArrowRight className="ml-2 size-4" />
              </Link>
            }
            className="mt-7 bg-green-primary text-white hover:bg-green-primary"
          ></Button>
        </div>
      </section>
    </main>
  );
}
