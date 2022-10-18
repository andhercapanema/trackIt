import styled, { css } from "styled-components";

export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

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

    button {
        margin-bottom: 25px;
        height: 45px;
        width: 303px;

        font-size: 21px;
    }
`;

export const LoginInput = styled.input`
    margin-bottom: 6px;

    ${({ disabled }) =>
        disabled &&
        css`
            background: #f2f2f2;
            color: #afafaf;
        `}
`;
