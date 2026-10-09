"use client";
import AuthLoading from "@/components/auth/auth-loading";
import Heading from "@/components/layout/public/Heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAllEmergencyOutagesForPowerOperator } from "@/hooks/power-operator.hook";
import { EmergencyOutage } from "@/types/power-operator.type";
import { AlertTriangle, Clock, MapPin, Zap } from "lucide-react";
import React from "react";

const AllEmergencyOutagesForPowerOperator = () => {
  const { data: emergencyOutages, isLoading: emergencyOutagesLoading } =
    useAllEmergencyOutagesForPowerOperator();

  if (emergencyOutagesLoading) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-8">
      <Heading text="All Emergency Outages" />
      <div>
        {emergencyOutages?.data.map((item: EmergencyOutage) => (
          <Card key={item.id} className="w-full max-w-md">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="size-5 text-red-500" />
                  Emergency Outage
                </CardTitle>

                <p className="text-sm text-muted-foreground">
                  Feeder: {item.feeders.feeder_name}
                </p>
              </div>

              <Badge variant="destructive">{item.status}</Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Zap className="size-4 text-muted-foreground" />
                <span>
                  <strong>Reason:</strong> {item.reason}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-muted-foreground" />
                <span>{item.feeders.area}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4" />
                <span>Reported: {item.reportedAt}</span>
              </div>

              <div className="rounded-md bg-muted p-3 text-sm">
                <p className="text-muted-foreground">Damage</p>
                <p className="font-medium">Not assessed yet</p>
              </div>

              <Button className="w-full" variant="outline">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllEmergencyOutagesForPowerOperator;
