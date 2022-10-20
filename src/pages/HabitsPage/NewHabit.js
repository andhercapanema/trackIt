import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import TrackItResource from "../../common/services/TrackItResource";
import { NewHabitForm, ButtonsWrapper } from "./style";
import WeekList from "./WeekList";

export default function NewHabit({
    setIsAddingHabit,
    updateHabits,
    form,
    setForm,
}) {
    const [isLoading, setIsLoading] = useState(false);

    function toggleDay(selectedDayId) {
        if (form.days.includes(selectedDayId)) {
            form.days = form.days.filter(
                (savedId) => savedId !== selectedDayId
            );
        } else {
            form.days.push(selectedDayId);
        }
        setForm({ ...form });
    }

    async function addHabit(e) {
        e.preventDefault();

        if (form.days.length === 0)
            return alert("Selecione pelo menos um dia da semana!");

        setIsLoading(true);
        try {
            const res = await TrackItResource.createHabit(form);
            await updateHabits();
            setIsAddingHabit(false);
            setIsLoading(false);
            setForm({
                name: "",
                days: [],
            });
            console.log(res.data);
        } catch (err) {
            console.error(err.response);
        }
    }

    return (
        <NewHabitForm onSubmit={addHabit} isLoading={isLoading}>
            <div>
                <input
                    placeholder="nome do hábito"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    disabled={isLoading}
                ></input>
                <WeekList
                    toggleDay={isLoading ? null : toggleDay}
                    selectedDays={form.days}
                />
            </div>
            <ButtonsWrapper>
                <button
                    onClick={() => setIsAddingHabit(false)}
                    disabled={isLoading}
                >
                    Cancelar
                </button>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots
                            height="11"
                            width="43"
                            radius="5.5"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                        />
                    ) : (
                        "Salvar"
                    )}
                </button>
            </ButtonsWrapper>
        </NewHabitForm>
    );
}
