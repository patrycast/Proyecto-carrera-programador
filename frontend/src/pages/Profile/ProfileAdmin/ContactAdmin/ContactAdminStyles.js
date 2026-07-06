import styled from "styled-components";

export const Title = styled.h1`
  color: orange;
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.p`
  color: gray;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MessageCard = styled.div`
  background: #111;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 20px;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const MessageUserInfo = styled.div`
  p {
    margin: 2px 0;
    color: white;
  }

  p:first-child {
    font-weight: bold;
    font-size: 1.05rem;
  }

  p:not(:first-child) {
    color: gray;
    font-size: 0.85rem;
  }
`;

export const MessageDate = styled.span`
  color: gray;
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const MessageBody = styled.p`
  color: #ddd;
  line-height: 1.5;
  margin-bottom: 16px;
  white-space: pre-wrap;
`;

export const MessageActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #444;
  background: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background: #2a1414;
    border-color: #e05555;
    color: #ff7a7a;
  }
`;