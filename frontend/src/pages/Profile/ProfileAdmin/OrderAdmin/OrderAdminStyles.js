import styled from "styled-components";

export const OrdersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OrderCard = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid #333;
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const OrderUserInfo = styled.div`
  p:first-child {
    margin: 0;
    font-weight: 500;
    color: white;
  }
  p:last-child {
    margin: 0;
    color: #aaa;
    font-size: 13px;
  }
`;

export const OrderTotal = styled.p`
  margin: 0;
  color: #f97316;
  font-weight: bold;
`;

export const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const OrderItemImg = styled.img`
  width: 60px;
  height: 60px;
  gap: 20px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`;

export const OrderItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 120px;
  p:first-child {
    margin: 0;
    font-size: 14px;
    color: white;
  }
  p:last-child {
    margin: 0;
    font-size: 12px;
    color: #aaa;
  }
`;

export const OrderActions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

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

export const Title = styled.h2`
  color: #f97316;
  margin-bottom: 1.5rem;
`;

export const EmptyMessage = styled.p`
  color: #aaa;
`;