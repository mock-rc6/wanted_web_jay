import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecruitmentPage from "../pages/Recruitment";
import RecruitDetail from "../pages/RecruitDetail";
import CVIntro from "../pages/CV/CVIntro";
import CVList from "../pages/CV/CVList";
import NoMatch from "../pages/NoMatch";
import CVCreate from "../pages/CV/CVCreate";
import Company from "../pages/Company";
import Main from "../pages";
import MyWanted from "../pages/MyWanted";
import Likes from "../pages/Likes";
import Bookmarks from "../pages/Bookmarks";

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/recruit" element={<RecruitmentPage />} />
                <Route path="/recruit-detail/:id" element={<RecruitDetail />} />
                <Route path="/cv/intro" element={<CVIntro />} />
                <Route path="/cv/list" element={<CVList />} />
                <Route path="/cv/:id" element={<CVCreate />} />
                <Route path="/company" element={<Company />} />
                <Route path="/mywanted" element={<MyWanted />} />
                <Route path="/profile/likes" element={<Likes />} />
                <Route path="/profile/bookmarks" element={<Bookmarks />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
