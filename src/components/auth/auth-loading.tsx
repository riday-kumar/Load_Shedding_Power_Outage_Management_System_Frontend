import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AuthLoading = () => {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <DotLottieReact src="/loading.lottie" loop autoplay />
    </div>
  );
};

export default AuthLoading;
