import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "../../styles";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: Roboto;
  font-size: 100%;
  color: ${setColor.mainBlack};
  background: ${setColor.mainWhite};
  ${setFont.main}
}

h1 {
  font-size: 3em; 
  line-height: 1.2;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 2em; 
  margin-bottom: 0.75em;
}
h3 {
  font-size: 1.5em; 
  line-height: 1;
  margin-bottom: 1em;
}
h4 {
  font-size: 1.2em; 
  line-height: 1.2;
  margin-bottom: 1.25em;
  font-weight: bold;
}
h5 {
  font-size: 1em; 
  line-height: 1.2;
  margin-bottom: 1.5em;
  font-weight: bold;
}

h6{
  font-size: 1em; 
  font-weight: bold;
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
}
`;
