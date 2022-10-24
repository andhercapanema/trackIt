import styled from "styled-components";
import { StyledTodayPage } from "../TodayPage/style";

export const StyledHistoryPage = styled(StyledTodayPage)`
    h2 {
        margin-bottom: 11px;
    }
    button {
        color: initial;
    }

    .react-calendar {
        width: 335px;
        max-width: 100%;
        background: white;
        line-height: 1.125em;
        border-radius: 10px;
    }
    .react-calendar--doubleView {
        width: 700px;
    }
    .react-calendar--doubleView .react-calendar__viewContainer {
        display: flex;
        margin: -0.5em;
    }
    .react-calendar--doubleView .react-calendar__viewContainer > * {
        width: 50%;
        margin: 0.5em;
    }
    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .react-calendar button {
        margin: 0;
        border: 0;
        outline: none;
    }
    .react-calendar button:enabled:hover {
        cursor: pointer;
    }
    .react-calendar__navigation {
        display: flex;
        height: 44px;
        margin-bottom: 1em;
    }
    .react-calendar__navigation button {
        min-width: 44px;
        background: none;
    }
    .react-calendar__navigation button:disabled {
        background-color: #f0f0f0;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: #e6e6e6;
    }
    .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75em;
    }
    .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
    }
    .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        font-weight: bold;
    }
    .react-calendar__month-view__days__day--weekend {
        color: #d10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
    }
    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
        padding: 2em 0.5em;
    }
    .react-calendar__tile {
        max-width: 100%;
        padding: 10px 6.6667px;
        background: none;
        text-align: center;
        line-height: 16px;
    }
    .react-calendar__tile:disabled {
        background-color: #f0f0f0;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background-color: #e6e6e6;
    }
    .react-calendar__tile--now {
        background: #ffff76 !important; //changed
        border-radius: 0 !important; //changed
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: #ffffa9 !important; //changed
    }
    .react-calendar__tile--hasActive {
        background: #76baff;
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: #a9d4ff;
    }
    .react-calendar__tile--active {
        background: #006edc;
        color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: #1087ff;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
    }

    .react-calendar__month-view__days__day {
        padding: 0; // changed
        margin: 3px !important; //changed
        width: 41.8px; // changed 47.85
        height: 41.8px; // changed 47.85
        flex: initial !important; // changed
    }

    .allDoneDay {
        background-color: #8fc549;
        border-radius: 50%;
    }

    .someNotDoneDay {
        background-color: #ea5766;
        border-radius: 50%;
        color: #000;
    }
`;

export const StyledDetailedDayView = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const DetailedDayCard = styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 10px;

    h3 {
        margin-bottom: 10px;
    }
`;

export const HabitItem = styled.li`
    margin-bottom: 5px;
    color: ${({ done }) => (done ? "#8fc549" : "#ea5766")};

    display: flex;
    justify-content: space-between;
`;
