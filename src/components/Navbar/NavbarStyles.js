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
    width: 100vw;
    height: 90px;
    z-index: 100;

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
`;

export const UlList= styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 990px){
        background-color: red;
        display: none;

    }
`;

// export const RouterLink= styled(Link)`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 5px;
//     padding: 10px 20px;
//     background-color: ${props => props.active ? '#d7cdcd09' : '' };
//     border-radius: 8px;

//     & svg{
//         color: var(--color-links);
//         font-size: 1.3rem;
//     }
//     &:hover {
//     color: #808083; 
//     cursor: pointer;         
//     transition: all 0.3s ease-in-out;
//     }
    
//     &img:hover{
//         transform: rotate(360deg);
//     }


// `;

export const DivIcons= styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
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
        color: red;
        font-size: 1.5rem;
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
    flex-shrink: 0; /* evita que el ícono se achique */
  }

  span {
    color: #e71515;
    font-size: 0.9rem;
    line-height: 1; /* evita que el texto se apile */
  }

  &:hover {
    color: #808083;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
