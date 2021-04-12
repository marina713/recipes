import styled, { css } from "styled-components";
import { spin, blacked } from "../Utils/animations";
import { colors } from "../Utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.darkBlue};
  padding: 10px 30px;
`;

const small = css`
  width: 20%;
`;

const fast = css`
  animation-duration: 1s;
`;

export const AppLogo = styled.img`
  max-width: 25%;
  animation: ${(props) =>
      props.doSpin ? (props.isReverse ? spin(360, 0) : spin(0, 360)) : null}
    infinite 5000ms linear;

  ${(props) => (props.isBlacked ? blacked : null)}
  ${(props) => (props.small ? small : null)}
  ${(props) => (props.fast ? fast : null)}

  &:hover {
    animation: none;
    transform: scale(1.2);
  }

  @media only screen and (min-width: 500px) {
    max-width: 25%;
  }
  @media only screen and (min-width: 700px) {
    max-width: 20vh;
  }
`;

export const Title = styled.h1`
  margin: 0 7px;
  font-size: 1.6em;

  @media only screen and (min-width: 500px) {
    margin: 20px 15px;
    font-size: 3em;
  }
`;
