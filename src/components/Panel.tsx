import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Panel: FC<IProps> = (props) => {
  return (
    <div className={`md:p-14 p-8 ${props.className}`}>{props.children}</div>
  );
};

export default Panel;
