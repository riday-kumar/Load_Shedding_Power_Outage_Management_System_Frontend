"use client";

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
import Heading from "@/components/layout/public/Heading";
import { Button } from "@/components/ui/button";
import { useSubstationOfManager } from "@/hooks";
import { Substation } from "@/types/manager.type";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import AuthLoading from "@/components/auth/auth-loading";
import SubstationForm from "@/components/form/substation-form";

const SubstationForManager = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [selectedSubstation, setSelectedSubstation] =
    useState<Substation | null>(null);

  const {
    data: managerSubstation,
    isLoading: managerSubstationLoading,
    refetch: managerSubstationRefetch,
  } = useSubstationOfManager();

  if (managerSubstationLoading) {
    return <AuthLoading />;
  }
  return (
    <div className="space-y-4">
      <Heading text="My Created Substation" />
      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add Authority) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger
              render={
                <Button onClick={() => setSelectedSubstation(null)}>
                  Add Substation
                </Button>
              }
            />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  {selectedSubstation
                    ? "Update Substation Info"
                    : "Create New Substation"}
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <SubstationForm
                  setOpen={setOpen}
                  managerSubstationRefetch={managerSubstationRefetch}
                  substation={selectedSubstation}
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
              <TableHead>Distributor Company</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {managerSubstation.data.map((info: Substation) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">
                  {info.station_name}
                </TableCell>
                <TableCell>{info.distributor.company_name}</TableCell>

                <TableCell>
                  <Button
                    onClick={() => {
                      setSelectedSubstation(info);
                      setOpen(true);
                    }}
                    variant={"default"}
                  >
                    Edit
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

export default SubstationForManager;
