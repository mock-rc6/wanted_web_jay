import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecruitmentPage from "../pages";
import RecruitDetail from "../pages/RecruitDetail";
import NoMatch from "../pages/NoMatch";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RecruitmentPage />} />
                <Route path="/recruit-detail/:id" element={<RecruitDetail />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
