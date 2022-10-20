import React, { useEffect, useState } from "react";
import TrackItResource from "../../common/services/TrackItResource";
import HabitCard from "./HabitCard";
import NewHabit from "./NewHabit";
import { StyledHabitsPage, StyledRow, HabitsList } from "./style";

function HabitsPage() {
    const [isAddingHabit, setIsAddingHabit] = useState(false);
    const [habitsList, setHabitsList] = useState([]);
    const [newHabitForm, setNewHabitForm] = useState({
        name: "",
        days: [],
    });

    function addHabit() {
        setIsAddingHabit(true);
    }

    async function updateHabits() {
        try {
            const res = await TrackItResource.getHabits();
            setHabitsList(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        updateHabits();
    }, []);

    async function deleteHabit(habitId) {
        if (window.confirm("Você realmente deseja apagar este hábito?")) {
            await TrackItResource.deleteHabit(habitId);
            await updateHabits();
        }
    }

    return (
        <StyledHabitsPage>
            <StyledRow>
                <h2>Meus Hábitos</h2>
                <button onClick={addHabit}>+</button>
            </StyledRow>
            {isAddingHabit && (
                <NewHabit
                    setIsAddingHabit={setIsAddingHabit}
                    updateHabits={updateHabits}
                    form={newHabitForm}
                    setForm={setNewHabitForm}
                />
            )}
            {habitsList.length === 0 ? (
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                </p>
            ) : (
                <HabitsList>
                    {habitsList.map((habit) => (
                        <HabitCard
                            key={habit.id}
                            habit={habit}
                            deleteHabit={deleteHabit}
                        />
                    ))}
                </HabitsList>
            )}
        </StyledHabitsPage>
    );
}

export default HabitsPage;
