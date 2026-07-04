// NewServiceStyles.js
import styled from "styled-components";

export const OverlayNewService = styled.div`
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

export const ModalNewService = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 2rem;
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  color: #f97316;
  font-size: 20px;
`;

export const FieldNewService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelNewService = styled.label`
  color: white;
  font-size: 14px;
`;

export const FieldInput = styled.input`
  background: #111;
  border: 1px solid #444;
  border-radius: 8px;
  color: white;
  padding: 10px 14px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #f97316;
  }
`;

export const FieldTextarea = styled.textarea`
  background: #111;
  border: 1px solid #444;
  border-radius: 8px;
  color: white;
  padding: 10px 14px;
  font-size: 14px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #f97316;
  }
`;

export const FieldHint = styled.p`
  color: #aaa;
  font-size: 12px;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
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