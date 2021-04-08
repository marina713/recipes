import styled from "styled-components";
import { colors } from "../Utils/colors";
import { onHoverHighlight } from "../Utils/animations";

export const Form = styled.form`
  min-width: 40%;
`;

export const Container = styled.div`
  margin: 20px 0 30px;

  @media only screen and (min-width: 730px) {
    .search {
      width: max-content;
    }
  }
`;

export const Title = styled.h1`
  color: ${colors.lightBlue};
  margin: 0 auto 15px;
`;

export const SubTitle = styled.h4`
  color: ${colors.lightBlue};
  margin: 0 auto 15px;
  font-weight: 300;
`;

export const Input = styled.input`
  color: ${colors.darkPink};
  font-size: 16px;
  background: transparent;
  width: 35px;
  height: 35px;
  padding: 10px;
  border: solid 3px #e207b9;
  outline: none;
  border-radius: 35px;
  transition: width 0.5s;

  &::placeholder {
    color: ${colors.darkPink};
    opacity: 0;
    transition: opacity 150ms ease-out;
  }

  &:focus::placeholder {
    opacity: 1;
  }

  &:not(:placeholder-shown) {
    width: 235px;
  }

  &:focus {
    width: 200px;
    border-color: inherit;
  }

  @media only screen and (min-width: 730px) {
    &:focus {
      width: 250px;
    }
  }
`;

export const SearchContainer = styled.div`
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 1px ${colors.lightPink});
  margin-left: 10px;

  &:after {
    content: "";
    background: ${colors.darkPink};
    width: 4px;
    height: 20px;
    position: absolute;
    top: 27px;
    transform: rotate(135deg);
  }

  &:hover {
    ${onHoverHighlight}
  }
  @media only screen and (min-width: 730px) {
    margin-left: 20px;
  }
`;
