import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PowerOverviewSkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left: Distribution companies */}
        <div className="space-y-6 lg:col-span-3">
          {/* Heading skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-36" />

            <Skeleton className="h-8 w-full max-w-lg" />

            <Skeleton className="h-4 w-full max-w-xl" />
            <Skeleton className="h-4 w-3/4 max-w-md" />
          </div>

          {/* Company cards skeleton */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardContent className="flex h-full flex-col gap-3 p-4">
                  <Skeleton className="size-10 rounded-lg" />

                  <div className="w-full space-y-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right: Power statistics */}
        <div className="space-y-5 lg:col-span-2">
          {/* Heading skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-8 w-full max-w-xs" />
            <Skeleton className="h-4 w-full max-w-sm" />
          </div>

          {/* Demand card skeleton */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <Skeleton className="size-11 shrink-0 rounded-xl" />

              <div className="flex-1 space-y-3">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-8 w-28" />
              </div>
            </CardHeader>
          </Card>

          {/* Generated power card skeleton */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
              <Skeleton className="size-11 shrink-0 rounded-xl" />

              <div className="flex-1 space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-8 w-28" />
              </div>
            </CardHeader>
          </Card>

          {/* Demand coverage skeleton */}
          <Card>
            <CardContent className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-12" />
              </div>

              <Skeleton className="h-2 w-full rounded-full" />

              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </CardContent>
          </Card>

          {/* Footer note skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOverviewSkeleton;
