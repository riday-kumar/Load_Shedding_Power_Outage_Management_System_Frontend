"use client";
import AuthLoading from "@/components/auth/auth-loading";
import DistributorManagerCreationForm from "@/components/form/AddDistributorManagerForm";
import Heading from "@/components/layout/public/Heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/toast";
import {
  useAllDistributorCompanyForAdmin,
  useAllUsersForAdmin,
  useDeleteDistributorCompany,
  useUpdateUserStatus,
  useUserProfile,
} from "@/hooks";
import { useGetAllLoadShedding } from "@/hooks/power-operator.hook";
import { useIsMobile } from "@/hooks/use-mobile";
import { DistributorCompany, user, UserRole } from "@/types";
import { LoadShedding } from "@/types/power-operator.type";
import { FetchError } from "ofetch";
import React, { useState } from "react";
import Swal from "sweetalert2";

export const formatBdTimeOnly = (date: string | Date) => {
  return new Date(date).toLocaleTimeString("en-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const AllPublishedLoadShedding = () => {
  // ================ user profile ==============
  const { data: userProfile, isLoading: userProfileLoading } = useUserProfile();
  const operator: user = userProfile?.data;
  const userOperatorId = operator.powerOperators.id;

  // =============== get all load shedding hook ===========
  const { data: loadSheddingData, isLoading: loadSheddingDataLoading } =
    useGetAllLoadShedding({ operator: userOperatorId, state: "PUBLISHED" });

  //   console.log("approved loadshedding", loadSheddingData);

  const loading = userProfileLoading || loadSheddingDataLoading;
  if (loading) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="Published Load Shedding Schedule" />
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {loadSheddingData.data.map((info: LoadShedding) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">
                  {info.date.split("T")[0]}
                </TableCell>
                <TableCell>{formatBdTimeOnly(info.start_time)}</TableCell>
                <TableCell>{formatBdTimeOnly(info.end_time)}</TableCell>
                <TableCell>{info.plannedLoadShedding}</TableCell>
                <TableCell>{info.feeders.feeder_name}</TableCell>
                <TableCell>{info.feeders.area}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllPublishedLoadShedding;
