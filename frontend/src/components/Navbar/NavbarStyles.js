import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonPlus } from "react-icons/bs";
import { FaUserMinus } from "react-icons/fa6";


export const HeaderContainer= styled.header`
    background-color: var(--nav-color);
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    z-index: 1000;

    @media (max-width: 990px){
        padding: 0.75rem 1.25rem;
    }
`;

export const HeaderActions= styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 990px){
        gap: 16px;
    }
`;

export const UserContainer= styled.div`
  position: relative;
`;
export const DropDownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: -40px;
  min-width: 150px;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 10px;
  z-index: 999;

  display: flex;
  flex-direction: column;
  gap: 10px;

  a,
  button {
    background: none;
    border: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
    text-align: left;
    font-size: 16px;
  }

  a:hover,
  button:hover {
    color: #ff4d6d;
  }

  @media (max-width: 990px){
    right: 0;
    left: 0;
    top: 48px;
  }
`;

export const ImgLogo= styled.img`
    height: 75px;
    border-radius: 50%; 
    display: flex; 
    align-items: center;
    transition: transform 1.5s ease;
  transform-style: preserve-3d;

  &:hover {
    /* transform: rotateY(180deg); */
    transform: scale(0.9);
  }

  @media (max-width: 990px){
    height: 58px;
  }
`;

export const UlList= styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 990px){
        display: ${({ $open }) => ($open ? "flex" : "none")};
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 6px;
        position: fixed;
        top: 90px;
        left: 0;
        width: 100%;
        max-height: calc(100vh - 90px);
        overflow-y: auto;
        padding: 1.25rem;
        background-color: #0d0d0d;
        border-top: 1px solid #333;
        box-shadow: 0 16px 30px rgba(0, 0, 0, 0.55);
    }
`;

export const DivIcons= styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 990px){
        width: 100%;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #333;
    }
`;

export const LoginIcon= styled(BsPersonPlus)`
    color: #ff4d6d;
    font-size: 25px;

  &:hover {
    color: #808083; 
    cursor: pointer;         
    transition: all 0.3s ease-in-out;
  }

`;

export const LogOutIcon= styled(FaUserMinus)`
    color: #ff4d6d;
    font-size: 25px;

  &:hover {
    color: #808083; 
    cursor: pointer;         
    transition: all 0.3s ease-in-out;
  }

`;

export const UserInfo= styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    span {
    font-size: 0.9rem;
    color: #e71515;
     background-color: ${props => props.active ? '#d7cdcd09' : '' };
     
  }
`;

export const Menu= styled.div`
    display: none;

    @media (max-width: 990px){
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff4d6d;
        font-size: 1.6rem;
        cursor: pointer;
    }

`;




export const RouterLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#d7cdcd09' : 'transparent')};

  svg {
    color: var(--color-links);
    font-size: 1.4rem;
    flex-shrink: 0; 
  }

  span {
    color: #e71515;
    font-size: 0.9rem;
    line-height: 1; 
  }

  &:hover {
    color: #808083;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
