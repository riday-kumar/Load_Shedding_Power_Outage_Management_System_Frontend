"use client";
import Heading from "@/components/layout/public/Heading";
import { useAllPowerDistributionInfo } from "@/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PowerDistributionDataInfo } from "@/types";
import AuthLoading from "@/components/auth/auth-loading";

const PowerDistributionData = () => {
  const {
    data: powerDistributionData,
    isLoading: LoadingPowerDistributionData,
  } = useAllPowerDistributionInfo();

  if (LoadingPowerDistributionData) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="All Power Distributed Data" />
      <div>
        {/* =============== Power Distribution Data============== */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Expected Need (MW)</TableHead>
              <TableHead>Allocated (MW)</TableHead>
              <TableHead>Distribution Company</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {powerDistributionData.data.map(
              (info: PowerDistributionDataInfo) => (
                <TableRow key={info.id}>
                  <TableCell className="font-medium">
                    {info.allocatedAt.split("T")[0]}
                  </TableCell>
                  <TableCell>{info.expected_need}</TableCell>
                  <TableCell>{info.allocated}</TableCell>
                  <TableCell>{info.distributor.company_name}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PowerDistributionData;
