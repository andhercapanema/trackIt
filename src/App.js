import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Header from "./components/Header/Header";
import Footer from "./components/NavBar/NavBar";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import { UserContext } from "./common/contexts/UserContext";
import { useState } from "react";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
    const [user, setUser] = useState({});

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={user}>
                <Header />
                <Routes>
                    <Route path="/" element={<LoginPage setUser={setUser} />} />
                    <Route path="/cadastro" element={<RegistrationPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
