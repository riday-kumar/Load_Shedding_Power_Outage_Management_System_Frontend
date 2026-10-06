import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="underline text-green-primary font-bold text-2xl md:text-3xl lg:text-4xl text-center">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
