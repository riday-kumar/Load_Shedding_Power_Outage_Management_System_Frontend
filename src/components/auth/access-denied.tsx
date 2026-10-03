import Link from "next/link";
import { ArrowLeft, Home, ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccessDenied() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-destructive/10">
          <ShieldX className="size-10 text-destructive" />
        </div>

        {/* Error Code */}
        <p className="text-7xl font-bold tracking-tight text-foreground sm:text-8xl">
          403
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Access Denied
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          You don&apos;t have permission to access this page. Please contact
          your administrator if you believe this is a mistake.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button nativeButton={true} variant="outline">
            <Link href="javascript:history.back()">
              <ArrowLeft />
              Go Back
            </Link>
          </Button>

          <Button nativeButton={true}>
            <Link href="/">
              <Home />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
