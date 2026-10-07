import { useForm } from "@tanstack/react-form";
import { toast } from "../ui/toast";
import { FetchError } from "ofetch";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useAddDistributorCompany } from "@/hooks";

const AddPowerDistributorForm = ({ setOpen, DistributorRefetchForAdmin }) => {
  const handleDrawer = async () => {
    await DistributorRefetchForAdmin();
    setOpen(false);
  };

  const { mutate: addCompany, isPending: LoadingCompany } =
    useAddDistributorCompany();

  const form = useForm({
    defaultValues: {
      company_name: "",
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      console.log("value", value);
      const data = {
        company_name: value.company_name,
      };

      addCompany(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Authority Created Successfully",
            type: "success",
          });
          await handleDrawer();
        },
        onError: (err: any) => {
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
            name="company_name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    placeholder="new company name"
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

          <Field>
            <Button className="bg-green-primary" type="submit">
              {LoadingCompany ? "Creating" : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default AddPowerDistributorForm;
