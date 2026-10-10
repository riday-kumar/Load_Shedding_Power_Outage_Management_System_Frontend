import Link from "next/link";
import {
  MapPin,
  Radio,
  BellRing,
  CalendarClock,
  ArrowRight,
  Zap,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Select Your Area",
    description:
      "Choose your area feeder to get power updates for your location.",
    icon: MapPin,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    number: "02",
    title: "Get Power Updates",
    description:
      "View the latest load-shedding schedules and power status for your selected feeder.",
    icon: Radio,
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    number: "03",
    title: "Receive Notifications",
    description:
      "Get notified about scheduled outages, important announcements and power updates.",
    icon: BellRing,
    color:
      "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  },
  {
    number: "04",
    title: "Plan Your Day",
    description:
      "Stay informed about your area's power schedule and plan your daily activities ahead.",
    icon: CalendarClock,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
];

const benefits = [
  {
    title: "Real-time Updates",
    description: "Stay updated with available power information.",
    icon: Zap,
  },
  {
    title: "Reliable Information",
    description: "Access updates published by the authority.",
    icon: ShieldCheck,
  },
  {
    title: "Timely Notifications",
    description: "Get important alerts for your selected feeder.",
    icon: BellRing,
  },
  {
    title: "Better Planning",
    description: "Prepare for scheduled power interruptions.",
    icon: Users,
  },
];

const HowPowerSyncWorks = () => {
  return (
    <section className="overflow-hidden bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            How PowerSync Works
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Stay Informed, Stay Ahead
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            PowerSync helps you stay informed about electricity updates in your
            area. Select your feeder and get relevant power schedules and
            notifications in one place.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.number}
                className="group relative border-border/70 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`flex size-12 items-center justify-center rounded-2xl ${step.color}`}
                    >
                      <Icon className="size-6" />
                    </div>

                    <span className="text-3xl font-black text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-primary/30 transition-all group-hover:w-20 group-hover:bg-primary" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Smartphone className="size-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Ready to track your area's power status?
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Choose your feeder and stay informed about electricity
                  updates.
                </p>
              </div>
            </div>

            <Button
              nativeButton={false}
              render={
                <Link href="/dashboard/profile">
                  Find My Feeder
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              }
              size="lg"
              className="shrink-0"
            ></Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div key={benefit.title} className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>

                <div>
                  <h4 className="font-semibold">{benefit.title}</h4>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowPowerSyncWorks;
