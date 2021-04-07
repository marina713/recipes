import styled from "styled-components";
import { onHoverHighlight } from "../Utils/animations";

export const LatestSearchesButton = styled.button`
  background-color: #17d9c3;
  color: #007ea8;
  margin-left: 3px;
  border-radius: 7px;
  font-size: small;

  &:hover {
    ${onHoverHighlight}
  }
`;

export const LatestSearchesTitle = styled.span`
  color: #17d9c3;
  font-size: small;
  align-self: center;
  margin-right: 5px;
  width: min-content;
`;

export const LatestSearchesDiv = styled.div`
  align-self: center;
  display: flex;
`;
