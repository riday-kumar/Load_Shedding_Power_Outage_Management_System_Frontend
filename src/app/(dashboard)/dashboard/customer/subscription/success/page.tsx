import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardContent className="flex flex-col items-center px-6 py-10 text-center">
          <div className="mb-5 flex size-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="size-12 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Payment Successful!
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Your premium subscription has been activated successfully. Thank you
            for subscribing!
          </p>

          <div className="mt-6 w-full rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Amount Paid</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">৳100</p>
            <p className="mt-2 text-sm font-medium text-green-600">
              Premium Plan · 1 Year
            </p>
          </div>

          <Button
            nativeButton={false}
            render={
              <Link href="/dashboard/customer">
                Go to Dashboard
                <ArrowRight className="ml-2 size-4" />
              </Link>
            }
            className="mt-6 h-11 w-full"
          ></Button>

          <p className="mt-4 text-xs text-slate-400">
            Thank you for choosing LoadShedding!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
