import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPersonPlus } from "react-icons/bs";


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

export const RouterLink= styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    background-color: ${props => props.active ? '#d7cdcd09' : '' };
    border-radius: 8px;

    & svg{
        color: var(--color-links);
        font-size: 1.3rem;
    }
    &:hover {
    color: #808083; 
    cursor: pointer;         
    transition: all 0.3s ease-in-out;
    }
    
    &img:hover{
        transform: rotate(360deg);
    }


`;

export const DivIcons= styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
`;

export const LoginLink= styled(BsPersonPlus)`
    color: #ff4d6d;
    font-size: 25px;

  &:hover {
    color: #808083; 
    cursor: pointer;         
    transition: all 0.3s ease-in-out;
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