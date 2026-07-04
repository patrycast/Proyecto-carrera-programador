import styled from "styled-components";

export const ContactContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 2rem;

  h2{
    /* padding:  86px 0 0px 0; */
    text-align: center;
    padding-top: 84px;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputStyled = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${({ error }) => (error ? "#ff4d4d" : "#ccc")};
  outline: none;
  font-size: 1rem;
  background: var(--background-input);
  color: var(--text-white);

  &:focus {
    border-color: #ff7a18;
  }
`;

export const TextAreaStyled = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${({ error }) => (error ? "#ff4d4d" : "#ccc")};
  outline: none;
  font-size: 1rem;
  min-height: 120px;
  resize: none;
  background: var(--background-input);
  color: var(--text-white);

  &:focus {
    border-color: #ff7a18;
  }
`;

export const PError = styled.p`
  color: #ff4d4d;
  font-size: 0.85rem;
  margin-top: -10px;
`;


// export const DivImg = styled.div`
//   position: absolute;
//   right: 300px;
//   top: 100px;
// `;
