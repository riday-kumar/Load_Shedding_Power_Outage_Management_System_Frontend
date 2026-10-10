import { useForm } from "@tanstack/react-form";
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
import { Input } from "../ui/input";
import { useAddPowerAuthority } from "@/hooks";
import { toast } from "../ui/toast";
import { FetchError } from "ofetch";
import { PowerAuthorityFormProps } from "@/types";

const PowerAuthorityForm = ({
  setOpen,
  allUsersDataForAdminRefetch,
}: PowerAuthorityFormProps) => {
  const handleDrawer = async () => {
    await allUsersDataForAdminRefetch();
    setOpen(false);
  };
  const { mutate: addPowerAuth, isPending: LoadingAddPowerAuth } =
    useAddPowerAuthority();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      password: "",
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      // console.log("value", value);
      const data = {
        name: value.name,
        email: value.email,
        address: value.address,
        phone: value.phone,
        password: value.password,
      };

      addPowerAuth(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Authority Created Successfully",
            type: "success",
          });
          await handleDrawer();
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Authority Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  return (
    <div>
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
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    placeholder="John Doe"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

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
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* ================ Address ============== */}
          <form.Field
            name="address"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                  <Input
                    placeholder="Mirpur 11, Dhaka"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* ================ Phone ============== */}
          <form.Field
            name="phone"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                  <Input
                    placeholder="01XXXXXXXXX"
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* ================ password ============== */}

          <div className="">
            <FieldLabel htmlFor="password">Password</FieldLabel>
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
              {LoadingAddPowerAuth ? "Creating" : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default PowerAuthorityForm;
