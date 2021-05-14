import styled from "styled-components";

export const BasicInput = styled.input.attrs(({ type = "text" }) => ({
  type: type,
  placeholder: "Enter value"
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;

  :hover {
    border: 1px solid blue;
  }

  ::placeholder {
    color: red;
  }
`;

export const AwesomeNumber = styled.input.attrs(({ type = "number" }) => ({
  type,
  placeholder: "Enter value"
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
