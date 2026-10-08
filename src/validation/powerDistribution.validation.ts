import { z } from "zod";

export const powerDistributionSchema = z
  .object({
    expected_need: z.number().min(1, "Expected need is required"),
    allocated: z.number().min(0, "Allocated power is required"),
    distributor_id: z.string().min(1, "Distributor is required"),
  })
  .refine((data) => data.allocated <= data.expected_need, {
    message: "Allocated power cannot exceed expected need",
    path: ["allocated"],
  });

export const formSchema = z.object({
  distributions: z.array(powerDistributionSchema),
});
