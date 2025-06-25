import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="border-2 border-[#9e8668] rounded-full h-40 w-40">          
          <DotLottieReact
              src="https://lottie.host/ad044240-f505-4c8c-8ecb-a84cd366299e/Tyrpnfe2d5.lottie"
              loop
              autoplay
            />
        </div>
      </div>
    )
  );
};

export default Loader;
