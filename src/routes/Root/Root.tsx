import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Bar } from "../../components/Bar/Bar";

type Props = {};

const Root = (props: Props): ReactElement => {
  return (
    <div>
      <Bar />
      <Outlet />
    </div>
  );
};

export default Root;
