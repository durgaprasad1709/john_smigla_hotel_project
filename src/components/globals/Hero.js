import styled from "styled-components";
import homeImg from "../../images/homeBcg.jpeg";
import { setBackground, setFlex } from "../../styles";

const Hero = styled.header`
  min-height: 100vh;
  ${setFlex()}; 
  ${({ img }) => setBackground({ img, color: "rgba(0,0,0,0.5)" })};
  

  /* ${setBackground()}; */
  /* ${({ img }) => setBackground({ img })} */
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ img }) => img || homeImg}) center/cover fixed no-repeat; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  
`;

export default Hero;
