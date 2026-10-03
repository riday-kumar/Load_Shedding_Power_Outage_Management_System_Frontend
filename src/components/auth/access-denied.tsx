import Link from "next/link";
import { ArrowLeft, Home, ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";

export default function AccessDenied() {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="bg-black flex flex-col flex-1 justify-center items-center">
      <div>
        <DotLottieReact src="/forbidden.lottie" loop autoplay />
        <h1 className="text-center font-bold text-4xl animate-pulse text-red-primary">
          403 Forbidden
        </h1>
      </div>
      <div>
        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            className="flex items-center gap-1 bg-green-primary text-white"
            onClick={handleGoBack}
            nativeButton={true}
            variant="outline"
          >
            <ArrowLeft />
            Go Back
          </Button>

          <Button nativeButton={true} className="bg-green-primary">
            <Link href="/" className="text-white flex items-center gap-1">
              <Home />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
