import styled from "styled-components";

export const ServiceAdminContainer = styled.div`
  padding: 1rem;
`;

export const ServiceAdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    margin: 0;
    color: #f97316;
  }
`;

export const NewServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid #222;

  &:hover {
    border-color: #333;
  }
`;

export const ServiceImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const ServiceInfo = styled.div`
  flex: 1;

  p:first-child {
    margin: 0;
    font-weight: 500;
    color: white;
    font-size: 15px;
  }

  p:nth-child(2) {
    margin: 4px 0;
    color: #888;
    font-size: 13px;
  }

  p:last-child {
    margin: 0;
    color: #aaa;
    font-size: 14px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
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

export const DeleteButton = styled.button`
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