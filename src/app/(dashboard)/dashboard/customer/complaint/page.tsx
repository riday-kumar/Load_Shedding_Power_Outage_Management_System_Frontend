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
import { useCreateComplaint, useUserProfile } from "@/hooks";
import { user } from "@/types";
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { FetchError } from "ofetch";
const CreateComplaint = () => {
  const router = useRouter();

  const { data: userProfile, isLoading: LoadingUserProfile } = useUserProfile();

  const user: user = userProfile?.data || {};
  const { mutate: createComplaint, isPending: LoadingCreateComplaint } =
    useCreateComplaint();

  const form = useForm({
    defaultValues: {
      complaintMessage: "",
      feeder_id: user.feederId || "",
    },
    onSubmit: ({ value }) => {
      //   console.log("value", value);
      const data = {
        complaintMessage: value.complaintMessage,
        feeder_id: value.feeder_id,
      };

      createComplaint(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Complaint Created Successfully",
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
            title: "Complaint Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  return (
    <div className="space-y-4">
      <Heading text="Create Your Complain" />
      <div>
        {/* Complaint Form */}
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
                name="complaintMessage"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Complaint Message
                      </FieldLabel>
                      <Input
                        placeholder="Enter Complaint Message"
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

              <Field>
                <Button className="bg-green-primary" type="submit">
                  {LoadingCreateComplaint ? "Creating" : "Create"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateComplaint;
