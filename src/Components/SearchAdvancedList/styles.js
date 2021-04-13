import styled from "styled-components";
import { onHoverHighlight, translate } from "../Utils/animations";
import { colors } from "../Utils/colors";

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
  color: ${colors.darkPink};
  background-color: ${colors.lightPink};
  border: 3px solid ${colors.darkPink};
  border-radius: 10px;
  min-height: 33px;
  max-width: 300px;
  align-self: center;
  margin: 2px 3%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ${onHoverHighlight}
  }

  &.unique-button-search {
    height: 50px;
    width: 120px;
  }
`;

export const UList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5px;
`;

export const ShowMoreIcon = styled.img`
  filter: invert(17%) sepia(91%) saturate(4096%) hue-rotate(300deg)
    brightness(94%) contrast(109%);
  width: 17px;
  margin-right: 7px;
`;
