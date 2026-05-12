import styled from 'styled-components';

export const ButtonSubmit = styled.button`
  padding: 0.8rem 1rem;
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  background: var(--btn-linear-gradient);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--linear-gradient-yellow);
    transition: all 0.3s ease-in-out;
     transform: scale(0.99);
  }
`;