import styled, { css } from "styled-components";

export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    img {
        margin-top: 68px;
        margin-bottom: 33px;
    }

    p {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52b6ff;
        cursor: pointer;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin-bottom: 6px;

        ${({ isLoading }) =>
            isLoading &&
            css`
                background: #f2f2f2;
                color: #afafaf;
            `}
    }

    button {
        margin-bottom: 25px;
        height: 45px;
        width: 303px;

        font-size: 21px;

        ${({ isLoading }) =>
            isLoading &&
            css`
                opacity: 0.7;
                cursor: default;
            `}
    }
`;
