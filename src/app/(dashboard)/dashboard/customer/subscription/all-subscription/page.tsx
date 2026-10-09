"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AuthLoading from "@/components/auth/auth-loading";
import { useGetSubscriptions, usePayForSubscription } from "@/hooks";
import { Subscription } from "@/types";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/toast";

const MyCreatedSubscription = () => {
  const { data: getSubscriptions, isLoading: isLoadingSubscriptions } =
    useGetSubscriptions();

  console.log("getSubscriptions", getSubscriptions);

  const { mutate: payForSubscription, isPending: paymentLoading } =
    usePayForSubscription();

  const handlePay = (subscriptionId: string) => {
    payForSubscription(
      { subscriptionId },
      {
        onSuccess: (res) => {
          redirect(res.data.paymentUrl);
        },
        onError: (err) => {
          toast.add({
            title: "Payment Failed",
            description: err.message,
          });
        },
      },
    );
  };

  if (isLoadingSubscriptions) {
    return <AuthLoading />;
  }

  return (
    <div>
      {/* =============== table ============= */}
      <Table>
        <TableCaption>
          Bangladesh has six power distribution companies
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Created At</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start At</TableHead>
            <TableHead>Expire At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getSubscriptions?.data.map((info: Subscription) => (
            <TableRow key={info.id}>
              <TableCell className="font-medium">
                {info.createdAt?.split("T")[0]}
              </TableCell>
              <TableCell className="font-medium">{info.plan}</TableCell>
              <TableCell className="font-medium">{info.status}</TableCell>
              <TableCell className="font-medium">
                {info.startedAt?.split("T")[0] ?? "--"}
              </TableCell>
              <TableCell className="font-medium">
                {info.expiresAt?.split("T")[0] ?? "--"}
              </TableCell>

              <TableCell>
                <Button
                  onClick={() => handlePay(info.id)}
                  disabled={paymentLoading}
                >
                  {paymentLoading ? "Processing" : "Pay Now"}
                </Button>
                {/* <Button>Pay Now</Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyCreatedSubscription;
