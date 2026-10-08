"use client";
import AuthLoading from "@/components/auth/auth-loading";
import Heading from "@/components/layout/public/Heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePowerOperatorOfManager } from "@/hooks";
import { PowerOperator, Substation } from "@/types/manager.type";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import PowerOperatorForm from "@/components/form/PowerOperatorForm";

const PowerOperatorForManager = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const {
    data: managerPowerOperator,
    isLoading: managerPowerOperatorLoading,
    refetch: managerPowerOperatorRefetch,
  } = usePowerOperatorOfManager();

  if (managerPowerOperatorLoading) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="My Created Power Operator" />

      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add Power Operator) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger render={<Button>Add Power Operator</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Create New Power Operator
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <PowerOperatorForm
                  setOpen={setOpen}
                  managerPowerOperatorRefetch={managerPowerOperatorRefetch}
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
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Substation Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {managerPowerOperator.data.map((info: PowerOperator) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">{info.user.name}</TableCell>
                <TableCell>{info.user.email}</TableCell>
                <TableCell>{info.user.phone ?? "--"}</TableCell>
                <TableCell>{info.user.address}</TableCell>
                <TableCell>{info.substation.station_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PowerOperatorForManager;
