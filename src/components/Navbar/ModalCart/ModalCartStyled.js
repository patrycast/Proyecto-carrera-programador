import styled, { keyframes}  from "styled-components";
import { MdOutlineClose } from "react-icons/md";


export const ModalContainer= styled.section`
/* max-width: 400px; 
margin: 0 auto; 
padding: 20px; 
background: #fff; 
border-radius: 12px; 
box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
display: flex; 
flex-direction: column; 
height: 100%;  */

`;


export const Overlay = styled.div` 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh; 
    background: rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(4px); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    z-index: 1000;  
 
    `;

const slideInRight = keyframes` 
    from { 
        transform: translateX(100%); 
        opacity: 0; 
    } to { 
        transform: translateX(0); 
        opacity: 1; 
        } `; 

export const ModalContent= styled.div`
    display: flex; 
    flex-direction: column;
    position: fixed; 
    top:0; 
    right: 0px; 
    width: 400px; 
    height: 100vh;
    background: #2b2b2b;
    border: 1px solid #454444; 
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 2000;
    animation: ${slideInRight} 0.5s ease forwards;
    overflow-y: auto;    
`;

export const ButtonsContainer=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`;

export const DivCloseButton= styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    border: 1px solid #cfcccc;
    padding: 3px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
    }

`;

export const DivTrashButton= styled.span`
    width: 32px;
    height: 32px;
    color: var(--color-links);
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.66);
    padding: 3px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
    }

`;

export const ClosedButton= styled(MdOutlineClose)`
    font-size: 24px;
    color: var( --color-links);
`;

export const DivTotales = styled.div`
    margin: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.66);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;


export const PEmptyCart = styled.span`
    margin: 1rem 0; 
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`;




// _________________________modalCartCard_____________________

export const ModalCartContainer= styled.div`
    /* background:  inherit; */
    padding: 1rem;
    margin-top: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.66);
    /* background: white; */

    & h3{
        font-size: 1rem;
    }
`;


export const DescSpan= styled.span`
    font-size: 0.9rem;
    color: var(--color-desc);
`;


export const QtyButton= styled.button`
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    background: inherit;
    color: #787474;
    border: 1px solid #38373730;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.66);
    /* color: var(--white); */
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
    }
`;


export const QtySpan= styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 15px;
    /* color: var(--linear-gradient-yellow); */
`;