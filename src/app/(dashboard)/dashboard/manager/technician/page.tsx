"use client";
import AuthLoading from "@/components/auth/auth-loading";
import Heading from "@/components/layout/public/Heading";
import { useGetTechnicians, useUserProfile } from "@/hooks";
import { user } from "@/types";
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
import { Technician } from "@/types/manager.type";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import TechnicianForm from "@/components/form/AddTechnicianForm";

const TechnicianOfManager = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const { data: userProfile, isLoading: userProfileLoading } = useUserProfile();
  const user: user = userProfile.data;
  const {
    data: techniciansData,
    isLoading: techniciansLoading,
    refetch: techniciansRefetch,
  } = useGetTechnicians({
    managerId: user.distributorManager.id,
  });
  // console.log("technicians data", techniciansData);

  const isLoading = userProfileLoading || techniciansLoading;
  if (isLoading) {
    return <AuthLoading />;
  }
  return (
    <div className="space-y-4">
      <Heading text="My Created Technician" />

      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add Power Operator) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger render={<Button>Add Technician</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Create New Technician
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <TechnicianForm
                  setOpen={setOpen}
                  techniciansRefetch={techniciansRefetch}
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
              <TableHead>Skill</TableHead>
              <TableHead>Substation Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {techniciansData.data.map((info: Technician) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">{info.users.name}</TableCell>
                <TableCell>{info.users.email}</TableCell>
                <TableCell>{info.skill}</TableCell>
                <TableCell>{info.substation.station_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TechnicianOfManager;
