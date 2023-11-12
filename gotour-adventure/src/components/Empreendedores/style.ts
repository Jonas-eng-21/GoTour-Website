import { styled } from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  .Ponto {
    height: 50%;
    width: 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  padding-right: 2%;
  padding: 30px;

  h1{
    font-size: 2em;    
    text-align: right;
  }
  p{
    font-size: 1em;
    text-align: justify;
  }
`;
