import styled from 'styled-components';
import loginImg from "../../assets/img/login.png";

export const LoginContainer = styled.section` 
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  color: var(--white);  
  /* padding: 2.6rem;  */
  
  h2{
    margin-top: 100px;
    padding: 1rem;
    text-align: center;
  }
`;

export const ContainerImgForm = styled.div`
  width: min(800px, 92%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #444;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  border-radius: 10px;
  gap: 2rem;
  padding: 1.5rem 1rem; 

  @media (max-width: 700px){
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ContainerImg= styled.div`
  background-image: url(${loginImg});
  background-size: cover;
  background-position: center;
  height: 180px;
  width: 180px;
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  filter: grayscale(100%);

  @media (max-width: 700px){
    order: 2;
    height: 120px;
    width: 120px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 20px;
  width: 100%;
  max-width: 320px;

  @media (max-width: 700px){
    padding: 0 0.5rem;
  }
`;

export const InputStyled= styled.input`
  border: 1px solid; 
  font-size: 18px;
  border-color: ${({error}) => error ? "var(--p-error)" : "var(--input-borderColor)"};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  max-width: 250px;
  background: var(--background-input);
  color:var(--text-white);
  outline: none;
`;


export const PError = styled.p`
  color: var(--p-error);
  font-size: 0.9rem;
  max-width: 260px;

`;

export const BtnRegister =styled.span`
  background: var(--linear-gradient-yellow);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
      background: pink;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease-in-out;
      transform: scale(0.99);
    }
`;
