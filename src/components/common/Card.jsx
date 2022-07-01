import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ id, position, companyName, responseRate }) => {
    return (
        <Link
            to={`/recruit-detail/${id}`}
            style={{ textDecoration: "none", color: "rgb(51,51,51)" }}>
            <Wrap>
                <Header>
                    <button>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="https://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                                fill="white"></path>
                            <path
                                d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                                fill="black"
                                fillOpacity="0.25"></path>
                        </svg>
                    </button>
                </Header>
                <div className="body">
                    <div className="job-card-position">{position}</div>
                    <div className="job-card-company-name">{companyName}</div>
                    {responseRate > 0.9 ? (
                        <button>응답률 매우 높음</button>
                    ) : null}
                    <div className="job-card-company-location">서울 · 한국</div>
                    <div className="reward">채용보상금 1,000,000원</div>
                </div>
            </Wrap>
        </Link>
    );
};

const Wrap = styled.div`
    font-weight: 600;
    width: 100%;

    &:hover {
        cursor: pointer;
    }

    & .body {
        padding: 14px 0px;

        & > button {
            all: unset;
            margin-top: 4px;
            padding: 0px 5px;
            line-height: 19px;
            font-size: 10px;
            color: rgb(0, 174, 173);
            border: 1px solid rgb(0, 174, 173);
            border-radius: 2px;
        }
    }

    & .job-card-position {
        font-size: 18px;
    }

    & .job-card-company-name {
        margin-top: 10px;
        font-size: 14px;
    }

    & .job-card-company-location {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 400;
        color: rgb(153, 153, 153);
    }

    & .reward {
        margin-top: 10px;
        color: rgb(51, 51, 51);
        font-size: 14px;
        font-weight: 500;
    }
`;
const Header = styled.header`
    background-image: url("https://image.wanted.co.kr/optimize?src=https://static.wanted.co.kr/images/company/26984/dlkkkoapibieowe6__400_400.jpg&w=400&q=undefined");
    padding-bottom: 75%;
    position: relative;
    background-size: cover;
    border-radius: 4px;

    & > button {
        all: unset;
        position: absolute;
        top: 8px;
        right: 6px;
    }
`;
export default Card;
