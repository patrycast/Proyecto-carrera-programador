import styled from 'styled-components';


export const RegisterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 100px;
  color: var(--white);

  h2{
    padding: 1rem;
  }
`;



export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 10px;
`;


export const InputStyled= styled.input`
  border: 1px solid; 
  font-size: 16px;
  border-color: ${({error}) => error ? "var(--p-error)" : "var(--input-borderColor)"};
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  background: transparent;
  color: var(--white);
  outline: none;
`;


export const PError = styled.p`
  color: var(--p-error);
  font-size: 0.9rem;

`;

export const BtnLogin =styled.span`
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

