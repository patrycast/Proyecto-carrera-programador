import styled from "styled-components";
import { Button } from "../../components/shared/Button/Button";

export const FelicitacionesContainer= styled.section`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center; 
    background: #010001;
  backdrop-filter: blur(8px);     
  -webkit-backdrop-filter: blur(8px)
`

export const ImgWrapper = styled.div`
    height: 100vh;
    margin: 0 auto;
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center; 

  & img{
    width: 55%;
    height:55%;
  /* object-fit: contain;  */
    border-radius: 10px;
  }
`;

export const ButtonStyled=styled(Button)`
    padding-bottom: 20px;
    background: red;
 /* position: absolute;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%); */
`;
