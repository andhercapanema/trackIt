import React from "react";
import { StyledWeekList, DayInput } from "./style";

function WeekList({ toggleDay = null, selectedDays }) {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
        <StyledWeekList>
            {week.map((day, index) => (
                <DayInput
                    key={index}
                    onClick={() => toggleDay(index)}
                    isSelected={selectedDays.includes(index)}
                    type="button"
                    value={day}
                    disabled={toggleDay === null}
                    data-identifier="week-day-btn"
                />
            ))}
        </StyledWeekList>
    );
}

export default WeekList;
