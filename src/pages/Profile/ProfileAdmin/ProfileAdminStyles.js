import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #121212;
  color: #fff;
`;

export const SidebarAdmin = styled.aside`
  width: 260px;
  background: #1c1c1c;
  border-right: 1px solid #333;
  padding: 30px 20px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 40px;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #333;
  }
`;

export const MenuBtns = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItemBtn = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  margin-bottom: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "#bdbdbd")};
  background: ${({ active }) => (active ? "#2658a7" : "transparent")};
  transition: 0.3s;

  &:hover {
    background: ${({ active }) =>
      active ? "#234a87" : "#2b2b2b"};
    color: white;
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const ContentSection = styled.main`
  flex: 1;
  padding: 40px;

  @media (max-width: 900px) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const NewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background: transparent;
  color: white;

  border: 1px solid #555;
  padding: 12px 22px;
  border-radius: 12px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2c2c2c;
    border-color: #777;
  }
`;

export const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ServiceCard = styled.div`
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 18px;

  padding: 22px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #444;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const ServiceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    color: #bcbcbc;
  }
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 14px;
  background: #0f0f0f;
  border: 1px solid #2f2f2f;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: white;
`;

export const Actions = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const EditButton = styled.button`
  width: 46px;
  height: 46px;

  border-radius: 12px;
  border: 1px solid #444;

  background: transparent;
  color: white;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: #666;
  }
`;

export const DeleteButton = styled.button`
  width: 46px;
  height: 46px;

  border-radius: 12px;
  border: 1px solid #444;

  background: transparent;
  color: #ff6b6b;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  &:hover {
    background: rgba(255, 107, 107, 0.12);
    border-color: #ff6b6b;
  }
`;