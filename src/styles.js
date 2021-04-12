import { colors } from "./Components/Utils/colors";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: ${colors.yellow};
  font-family: "Lexend", sans-serif;
`;

export const FlexContainer = styled.div`
  color: ${colors.darkPink};
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
