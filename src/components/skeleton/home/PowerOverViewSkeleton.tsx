import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PowerOverviewSkeleton() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-7">
        {/* 1st column: Power overview */}
        <div className="space-y-5 lg:col-span-2">
          <div className="space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full max-w-64" />
          </div>

          {/* Today's Power Demand */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <Skeleton className="size-11 shrink-0 rounded-xl" />

              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-36 max-w-full" />
                <Skeleton className="h-9 w-32 max-w-full" />
              </div>
            </CardHeader>
          </Card>

          {/* Generated Power */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <Skeleton className="size-11 shrink-0 rounded-xl" />

              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-28 max-w-full" />
                <Skeleton className="h-9 w-32 max-w-full" />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* 2nd column: Light image */}
        <div className="lg:col-span-3">
          <Skeleton className="aspect-4/3 w-full rounded-xl sm:aspect-5/4 lg:aspect-square" />
        </div>

        {/* 3rd column: Demand coverage */}
        <div className="space-y-5 lg:col-span-2">
          <Card>
            <CardContent className="space-y-5 p-5">
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-14" />
              </div>

              {/* Progress bar */}
              <Skeleton className="h-2.5 w-full rounded-full" />

              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 w-20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
