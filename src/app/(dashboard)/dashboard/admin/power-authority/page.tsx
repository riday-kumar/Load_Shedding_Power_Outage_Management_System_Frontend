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
import { useAllUsersForAdmin } from "@/hooks";
import { useIsMobile } from "@/hooks/use-mobile";
import { user, UserRole } from "@/types";
import { useState } from "react";
import PowerAuthorityForm from "@/components/form/Power-authority-form";

const PowerAuthority = () => {
  const role: UserRole = "POWER_AUTH";
  const {
    data: allUsersDataForAdmin,
    isLoading: allUsersDataLoadingForAdmin,
    refetch: allUsersDataForAdminRefetch,
  } = useAllUsersForAdmin(role);
  console.log("powerAuthData", allUsersDataForAdmin);

  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  if (allUsersDataLoadingForAdmin) {
    return <AuthLoading />;
  }

  return (
    <div>
      <Heading text="All National Power Authority" />
      <div>
        <div className="flex md:justify-end">
          {/* ================= Drawer(Add Authority) ============ */}
          <Drawer
            open={open}
            onOpenChange={setOpen}
            showSwipeHandle={isMobile}
            swipeDirection={isMobile ? "down" : "right"}
          >
            <DrawerTrigger render={<Button>Add Power Authority</Button>} />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Add National Power Authority
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex-1 scroll-fade overflow-y-auto p-4">
                <PowerAuthorityForm
                  setOpen={setOpen}
                  allUsersDataForAdminRefetch={allUsersDataForAdminRefetch}
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
                  <Button variant={"destructive"}>Delete</Button>
                  <Button variant={"outline"}>Block</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PowerAuthority;
