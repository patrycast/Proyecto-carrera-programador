import styled  from "styled-components";
import { keyframes } from "styled-components";

export const ServicesSection= styled.section`
width: 1200px;
margin: 0 auto;
padding: 0 4rem;

& h2{
    margin-top: 100px;
    padding: 1rem;
    text-align: center; 

}
`;

export const ServicesContainer= styled.div`
/* width:1100px; */
/* margin: 0 auto; */
/* padding: 0 4rem; */

display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 12px;

`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(230px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ServiceCardStyled= styled.div`
background-color: #040404e1;
box-shadow: 0 0 10px rgba(159, 152, 152, 0.6);
border-radius: 8px;
display: flex;
flex-direction: column; justify-content: space-between;
gap: 15px;
padding: 2rem; 

animation: ${fadeInUp} 2.3s ease-out forwards;
  opacity: 0;

&h3{
    min-height: 70px;
}

& span{
    color: #ff4d6d;
    background: linear-gradient(45deg, #c7ff4d, #df5505);;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-size: 1.2rem;
}
& img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 9px;
}
`;
