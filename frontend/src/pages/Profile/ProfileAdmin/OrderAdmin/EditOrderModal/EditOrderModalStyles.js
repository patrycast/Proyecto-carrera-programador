import styled from "styled-components";


export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  max-height: 85vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    color: white;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: gray;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const ClientInfo = styled.div`
  margin-bottom: 20px;

  p {
    margin: 2px 0;
    color: white;
  }

  p:last-child {
    color: gray;
    font-size: 0.85rem;
  }
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
`;

export const ItemInfo = styled.div`
  flex: 1;

  p {
    color: white;
    margin: 0;
  }

  span {
    color: gray;
    font-size: 0.8rem;
  }
`;

export const QuantityInput = styled.input`
  width: 60px;
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #444;
  background: #111;
  color: white;
  text-align: center;
`;

export const ItemSubtotal = styled.span`
  color: orange;
  font-weight: bold;
  min-width: 80px;
  text-align: right;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e05555;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: #ff7a7a;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #333;
  color: white;

  strong {
    color: orange;
    font-size: 1.2rem;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

export const CancelButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #444;
  background: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background: #222;
  }
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: orange;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;