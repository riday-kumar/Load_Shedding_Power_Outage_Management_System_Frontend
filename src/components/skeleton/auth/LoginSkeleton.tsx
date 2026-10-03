import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";

export function LoginSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <Skeleton className="mx-auto h-6 w-48" />
          <Skeleton className="mx-auto mt-2 h-4 w-72" />
        </CardHeader>

        <CardContent>
          <FieldGroup>
            {/* Email */}
            <Field>
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-9 w-full" />
            </Field>

            {/* Password header */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-32" />
            </div>

            {/* Password */}
            <Field>
              <Skeleton className="h-9 w-full" />
            </Field>

            {/* Login */}
            <Field>
              <Skeleton className="h-9 w-full" />
            </Field>
          </FieldGroup>

          <div className="mt-4 space-y-2">
            {/* Google */}
            <Skeleton className="h-9 w-full" />

            {/* Register */}
            <div className="flex justify-center">
              <Skeleton className="h-4 w-64" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginSkeleton;
