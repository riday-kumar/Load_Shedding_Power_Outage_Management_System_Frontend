import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>this is header</p>
      {children}
      <p>this is footer</p>
    </div>
  );
};

export default layout;
