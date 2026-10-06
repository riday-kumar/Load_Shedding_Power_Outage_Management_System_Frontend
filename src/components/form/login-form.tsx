"use client";
import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { useLogin, useUserProfile } from "@/hooks";
import { LoginSchema } from "@/validation";
import GoogleLoginComponent from "../modules/google-login/GoogleLogin";
import { toast } from "@/components/ui/toast";
import { FetchError } from "ofetch";
import { useRouter } from "next/navigation";
import AuthLoading from "../auth/auth-loading";
import LoginSkeleton from "../skeleton/auth/LoginSkeleton";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { mutate: login, isPending: loginPending } = useLogin();
  const { data, refetch, isLoading } = useUserProfile();

  // console.log("login pending", loginPending);
  console.log({
    data,
  });

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "poweroperator1@gmail.com",
      password: "Abcd12345",
    },
    validators: {
      onSubmit: LoginSchema,
    },
    onSubmit: ({ value }) => {
      const loginData = {
        email: value.email,
        password: value.password,
      };

      login(loginData, {
        onSuccess: async (res) => {
          // console.log("login res", res);
          const profile = await refetch();
          const role = profile.data?.data.role;

          toast.add({
            title: "Login Successful",
            description: "Welcome Back",
            type: "success",
          });
          // router.push("/");

          if (role === "ADMIN") {
            router.push("/dashboard/admin");
          } else if (role === "POWER_AUTH") {
            router.push("/dashboard/power-auth");
          } else if (role === "DISTRIBUTOR_MANAGER") {
            router.push("/dashboard/manager");
          } else if (role === "POWER_OPERATOR") {
            router.push("/dashboard/power-operator");
          } else if (role === "TECHNICIAN") {
            router.push("/dashboard/technician");
          } else if (role === "CUSTOMER") {
            router.push("/dashboard/customer");
          }
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Login Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  if (isLoading) {
    return <LoginSkeleton />;
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              {/* ================ email ============== */}

              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        placeholder="m@example.com"
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              {/* ================ password ============== */}

              <div className="flex items-center">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <Input
                        placeholder="password"
                        type="password"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {!field.state.meta.isValid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <Field>
                <Button className="bg-green-primary" type="submit">
                  {loginPending ? "Submitting" : "Login"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="mt-4 space-y-2">
            <GoogleLoginComponent />
            <FieldDescription className="text-center">
              Don&apos;t have an account? <a href="/register">Sign up</a>
            </FieldDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
