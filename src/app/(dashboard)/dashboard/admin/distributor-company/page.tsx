"use client";
import AuthLoading from "@/components/auth/auth-loading";
import AddPowerDistributorForm from "@/components/form/add-power-distributor-form";
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
  useDeleteDistributorCompany,
} from "@/hooks";
import { useIsMobile } from "@/hooks/use-mobile";
import { DistributorCompany } from "@/types";
import { FetchError } from "ofetch";
import React, { useState } from "react";
import Swal from "sweetalert2";

const DistributorCompanyOverview = () => {
  const {
    data: allDistributorForAdmin,
    isLoading: allDistributorLoadingForAdmin,
    refetch: DistributorRefetchForAdmin,
  } = useAllDistributorCompanyForAdmin();

  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const { mutate: deleteCompany, isPending: deletingCompany } =
    useDeleteDistributorCompany();

  const handleCompanyDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      deleteCompany(id, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Company Deleted Successfully!",
            type: "success",
          });
          await DistributorRefetchForAdmin();
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Company Delate Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    }
  };

  if (allDistributorLoadingForAdmin) {
    return <AuthLoading />;
  }
  return (
    <div className="space-y-4">
      <Heading text="Power Distributor Company" />
      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add distributor) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger render={<Button>Add Distributor Company</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Add Distributor Company
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <AddPowerDistributorForm
                  setOpen={setOpen}
                  DistributorRefetchForAdmin={DistributorRefetchForAdmin}
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
          <TableCaption>
            Bangladesh has six power distribution companies
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allDistributorForAdmin.data.map((info: DistributorCompany) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">
                  {info.company_name}
                </TableCell>

                <TableCell>
                  <Button
                    onClick={() => handleCompanyDelete(info.id)}
                    variant={"destructive"}
                    disabled={info.isDeleted}
                  >
                    Delete
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

export default DistributorCompanyOverview;
