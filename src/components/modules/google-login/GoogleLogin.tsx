"use client";
import { toast } from "@/components/ui/toast";
import { useGoogleLogin } from "@/hooks";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { FetchError } from "ofetch";

const GoogleLoginComponent = () => {
  const { mutate: googleLogin } = useGoogleLogin();
  const router = useRouter();

  const handleGoogleLogin = (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;
    // console.log("id token", idToken);

    if (!idToken) {
      toast.add({
        title: "Google Login Failed",
        description: "Something Went Wrong. Please Try Again!",
        type: "error",
      });
      return;
    }

    googleLogin(
      { idToken },
      {
        onSuccess: (res) => {
          toast.add({
            title: "Google Login Successful",
            description: "Welcome Back",
            type: "success",
          });
          router.push("/");
        },
        onError: (err) => {
          let errorMsg;
          if (err instanceof FetchError) {
            errorMsg = err?.data?.message;
          }
          toast.add({
            title: "Google Login Failed",
            description: errorMsg || "Something Went Wrong. Please Try Again!",
            type: "error",
          });
        },
      },
    );
  };

  return (
    <GoogleLogin theme="outline" shape="circle" onSuccess={handleGoogleLogin} />
  );
};

export default GoogleLoginComponent;
