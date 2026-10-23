"use client";

import { Zap, Activity, Building2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";
import { useGetPowerStatusInfo } from "@/hooks";
import PowerOverviewSkeleton from "@/components/skeleton/home/PowerOverViewSkeleton";

const distributors = [
  {
    name: "BPDB",
    fullName: "Bangladesh Power Development Board",
  },
  {
    name: "BREB",
    fullName: "Bangladesh Rural Electrification Board",
  },
  {
    name: "DESCO",
    fullName: "Dhaka Electric Supply Company",
  },
  {
    name: "DPDC",
    fullName: "Dhaka Power Distribution Company",
  },
  {
    name: "WZPDCL",
    fullName: "West Zone Power Distribution Company",
  },
  {
    name: "NESCO",
    fullName: "Northern Electricity Supply Company",
  },
];

const companiesInfo = [
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

const Companies = () => {
  const today = new Date();
  const { data: powerStatus, isLoading: loadingPowerStatus } =
    useGetPowerStatusInfo({
      today: today.toISOString().split("T")[0],
    });
  const status = powerStatus?.data || [];
  // console.log("status", status);

  // Adjust these field names to match your actual API response.
  const todayDemand = status.reduce(
    (total: number, item: any) => total + Number(item.demand ?? 0),
    0,
  );

  //   console.log("today demand", todayDemand);

  const generatedPower = status.reduce(
    (total: number, item: any) => total + Number(item.generatedPowerMW ?? 0),
    0,
  );
  // console.log("generated power", generatedPower);

  const coverage =
    todayDemand > 0 ? Math.min((generatedPower / todayDemand) * 100, 100) : 0;

  const demandGap = Math.max(todayDemand - generatedPower, 0);

  if (loadingPowerStatus) {
    return <PowerOverviewSkeleton />;
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left: Distribution companies */}
        <div className="space-y-6 lg:col-span-3">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Power Distribution
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Bangladesh has 6 power distribution companies
            </h2>

            <p className="text-muted-foreground">
              Explore the major electricity distribution organizations serving
              Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {companiesInfo.map((company) => (
              <Card
                key={company.name}
                className="transition-colors hover:border-primary/50"
              >
                <CardContent className="flex h-full flex-col gap-3 p-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Building2 className="size-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold">{company.name}</h3>

                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {company.fullName}
                    </p>
                  </div>
                  <hr />
                  <div>
                    <p className="text-xs text-muted-foreground">Call Center</p>
                    <p className="mt-1 text-2xl font-bold tracking-wide">
                      {company.number}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Power statistics */}
        <div className="space-y-5 lg:col-span-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Today&apos;s Power Overview
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              National electricity demand and generation.
            </p>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <div className="flex size-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <Zap className="size-6" />
              </div>

              <div>
                <CardDescription>Today&apos;s Power Demand</CardDescription>
                <CardTitle className="text-3xl">
                  {todayDemand.toLocaleString()}{" "}
                  <span className="text-base font-medium text-muted-foreground">
                    MW
                  </span>
                </CardTitle>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Activity className="size-6" />
              </div>

              <div>
                <CardDescription>Generated Power</CardDescription>
                <CardTitle className="text-3xl">
                  {generatedPower.toLocaleString()}{" "}
                  <span className="text-base font-medium text-muted-foreground">
                    MW
                  </span>
                </CardTitle>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">Demand Coverage</h3>

                <span className="text-sm font-bold text-primary">
                  {coverage.toFixed(1)}%
                </span>
              </div>

              <Progress value={coverage} />

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Demand gap</span>

                <span className="font-semibold text-destructive">
                  {demandGap} MW
                </span>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground">
            Statistics are illustrative. Connect a reliable live data source
            before displaying these as today&apos;s official figures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
