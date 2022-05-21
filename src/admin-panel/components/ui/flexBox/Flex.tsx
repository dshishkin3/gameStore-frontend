import { FC, ReactNode } from "react";

interface IFlexProps {
  children: ReactNode;
}

const Flex: FC<IFlexProps> = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

export default Flex;
