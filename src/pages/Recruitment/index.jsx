import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Card from "../../components/common/Card";
import axios from "axios";
import { api } from "../../lib/api/api";
import LocationModal from "../../components/Recruit/LocationModal";
import { getCookie } from "../../lib/cookies/cookie";
import { useNavigate } from "react-router-dom";

const tagList = [
    "재택근무",
    "음료",
    "간식",
    "상위 10%",
    "상위 5%",
    "50명 이하",
    "50명 이상",
    "사내 식당",
    "수평적 문화",
    "병역 특례",
    "연봉이 최고의 복지",
    "유연 근무",
    "자유로운 휴가",
    "일한만큼 받는 보상",
    "업력 5년 이상",
];

const jobGroupList = [
    "전체",
    "개발",
    "경영·비즈니스",
    "마케팅·광고",
    "디자인",
    "영업",
];

const RecruitmentPage = () => {
    const accessToken = getCookie("accessToken");
    const navigate = useNavigate();

    const [gridItems, setGridItems] = useState([]);
    const [careerFilterButton, setCareerFilterButton] = useState(false); //경력 버튼 open 여부
    const [techStackFilterButton, setTechStackFilterButton] = useState(false); //기술스택 버튼 open 여부
    const [sortButton, setSortButton] = useState(false); //정렬 버튼 open 여부
    const [jobGroupButton, setJobGroupButton] = useState(false); //직무 분야 버튼 open 여부
    const [jobCategoryButton, setJobCategoryButton] = useState(false); //직군 분야 버튼 open 여부
    const [locationModalOpen, setLocationModalOpen] = useState(false); //지역 선택 modal open 여부

    const [jobGroup, setJobGroup] = useState("전체"); //선택된 직무 종류
    const [jobCategory, setJobCategory] = useState([]); //선택된 포지션
    const [locations, setLocations] = useState(["한국.전국"]); //선택된 지역
    const [years, setYears] = useState([0, 100]); //선택된 경력
    const [tags, setTags] = useState([]); //선택된 해시태그
    const [sort, setSort] = useState("responseRate,desc"); //정렬
    const [sortName, setSortName] = useState("응답률순");

    const [sliderLeftValue, setSliderLeftValue] = useState(0);
    const [sliderRightValue, setSliderRightValue] = useState(100);

    const [jobCategoryList, setJobCategoryList] = useState([
        { category: "개발 전체", isClicked: true },
        { category: "웹 개발자", isClicked: false },
        { category: "서버 개발자", isClicked: false },
        { category: "프론트엔드 개발자", isClicked: false },
        { category: "소프트웨어 엔지니어", isClicked: false },
        { category: "자바 개발자", isClicked: false },
        { category: "안드로이드 개발자", isClicked: false },
        { category: "iOS 개발자", isClicked: false },
        { category: "Node.js 개발자", isClicked: false },
    ]);

    useEffect(() => {
        console.log("locations :>> ", locations);
        axios
            .get(
                api +
                    `recruits?${
                        jobGroup === "전체" ? "" : `job_group=${jobGroup}`
                    }&${
                        jobCategory[0]?.includes("전체")
                            ? ""
                            : jobCategory
                                  .map((data) => `positions=${data}&`)
                                  .join("")
                    }${
                        locations[0] === "한국.전국"
                            ? ""
                            : locations
                                  .map((data) => `locations=${data}&`)
                                  .join("")
                    }${years
                        .map((data) => `years=${data / 10}&`)
                        .join("")}sort=${sort}`,
                {
                    headers: {
                        "x-access-token": accessToken,
                    },
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log("res :>> ", res);
                console.log("URL :>> ", res.request.responseURL);
                setGridItems(res.data.result.recruits);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    }, [jobGroup, jobCategory, locations, years, tags, sort]);

    useEffect(() => {
        setJobGroupButton(false);
    }, [jobGroup]);

    const handleJobGroup = (e) => {
        //선택하면 옆에 직군 선택 가능하게 변경
        setJobGroup(e.target.innerHTML);
        setJobCategory([jobCategoryList[0].category]);
    };

    const handleTags = (e) => {
        //태그
        let check = false;
        let list = [...tags];
        list.forEach((d, i) => {
            if (d === e.target.id) {
                check = true;
                return;
            }
        });
        if (check) list = list.filter((d) => d !== e.target.id);
        else list.push(e.target.id);
        setTags(list);
    };

    const setLeftValue = (e) => {
        setSliderLeftValue(e.target.value);
    };

    const setRightValue = (e) => {
        setSliderRightValue(e.target.value);
    };

    return (
        <Wrap>
            <Header />
            <article className="category-navbar-container">
                <div className="category-navbar-body">
                    <div className="job-group">
                        <button
                            onClick={() => {
                                setJobGroupButton(!jobGroupButton);
                            }}>
                            <span>{jobGroup}</span>
                            <JobGroupArrow
                                isClicked={jobGroupButton}
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
                                    fillRule="nonzero"
                                    d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                            </JobGroupArrow>
                        </button>
                        <JobGroupSelectSection isClicked={jobGroupButton}>
                            <ul>
                                {jobGroupList.map((data, idx) => (
                                    <li
                                        key={idx}
                                        value={data}
                                        onClick={handleJobGroup}>
                                        {data}
                                    </li>
                                ))}
                            </ul>
                        </JobGroupSelectSection>
                    </div>
                    <div className="job-category">
                        <span>|</span>
                        {jobGroup === "전체" ? (
                            <span>직군을 선택해주세요.</span>
                        ) : (
                            <button
                                className="job-category-button"
                                onClick={() => {
                                    setJobCategoryButton(!jobCategoryButton);
                                }}>
                                <span>
                                    {jobCategory.map((data) => data).join(", ")}
                                </span>
                                <JobCategoryArrow
                                    isClicked={jobCategoryButton}
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
                                        fillRule="nonzero"
                                        d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                                </JobCategoryArrow>
                            </button>
                        )}
                    </div>
                    <JobCategorySelectSection isClicked={jobCategoryButton}>
                        <div className="job-category-section-top">
                            <p>직무를 선택해 주세요. (최대 5개 선택 가능)</p>
                            <div>
                                {jobCategoryList.map((data, idx) => (
                                    <JobCategoryItem
                                        key={idx}
                                        onClick={() => {
                                            let list = [...jobCategoryList];
                                            list.forEach((data, i) => {
                                                if (idx === 0) {
                                                    //전체 를 선택했을 때 나머지는 false
                                                    if (i === 0)
                                                        data.isClicked =
                                                            !data.isClicked;
                                                    else data.isClicked = false;
                                                } else {
                                                    //나머지를 선택했을 때 전체는 false
                                                    if (i === 0)
                                                        data.isClicked = false;
                                                    if (idx === i)
                                                        data.isClicked =
                                                            !data.isClicked;
                                                }
                                            });

                                            setJobCategoryList(list);
                                        }}
                                        isClicked={data.isClicked}>
                                        {data.category}
                                    </JobCategoryItem>
                                ))}
                            </div>
                        </div>
                        <div className="job-category-section-bottom">
                            <button
                                onClick={() => {
                                    setJobCategoryButton(false);
                                    let category = [];

                                    jobCategoryList.forEach((data) => {
                                        if (data.isClicked) {
                                            category.push(data.category);
                                        }
                                    });

                                    setJobCategory(category);
                                }}>
                                선택 완료하기
                            </button>
                        </div>
                    </JobCategorySelectSection>
                </div>
            </article>
            <div className="joblist-wrap">
                <div style={{ width: "100%" }}>
                    <div className="filter-wrap">
                        <div>
                            <div className="filterbar">
                                <FilterButton
                                    onClick={() => {
                                        setLocationModalOpen(
                                            !locationModalOpen
                                        );
                                    }}>
                                    <span>지역</span>
                                    <span>
                                        {locations.length === 1
                                            ? locations[0].split(".")[0]
                                            : locations[0].split(".")[0] +
                                              " 외"}
                                    </span>
                                    <span className="filtered-count">
                                        {locations.length}
                                    </span>
                                </FilterButton>
                                <div
                                    style={{
                                        position: "relative",
                                        marginLeft: 10,
                                    }}>
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
                                    <CareerFilterSection
                                        isClicked={careerFilterButton}>
                                        <header>
                                            <div>
                                                <span>전체</span>
                                            </div>
                                        </header>
                                        <div className="body">
                                            <div>
                                                <div className="slider">
                                                    <input
                                                        type="range"
                                                        step={10}
                                                        value={sliderLeftValue}
                                                        id="range-left"
                                                        onChange={setLeftValue}
                                                    />
                                                    <input
                                                        type="range"
                                                        step={10}
                                                        value={sliderRightValue}
                                                        id="range-right"
                                                        onChange={setRightValue}
                                                    />
                                                    <div className="slider-rail"></div>
                                                    <SliderTrack
                                                        left={sliderLeftValue}
                                                        right={
                                                            sliderRightValue
                                                        }></SliderTrack>
                                                    <SliderLeftHandle
                                                        val={sliderLeftValue}>
                                                        {sliderLeftValue /
                                                            10 ===
                                                        10
                                                            ? "10+"
                                                            : sliderLeftValue /
                                                              10}
                                                    </SliderLeftHandle>
                                                    <SliderRightHandle
                                                        val={sliderRightValue}>
                                                        {sliderRightValue /
                                                            10 ===
                                                        10
                                                            ? "10+"
                                                            : sliderRightValue /
                                                              10}
                                                    </SliderRightHandle>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <footer>
                                            <div>
                                                <button
                                                    className="cancel"
                                                    onClick={() => {
                                                        setCareerFilterButton(
                                                            false
                                                        );
                                                        setSliderLeftValue(
                                                            years[0]
                                                        );
                                                        if (
                                                            years.length === 1
                                                        ) {
                                                            setSliderRightValue(
                                                                years[0]
                                                            );
                                                        } else {
                                                            setSliderRightValue(
                                                                years[1]
                                                            );
                                                        }
                                                    }}>
                                                    취소
                                                </button>
                                                <button
                                                    className="apply"
                                                    onClick={() => {
                                                        let tmp = [
                                                            sliderLeftValue,
                                                            sliderRightValue,
                                                        ];
                                                        const set = new Set(
                                                            tmp
                                                        );
                                                        let list = [...set];
                                                        setYears(list);
                                                        setCareerFilterButton(
                                                            false
                                                        );
                                                    }}>
                                                    적용하기
                                                </button>
                                            </div>
                                        </footer>
                                    </CareerFilterSection>
                                </div>
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
                                    <span>{sortName}</span>
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
                                {sortButton && (
                                    <ul className="sort-list">
                                        <li
                                            onClick={() => {
                                                setSort("createdAt,desc");
                                                setSortName("최신순");
                                                setSortButton(false);
                                            }}>
                                            <button>최신순</button>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setSort("views,desc");
                                                setSortName("인기순");
                                                setSortButton(false);
                                            }}>
                                            <button>인기순</button>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setSort("responseRate,desc");
                                                setSortName("응답률순");
                                                setSortButton(false);
                                            }}>
                                            <button>응답률순</button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <hr className="hr-01" />
                        <section className="tag-list">
                            {tagList.map((data, idx) => (
                                <button
                                    key={idx}
                                    id={idx + 1}
                                    onClick={handleTags}>
                                    {data}
                                </button>
                            ))}
                        </section>
                    </div>
                    <hr className="hr-02" />
                    <div className="joblist-bookmark-section">
                        <button
                            onClick={() => {
                                navigate("/profile/bookmarks");
                            }}>
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
                                    fillRule="evenodd"
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
                            <Card
                                key={idx}
                                id={data.id}
                                thumbnail={data.photos[0]}
                                position={data.title}
                                companyName={data.company_name}
                                responseRate={data.response_rate}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <LocationModal
                width={500}
                modalStatus={locationModalOpen}
                closeModal={() => {
                    setLocationModalOpen(false);
                }}
                setLocations={setLocations}
            />
        </Wrap>
    );
};

const Wrap = styled.div`
    & .hr-01 {
        border: 0px;
        border-top: 1px solid #e1e2e3;
        margin: 25px 0px;
    }
    & .hr-02 {
        margin-left: -12.5%;
        width: 100vw;
        border: 0px;
        border-top: 1px solid #e1e2e3;
        margin-bottom: 38px;
    }
    & .category-navbar-container {
        padding-top: 40px;
    }
    & .category-navbar-body {
        padding: 0px 10%;
        display: flex;
        align-items: center;
        position: relative;

        .job-group {
            position: relative;
            & > button {
                all: unset;
                display: flex;
                align-items: center;
                cursor: pointer;

                & > span {
                    margin-right: 15px;
                    font-size: 24px;
                    font-weight: bold;
                    white-space: nowrap;
                }
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
        position: relative;
        .sort-list {
            width: 100%;
            position: absolute;
            top: 39px;
            z-index: 2;
            border: 1px solid #ececec;
            border-radius: 0 0 4px 4px;
            & li {
                & button {
                    background-color: #fff;
                    font-size: 14px;
                    line-height: 40px;
                    color: #333;
                    text-align: left;
                    padding: 0 0 0 16px;
                    border: none;
                    width: 100%;
                    border-bottom: 1px solid #ececec;
                    font-weight: 400;
                    cursor: pointer;
                }
            }
        }
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

    .job-category {
        display: flex;
        align-items: center;
        width: 100%;

        & > span:nth-child(1) {
            padding: 0px 24px;
            font-size: 30px;
            color: #cccccc;
        }

        & > span:nth-child(2) {
            font-size: 24px;
        }
    }

    .job-category-button {
        border: 0;
        background: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        & > span {
            padding-top: 3px;
            margin-right: 15.5px;
            font-size: 24px;
            line-height: 29px;
            color: #333;
        }
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
    font-weight: 400;
    position: relative;

    .filtered-count {
        position: absolute;
        top: 4px;
        right: 0;
        transform: translate(50%, -50%);
        background-color: #36f;
        border-radius: 10px;
        color: #fff;
        width: 20px;
        height: 20px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
    }

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
const JobGroupArrow = styled(CareerArrow)`
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    padding: 7px;
`;
const JobCategoryArrow = styled(CareerArrow)``;
const JobGroupSelectSection = styled.section`
    display: ${(props) => (props.isClicked ? "block" : "none")};
    position: absolute;
    top: 40px;
    overflow-y: hidden;
    width: 190px;
    max-height: 70vh;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    z-index: 1;
    padding: 15px 0;
    box-sizing: border-box;

    & ul {
        margin: 0;
        padding: 0;
    }
    & li {
        list-style: none;
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        padding: 10px 0 10px 25px;
        display: flex;
        align-items: center;
        color: #333;
        white-space: nowrap;
        &:hover {
            cursor: pointer;
            background-color: #efefef;
        }
    }
`;
const JobCategorySelectSection = styled.section`
    position: absolute;
    top: 40px;
    width: calc(100% - 140px);
    max-width: 910px;
    display: ${(props) => (props.isClicked ? "table" : "none")};
    height: fit-content;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    z-index: 1;

    .job-category-section-top {
        padding: 25px 25px 8px;
        max-width: 910px;

        & > p {
            color: #666;
            font-weight: 400;
            font-size: 12px;
            line-height: 14.4px;
            margin-bottom: 10px;
            white-space: nowrap;
        }

        & > div {
            display: flex;
            flex-wrap: wrap;
        }
    }

    .job-category-section-bottom {
        padding: 16px;
        text-align: right;
        border-top: 1px solid #ececec;
        background-color: #fff;

        & > button {
            width: 160px;
            height: 40px;
            font-size: 15px;
            color: #fff;
            background-color: #36f;
            border: none;
            border-radius: 25px;
            font-weight: 700;
            cursor: pointer;
            &:hover {
                background-color: #013be9;
            }
        }
    }
`;
const JobCategoryItem = styled.button`
    border: 1px solid ${(props) => (props.isClicked ? "#36f" : "#f2f4f7")};
    height: 32px;
    margin-right: 10px;
    margin-bottom: 12px;
    background: ${(props) => (props.isClicked ? "#fff" : "#f2f4f7")};
    border-radius: 20px;
    padding: 8px 14px;
    font-size: 13px;
    line-height: 16px;
    color: ${(props) => (props.isClicked ? "#36f" : "#333")};
    cursor: pointer;
    &:hover {
        border: 1px solid #36f;
    }
`;
const CareerFilterSection = styled.section`
    display: ${(props) => (props.isClicked ? "block" : "none")};
    position: absolute;
    width: 468px;
    height: 174px;
    overflow: hidden;
    background-color: #fff;
    z-index: 99;
    border: 1px solid #e1e2e3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    left: -1px;
    top: 45px;

    & > header {
        display: flex;
        color: #333;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        padding: 30px 15px 20px;
    }

    .body {
        padding: 5px 27px 42px;

        .slider {
            box-sizing: border-box;
            position: relative;
            right: 12.5px;
            width: 100%;
            height: 7px;
            border-radius: 6px;
            background-color: wheat;

            .slider-rail {
                width: 100%;
                height: 7px;
                background-color: rgb(238, 240, 242);
                border-radius: 6px;
                position: absolute;
                top: 0;
            }

            input[type="range"] {
                opacity: 0;
                width: calc(100% + 25px);
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 2;
                pointer-events: none;
            }
            input[type="range"]::-webkit-slider-thumb {
                pointer-events: all;
                cursor: pointer;
            }
        }
    }

    & hr {
        height: 1px;
        background-color: #ececec;
        border: none;
        margin: 0;
    }

    & footer {
        padding: 10px;

        & button {
            border: none;
            background: none;
            height: 30px;
            font-size: 14px;
            padding: 6px 8px;
            cursor: pointer;
        }

        .cancel {
            color: #767676;
            font-weight: 600;
            padding-right: 10px;
        }
        .apply {
            color: #36f;
            font-weight: 700;
        }
    }
`;
const SliderTrack = styled.div`
    height: 7px;
    background-color: #36f;
    position: absolute;
    top: 0;
    left: ${(props) => Math.min(props.left, props.right)}%;
    right: calc(100% - ${(props) => Math.max(props.left, props.right)}%);
    border-radius: 6px;
    box-sizing: border-box;
`;
const SliderLeftHandle = styled.div`
    left: ${(props) => props.val}%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #36f;
    background-color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #36f;
    font-size: 11px;
    font-weight: 700;
    line-height: 14px;
`;
const SliderRightHandle = styled(SliderLeftHandle)``;
export default RecruitmentPage;
