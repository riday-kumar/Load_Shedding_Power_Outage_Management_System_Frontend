import { useForm } from "@tanstack/react-form";
import { toast } from "../ui/toast";
import { FetchError } from "ofetch";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useAddSubstation, useUpdateSubstation } from "@/hooks";
import { SubstationAddFormProps } from "@/types/manager.type";

const SubstationForm = ({
  setOpen,
  managerSubstationRefetch,
  substation,
}: SubstationAddFormProps) => {
  //   console.log("substation test", substation);
  const isEditMode = !!substation;

  const handleDrawer = async () => {
    await managerSubstationRefetch();
    setOpen(false);
  };

  // ================  substation create hook ============
  const { mutate: addSubstation, isPending: LoadingSubstation } =
    useAddSubstation();

  // ================ substation update hook ===========
  const { mutate: updateSubstation, isPending: updatingSubstation } =
    useUpdateSubstation();

  const isLoading = LoadingSubstation || updatingSubstation;

  //   ================= form ====================
  const form = useForm({
    defaultValues: {
      station_name: substation?.station_name ?? "",
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      //   console.log("value", value);
      const data = {
        station_name: value.station_name,
      };

      if (isEditMode) {
        updateSubstation(
          {
            substationId: substation.id,
            station_name: value.station_name,
            distributor_id: substation.distributor_id,
          },
          {
            onSuccess: async () => {
              toast.add({
                title: "Success!",
                description: "Substation Updated Successfully",
                type: "success",
              });
              await handleDrawer();
            },
            onError: async (err: any) => {
              let errorMsg;
              if (err instanceof FetchError) {
                errorMsg = err?.data?.message;
              }
              toast.add({
                title: "Substation update Failed",
                description:
                  errorMsg || "Something Went Wrong. Please Try Again!",
                type: "error",
              });
            },
          },
        );
      } else {
        addSubstation(data, {
          onSuccess: async () => {
            toast.add({
              title: "Success!",
              description: "Substation Created Successfully",
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
              title: "Substation Creation Failed",
              description:
                errorMsg || "Something Went Wrong. Please Try Again!",
              type: "error",
            });
          },
        });
      }
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
          {/* ================ station_name ============== */}
          <form.Field
            name="station_name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Substation Name</FieldLabel>
                  <Input
                    placeholder="new Substation Name"
                    required
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
            <Button
              disabled={isLoading}
              className="bg-green-primary"
              type="submit"
            >
              {isEditMode
                ? updatingSubstation
                  ? "Updating"
                  : "Update"
                : LoadingSubstation
                  ? "Creating"
                  : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default SubstationForm;
