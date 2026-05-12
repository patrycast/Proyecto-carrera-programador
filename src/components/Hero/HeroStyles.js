import styled from "styled-components"

export const HeroContainer=styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 4rem 3rem 4rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px; 

    & h2{
        font-size: 2rem;
    }
    & h2 span{
        background: linear-gradient(135deg, #ff4d6d,  #ff9a3c,  #ffe66d,  #4ef0a0,  #4facfe,  #7b5cff,  #ff4d9d);
        background-size: 300% 300%;
        animation: gradientMove 8s ease infinite;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;   
    }

    @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
    } 

    /* -------mediaquerys------------- */
    @media( max-width: 990px){
        flex-direction: column;
        /* padding: 7rem 0; */
    }
     
`;




export const HeroText= styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.3rem;
    /* padding: 0 2rem; */
    animation: fadeUp 2s ease forwards;


/*--------------- kayframe------     */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* -------mediaquerys------------- */
    @media( max-width: 990px){
        align-items: center;
        order: 2;
    }
`;


export const HeroImg= styled.div`
animation: fadeRight 2s ease forwards;

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* -------mediaquerys------------- */
    @media( max-width: 990px){
        order: 0;
    }


`;
