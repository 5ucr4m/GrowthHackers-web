import React, { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../../hooks/auth.context";

export const Logout: React.FC = () => {
  const { isLogged, logout } = useContext(AuthContext);

  if (!isLogged) {
    return null;
  }

  return (
    <Button ghost onClick={logout} style={{ border: 0 }}>
      Sair
    </Button>
  );
};
