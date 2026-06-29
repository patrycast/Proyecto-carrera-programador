import styled from "styled-components";
import { keyframes } from "styled-components";

export const AboutMeContainer = styled.section`
max-width: 1200px;
margin: 0 auto;
padding:0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: var(--white);  
  
  h2 {
    padding: 1rem;
    margin-top: 100px;
    text-align: center;
  }
`;

export const AboutMeContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


export const AboutMeText = styled.div`
  max-width: 60%;
  flex: 1;
  animation: ${fadeInLeft} 2.2s ease forwards;
  color: var(--white);

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  `;


const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



export const AboutMeImg = styled.img`
  width: 35%;
  border-radius: 8px;

  flex: 1;
  max-width: 400px;
  border-radius: 10px;
  animation: ${fadeInRight} 2.2s ease forwards;
`;