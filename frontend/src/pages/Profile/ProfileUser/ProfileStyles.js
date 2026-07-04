import styled from "styled-components";


export const ProfileContainer = styled.div`
  background: #111;
  color: white;
  padding: 40px;
  min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 22px;

  h3 {
    color: #f97316;
    margin-bottom: 20px;
    font-size: 22px;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 70%;
  background: #1f1f1f;
  border: 1px solid #393939;
  border-radius: 18px;

  padding: 20px 24px;
  margin-bottom: 18px;
  transition: all 0.3s ease;  


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;


export const DataRow = styled.div`


  width: 100%;

  background: #1f1f1f;
  border: 1px solid #393939;
  border-radius: 18px;

  padding: 20px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    border-color: #4a4a4a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  p {
    margin: 0;
    color: white;
    font-size: 1.1rem;
  }
`;


export const EditButton = styled.button`
  background: transparent;
  background: var(--linear-gradient);
  border: 1px solid #dd6a6a;
  color: #fff;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background: #e0a7a7;
    color: #000;
  }
`;

// export const ProfileCard = styled.div`
//   background: var(--bg-color);
// `;




// __________________________-editFieldModalStyles______________________________


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 30px;
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalTitle = styled.h4`
  color: #f97316;
  margin: 0;
  font-size: 18px;
`;

export const ModalInput = styled.input`
  background: #111;
  border: 1px solid #444;
  border-radius: 8px;
  color: white;
  padding: 10px 14px;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #f97316;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SaveButton = styled.button`
  flex: 1;
  background: linear-gradient(90deg, #f97316, #a855f7);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;

  &:hover {
    opacity: 0.85;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background: transparent;
  border: 1px solid #555;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    border-color: white;
  }
`;