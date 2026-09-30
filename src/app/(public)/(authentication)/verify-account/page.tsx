"use client";
import { useSearchParams } from "next/navigation";
import { RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [count, setCount] = useState(300);

  const params = useSearchParams();
  const email = params.get("email");
  console.log(email);

  useEffect(() => {
    if (count <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const min = Math.floor(count / 60);
  const sec = count % 60;

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Verify your account</CardTitle>
          <CardDescription>
            Verification code we sent to your email address:{" "}
            <span className="font-bold green-primary">{email}</span>.
            <br /> <br />
            <span className="text-red-700">
              OTP Expire in : {min}:{sec}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="otp-verification">
                Verification code
              </FieldLabel>
            </div>
            <InputOTP maxLength={6} id="otp-verification" required>
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </CardContent>
        <CardFooter>
          <Field>
            <Button type="submit" className="w-full">
              Verify
            </Button>
            <div className="text-sm text-muted-foreground">
              Having trouble signing in?{" "}
              <a
                href="#"
                className="underline underline-offset-4 transition-colors hover:text-primary"
              >
                Contact support
              </a>
            </div>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyEmail;
