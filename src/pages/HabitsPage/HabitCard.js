import React from "react";
import { StyledHabitCard, StyledRow } from "./style";
import WeekList from "./WeekList";

export default function HabitCard({ habit: { id, name, days }, deleteHabit }) {
    return (
        <StyledHabitCard>
            <StyledRow>
                <h3>{name}</h3>
                <ion-icon
                    name="trash-outline"
                    onClick={() => deleteHabit(id)}
                ></ion-icon>
            </StyledRow>
            <WeekList selectedDays={days} />
        </StyledHabitCard>
    );
}
