import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HabitsPage from "../pages/HabitsPage";
import TodayPage from "../pages/TodayPage";
import HistoricPage from "../pages/HistoricPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/habits" element={<HabitsPage />} />
      <Route path="/today" element={<TodayPage />} />
      <Route path="/historic" element={<HistoricPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
