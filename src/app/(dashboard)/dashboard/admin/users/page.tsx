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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/toast";
import { useAllUsersForAdmin, useUpdateUserStatus } from "@/hooks";
import { user, UserRole } from "@/types";
import { FetchError } from "ofetch";
import { useState } from "react";
import Swal from "sweetalert2";

const AllUsersForAdmin = () => {
  //   const role: UserRole = "CUSTOMER";
  const [role, setRole] = useState("CUSTOMER");
  const {
    data: allUsersDataForAdmin,
    isLoading: allUsersDataLoadingForAdmin,
    refetch: allUsersDataForAdminRefetch,
  } = useAllUsersForAdmin(role);

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
          await allUsersDataForAdminRefetch();
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
      confirmButtonText: "Yes, Block it",
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
          await allUsersDataForAdminRefetch();
        },
        onError: (err: any) => {
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

  const roles: UserRole[] = [
    "ADMIN",
    "CUSTOMER",
    "DISTRIBUTOR_MANAGER",
    "POWER_AUTH",
    "POWER_OPERATOR",
    "TECHNICIAN",
  ];

  const handleRoleChange = (value: UserRole) => {
    console.log(value);
    setRole(value);
  };

  if (allUsersDataLoadingForAdmin || statusChangeLoading) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="All Users" />

      <div>
        <Select onValueChange={(v) => handleRoleChange(v)}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {roles.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        {/* =============== table ============= */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allUsersDataForAdmin.data.map((info: user) => (
              <TableRow key={info.id}>
                <TableCell className="font-medium">{info.name}</TableCell>
                <TableCell>{info.email}</TableCell>
                <TableCell>{info.phone ?? "--"}</TableCell>
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

export default AllUsersForAdmin;
