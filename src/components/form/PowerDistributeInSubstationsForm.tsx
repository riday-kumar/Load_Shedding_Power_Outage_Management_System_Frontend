"use client";
import AuthLoading from "@/components/auth/auth-loading";
import Heading from "@/components/layout/public/Heading";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  useAddPowerDistribution,
  useAddPowerDistributionInSubstation,
  useAllDistributorCompanyForAdmin,
  useAllPowerDistributionInfo,
  useSubstationOfManager,
  useUserProfile,
} from "@/hooks";
import { formSchema } from "@/validation/powerDistribution.validation";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { DistributorCompany, PowerDistributionForm, user } from "@/types";
import { FetchError } from "ofetch";
import { toast } from "@/components/ui/toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AddPowerDistributionPayload,
  PowerDistributionFormValues,
  Substation,
} from "@/types/manager.type";

const PowerDistributeInSubstationForm = () => {
  const router = useRouter();
  // ================= get company id from the manager profile ==========
  const { data: userProfile, isLoading: LoadingUserProfile } = useUserProfile();
  const user: user = userProfile?.data;
  const companyId = user.distributorManager.distributor_id;

  //   ================= Get all substation under the company =================
  const { data: substationData, isLoading: LoadingSubstationData } =
    useSubstationOfManager();

  const substations = substationData?.data;

  // console.log("substations", substations);

  // ================= Get today's allocated power for the Company =================
  const {
    data: powerDistributionData,
    isLoading: LoadingPowerDistributionData,
  } = useAllPowerDistributionInfo({
    today: new Date().toISOString().split("T")[0],
    companyId: user.distributorManager.distributor_id,
  });

  // console.log("todays power", powerDistributionData);

  // ================= Add Power Distribution in substation =================
  const { mutate: addPowerDistribution, isPending: isAdding } =
    useAddPowerDistributionInSubstation();

  //   ================= Form ================
  const form = useForm({
    defaultValues: {
      distributions: [],
    } as PowerDistributionFormValues,

    onSubmit: async ({ value }) => {
      if (!companyId) {
        toast.add({
          title: "Company not found!",
          description: "Something Went Wrong. Please Try Again!",
          type: "error",
        });
        return;
      }

      if (value.distributions.length === 0) {
        toast.add({
          title: "substation not found",
          description: "Something Went Wrong. Please Try Again!",
          type: "error",
        });
        return;
      }

      // convert form values into the api payload
      const payload: AddPowerDistributionPayload[] = value.distributions.map(
        (item) => ({
          substation_id: item.substation_id,
          expectedNeed: Number(item.expectedNeed),
          allocatedNeed: Number(item.allocatedNeed),
        }),
      );

      // submit all substations
      addPowerDistribution(
        {
          companyId,
          payload,
        },
        {
          onSuccess: () => {
            toast.add({
              title: "Success!",
              description: "Power Distributed into substations Successfully",
              type: "success",
            });
            router.push("/dashboard/manager/supply/record");
          },
          onError: (err: any) => {
            let errorMsg;
            if (err instanceof FetchError) {
              errorMsg = err?.data?.message;
            }
            toast.add({
              title: "Power Distribution into substation Creation Failed",
              description:
                errorMsg || "Something Went Wrong. Please Try Again!",
              type: "error",
            });
          },
        },
      );
    },
  });

  //   =================== initialize form ============
  useEffect(() => {
    if (!substations) return;

    form.setFieldValue(
      "distributions",
      substations.map((substation: Substation) => ({
        substation_id: substation.id,
        expectedNeed: "",
        allocatedNeed: "",
      })),
    );
  }, [substations]);

  //   ================= Loading ================

  const loading =
    LoadingUserProfile || LoadingPowerDistributionData || LoadingSubstationData;

  if (loading) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      {/* =================  form ================= */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          form.handleSubmit();
        }}
        className="space-y-6"
      >
        {substations.map((substation: Substation, index: number) => (
          <div
            key={substation.id}
            className="space-y-5 rounded-xl border p-4 sm:p-6"
          >
            {/* Substation Information */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">
                  {" "}
                  {index + 1}. {substation.station_name}{" "}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {" "}
                  Substation ID: {substation.id}{" "}
                </p>
              </div>
            </div>
            {/* Expected Power */}
            <form.Field name={`distributions[${index}].expectedNeed`}>
              {(field) => (
                <div className="space-y-2">
                  {" "}
                  <label
                    htmlFor={`expected-${substation.id}`}
                    className="text-sm font-medium"
                  >
                    {" "}
                    Expected Power Need (MW){" "}
                  </label>{" "}
                  <Input
                    id={`expected-${substation.id}`}
                    name={field.name}
                    type="number"
                    min="0.01"
                    step="any"
                    placeholder="e.g. 1200"
                    value={field.state.value ?? ""}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    disabled={isAdding}
                    required
                  />{" "}
                  {field.state.meta.isTouched &&
                    field.state.value.trim() === "" && (
                      <p className="text-xs text-destructive">
                        {" "}
                        Expected power need is required.{" "}
                      </p>
                    )}{" "}
                </div>
              )}
            </form.Field>
            {/* Allocated Power */}
            <form.Field name={`distributions[${index}].allocatedNeed`}>
              {(field) => (
                <div className="space-y-2">
                  {" "}
                  <label
                    htmlFor={`allocated-${substation.id}`}
                    className="text-sm font-medium"
                  >
                    {" "}
                    Allocated Power (MW){" "}
                  </label>{" "}
                  <Input
                    id={`allocated-${substation.id}`}
                    name={field.name}
                    type="number"
                    min="0"
                    step="any"
                    placeholder="e.g. 1000"
                    value={field.state.value ?? ""}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    disabled={isAdding}
                    required
                  />{" "}
                  {field.state.meta.isTouched &&
                    field.state.value.trim() === "" && (
                      <p className="text-xs text-destructive">
                        {" "}
                        Allocated power is required.{" "}
                      </p>
                    )}{" "}
                </div>
              )}
            </form.Field>
          </div>
        ))}

        {/* ================= Submit ================= */}

        <div className="sticky bottom-0 rounded-xl border bg-background p-4">
          {" "}
          <Button type="submit" className="w-full" disabled={isAdding}>
            {" "}
            {isAdding
              ? "Submitting All Distributions..."
              : `Submit All ${substations.length} Distributions`}{" "}
          </Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default PowerDistributeInSubstationForm;
