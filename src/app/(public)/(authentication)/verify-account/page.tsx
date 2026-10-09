"use client";
import { useRouter, useSearchParams } from "next/navigation";
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
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { useVerifyAccount } from "@/hooks";
import { toast } from "@/components/ui/toast";
import { FetchError } from "ofetch";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Logo from "@/assets/svg/Logo";
import Link from "next/link";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [count, setCount] = useState(300);

  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") || "";
  // console.log(email);

  const { mutate: verify } = useVerifyAccount();

  useEffect(() => {
    if (!email) {
      router.push("/");
    }
  }, [email]);

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

  const handleOTP = () => {
    // console.log("otp", otp);

    if (otp.length !== 6) {
      setIsInvalid(true);
      return;
    }

    const verifyData = {
      otp,
      email,
    };
    console.log(verifyData);

    verify(verifyData, {
      onSuccess: (res) => {
        toast.add({
          title: "Verification Successful",
          description: "Welcome",
          type: "success",
        });

        router.push("/");
      },
      onError: (err) => {
        let errorMsg;
        if (err instanceof FetchError) {
          errorMsg = err?.data?.message;
        }
        toast.add({
          title: "Verification Failed",
          description: errorMsg || "Something Went Wrong. Please Try Again!",
          type: "error",
        });
      },
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="space-y-5">
        <Logo textSize={30} />

        <Card className="mx-auto max-w-md">
          <form
            id="otp-form"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleOTP();
            }}
          >
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
                <InputOTP
                  name="otp"
                  maxLength={6}
                  onChange={(value) => {
                    setOtp(value);

                    if (isInvalid) {
                      setIsInvalid(false);
                    }
                  }}
                  value={otp}
                  id="otp-verification"
                  autoComplete="off"
                  pattern={REGEXP_ONLY_DIGITS}
                  required
                >
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
                {isInvalid && (
                  <FieldError
                    errors={[{ message: "Invalid Code. Please try again" }]}
                  />
                )}
              </Field>
            </CardContent>
            <CardFooter>
              <Field>
                <Button disabled={count <= 0} type="submit" className="w-full">
                  Verify
                </Button>
              </Field>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default VerifyEmail;
