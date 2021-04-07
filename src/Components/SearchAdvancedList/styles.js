import styled from "styled-components";
import { onHoverHighlight, translate } from "../Utils/animations";

export const MoreFiltersDivCol = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;

  &.translate {
    animation: ${translate} 0.8s ease-out;
  }
`;

export const MoreFiltersDiv = styled.div`
  justify-content: center;
  display: flex;
`;

export const ShowMoreButton = styled.button`
  color: #e207b9;
  background-color: #ff63ed;
  border: 3px solid #e207b9;
  border-radius: 10px;
  min-height: 33px;
  max-width: 300px;
  align-self: center;
  margin: 2px 3%;

  &:hover {
    ${onHoverHighlight}
  }

  &.unique-button-search {
    height: 50px;
    width: 120px;
  }
`;
