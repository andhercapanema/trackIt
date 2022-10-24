import React, { useEffect, useState } from "react";
import { StyledHistoryPage } from "./style";
import Calendar from "react-calendar";
import TrackItResource from "../../common/services/TrackItResource";
import dayjs from "dayjs";
import DetailedDayView from "./DetailedDayView";

export default function HistoryPage() {
    const [history, setHistory] = useState(null);
    const [isShowingDetailedView, setIsShowingDetailedView] = useState(false);
    const [selectedDay, setSelectedDay] = useState({});

    async function updateHistory() {
        try {
            const res = await TrackItResource.getHistory();
            setHistory(res.data);
        } catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        updateHistory();
    }, []);

    const customParseFormat = require("dayjs/plugin/customParseFormat");
    dayjs.extend(customParseFormat);

    function tileClassName({ date, view }) {
        if (history !== null) {
            const allHabitsDoneList = history.filter(
                (day) =>
                    day.habits.filter((habit) => habit.done === false)
                        .length === 0
            );
            const allHabitsOfThisDayWereDone = allHabitsDoneList.some(
                (doneDay) =>
                    dayjs(doneDay.day, "DD/MM/YYYY", "pt-br").isSame(
                        dayjs(date)
                    )
            );

            const someHabitNotDoneList = history.filter(
                (day) => !allHabitsDoneList.some((doneDay) => day === doneDay)
            );
            const notAllHabitsOfThisDayWereDone = someHabitNotDoneList.some(
                (notDoneDay) =>
                    dayjs(notDoneDay.day, "DD/MM/YYYY", "pt-br").isSame(
                        dayjs(date)
                    )
            );

            if (view === "month") {
                if (allHabitsOfThisDayWereDone) return "allDoneDay";
                if (notAllHabitsOfThisDayWereDone) return "someNotDoneDay";
            }
        }
    }

    function showHabits(date) {
        const updatedSelectedDay = history.filter((historyDay) =>
            dayjs(historyDay.day, "DD/MM/YYYY", "pt-br").isSame(dayjs(date))
        )[0];
        setSelectedDay(updatedSelectedDay);

        if (updatedSelectedDay === undefined) return;

        setIsShowingDetailedView(true);
    }

    return (
        <StyledHistoryPage>
            <h2>Histórico</h2>
            <Calendar
                formatDay={(locale, date) => dayjs(date).format("DD")}
                calendarType="US"
                tileClassName={tileClassName}
                onClickDay={showHabits}
            />
            {isShowingDetailedView && (
                <DetailedDayView
                    selectedDay={selectedDay}
                    setIsShowingDetailedView={setIsShowingDetailedView}
                />
            )}
        </StyledHistoryPage>
    );
}
