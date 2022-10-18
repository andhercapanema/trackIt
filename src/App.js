import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <NavBar />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegistrationPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
