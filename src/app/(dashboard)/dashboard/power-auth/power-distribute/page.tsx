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
  useAllDistributorCompanyForAdmin,
} from "@/hooks";
import { formSchema } from "@/validation/powerDistribution.validation";
import { useForm } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { DistributorCompany, PowerDistributionForm } from "@/types";
import { FetchError } from "ofetch";
import { toast } from "@/components/ui/toast";
import { useEffect } from "react";

const PowerDistribute = () => {
  // ================= Get All Distributor Company =================
  const { data: distributorCompanyList, isLoading: LoadingDistributorCompany } =
    useAllDistributorCompanyForAdmin();

  const companies = distributorCompanyList?.data;

  // ================= Add Power Distribution =================
  const {
    mutate: addPowerDistribution,
    isPending: LoadingAddPowerDistribution,
  } = useAddPowerDistribution();

  //   ================= Form ================
  const initialValues: PowerDistributionForm = {
    distributions: [],
  };

  const form = useForm({
    // defaultValues: {
    //     distributions: companies.map((company: DistributorCompany) => ({
    //       expected_need: 0,
    //       allocated: 0,
    //       distributor_id: company.id,
    //     })),
    //   distributions: [],
    // },
    defaultValues: initialValues,

    validators: {
      onSubmit: formSchema,
    },

    onSubmit: ({ value }) => {
      console.log("Final Payload:", value.distributions);

      addPowerDistribution(value.distributions, {
        onSuccess: async () => {
          toast.add({
            title: "Success!",
            description: "Power Distribution Created Successfully",
            type: "success",
          });
        },
        onError: (err: any) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Power Distribution Creation Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      });
    },
  });

  useEffect(() => {
    if (companies?.length > 0) {
      form.reset({
        distributions: companies.map((company: DistributorCompany) => ({
          expected_need: 0,
          allocated: 0,
          distributor_id: company.id,
        })),
      });
    }
  }, [companies, form]);

  //   ================= Loading ================

  if (LoadingDistributorCompany) {
    return <AuthLoading />;
  }

  return (
    <div className="space-y-4">
      <Heading text="Power Distribute" />
      {/* =================  form ================= */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          form.handleSubmit();
        }}
        className="space-y-6"
      >
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left">Distributor</th>

                <th className="px-4 py-3 text-left">Expected Need (MW)</th>

                <th className="px-4 py-3 text-left">Allocated (MW)</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((company: DistributorCompany, index: number) => (
                <tr key={company.id} className="border-b last:border-b-0">
                  {/* ================= Distributor ================= */}

                  <td className="px-4 py-4 font-medium">
                    {company.company_name}
                  </td>

                  {/* ================= Expected Need ================= */}

                  <td className="px-4 py-4">
                    <form.Field name={`distributions[${index}].expected_need`}>
                      {(field) => (
                        <Field
                          data-invalid={
                            field.state.meta.isTouched &&
                            !field.state.meta.isValid
                          }
                        >
                          <FieldLabel htmlFor={field.name} className="sr-only">
                            Expected Need
                          </FieldLabel>

                          <Input
                            id={field.name}
                            name={field.name}
                            type="number"
                            min={0}
                            value={field.state.value ?? ""}
                            onChange={(e) =>
                              field.handleChange(
                                e.target.value === ""
                                  ? 0
                                  : Number(e.target.value),
                              )
                            }
                            onBlur={field.handleBlur}
                            aria-invalid={
                              field.state.meta.isTouched &&
                              !field.state.meta.isValid
                            }
                          />

                          {field.state.meta.isTouched &&
                            !field.state.meta.isValid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                      )}
                    </form.Field>
                  </td>

                  {/* ================= Allocated ================= */}

                  <td className="px-4 py-4">
                    <form.Field name={`distributions[${index}].allocated`}>
                      {(field) => (
                        <Field
                          data-invalid={
                            field.state.meta.isTouched &&
                            !field.state.meta.isValid
                          }
                        >
                          <FieldLabel htmlFor={field.name} className="sr-only">
                            Allocated
                          </FieldLabel>

                          <Input
                            id={field.name}
                            name={field.name}
                            type="number"
                            min={0}
                            value={field.state.value ?? ""}
                            onChange={(e) =>
                              field.handleChange(
                                e.target.value === ""
                                  ? 0
                                  : Number(e.target.value),
                              )
                            }
                            onBlur={field.handleBlur}
                            aria-invalid={
                              field.state.meta.isTouched &&
                              !field.state.meta.isValid
                            }
                          />

                          {field.state.meta.isTouched &&
                            !field.state.meta.isValid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                        </Field>
                      )}
                    </form.Field>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= Submit ================= */}

        <div className="flex justify-end">
          <Button type="submit" disabled={form.state.isSubmitting}>
            {form.state.isSubmitting ? "Distributing..." : "Distribute Power"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PowerDistribute;
