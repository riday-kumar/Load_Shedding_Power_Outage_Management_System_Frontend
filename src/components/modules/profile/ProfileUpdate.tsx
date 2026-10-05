"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { useProfileUpdate, useUserProfile } from "@/hooks";

import { useForm } from "@tanstack/react-form";
import { FetchError } from "ofetch";
import SearchFeeders from "./SearchFeeders";
import AuthLoading from "@/components/auth/auth-loading";

const ProfileUpdate = () => {
  const { data: userData, isLoading: userProfileLoading } = useUserProfile();
  // console.log("profile data", userData.data);
  // const [feederId, setFeederId] = useState("");
  // console.log("feederId", feederId);

  const {
    mutate: updateProfile,
    isPending: loadingUpdateProfile,
    isSuccess: profileUpdateSuccess,
  } = useProfileUpdate();

  if (userProfileLoading || !userData.data) {
    return <AuthLoading />;
  }

  const form = useForm({
    defaultValues: {
      name: userData.data.name ?? null,
      phone: userData.data.phone ?? null,
      address: userData.data.address ?? "",
      feederId: userData.data.feederId ?? "",
    },
    // validators: {
    //   onSubmit: UpdateProfileSchema,
    // },
    onSubmit: ({ value }) => {
      const updateData = {
        name: value.name,
        phone: value.phone,
        address: value.address,
        feederId: value.feederId,
      };
      console.log("updateData", value);

      updateProfile(updateData, {
        onSuccess: (res) => {
          console.log("res", res);
          toast.add({
            title: "Success!",
            description: "Profile updated Successfully",
            type: "success",
          });
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          console.log("error", err);
          toast.add({
            title: "Profile Update Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  return (
    <Dialog>
      <DialogTrigger render={<Button className="m-5 ">Edit Profile</Button>} />
      <DialogContent className="sm:max-w-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            {/* =========== name ============ */}
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your name"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            {/* =========== phone ============ */}
            <form.Field
              name="phone"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value ?? ""}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your Phone number"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* =========== address ========= */}
            <form.Field
              name="address"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your address"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            {/* =========== feederId ========= */}
            <p>Please Select Your Area</p>
            <form.Field name="feederId">
              {(field) => (
                <SearchFeeders
                  value={field.state.value}
                  onChange={field.handleChange}
                />
              )}
            </form.Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Button type="submit" disabled={loadingUpdateProfile}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileUpdate;
