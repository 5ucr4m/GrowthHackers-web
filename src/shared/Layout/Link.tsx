import React, { useContext } from "react";
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../hooks/auth.context";

interface IProps {
  to: string;
}

export const Link: React.FC<IProps> = ({ to, children }) => {
  const { pathname } = useLocation();
  const { isLogged } = useContext(AuthContext);

  if (pathname === to || !isLogged) {
    return null;
  }

  return (
    <Button href={to} ghost style={{ border: 0 }}>
      {children}
    </Button>
  );
};
