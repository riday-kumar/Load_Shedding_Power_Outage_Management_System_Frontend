"use client";

import {
  BellRing,
  CheckCircle2,
  FileText,
  Gauge,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Wrench,
  Zap,
  CreditCard,
  ArrowRight,
  CalendarDays,
  FilePlus2,
  Cable,
  CircleDollarSign,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCreateSubscription } from "@/hooks";
import { toast } from "@/components/ui/toast";
import { FetchError } from "ofetch";
import { useRouter } from "next/navigation";

const subscriptionBenefits = [
  {
    title: "Complaint to the Authority",
    description:
      "Report power issues, high bills, and meter problems directly to the concerned authority.",
    icon: MessageSquareText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Request New Meter Installation",
    description:
      "Request a new electricity meter or replacement of a damaged meter.",
    icon: FilePlus2,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Meter Repair & Replacement",
    description:
      "Submit requests for faulty meters, inaccurate readings, or meter maintenance.",
    icon: Wrench,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "New Electricity Connection",
    description:
      "Request a new connection or report connection-related problems.",
    icon: Cable,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Bill & Voltage Complaints",
    description:
      "Report unusually high bills, low voltage, frequent outages, and other electricity issues.",
    icon: CircleDollarSign,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Real-time Notifications",
    description:
      "Receive updates about your complaints, service requests, and load-shedding schedules.",
    icon: BellRing,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Request History & Tracking",
    description:
      "Track request status and review previous complaints and authority responses.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Priority Support",
    description:
      "Get priority handling and faster responses where the authority's service policy allows.",
    icon: ShieldCheck,
    color: "bg-rose-100 text-rose-600",
  },
];

const premiumFeatures = [
  "Submit complaints to the authority",
  "Request meter installation or replacement",
  "Request new electricity connections",
  "Report billing and voltage problems",
  "Track complaints and service requests",
  "Receive request status notifications",
  "View complaint and request history",
  "Priority support",
];

export default function SubscriptionPage() {
  const router = useRouter();
  // ======================= Subscription Hook =======================
  const { mutate: createSubscription, isPending: isLoadingSubscription } =
    useCreateSubscription();
  const handleSubscribe = () => {
    createSubscription(undefined, {
      onSuccess: async () => {
        toast.add({
          title: "Success!",
          description: "Subscription Created Successfully. Please Pay Now",
          type: "success",
        });
        router.push("/dashboard/customer/subscription/all-subscription");
      },
      onError: (err: any) => {
        let errorMsg;
        if (err instanceof FetchError) {
          errorMsg = err?.data?.message;
        }
        toast.add({
          title: "Subscription Creation Failed",
          description: errorMsg || "Something Went Wrong. Please Try Again!",
          type: "error",
        });
      },
    });
  };

  return (
    <main className="min-h-screen bg-slate-50/80 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <section className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="absolute -right-16 -top-20 size-64 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                <Zap className="mr-1 size-3.5" />
                PREMIUM SUBSCRIPTION
              </Badge>

              <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get more control over your electricity services
              </h1>

              <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Report electricity problems, request new services, and stay
                informed about the progress of your requests — all in one place.
              </p>
            </div>

            <div className="hidden size-32 items-center justify-center rounded-3xl bg-blue-50 md:flex">
              <div className="flex size-24 items-center justify-center rounded-full bg-blue-100">
                <ShieldCheck className="size-14 text-blue-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="grid items-start gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          {/* Benefits */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Subscription Benefits
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Everything you need to manage your electricity service requests.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {subscriptionBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <Card
                    key={benefit.title}
                    className="border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <CardContent className="flex gap-3 p-4">
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${benefit.color}`}
                      >
                        <Icon className="size-5" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-slate-900">
                          {benefit.title}
                        </h3>

                        <p className="text-xs leading-5 text-slate-500">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Subscription card */}
          <Card className="overflow-hidden border-slate-200 bg-white shadow-lg lg:sticky lg:top-6">
            <div className="bg-linear-to-br from-blue-700 via-blue-800 to-indigo-950 p-6 text-white">
              <Badge className="mb-4 border border-white/20 bg-white/15 text-white hover:bg-white/15">
                <Zap className="mr-1 size-3.5" />
                Premium Plan
              </Badge>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-bold">Premium</h2>
                  <p className="mt-2 text-sm text-blue-100">
                    For individuals and households
                  </p>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/15">
                  <Gauge className="size-7" />
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">৳99</span>
                <span className="text-sm text-blue-100">/ month</span>
              </div>

              <p className="mt-2 text-xs text-blue-100">
                One-month subscription
              </p>
            </div>

            <CardContent className="space-y-5 p-5 sm:p-6">
              <div className="space-y-4">
                {premiumFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100">
                    <CalendarDays className="size-5 text-slate-600" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Subscription Duration
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      1 Year
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-pink-50">
                    <CreditCard className="size-5 text-pink-600" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Payment Method</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">
                      bKash
                    </p>
                  </div>
                </div>
              </div>

              <Button
                disabled={isLoadingSubscription}
                onClick={handleSubscribe}
                className="h-12 w-full bg-blue-600 text-sm font-semibold hover:bg-blue-700"
              >
                Subscribe Now
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <LockKeyhole className="size-3.5" />
                Secure payment through bKash
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Information note */}
        <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-blue-600" />

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Your requests, one place
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              Submit requests through the application and follow their progress.
              Actual service approval and completion depend on the concerned
              electricity authority.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
