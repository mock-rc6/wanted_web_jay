import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecruitmentPage from "../pages";
import NoMatch from "../pages/NoMatch";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RecruitmentPage />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
