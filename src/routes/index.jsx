import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecruitmentPage from "../pages";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RecruitmentPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
