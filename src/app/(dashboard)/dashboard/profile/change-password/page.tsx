"use client";
import Heading from "@/components/layout/public/Heading";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { usePasswordReset } from "@/hooks";
import { ResetPasswordZodSchema } from "@/validation";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { FetchError } from "ofetch";
import React from "react";

const ChangePassword = () => {
  const router = useRouter();
  // ==================== PasswordReset hook ====================
  const { mutate: resetPassword, isPending: LoadingPasswordReset } =
    usePasswordReset();

  const form = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
    validators: {
      onSubmit: ResetPasswordZodSchema,
    },
    onSubmit: ({ value }) => {
      //   console.log("value", value);
      const data = {
        currentPassword: value.currentPassword,
        newPassword: value.newPassword,
      };

      resetPassword(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Password Reset Successfully",
            type: "success",
          });
          router.push("/dashboard/profile");
        },
        onError: (err: any) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Password Reset Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  return (
    <div className="space-y-11">
      <Heading text="Change Password" />
      {/* Password Reset Form */}
      <div className="lg:w-6/12 mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* ================ name ============== */}
            <form.Field
              name="currentPassword"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>
                      Current Password
                    </FieldLabel>
                    <Input
                      placeholder="Enter Current Password"
                      type="password"
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
            {/* ================ newPassword ============== */}
            <form.Field
              name="newPassword"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>New Password</FieldLabel>
                    <Input
                      placeholder="Enter New Password"
                      type="password"
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
            <Field>
              <Button className="bg-green-primary" type="submit">
                {LoadingPasswordReset ? "Resetting" : "Reset"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
