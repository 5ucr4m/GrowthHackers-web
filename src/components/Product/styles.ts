import styled, { css } from "styled-components";
import { Col as ColAntd } from "antd";
import { FiHeart } from "react-icons/fi";

export const Col = styled(ColAntd)`
  padding: 12px;
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 12px;
  border: 1px solid #c1e6ff;
  box-shadow: 2px 2px 10px #ddd;
`;

export const Image = styled.img`
  height: 130px;
  width: 100%;
  object-fit: contain;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #0e3854;
  height: 100px;
`;

export const Price = styled.div`
  color: #ff7c1f;
  font-weight: bold;
`;

interface IFavoriteIcon {
  isFavorite: boolean;
}

export const FavoriteIcon = styled(FiHeart)<IFavoriteIcon>`
  color: #bbb;
  font-size: 16px;

  ${({ isFavorite }) =>
    isFavorite &&
    css`
      color: red;
      fill: red;
    `}
`;
