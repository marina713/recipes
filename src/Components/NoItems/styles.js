import styled from "styled-components";
import { shaking } from "../Utils/animations";
import { colors } from "../Utils/colors";

export const Content = styled.div`
  color: ${colors.darkOrange};
  font-size: 14px;
`;

export const LogoContainer = styled.div`
  ${shaking}
`;

export const HighlightedText = styled.span`
  color: ${colors.yellow};
  background-color: ${colors.darkOrange};
  padding: 4px 6px;
  border-radius: 15px;
`;
