import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";

const RecruitmentPage = () => {
    return (
        <Wrap>
            <Header />
            {/* <div className="test">hi</div> */}
        </Wrap>
    );
};

const Wrap = styled.div`
    .test {
        color: red;
    }
`;
export default RecruitmentPage;
