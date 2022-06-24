import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Panel: FC<IProps> = (props) => {
  return (
    <div className={`p-8 md:p-14 ${props.className}`}>{props.children}</div>
  );
};

export default Panel;
