import styled from "styled-components";
import COLORS from "../../common/constants/color";

export const StyledTodayPage = styled.main`
    background: ${COLORS.base};
    min-height: Calc(100vh - 70px - 70px);
    margin-top: 70px;
    padding: 22px 18px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: ${COLORS.accent1};
    }
`;
