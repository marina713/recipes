import styled from "styled-components";
import { shaking } from "../Utils/animations";
import { colors } from "../Utils/colors";

export const Content = styled.div`
  color: ${colors.darkOrange};
`;

export const LogoContainer = styled.div`
  ${shaking}
`;
