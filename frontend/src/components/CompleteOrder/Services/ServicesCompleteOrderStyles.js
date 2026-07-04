import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 2rem ;
  margin-top: 100px;

`;

export const OrderCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #1c1c1c;
  padding: 1rem;
  border-radius: 12px; 

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const OrderInfo = styled.div`
  flex: 1;

  h4 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: gray;
  }

  span {
    font-weight: 500;
    color: #fff;
  }
`;

export const Totals = styled.div`
   background: #131313;
    color: white;
    margin-top: 10px; 
    padding: 0.5rem 1rem;
    border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

export const Total = styled(Row)`
  margin-top: 1rem;

  span {
    color: #ff7a18;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;