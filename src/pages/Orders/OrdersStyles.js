import styled from "styled-components";

export const OrdersContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: #121212;
  color: #fff;
  margin-top: 90px; 

  h2 {
    margin-bottom: 2rem;
    color: #ff4d6d;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  justify-content: center; 
  gap: 2rem;
  width: 40%;
  max-width: 1200px; 
`;

export const CardOrders = styled.div`
  background-color: #4f5551;
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease; 
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 15px rgba(150, 57, 74, 0.47);
  }

  img {
     width: 270px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin: 0.5rem 0;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.3rem 0;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
`;