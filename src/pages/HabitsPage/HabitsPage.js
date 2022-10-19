import React from "react";
import { StyledHabitsPage, StyledRow } from "./style";

function HabitsPage() {
    return (
        <StyledHabitsPage>
            <StyledRow>
                <h2>Meus Hábitos</h2>
                <button>+</button>
            </StyledRow>
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
            </p>
        </StyledHabitsPage>
    );
}

export default HabitsPage;
