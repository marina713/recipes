import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  background-color: #007ea8;
  margin: 10px 0 30px;
  padding: 0 4%;

  &.column {
    flex-direction: column;
    width: fit-content;
    margin: 10px 15px 20px;
  }
`;
