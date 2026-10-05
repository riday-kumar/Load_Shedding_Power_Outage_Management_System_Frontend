// app/(dashboard)/profile/page.tsx  (adjust the path to your project)
"use client";

import Link from "next/link";
import { Camera, Mail, MapPin, Phone, Zap, ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUserProfile } from "@/hooks";
import { User } from "@/types";
import AuthLoading from "@/components/auth/auth-loading";
import ProfileUpdate from "@/components/modules/profile/ProfileUpdate";

const formatRole = (role: string) =>
  role
    .toLowerCase()
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value?: string | null;
}) {
  return (
    <div className="flex items-start gap-3 py-4">
      <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-0.5 wrap-break-word text-sm font-medium">
          {value && value.trim() ? value : "Not provided"}
        </p>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { data, isLoading } = useUserProfile();

  const user: User = data.data;
  const isCustomer = user.role === "CUSTOMER";

  if (isLoading) {
    return <AuthLoading />;
  }

  return (
    <div className="mx-auto w-full max-w-2xl p-4 md:p-8">
      <Card>
        <CardContent className="p-0">
          {/* Header: image + name */}
          <div className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-2">
              <Avatar className="size-24">
                <AvatarImage src={user.imageUrl || undefined} alt={user.name} />
                <AvatarFallback className="text-2xl">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                {/* change href to your image upload page */}
                <Link
                  href="/profile/upload-image"
                  className="flex items-center gap-2"
                >
                  <Camera className="size-4" />
                  Upload photo
                </Link>
              </Button>
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="truncate text-xl font-semibold capitalize">
                {user.name}
              </h1>
              <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
                <Badge
                  variant={user.status === "ACTIVE" ? "default" : "secondary"}
                >
                  {formatRole(user.status)}
                </Badge>
                {user.emailVerified && (
                  <Badge variant="outline">
                    <ShieldCheck className="size-3" />
                    Email verified
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Details */}
          <div className="divide-y px-6">
            <InfoRow icon={Mail} label="Email" value={user.email} />
            <InfoRow icon={Phone} label="Phone" value={user.phone} />
            <InfoRow icon={MapPin} label="Address" value={user.address} />

            {/* Feeder ID: customers only */}
            {isCustomer && (
              <InfoRow icon={Zap} label="Feeder ID" value={user.feederId} />
            )}

            {/* Role: hidden for customers */}
            {!isCustomer && (
              <InfoRow
                icon={ShieldCheck}
                label="Role"
                value={formatRole(user.role)}
              />
            )}
          </div>

          {/* update button */}
          <ProfileUpdate />
        </CardContent>
      </Card>
    </div>
  );
}
