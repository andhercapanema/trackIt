import React from "react";
import { StyledDetailedDayView, DetailedDayCard, HabitItem } from "./style";

export default function DetailedDayView({
    selectedDay: { day, habits },
    setIsShowingDetailedView,
}) {
    return (
        <StyledDetailedDayView onClick={() => setIsShowingDetailedView(false)}>
            <DetailedDayCard>
                <h3>Hábitos do dia {day.slice(0, 5)}:</h3>
                <ul>
                    {habits.map((habit) => (
                        <HabitItem key={habit.id} done={habit.done}>
                            {habit.name}
                            {habit.done ? (
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            ) : (
                                <ion-icon name="close-circle-outline"></ion-icon>
                            )}
                        </HabitItem>
                    ))}
                </ul>
            </DetailedDayCard>
        </StyledDetailedDayView>
    );
}
