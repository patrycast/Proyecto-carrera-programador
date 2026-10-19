import styled from "styled-components"

export const FooterContainer=styled.footer`
    background-color: #333;
    background: var(--nav-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 2rem;
    margin-top: 2rem;

    a {
        color: inherit;
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;