import styled from "styled-components";

export const ButtonStyled= styled.button`
    margin-top: 20px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    color: var(--text-white);
    font-size: 1rem;
    font-weight: 600;
    display: inline-flex;
    padding: 0.7rem 0.8rem;
    width: fit-content;
    border-radius: 9px;
    cursor: pointer;
    background: var(--btn-linear-gradient);
    transition: all 0.3s ease-in-out;

    &:hover {
        background: var(--linear-gradient-yellow);
        transition: all 0.3s ease-in-out;
        transform: scale(0.96);
        color: #fff;
    }
`;


