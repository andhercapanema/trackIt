import styled from "styled-components";
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
`;

export const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
