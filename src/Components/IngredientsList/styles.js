import styled from "styled-components";
import { colors } from "../Utils/colors";

export const Container = styled.ul`
  height: 100px;
  overflow: scroll;
  color: #fae476;
  margin-top: 5px;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: small;
  color: ${colors.darkOrange};
  border-radius: 10px;
  box-shadow: 0 0 1px 0 rgb(8 11 14 / 6%), 0 6px 6px -1px rgb(8 11 14 / 10%);
  padding: 5px;
`;
