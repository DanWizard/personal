import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px;
  border: none;
  background: #efefef;
  text-align: center;
  &:focus {
    outline: ${({ r }) => {
      return r && "none";
    }};
    cursor: ${({ r }) => {
      return r && "auto";
    }};
  }

  &:hover {
    cursor: ${({ r }) => {
      return r && "auto";
    }};
  }
`;
