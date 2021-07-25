import React, { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthContext } from "../../hooks/auth.context";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.FunctionComponent;
}

const RouteComponent: React.FC<Props> = (props: Props) => {
  const { isLogged } = useContext(AuthContext);
  const { isPrivate, component: Component, ...rest } = props;

  if (!isLogged && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route {...rest}>
      <Component {...rest} />
    </Route>
  );
};

export default RouteComponent;
