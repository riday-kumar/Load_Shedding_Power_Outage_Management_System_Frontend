"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Heading from "@/components/layout/public/Heading";
import { Button } from "@/components/ui/button";
import { useGetPowerStatusInfo } from "@/hooks";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import AuthLoading from "@/components/auth/auth-loading";
import { PowerStatusInfo } from "@/types";
import PowerStatusForm from "@/components/form/PowerStatusForm";

const NationalPowerAuthority = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  // ===================== get power authority hook =====================
  const {
    data: powerStatusInfo,
    isLoading: powerStatusInfoLoading,
    refetch: powerStatusInfoRefetch,
  } = useGetPowerStatusInfo({});

  if (powerStatusInfoLoading) {
    return <AuthLoading />;
  }
  return (
    <div className="space-y-4">
      <Heading text="All Power Status" />
      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add Authority) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger render={<Button>Today's Power Status</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Create Today's Power Status
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <PowerStatusForm
                  setOpen={setOpen}
                  powerStatusInfoRefetch={powerStatusInfoRefetch}
                />
              </div>
              <DrawerFooter>
                <DrawerClose
                  render={<Button variant="outline">Cancel</Button>}
                />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* =============== table ============= */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Demand (MW)</TableHead>
              <TableHead>Generated Power (MW)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {powerStatusInfo.data.map((info: PowerStatusInfo) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">
                  {info.date.split("T")[0]}
                </TableCell>
                <TableCell>{info.demand}</TableCell>
                <TableCell>{info.generatedPowerMW}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NationalPowerAuthority;
