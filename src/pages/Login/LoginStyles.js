import styled from 'styled-components';
// import { Form as FormikForm } from 'formik';

export const LoginContainer = styled.section` 
  width: 100%;
  max-width: 1200px;
  height: auto;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--white); 
  
  h2{
    margin-top: 100px;
    padding: 1rem;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 20px;  
`;

export const InputStyled= styled.input`
  border: 1px solid; 
  font-size: 18px;
  border-color: ${({error}) => error ? "var(--p-error)" : "var(--input-borderColor)"};
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  background: var(--background-input);
  color:var(--text-white);
  outline: none;
`;


export const PError = styled.p`
  color: var(--p-error);
  font-size: 0.9rem;

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
