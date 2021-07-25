import styled from "styled-components";
import { Row as RowAntd, Col as ColAntd } from "antd";

export const Logo = styled.div`
  height: 100px;
  width: 90px;
  background-color: red;
  margin-top: 20px;
`;

export const Row = styled(RowAntd)`
  margin: 0 20px;
`;

export const Col = styled(ColAntd)`
  color: white;
  text-align: end;
`;
