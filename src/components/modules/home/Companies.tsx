"use client";

import { Zap, Activity } from "lucide-react";

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

const PowerOverview = () => {
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
      <div className="grid gap-8 lg:grid-cols-7 items-center">
        {/* 1st column */}
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
        </div>

        {/* 2nd column */}
        <div className="space-y-5 lg:col-span-3">
          <img src="light.png" alt="" />
        </div>

        {/* 3rd column */}
        <div className="space-y-5 lg:col-span-2">
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
        </div>
      </div>
    </section>
  );
};

export default PowerOverview;
