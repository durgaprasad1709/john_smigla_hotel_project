import styled from "styled-components";

const screen = {
  phone: (...args) => `@media (min-width:576px) {
    ${args}
}`
};

export const Banner = styled.div`
  background: red;

  h1 {
    color: white;
    text-transform: uppercase;
  }

  ${screen.phone`
  background: blue;
  h1 {
color: red;
  }

  `}/* @media (min-width: 576px) {
    background: blue;

    h1 {
      color: yellow;
    }
  } */
`;
