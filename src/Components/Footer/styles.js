import styled from "styled-components";
import { colors } from "../Utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.lightOrange};
  margin-top: 20px;
  justify-content: space-around;
`;

export const Content = styled.p`
  color: ${colors.darkOrange};
  font-size: small;
  margin: 8px;
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 30px;
  margin: 0 8px 5px;
  filter: sepia(100%) opacity(100%);

  &:hover {
    filter: grayscale(0);
    cursor: pointer;
  }
`;

export const Link = styled.a``;
