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
} from "@/hooks";
import { useIsMobile } from "@/hooks/use-mobile";
import { DistributorCompany, user, UserRole } from "@/types";
import { FetchError } from "ofetch";
import React, { useState } from "react";
import Swal from "sweetalert2";

const DistributorManagerForAdmin = () => {
  const role: UserRole = "DISTRIBUTOR_MANAGER";
  const {
    data: allManagersDataForAdmin,
    isLoading: allManagersDataLoadingForAdmin,
    refetch: allManagersDataForAdminRefetch,
  } = useAllUsersForAdmin(role);

  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const { mutate: changeStatus, isPending: statusChangeLoading } =
    useUpdateUserStatus();

  const handleUserDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    const data = {
      userId: id,
      status: "DELETED",
    };

    if (result.isConfirmed) {
      changeStatus(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "User Status Changed Successfully!",
            type: "success",
          });
          await allManagersDataForAdminRefetch();
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Authority Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    }
  };

  const handleUserBlock = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    const data = {
      userId: id,
      status: "BLOCK",
    };

    if (result.isConfirmed) {
      changeStatus(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "User Status Changed Successfully!",
            type: "success",
          });
          await allManagersDataForAdminRefetch();
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Authority Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    }
  };

  if (allManagersDataLoadingForAdmin || statusChangeLoading) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="Distributor Manager" />
      <div>
        <div className="flex lg:justify-end mb-4">
          {/* ================= Drawer(Add distributor) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger render={<Button>Add Distributor Manager</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Add Distributor Manager
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <DistributorManagerCreationForm
                  setOpen={setOpen}
                  allManagersDataForAdminRefetch={
                    allManagersDataForAdminRefetch
                  }
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
            National Power Authority Shouldn't have more then one active ID
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allManagersDataForAdmin.data.map((info: user) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">{info.name}</TableCell>
                <TableCell>{info.email}</TableCell>
                <TableCell>
                  {info.distributorManager.distributor.company_name}
                </TableCell>
                <TableCell
                  className={`font-bold ${info.status === "ACTIVE" ? "text-green-700" : "text-red-700"}`}
                >
                  {info.status}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleUserDelete(info.id)}
                    variant={"destructive"}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleUserBlock(info.id)}
                    variant={"outline"}
                  >
                    Block
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

export default DistributorManagerForAdmin;
