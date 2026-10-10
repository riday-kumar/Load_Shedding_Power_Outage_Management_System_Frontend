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
import {
  useAddDistributorManager,
  useAddPowerAuthority,
  useAllDistributorCompanyForAdmin,
} from "@/hooks";
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

const DistributorManagerCreationForm = ({
  setOpen,
  allManagersDataForAdminRefetch,
}: DistributorManagerFormProps) => {
  const {
    data: allDistributorForAdmin,
    isLoading: allDistributorLoadingForAdmin,
  } = useAllDistributorCompanyForAdmin();

  const handleDrawer = async () => {
    await allManagersDataForAdminRefetch();
    setOpen(false);
  };

  const { mutate: addManager, isPending: LoadingAddManager } =
    useAddDistributorManager();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      distributor_id: "",
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      // console.log("value", value);
      const data = {
        name: value.name,
        email: value.email,
        password: value.password,
        distributor_id: value.distributor_id,
      };

      //   console.log("value", value);

      addManager(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Distributor Manager Created Successfully",
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
            title: "Manager Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
          await handleDrawer();
        },
      });
    },
  });

  if (allDistributorLoadingForAdmin) {
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

          {/* ================ select company =========== */}
          <div>
            <label htmlFor="distributor_id">Select</label>
            <form.Field
              name="distributor_id"
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
                    <SelectValue placeholder="Select Company">
                      {
                        allDistributorForAdmin.data.find(
                          (item: DistributorCompany) =>
                            item.id === field.state.value,
                        )?.company_name
                      }
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allDistributorForAdmin.data.map(
                        (item: DistributorCompany) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.company_name}
                          </SelectItem>
                        ),
                      )}
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
              {LoadingAddManager ? "Creating" : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default DistributorManagerCreationForm;
