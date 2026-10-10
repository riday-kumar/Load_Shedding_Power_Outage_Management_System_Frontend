import { useForm } from "@tanstack/react-form";
import { toast } from "../ui/toast";
import { FetchError } from "ofetch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  useAddFeeder,
  useAddSubstation,
  useSubstationOfManager,
  useUpdateFeeder,
  useUpdateSubstation,
} from "@/hooks";
import { FeederAddFormProps, Substation } from "@/types/manager.type";
import AuthLoading from "../auth/auth-loading";

const FeederForm = ({ setOpen, feederRefetch, feeder }: FeederAddFormProps) => {
  //   console.log("feeder test", feeder);
  const isEditMode = !!feeder;

  const handleDrawer = async () => {
    await feederRefetch();
    setOpen(false);
  };

  // ================ Substation getting hook ==============
  const {
    data: allSubstationOfManager,
    isLoading: allSubstationLoadingOfManager,
  } = useSubstationOfManager();

  // ================  feeder create hook ============
  const { mutate: addFeeder, isPending: LoadingFeeder } = useAddFeeder();

  // ================ feeder update hook ===========
  const { mutate: updateFeeder, isPending: updatingFeeder } = useUpdateFeeder();

  const isLoading =
    LoadingFeeder || updatingFeeder || allSubstationLoadingOfManager;

  //   ================= form ====================
  const form = useForm({
    defaultValues: {
      feeder_name: feeder?.feeder_name ?? "",
      division: feeder?.division ?? "",
      district: feeder?.district ?? "",
      area: feeder?.area ?? "",
      substation_id: feeder?.substation_id ?? "",
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      //   console.log("value", value);
      const data = {
        feeder_name: value.feeder_name,
        division: value.division,
        district: value.district,
        area: value.area,
        substation_id: value.substation_id,
      };

      // console.log("input data", data);

      if (isEditMode) {
        updateFeeder(
          {
            id: feeder?.id ?? "",
            feeder_name: value.feeder_name,
            division: value.division,
            district: value.district,
            area: value.area,
            substation_id: value.substation_id,
          },
          {
            onSuccess: async () => {
              toast.add({
                title: "Success!",
                description: "Feeder Updated Successfully",
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
                title: "Feeder update Failed",
                description:
                  errorMsg || "Something Went Wrong. Please Try Again!",
                type: "error",
              });
            },
          },
        );
      } else {
        addFeeder(data, {
          onSuccess: async () => {
            toast.add({
              title: "Success!",
              description: "Feeder Created Successfully",
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
              title: "Feeder Creation Failed",
              description:
                errorMsg || "Something Went Wrong. Please Try Again!",
              type: "error",
            });
          },
        });
      }
    },
  });

  if (isLoading) {
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
          {/* ================ feeder_name ============== */}
          <form.Field
            name="feeder_name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Feeder Name</FieldLabel>
                  <Input
                    placeholder="new Feeder Name"
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
          {/* ================ feeder division ============== */}
          <form.Field
            name="division"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Division</FieldLabel>
                  <Input
                    placeholder="new Division"
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
          {/* ================ district ============== */}
          <form.Field
            name="district"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>District</FieldLabel>
                  <Input
                    placeholder="District"
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
          {/* ================ area ============== */}
          <form.Field
            name="area"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>
                    Feeder Coverage Area
                  </FieldLabel>
                  <Input
                    placeholder="Feeder Coverage Area"
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
          {/* ================ select substation ============== */}
          <div>
            <label htmlFor="substation_id">Select Substation</label>
            <form.Field
              name="substation_id"
              children={(field) => (
                <Select
                  required
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

          <Field>
            <Button
              disabled={isLoading}
              className="bg-green-primary"
              type="submit"
            >
              {isEditMode
                ? updatingFeeder
                  ? "Updating"
                  : "Update"
                : LoadingFeeder
                  ? "Creating"
                  : "Create"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default FeederForm;
