import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecruitmentPage from "../pages";
import RecruitDetail from "../pages/RecruitDetail";
import CVIntro from "../pages/CV/CVIntro";
import CVList from "../pages/CV/CVList";
import NoMatch from "../pages/NoMatch";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RecruitmentPage />} />
                <Route path="/recruit-detail/:id" element={<RecruitDetail />} />
                <Route path="/cv/intro" element={<CVIntro />} />
                <Route path="/cv/list" element={<CVList />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
