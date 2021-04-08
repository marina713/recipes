import styled, { css } from "styled-components";
import { colors } from "../../Utils/colors";

export const Container = styled.div`
  margin: 2px 2px;
`;

export const Title = styled.button`
  background: ${colors.lightBlue};
  box-shadow: 0 0 1px 0 rgb(8 11 14 / 6%), 0 6px 6px -1px rgb(8 11 14 / 10%);
  border-radius: 1000rem;
  padding: 5px 10px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 800;
  color: ${colors.darkBlue};
  border: none;
  cursor: pointer;
  align-items: center;
  margin: 5px;
  align-self: center;
  width: 8em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &:hover {
    background: ${colors.lightBlue};
    filter: brightness(110%);
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.lightBlue};
  color: ${colors.darkBlue};
  border-radius: 10px;
  width: 7em;
  max-height: 7em;
  overflow: scroll;
  z-index: 3000;
  position: absolute;
  margin: 0 5px;
  box-shadow: 0 0 1px 0 rgb(8 11 14 / 6%), 0 6px 6px -1px rgb(8 11 14 / 10%);
`;

const selectedItem = css`
  background: ${colors.lightPink};
  color: ${colors.darkPink};
  width: 100%;
  border-radius: 5px;
`;

export const Item = styled.button`
  color: inherit;

  &:hover {
    ${selectedItem}
  }
  ${(props) => (props.isSelected ? selectedItem : null)}
`;
