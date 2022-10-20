import styled, { css } from "styled-components";
import { StyledTodayPage } from "../TodayPage/style";
import COLORS from "../../common/constants/color";

export const StyledHabitsPage = styled(StyledTodayPage)`
    button {
        height: 35px;
        width: 40px;
        font-size: 27px;
        align-items: flex-start;
    }

    p {
        margin-top: 29px;

        font-size: 17.976px;
        line-height: 22px;
        color: ${COLORS.text};
    }

    h3 {
        margin: 0;
    }
`;

export const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewHabitForm = styled.form`
    margin-top: 20px;
    height: 180px;
    width: 340px;
    background: #fff;
    border-radius: 5px;
    padding: 18px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        ${({ isLoading }) =>
            isLoading &&
            css`
                background: #f2f2f2;
                color: #afafaf;
            `}
    }

    button {
        opacity: ${({ isLoading }) => (isLoading ? 0.7 : 1)};
        ${({ isLoading }) =>
            isLoading &&
            css`
                opacity: 0.7;
                cursor: default;
            `}
    }
`;

export const StyledWeekList = styled.ul`
    display: flex;
    margin-top: 8px;
`;

export const DayInput = styled.input`
    width: 30px;
    height: 30px;
    background: #fff;
    border: 1px solid ${COLORS.border};
    margin-right: 4px;
    padding: 0;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

    font-size: 20px;
    line-height: 25px;
    color: ${COLORS.placeholder};

    ${({ isSelected }) =>
        isSelected &&
        css`
            background: ${COLORS.selected};
            border: 1px solid ${COLORS.selected};
            color: #fff;
        `};
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        padding: 7px 17px;
        width: auto;
        height: auto;
        margin-left: 6px;

        font-size: 16px;
        line-height: 20px;
        text-align: center;

        display: flex;
        align-items: center;

        &:first-of-type {
            background: #fff;
            color: #52b6ff;
        }
    }
`;

export const HabitsList = styled.ul`
    margin-top: 20px;
`;

export const StyledHabitCard = styled.li`
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-size: 20px;
        color: #666;
    }

    ion-icon {
        cursor: pointer;
    }
`;
