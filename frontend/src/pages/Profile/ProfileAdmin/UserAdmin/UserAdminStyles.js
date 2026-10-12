import styled from "styled-components";

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #121212; 
  min-height: 100vh;
  color: #ffffff;

  h2 {
    text-align: left;
  }

  @media (max-width: 900px) {
    padding: 10px;
    min-height: auto;
  }
`;

export const UsersTableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const UsersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    min-width: 720px;
    white-space: nowrap;
  }
`;

export const TableHeader = styled.th`
  background-color: #2a2a2a;
  color: #aeaeae;
  padding: 14px 20px;
  text-align: left;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #333; 
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #2a2a2a;
  transition: background-color 0.2s ease; 

  &:hover {
    background-color: #252525;
  }
`;

export const TableData = styled.td`
  padding: 16px 20px;
  color: #e0e0e0;
  font-size: 0.95rem;
  vertical-align: middle;

  strong {
    color: #ff7b00;
    background-color: rgba(255, 123, 0, 0.1);
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.85rem;
  }
`;

export const ActionButtonEdit = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid #444;
  color: #ccc;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    border-color: #f97316;
    color: #f97316;
  }
`;

export const ActionButtonDelete = styled.button`
display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid #444;
  color: #ccc;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    border-color: #ef4444;
    color: #ef4444;
  }
`;


export const EditModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.form`
  background-color: #181818;
  border: 1px solid #2a2a2a;
  padding: 30px;
  border-radius: 16px;
  width: min(500px, 92%);
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 560px) {
    padding: 20px;
  }

  h3 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 10px;
  }

  label {
    font-size: 0.85rem;
    color: #aeaeae;
    margin-bottom: -10px;
  }
`;

export const InputField = styled.input`
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ff7b00;
  }
`;

export const SelectField = styled.select`
  background-color: #222;
  border: 1px solid #333;
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #ff7b00;
  }

  option {
    background-color: #181818;
    color: #fff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 15px;
  width: 100%;


  button[type="submit"] {
    background: linear-gradient(45deg, #ff7b00, #ff007f);
    color: #ccc;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
   
    transition: transform 0.2s, opacity 0.2s; 

    &:hover {
      transform: translateY(-2px);
      opacity: 0.9;
       border-color: #f97316;
    color: #f97316;
    }
  }


  button[type="button"] {
    background-color: transparent;
    color: #aeaeae;
    border: 1px solid #333;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    /* gap: 10px; */

    &:hover {
      background-color: #222;
      color: #fff;
    }
  }
`;