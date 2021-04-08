import { css, keyframes } from "styled-components";

export const translate = keyframes`
  from {
    transform: translate(200px);
    transform-origin: right center;
  }
  to {
    transform: scale(1);
  }
`;

export const onHoverHighlight = css`
  filter: brightness(120%);
  transform: scale(1.2);
  transition: ease-in 0.2s;
`;

export const spin = (init, final) => keyframes`
  from {
    transform: rotate(${init}deg);
  }
  to {
    transform: rotate(${final}deg);
  }
`;

export const blacked = css`
  filter: grayscale(0.9);
  transform: rotate(160deg);
`;
