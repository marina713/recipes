import styled from "styled-components";
import { colors } from "../Utils/colors";

export const Container = styled.div`
  background-color: ${colors.yellow};
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 18px;
  width: 18em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 9px 0px #312f282b;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.a`
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
  width: fit-content;
  align-self: center;
`;

export const Title = styled.div`
  font-weight: 800;
  color: ${colors.darkOrange};
  padding-bottom: 10px;
  font-size: 1.3em;
  height: 62px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 8%;
  width: 90%;
  height: auto;
  margin-bottom: 5px;
`;

export const ImageContainer = styled.a`
  width: inherit;
`;
