import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

export const CartIconContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -7px;     
  right: -10px;   
  background-color: red;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 50%;  
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartIcon= styled(BsCart3)`
  color: #ff4d6d;
  font-size: 24px;
  margin-top: 7px;

  &:hover {
    color: #808083; 
    cursor: pointer;         
    transition: all 0.3s ease-in-out;
  }
`;