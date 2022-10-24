import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { UserContext } from "./common/contexts/UserContext";
import { useState } from "react";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import { ConcludedContext } from "./common/contexts/ConcludedContext";

function App() {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser);
    const [percentageConcluded, setPercentageConcluded] = useState(0);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider
                value={{
                    user: user,
                    setUser: setUser,
                }}
            >
                <ConcludedContext.Provider
                    value={{
                        percentageConcluded: percentageConcluded,
                        setPercentageConcluded: setPercentageConcluded,
                    }}
                >
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<LoginPage setUser={setUser} />}
                        />
                        <Route
                            path="/cadastro"
                            element={<RegistrationPage />}
                        />
                        <Route path="/habitos" element={<HabitsPage />} />
                        <Route
                            path="/hoje"
                            element={
                                <TodayPage
                                    percentageConcluded={percentageConcluded}
                                    setPercentageConcluded={
                                        setPercentageConcluded
                                    }
                                />
                            }
                        />
                        <Route path="/historico" element={<HistoryPage />} />
                    </Routes>
                    <NavBar percentageConcluded={percentageConcluded} />
                </ConcludedContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
