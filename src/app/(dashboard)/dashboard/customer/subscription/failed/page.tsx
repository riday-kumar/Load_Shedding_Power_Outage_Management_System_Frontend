import Link from "next/link";
import { CircleX, RefreshCw, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentFailedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardContent className="flex flex-col items-center px-6 py-10 text-center">
          {/* Failure Icon */}
          <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-red-100">
            <CircleX className="size-12 text-red-600" />
          </div>

          {/* Title & Description */}
          <h1 className="text-2xl font-bold text-slate-900">Payment Failed!</h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Unfortunately, your payment could not be completed. Please try again
            to activate your premium subscription.
          </p>

          {/* Payment Status */}
          <div className="mt-6 w-full rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="text-sm text-slate-500">Payment Status</p>
            <p className="mt-1 text-lg font-semibold text-red-600">Failed</p>
            <p className="mt-2 text-xs text-slate-500">
              Your premium subscription has not been activated.
            </p>
          </div>

          {/* Actions */}
          <Button
            nativeButton={false}
            render={
              <Link href="/dashboard/customer/subscription">
                <RefreshCw className="mr-2 size-4" />
                Try Again
              </Link>
            }
            className="mt-6 h-11 w-full"
          ></Button>

          <Button
            nativeButton={false}
            render={
              <Link href="/dashboard/customer">
                <ArrowLeft className="mr-2 size-4" />
                Back to Dashboard
              </Link>
            }
            variant="outline"
            className="mt-3 h-11 w-full"
          ></Button>

          <p className="mt-5 text-xs text-slate-400">
            If money was deducted, please check your bKash transaction before
            making another payment.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
