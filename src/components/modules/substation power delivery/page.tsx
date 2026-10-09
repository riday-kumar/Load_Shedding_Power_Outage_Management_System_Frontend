"use client";
import AuthLoading from "@/components/auth/auth-loading";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAllPowerDistributionInfo, useUserProfile } from "@/hooks";
import { PowerDistributionDataInfo, user } from "@/types";

const AllocatedPowerInfo = () => {
  const { data: userProfile, isLoading: LoadingUserProfile } = useUserProfile();
  const user: user = userProfile?.data;
  const companyId = user.distributorManager.distributor_id;
  const today = new Date();

  const { data: todaysDistributionData, isLoading: dataLoading } =
    useAllPowerDistributionInfo({
      companyId,
      today,
    });

  console.log("todaysDistributionData", todaysDistributionData);

  const isLoading = LoadingUserProfile || dataLoading;
  if (isLoading) {
    return <AuthLoading />;
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>National Power Authority</CardTitle>
          <CardDescription>power authority allocated power</CardDescription>
        </CardHeader>
        <CardContent>
          {todaysDistributionData?.data?.map(
            (data: PowerDistributionDataInfo) => (
              <div key={data.id}>
                <p className="font-bold ">
                  Company : {data.distributor.company_name}
                </p>
                <p className="font-bold text-red-600">
                  Expected Power : {data.expected_need} (MW)
                </p>
                <p className="font-bold text-green-600">
                  Allocated Power : {data.allocated} (MW)
                </p>
                <p>Published : {data.allocatedAt.split("T")[0]}</p>
              </div>
            ),
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AllocatedPowerInfo;
