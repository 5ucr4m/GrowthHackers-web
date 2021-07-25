import React, { useContext } from "react";
import { AuthContext } from "../../hooks/auth.context";

import { FavoriteIcon } from "./styles";

interface Iprops {
  isFavorite: boolean;
  toogleFavorite: () => void;
}

const FavoriteIconComponent: React.FC<Iprops> = ({
  isFavorite = false,
  toogleFavorite,
}) => {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return null;
  }

  return (
    <div onClick={toogleFavorite}>
      <FavoriteIcon cursor="pointer" isFavorite={Boolean(isFavorite)} />
    </div>
  );
};

export default FavoriteIconComponent;
