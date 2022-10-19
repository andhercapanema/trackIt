import styled from "styled-components";

export const StyledNavBar = styled.nav`
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;

    button {
        background: none;
        color: #52b6ff;
        font-size: 18px;
        text-decoration: none;
    }
`;

export const StyledProgressbar = styled.button`
    height: 91px;
    width: 91px;
    padding: 0;
    margin-bottom: 41px;
`;
