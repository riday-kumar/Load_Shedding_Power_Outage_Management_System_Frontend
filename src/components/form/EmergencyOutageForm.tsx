"use client";
import { useCreateEmergencyOutage, useUserProfile } from "@/hooks";
import { user } from "@/types";
import { useForm } from "@tanstack/react-form";
import { toast } from "../ui/toast";
import { useRouter } from "next/navigation";
import { FetchError } from "ofetch";
import Heading from "../layout/public/Heading";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthLoading from "../auth/auth-loading";

const EmergencyOutageForm = () => {
  const router = useRouter();
  // =============== user profile hook===========
  const { data: userProfile, isLoading: LoadingUserProfile } = useUserProfile();
  const user: user = userProfile?.data;

  // =============== mutation hook ===========
  const {
    mutate: createEmergencyOutage,
    isPending: LoadingCreateEmergencyOutage,
  } = useCreateEmergencyOutage();

  const form = useForm({
    defaultValues: {
      feeder_id: user.feederId || "",
      reason: "",
      startedAt: "",
    },
    onSubmit: ({ value }) => {
      //   console.log("value", value);
      const data = {
        feeder_id: value.feeder_id,
        reason: value.reason,
        startedAt: new Date(value.startedAt).toISOString(),
      };

      createEmergencyOutage(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Emergency Outage Created Successfully",
            type: "success",
          });
          router.push("/dashboard/customer");
        },
        onError: (err: any) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Emergency Outage Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  if (LoadingUserProfile) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="Create Emergency Outage Request" />
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {/* ================ reason ============== */}
            <form.Field
              name="reason"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Reason</FieldLabel>
                    <Input
                      placeholder="eg: transformer failed"
                      type="text"
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

            {/* ================ startedAt ============== */}
            <form.Field
              name="startedAt"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Started At</FieldLabel>
                    <Input
                      required
                      placeholder="eg: 10:00 AM"
                      type="datetime-local"
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
                {LoadingCreateEmergencyOutage ? "Creating" : "Create"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
};

export default EmergencyOutageForm;
