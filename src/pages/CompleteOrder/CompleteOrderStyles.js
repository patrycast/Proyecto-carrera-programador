import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  /* background: #0f0f0f; */
  color: white;
  min-height: 100vh;
  gap: 4rem;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  margin-bottom: 2rem ;
  margin-top: 100px;

`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #131313;
  color: white;
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  background: var(--btn-linear-gradient);
  color: white;
  font-weight: bold;
`;
