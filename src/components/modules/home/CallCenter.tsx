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
    fullName: "Bangladesh Power Development Board",
    number: "16200",
    bg: "bg-sky-50 dark:bg-sky-950/30",
    iconBg: "bg-sky-100 dark:bg-sky-900",
    iconColor: "text-sky-700 dark:text-sky-300",
    border: "border-sky-200 dark:border-sky-900",
  },
  {
    name: "BREB",
    fullName: "Bangladesh Rural Electrification Board",
    number: "16899",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconBg: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-900",
  },
  {
    name: "DESCO",
    fullName: "Dhaka Electric Supply Company",
    number: "16120",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    iconBg: "bg-violet-100 dark:bg-violet-900",
    iconColor: "text-violet-700 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-900",
  },
  {
    name: "DPDC",
    fullName: "Dhaka Power Distribution Company",
    number: "16116",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    iconBg: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-900",
  },
  {
    name: "WZPDCL",
    fullName: "West Zone Power Distribution Company",
    number: "16117",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    iconBg: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-900",
  },
  {
    name: "NESCO",
    fullName: "Northern Electricity Supply Company",
    number: "16603",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    iconBg: "bg-teal-100 dark:bg-teal-900",
    iconColor: "text-teal-700 dark:text-teal-300",
    border: "border-teal-200 dark:border-teal-900",
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Card
            key={company.name}
            className={`overflow-hidden border ${company.border} ${company.bg} transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${company.iconBg} ${company.iconColor}`}
                >
                  <Zap className="size-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="font-bold">{company.name}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {company.fullName}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between gap-3 border-t border-current/10 pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">Call Center</p>
                  <p className="mt-1 text-2xl font-bold tracking-wide">
                    {company.number}
                  </p>
                </div>

                <a
                  href={`tel:${company.number}`}
                  aria-label={`Call ${company.name} at ${company.number}`}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-lg border border-current/10 bg-white/70 px-3 py-2 text-sm font-semibold ${company.iconColor} transition-colors hover:bg-white dark:bg-black/20 dark:hover:bg-black/40`}
                >
                  <PhoneCall className="size-4" />
                  Call
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
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
