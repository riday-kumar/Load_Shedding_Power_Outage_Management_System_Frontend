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
import { useAllFeeders, useSubstationOfManager, useUserProfile } from "@/hooks";
import { FeederInfo } from "@/types/manager.type";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import AuthLoading from "@/components/auth/auth-loading";
import SubstationForm from "@/components/form/substation-form";
import { user } from "@/types";
import FeederForm from "@/components/form/FeederForm";
import CustomPagination from "@/components/ui/table-pagination";

const Feeders = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [selectedFeeder, setSelectedFeeder] = useState<FeederInfo | null>(null);
  const [page, setPage] = useState(1);

  //    ================== profile get hook ===================
  const { data: userProfileData, isLoading: userProfileLoading } =
    useUserProfile();

  const userData: user = userProfileData.data;

  //   ====================== all feeders get hook ============
  const {
    data: feederData,
    isLoading: feederDataLoading,
    refetch: feederRefetch,
  } = useAllFeeders({
    creator: userData.distributorManager.id,
    page: page.toString(),
  });

  const currentPage = feederData?.data?.meta?.page || 1;
  const totalPages = feederData?.data?.meta?.totalPage;
  //   console.log("feeder data", feederData);

  if (userProfileLoading || feederDataLoading) {
    return <AuthLoading />;
  }
  return (
    <div className="space-y-4">
      <Heading text="My Created Feeders" />
      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add Feeder) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger
              render={
                <Button onClick={() => setSelectedFeeder(null)}>
                  Add Feeder
                </Button>
              }
            />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  {selectedFeeder ? "Update Feeder Info" : "Create New Feeder"}
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <FeederForm
                  setOpen={setOpen}
                  feederRefetch={feederRefetch}
                  feeder={selectedFeeder}
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
              <TableHead>Feeder Name</TableHead>
              <TableHead>Division</TableHead>
              <TableHead>District</TableHead>
              <TableHead>Area</TableHead>
              <TableHead>Substation Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feederData.data.data.map((info: FeederInfo) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">
                  {info.feeder_name}
                </TableCell>
                <TableCell>{info.division || "--"}</TableCell>
                <TableCell>{info.district || "--"}</TableCell>
                <TableCell>{info.area}</TableCell>
                <TableCell>{info.substation.station_name}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      setSelectedFeeder(info);
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
        {/* =============== pagination ========= */}
        <CustomPagination
          page={currentPage}
          totalPages={totalPages}
          handlePageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Feeders;
