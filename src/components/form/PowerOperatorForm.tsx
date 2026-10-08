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

import { toast } from "../ui/toast";
import { FetchError } from "ofetch";
import { DistributorCompany, DistributorManagerFormProps } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AuthLoading from "../auth/auth-loading";
import { useAddPowerOperator, useSubstationOfManager } from "@/hooks";
import { PowerOperatorFormProps, Substation } from "@/types/manager.type";

const PowerOperatorForm = ({
  setOpen,
  managerPowerOperatorRefetch,
}: PowerOperatorFormProps) => {
  const {
    data: allSubstationOfManager,
    isLoading: allSubstationLoadingOfManager,
  } = useSubstationOfManager();

  const handleDrawer = async () => {
    await managerPowerOperatorRefetch();
    setOpen(false);
  };

  const { mutate: addPowerOperator, isPending: LoadingAddPowerOperator } =
    useAddPowerOperator();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      substation_id: "",
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      console.log("value", value);
      const data = {
        name: value.name,
        email: value.email,
        address: value.address,
        substation_id: value.substation_id,
        password: value.password,
      };

      //   console.log("value", value);

      addPowerOperator(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Power Operator Created Successfully",
            type: "success",
          });
          await handleDrawer();
        },
        onError: async (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Power Operator Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
          await handleDrawer();
        },
      });
    },
  });

  if (allSubstationLoadingOfManager) {
    return <AuthLoading />;
  }

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

          {/* ================ address ============== */}
          <form.Field
            name="address"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Address</FieldLabel>
                  <Input
                    placeholder="Power Operator Address"
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

          {/* ================ select substation =========== */}
          <div>
            <label htmlFor="substation_id">Select</label>
            <form.Field
              name="substation_id"
              children={(field) => (
                <Select
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onValueChange={(value) => field.handleChange(value as string)}
                >
                  <SelectTrigger
                    id={field.name}
                    onBlur={field.handleBlur}
                    className="w-full"
                  >
                    <SelectValue placeholder="Select Substation">
                      {
                        allSubstationOfManager.data.find(
                          (item: Substation) => item.id === field.state.value,
                        )?.station_name
                      }
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allSubstationOfManager.data.map((item: Substation) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.station_name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

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
              {LoadingAddPowerOperator ? "Creating" : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default PowerOperatorForm;
