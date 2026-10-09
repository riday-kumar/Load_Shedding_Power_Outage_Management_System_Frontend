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
import {
  useApproveSchedule,
  useLoadSheddingForManager,
  useRejectSchedule,
} from "@/hooks";
import { Button } from "@/components/ui/button";
import { LoadShedding } from "@/types/power-operator.type";
import Heading from "@/components/layout/public/Heading";
import { toast } from "@/components/ui/toast";

export const formatBdTimeOnly = (date: string | Date) => {
  return new Date(date).toLocaleTimeString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const PendingLoadSheddingForManager = () => {
  const { data: pendingLoadShedding, isLoading: pendingLoadSheddingLoading } =
    useLoadSheddingForManager();

  console.log("pending load shed", pendingLoadShedding);

  // ====================== approve schedule hook =============
  const { mutate: approveScheduleMutation, isPending: approveScheduleLoading } =
    useApproveSchedule();

  // ====================== reject schedule hook =============
  const { mutate: rejectScheduleMutation, isPending: rejectScheduleLoading } =
    useRejectSchedule();

  const handleScheduleApprove = (id: string) => {
    approveScheduleMutation(id, {
      onSuccess: () => {
        toast.add({
          title: "Schedule Approved",
          description: "Schedule Approved Successfully",
          type: "success",
        });
      },
      onError: () => {
        toast.add({
          title: "Schedule Approval Failed",
          description: "Something Went Wrong. Please Try Again!",
          type: "error",
        });
      },
    });
  };
  const handleScheduleReject = (id: string) => {
    rejectScheduleMutation(id, {
      onSuccess: () => {
        toast.add({
          title: "Schedule Rejected",
          description: "Schedule Rejected Successfully",
          type: "success",
        });
      },
      onError: () => {
        toast.add({
          title: "Schedule Rejection Failed",
          description: "Something Went Wrong. Please Try Again!",
          type: "error",
        });
      },
    });
  };

  if (pendingLoadSheddingLoading) {
    return <AuthLoading />;
  }
  return (
    <div className="space-y-4">
      <Heading text="Pending Load Shedding Schedule" />
      <div>
        {/* =============== table ============= */}
        <Table>
          <TableCaption>
            Published Schedule will send to the customers
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Planned Load Shedding(MW)</TableHead>
              <TableHead>Feeder Name</TableHead>
              <TableHead>Feeder Area</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingLoadShedding.data.map((info: LoadShedding) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">
                  {info.date.split("T")[0]}
                </TableCell>
                <TableCell>{formatBdTimeOnly(info.start_time)}</TableCell>
                <TableCell>{formatBdTimeOnly(info.end_time)}</TableCell>
                <TableCell>{info.plannedLoadShedding}</TableCell>
                <TableCell>{info.feeders.feeder_name}</TableCell>
                <TableCell>{info.feeders.area}</TableCell>
                <TableCell>
                  <Button
                    disabled={approveScheduleLoading}
                    onClick={() => handleScheduleApprove(info.id)}
                  >
                    {approveScheduleLoading ? "Approving..." : "Approve"}
                  </Button>
                  <Button
                    disabled={rejectScheduleLoading}
                    onClick={() => handleScheduleReject(info.id)}
                  >
                    {rejectScheduleLoading ? "Rejecting..." : "Reject"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PendingLoadSheddingForManager;
