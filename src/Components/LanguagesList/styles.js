import styled from "styled-components";
import { onHoverHighlight } from "../Utils/animations";

export const Container = styled.div`
  align-self: flex-end;
  padding-right: 3%;
`;

export const Image = styled.img`
  padding: 0 3px;
  width: 35px;

  &:hover {
    ${onHoverHighlight}
  }
`;
