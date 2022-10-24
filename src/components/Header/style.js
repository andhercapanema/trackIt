import styled from "styled-components";

export const StyledHeader = styled.header`
    background: #126ba5;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    h1 {
        font-family: "Playball", cursive;
        font-size: 39px;
        line-height: 49px;
        color: #fff;
        cursor: pointer;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;
