"use client";

import {
  useAllFeedersForOperator,
  useCreateLoadShedding,
} from "@/hooks/power-operator.hook";
import AuthLoading from "../auth/auth-loading";
import { useForm } from "@tanstack/react-form";

import { FetchError } from "ofetch";
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
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const toBangladeshISO = (value: string) => {
  return new Date(`${value}:00+06:00`).toISOString();
};

const LoadSheddingForm = () => {
  // =================== get all feeders for operators ============
  const { data: feedersData, isLoading: feedersLoading } =
    useAllFeedersForOperator();
  console.log("feeders data", feedersData?.data);
  const feeders = feedersData?.data;
  //   ===================== create load shedding hook ==================
  const { mutate: addLoadShedding, isPending: PendingLoadShedding } =
    useCreateLoadShedding();

  // ================ use form ============
  const form = useForm({
    defaultValues: {
      feeder_id: "",
      start_time: "",
      end_time: "",
      plannedLoadShedding: 0,
    },
    // validators: {
    //   onSubmit: LoginSchema,
    // },
    onSubmit: ({ value }) => {
      console.log("value", value);
      const data = {
        feeder_id: value.feeder_id,
        start_time: toBangladeshISO(value.start_time),
        end_time: toBangladeshISO(value.end_time),
        plannedLoadShedding: value.plannedLoadShedding,
      };

      console.log("data", data);

      addLoadShedding(data, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Loading Under Pending",
            type: "success",
          });
        },
        onError: async (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Load shedding Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  // ================= loading ===========
  const loading = feedersLoading;
  if (loading) {
    return <AuthLoading />;
  }
  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl border bg-card p-5 sm:p-7">
      {/* ============ form ========== */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        className="space-y-5"
      >
        {/* ========== Feeder Selection ============ */}
        <form.Field
          name="feeder_id"
          validators={{
            onChange: ({ value }) =>
              value ? undefined : "Please select a feeder.",
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Select Feeder</Label>
              <Select
                value={field.state.value}
                onValueChange={(value) => field.handleChange(value ?? "")}
              >
                <SelectTrigger
                  id={field.name}
                  className="w-full"
                  aria-invalid={
                    field.state.meta.isTouched && !field.state.meta.isValid
                  }
                >
                  <SelectValue placeholder="Choose a feeder">
                    {
                      feeders.find((item: any) => item.id === field.state.value)
                        ?.feeder_name
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {feeders.map((feeder: any) => (
                    <SelectItem key={feeder.id} value={feeder.id}>
                      {feeder.feeder_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {field.state.meta.isTouched && !field.state.meta.isValid && (
                <p className="text-sm text-destructive">
                  {field.state.meta.errors.join(", ")}
                </p>
              )}
            </div>
          )}
        </form.Field>

        {/* ============= Start Time and End Time ========= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <form.Field
            name="start_time"
            validators={{
              onChange: ({ value }) =>
                value ? undefined : "Select a start time.",
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}> Start Time </Label>{" "}
                <Input
                  id={field.name}
                  type="datetime-local"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                />
              </div>
            )}
          </form.Field>
          <form.Field
            name="end_time"
            validators={{
              onChange: ({ value }) =>
                value ? undefined : "Select an end time.",
            }}
          >
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}> End Time </Label>{" "}
                <Input
                  id={field.name}
                  type="datetime-local"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  required
                />
              </div>
            )}
          </form.Field>
        </div>
        {/* =================  Planned Load Shedding  ==========*/}
        <form.Field
          name="plannedLoadShedding"
          validators={{
            onChange: ({ value }) => {
              if (!value) {
                return "Enter the planned load shedding value.";
              }
              if (!Number.isFinite(Number(value)) || Number(value) <= 0) {
                return "Enter a number greater than zero.";
              }
              return undefined;
            },
          }}
        >
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}> Planned Load Shedding </Label>{" "}
              <Input
                id={field.name}
                type="number"
                min="0.1"
                step="0.1"
                placeholder="e.g. 4.5"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />
            </div>
          )}
        </form.Field>
        {/* ============= Submit =============== */}

        <Button type="submit" className="w-full" disabled={PendingLoadShedding}>
          {PendingLoadShedding
            ? "Creating Schedule..."
            : "Create Load Shedding"}
        </Button>
      </form>
    </div>
  );
};

export default LoadSheddingForm;
