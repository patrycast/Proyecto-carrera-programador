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
    min-height: 100vh;
    margin: 0 auto;
    width: 100%; 
    padding: 110px 1.5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: 20px;
    text-align: center;

  & h2 {
    max-width: 640px;
    font-size: 1.6rem;
  }

  & img{
    width: min(55%, 420px);
    height: auto;
    /* object-fit: contain;  */
    border-radius: 10px;
  }

  @media (max-width: 560px){
    & h2 {
      font-size: 1.25rem;
    }

    & img {
      width: 85%;
    }
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
