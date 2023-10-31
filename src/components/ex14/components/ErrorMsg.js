import { styled } from "styled-components";

const Msg = styled.span`
  color: crimson;
  margin-top: 5px;
`;

export const ErrorMsg = ({ message }) => {
  return <Msg>{message}</Msg>;
};
