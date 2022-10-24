import React from "react";
import { StyledTodayHabitCard } from "./style";

function TodayHabitCard({ habit, toggleHabit }) {
    const { name, currentSequence, highestSequence, done } = habit;

    return (
        <StyledTodayHabitCard
            done={done}
            isOnARecord={
                currentSequence !== 0 && currentSequence === highestSequence
            }
        >
            <div>
                <h4>{name}</h4>
                <p>
                    Sequência atual: <span>{currentSequence} dias</span>
                </p>
                <p>
                    Seu recorde: <span>{highestSequence} dias</span>
                </p>
            </div>
            <ion-icon
                name="checkbox"
                onClick={() => toggleHabit(habit)}
                data-identifier="done-habit-btn"
            ></ion-icon>
        </StyledTodayHabitCard>
    );
}

export default TodayHabitCard;
