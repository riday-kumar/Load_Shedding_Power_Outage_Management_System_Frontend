import { PhoneCall, Headset, Zap, ArrowUpRight, Clock } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const powerAuthority = {
  name: "Power Division",
  subtitle: "Central Electricity Helpline",
  number: "16999",
};

const companies = [
  {
    name: "BPDB",
    number: "16200",
    bg: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/30",
    iconBg: "bg-teal-700 dark:bg-teal-600",
    iconColor: "text-teal-800 dark:text-teal-300",
    border: "border-teal-200 dark:border-teal-800",
    accent: "bg-teal-500",
    softBg: "bg-teal-100 dark:bg-teal-900/60",
  },
  {
    name: "BREB",
    number: "16899",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/30",
    iconBg: "bg-green-600 dark:bg-green-500",
    iconColor: "text-green-800 dark:text-green-300",
    border: "border-green-200 dark:border-green-800",
    accent: "bg-green-500",
    softBg: "bg-green-100 dark:bg-green-900/60",
  },
  {
    name: "DESCO",
    number: "16120",
    bg: "bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/30",
    iconBg: "bg-indigo-600 dark:bg-indigo-500",
    iconColor: "text-indigo-800 dark:text-indigo-300",
    border: "border-indigo-200 dark:border-indigo-800",
    accent: "bg-indigo-500",
    softBg: "bg-indigo-100 dark:bg-indigo-900/60",
  },
  {
    name: "DPDC",
    number: "16116",
    bg: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/30",
    iconBg: "bg-orange-500 dark:bg-orange-500",
    iconColor: "text-orange-800 dark:text-orange-300",
    border: "border-orange-200 dark:border-orange-800",
    accent: "bg-orange-500",
    softBg: "bg-orange-100 dark:bg-orange-900/60",
  },
  {
    name: "WZPDCL",
    number: "16117",
    bg: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/30",
    iconBg: "bg-pink-600 dark:bg-pink-500",
    iconColor: "text-pink-800 dark:text-pink-300",
    border: "border-pink-200 dark:border-pink-800",
    accent: "bg-pink-500",
    softBg: "bg-pink-100 dark:bg-pink-900/60",
  },
  {
    name: "NESCO",
    number: "16603",
    bg: "bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-950/50 dark:to-sky-950/30",
    iconBg: "bg-cyan-700 dark:bg-cyan-600",
    iconColor: "text-cyan-800 dark:text-cyan-300",
    border: "border-cyan-200 dark:border-cyan-800",
    accent: "bg-cyan-500",
    softBg: "bg-cyan-100 dark:bg-cyan-900/60",
  },
];

const CallCenter = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Section heading */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <Badge variant="outline" className="mb-3 gap-2 px-3 py-1">
          <Headset className="size-4" />
          Customer Support
        </Badge>

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Call Center & Emergency Helplines
        </h2>

        <p className="mt-3 text-muted-foreground">
          Need help with electricity services or power outages? Contact the
          relevant helpline for assistance.
        </p>
      </div>

      {/* Main authority helpline */}
      <Card className="mb-8 overflow-hidden border-0 bg-primary text-primary-foreground shadow-md">
        <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Zap className="size-7" />
            </div>

            <div>
              <p className="text-sm text-primary-foreground/80">
                Central Electricity Helpline
              </p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                Power Division
              </h3>
              <p className="mt-1 text-sm text-primary-foreground/80">
                For electricity-related complaints and assistance
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div>
              <p className="text-xs text-primary-foreground/80">
                Call Center Number
              </p>
              <p className="text-3xl font-bold tracking-wide">
                {powerAuthority.number}
              </p>
            </div>

            <a
              href={`tel:${powerAuthority.number}`}
              aria-label={`Call Power Division at ${powerAuthority.number}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
            >
              <PhoneCall className="size-4" />
              Call Now
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Distribution company helplines */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-bold">Distribution Company Helplines</h3>

        <p className="text-sm text-muted-foreground">6 electricity providers</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <Card
            key={company.name}
            className={`group relative overflow-hidden rounded-2xl border ${company.border} ${company.bg} shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
          >
            {/* Decorative background */}
            <div
              className={`pointer-events-none absolute -right-10 -top-10 size-36 rounded-full ${company.softBg} opacity-70 transition-transform duration-500 group-hover:scale-125`}
            />

            <CardContent className="relative p-5">
              {/* Company identity */}
              <div className="flex items-start justify-between">
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl ${company.iconBg} text-white shadow-md transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105`}
                >
                  <Zap className="size-7" />
                </div>

                <span
                  className={`rounded-lg ${company.softBg} px-3 py-1.5 text-sm font-bold ${company.iconColor}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${company.iconColor}`}
                >
                  Distribution
                </p>

                <h3 className="mt-1 text-3xl font-extrabold tracking-tight">
                  {company.name}
                </h3>

                <div
                  className={`mt-3 h-1 w-12 rounded-full ${company.accent} transition-all duration-300 group-hover:w-20`}
                />
              </div>

              {/* Call center panel */}
              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/70 bg-background/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/10">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full ${company.softBg} ${company.iconColor}`}
                  >
                    <PhoneCall className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Call Center</p>
                    <p className="mt-1 text-2xl font-extrabold tracking-tight">
                      {company.number}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${company.number}`}
                  aria-label={`Call ${company.name} at ${company.number}`}
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${company.iconBg} text-white shadow-md transition-all duration-200 hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                >
                  <PhoneCall className="size-5" />
                </a>
              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 ${company.accent} w-0 transition-all duration-300 group-hover:w-full`}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-muted-foreground">
        Contact your distribution company for local outages, electricity
        complaints, and customer service.
      </p>
    </section>
  );
};

export default CallCenter;
