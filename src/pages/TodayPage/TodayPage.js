import React, { useContext, useEffect, useState } from "react";
import { StyledTodayPage } from "./style";
import dayjs from "dayjs";
import TodayHabitCard from "./TodayHabitCard";
import TrackItResource from "../../common/services/TrackItResource";
import { ConcludedContext } from "../../common/contexts/ConcludedContext";

export default function TodayPage() {
    const [todayHabitsList, setTodayHabitsList] = useState([]);
    const [concludedHabits, setConcludedHabits] = useState([]);
    const concluded = useContext(ConcludedContext);

    function translateWeekday(date) {
        const weekDays = {
            Sunday: "Domingo",
            Monday: "Segunda",
            Tuesday: "Terça",
            Wednesday: "Quarta",
            Thursday: "Quinta",
            Friday: "Sexta",
            Saturday: "Sábado",
        };

        return weekDays[date.split(",")[0]] + "," + date.split(",")[1];
    }

    async function updateTodayHabits() {
        try {
            const res = await TrackItResource.getTodayHabits();

            const updatedTodayHabitsList = res.data;
            const updatedConcludedHabits = updatedTodayHabitsList.filter(
                (habit) => habit.done
            );

            setTodayHabitsList(updatedTodayHabitsList);
            setConcludedHabits(updatedConcludedHabits);
            concluded.setPercentageConcluded(
                Math.round(
                    (updatedConcludedHabits.length /
                        updatedTodayHabitsList.length) *
                        100
                )
            );
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        updateTodayHabits();
    }, []);

    async function toggleHabit(selectedHabit) {
        if (concludedHabits.includes(selectedHabit)) {
            try {
                await TrackItResource.uncheckHabit(selectedHabit.id);
                updateTodayHabits();
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await TrackItResource.checkHabit(selectedHabit.id);
                updateTodayHabits();
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <StyledTodayPage>
            <h2>{translateWeekday(dayjs().format("dddd, DD/MM"))}</h2>
            {concludedHabits.length === 0 ? (
                <h3>Nenhum hábito concluído ainda</h3>
            ) : (
                <h3>{concluded.percentageConcluded}% dos hábitos concluídos</h3>
            )}

            {todayHabitsList.map((habit) => (
                <TodayHabitCard
                    key={habit.id}
                    habit={habit}
                    toggleHabit={toggleHabit}
                />
            ))}
        </StyledTodayPage>
    );
}
