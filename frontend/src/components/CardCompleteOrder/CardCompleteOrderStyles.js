import styled from "styled-components";

export const CompleteOrderContainer= styled.div`
    background: #131313;
    color: white;
    margin-top: 10px; 
    /* margin: 1rem; */
    padding: 1rem;
    border-radius: 10px;
    display: flex;
`;

export const CompleteOrderWrapper= styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleStyled= styled.span`
    color: white;
`;

export const DescStyled= styled.span`
    color: white;
    font-size: 0.8rem;
`;

export const PriceStyled= styled.span`
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const CardInfoStyled= styled.div`
 background-color: beige;
`;

export const ButtonsStyled= styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonStyled= styled.button`
 padding: 10px;
 background: transparent;
 /* border: 1px solid #9c979761; */
 box-shadow: 1 px 1px 3px #9c979798;
 border-radius: 5px;
 color: white;
`;

export const QtyStyled= styled.span`
    padding: 0 10px;
`;