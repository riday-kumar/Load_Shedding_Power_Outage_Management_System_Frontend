import { useForm } from "@tanstack/react-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { toast } from "../ui/toast";
import { FetchError } from "ofetch";
import { PowerStatusFormProps } from "@/types";
import AuthLoading from "../auth/auth-loading";
import { useAddPowerStatus } from "@/hooks";
import { Button } from "../ui/button";

const PowerStatusForm = ({
  setOpen,
  powerStatusInfoRefetch,
}: PowerStatusFormProps) => {
  const handleDrawer = async () => {
    await powerStatusInfoRefetch();
    setOpen(false);
  };

  //   ===================== add power status hook =====================
  const { mutate: addPowerStatus, isPending: LoadingAddPowerStatus } =
    useAddPowerStatus();

  const form = useForm({
    defaultValues: {
      generatedPowerMW: "",
      demand: "",
    },
    // validators: {
    //   onSubmit: PowerStatusSchema,
    // },
    onSubmit: ({ value }) => {
      // console.log("value", value);
      const data = {
        generatedPowerMW: Number(value.generatedPowerMW),
        demand: Number(value.demand),
      };

      //   console.log("value", value);

      addPowerStatus(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Power Status Created Successfully",
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
            title: "Power Status Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
          await handleDrawer();
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
          {/* ================ demand ============== */}
          <form.Field
            name="demand"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Demand (MW)</FieldLabel>
                  <Input
                    required
                    placeholder="Demand (MW)"
                    type="number"
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

          {/* ================ generatedPowerMW ============== */}
          <form.Field
            name="generatedPowerMW"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    Generated Power (MW)
                  </FieldLabel>
                  <Input
                    required
                    placeholder="Generated Power (MW)"
                    type="number"
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
            <Button
              className="bg-green-primary"
              type="submit"
              disabled={LoadingAddPowerStatus}
            >
              {LoadingAddPowerStatus ? "Creating" : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default PowerStatusForm;
