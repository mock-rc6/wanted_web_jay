import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import tag01 from "../assets/imgs/img-tag-01.png";
import tag02 from "../assets/imgs/img-tag-02.png";
import tag03 from "../assets/imgs/img-tag-03.png";
import tag04 from "../assets/imgs/img-tag-04.png";
import tag05 from "../assets/imgs/img-tag-05.png";
import tag06 from "../assets/imgs/img-tag-06.png";
import tag07 from "../assets/imgs/img-tag-07.png";
import tag08 from "../assets/imgs/img-tag-08.png";

import Card from "../components/Recruitment/Card";

const tags = [
    { label: "연봉이 최고의 복지", src: tag01 },
    { label: "재택근무", src: tag02 },
    { label: "퇴사율 10% 이하", src: tag03 },
    { label: "급성장 중", src: tag04 },
    { label: "병역특례", src: tag05 },
    { label: "50인 이하", src: tag06 },
    { label: "50인 이상", src: tag07 },
    { label: "업력 5년 이상", src: tag08 },
];

const gridItems = [1, 2, 3, 4, 5, 6];

const RecruitmentPage = () => {
    const [careerFilterButton, setCareerFilterButton] = useState(false);
    const [techStackFilterButton, setTechStackFilterButton] = useState(false);
    const [sortButton, setSortButton] = useState(false);

    return (
        <Wrap>
            <Header />
            <article className="category-navbar-container">
                <div className="category-navbar-body">
                    <div>
                        <button>
                            <span>전체</span>
                            <svg
                                xmlns="https://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                style={{
                                    border: "1px solid #cccccc",
                                    borderRadius: "50%",
                                    padding: 7,
                                }}>
                                <path
                                    fill="#767676"
                                    fill-rule="nonzero"
                                    d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <span>|</span>
                        <span>직군을 선택해주세요.</span>
                    </div>
                </div>
            </article>
            <div className="joblist-wrap">
                <div style={{ width: "100%" }}>
                    <div className="filter-wrap">
                        <div>
                            <div className="filterbar">
                                <FilterButton>
                                    <span>지역</span>
                                    <span>한국</span>
                                </FilterButton>
                                <FilterButton
                                    onClick={() => {
                                        setCareerFilterButton(
                                            !careerFilterButton
                                        );
                                    }}>
                                    <span>경력</span>
                                    <span>전체</span>
                                    <CareerArrow
                                        isClicked={careerFilterButton}
                                        width="8"
                                        height="7"
                                        viewBox="0 0 8 7"
                                        fill="none"
                                        xmlns="https://www.w3.org/2000/svg"
                                        style={{ marginLeft: 8 }}>
                                        <path
                                            d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                            fill="#333333"></path>
                                    </CareerArrow>
                                </FilterButton>
                                <FilterButton
                                    onClick={() => {
                                        setTechStackFilterButton(
                                            !techStackFilterButton
                                        );
                                    }}>
                                    <span>기술스택</span>
                                    <TechStackArrow
                                        isClicked={techStackFilterButton}
                                        width="8"
                                        height="7"
                                        viewBox="0 0 8 7"
                                        fill="none"
                                        xmlns="https://www.w3.org/2000/svg"
                                        style={{ marginLeft: 8 }}>
                                        <path
                                            d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                            fill="#333333"></path>
                                    </TechStackArrow>
                                </FilterButton>
                            </div>
                            <div className="sort-wrap">
                                <FilterButton
                                    onClick={() => {
                                        setSortButton(!sortButton);
                                    }}>
                                    <span>응답률순</span>
                                    <SortArrow
                                        isClicked={sortButton}
                                        width="8"
                                        height="7"
                                        viewBox="0 0 8 7"
                                        fill="none"
                                        xmlns="https://www.w3.org/2000/svg"
                                        style={{ marginLeft: 8 }}>
                                        <path
                                            d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                                            fill="#333333"></path>
                                    </SortArrow>
                                </FilterButton>
                            </div>
                        </div>
                        <hr className="hr-01" />
                        <section className="tag-list">
                            {tags.map((data, idx) => (
                                <button key={idx}>
                                    {data.label}
                                    <img src={data.src} alt="tag" />
                                </button>
                            ))}
                        </section>
                    </div>
                    <hr className="hr-02" />
                    <div className="joblist-bookmark-section">
                        <button>
                            <svg
                                width="13"
                                height="17"
                                viewBox="0 0 13 17"
                                style={{
                                    color: "rgb(51, 102, 255)",
                                    marginRight: 8,
                                }}>
                                <defs>
                                    <path
                                        id="bookmarkIconFill"
                                        d="M6.25 13.21L.905 16.22c-.403.228-.905-.06-.905-.517V.596C0 .267.27 0 .605 0h11.29c.334 0 .605.267.605.596v15.107c0 .458-.502.745-.905.518L6.25 13.209z"></path>
                                </defs>
                                <g
                                    fill="none"
                                    fill-rule="evenodd"
                                    transform="translate(.188)">
                                    <use
                                        fill="currentColor"
                                        xlinkHref="#bookmarkIconFill"></use>
                                </g>
                            </svg>
                            <span>북마크 모아보기</span>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                style={{ marginLeft: 2 }}>
                                <path
                                    fill="currentColor"
                                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="joblist-container">
                        {gridItems.map((data, idx) => (
                            <Card />
                        ))}
                    </div>
                </div>
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    & .hr-01 {
        border: 0px;
        border-top: 1px solid #cccccc;
        margin: 25px 0px;
    }
    & .hr-02 {
        margin-left: -12.5%;
        width: 100vw;
        border: 0px;
        border-top: 1px solid #cccccc;
        margin-bottom: 38px;
    }
    & .category-navbar-container {
        padding-top: 40px;
    }
    & .category-navbar-body {
        padding: 0px 10%;
        display: flex;
        align-items: center;

        & > div:nth-child(1) > button {
            all: unset;
            display: flex;
            align-items: center;
            & > span {
                margin-right: 15px;
                font-size: 24px;
                font-weight: bold;
            }
        }

        & > div:nth-child(2) {
            display: flex;
            align-items: center;

            & > span:nth-child(1) {
                padding: 0px 24px;
                font-size: 30px;
                color: #cccccc;
            }

            & > span:nth-child(2) {
                font-size: 24px;
                color: #aaa;
            }
        }
    }

    & .joblist-wrap {
        padding: 20px 0px 80px 0px;
        margin: 0px 10%;
    }

    & .filter-wrap {
        padding-top: 10px;
        margin-bottom: 25px;
        & > div:nth-child(1) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    & .filterbar {
        display: flex;
        align-items: center;
    }

    & .sort-wrap {
    }

    & .tag-list {
        display: flex;
        align-items: center;
        width: 100%;
        overflow: auto;

        & > button {
            all: unset;
            display: flex;
            align-items: center;
            padding: 8px 14px;
            margin-right: 8px;
            border-radius: 20px;
            border: 1px solid transparent;
            background-color: rgb(242, 251, 245);
            font-size: 13px;
            color: rgb(51, 51, 51);
            white-space: nowrap;

            & > img {
                width: 16px;
                height: 16px;
                margin-left: 5px;
            }

            &:hover {
                cursor: pointer;
                border: 1px solid lightblue;
            }
        }
    }

    & .joblist-bookmark-section {
        margin-bottom: 12px;
        color: rgb(51, 102, 255);
        font-weight: 600;
        & > button {
            all: unset;
            display: flex;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
        }
    }

    & .joblist-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 20px;
        row-gap: 28px;
    }
`;
const FilterButton = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    padding: 0px 15px;
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-weight: 600;

    &:hover {
        cursor: pointer;
    }

    & > span:nth-child(1) {
        margin-right: 15px;
    }
    & > span:nth-child(2) {
        color: rgb(51, 102, 255);
    }

    &:nth-child(n + 2):nth-child(-n + 3) {
        margin-left: 10px;
    }
`;
const CareerArrow = styled.svg`
    transform: ${(props) => (props.isClicked ? "rotate(180deg)" : "")};
    transition: all 0.2s linear;
`;
const TechStackArrow = styled(CareerArrow)``;
const SortArrow = styled(CareerArrow)``;
export default RecruitmentPage;
