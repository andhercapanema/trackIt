import styled from "styled-components";
import COLORS from "../../common/constants/color";

export const StyledTodayPage = styled.main`
    background: ${COLORS.base};
    min-height: Calc(100vh - 70px - 70px);
    margin: 70px auto;
    padding: 22px 18px;
    max-width: 375px;

    h2 {
        font-size: 23px;
        line-height: 29px;
        color: ${COLORS.accent1};
    }

    h3 {
        font-size: 18px;
        line-height: 22px;
        color: #bababa;
        margin-bottom: 28px;
    }
`;

export const StyledTodayHabitCard = styled.li`
    background: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    color: ${COLORS.text};
    border-radius: 5px;
    margin-bottom: 10px;

    h4 {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 8px;
    }

    p {
        font-size: 12.976px;
        line-height: 16px;
        margin-top: 2px;

        &:first-of-type {
            span {
                color: ${({ done }) => (done ? "#8fc549" : COLORS.text)};
            }
        }

        &:last-of-type {
            span {
                color: ${({ isOnARecord }) =>
                    isOnARecord ? "#8fc549" : COLORS.text};
            }
        }
    }

    ion-icon {
        font-size: 84px;
        color: ${({ done }) => (done ? "#8fc549" : "#ebebeb")};
        margin: -7.5px;
        cursor: pointer;
    }
`;
