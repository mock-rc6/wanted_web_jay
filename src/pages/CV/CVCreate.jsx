import React, { useState } from "react";
import styled from "styled-components";
import { GrLanguage } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { RiDownloadFill } from "react-icons/ri";
import Header from "../../components/common/Header";

const CVCreate = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [careerList, setCareerList] = useState([]);

    const career = {
        start_date: "",
        end_date: "",
        tenure: "",
        is_in_service: false,
        company_name: "",
        department_position: "",
        result: [],
    };

    const addCareer = () => {
        let list = [...careerList, career];
        setCareerList(list);
    };
    const deleteCareer = (idx) => {
        let list = [...careerList];
        setCareerList(list.filter((d, i) => idx !== i));
    };

    return (
        <Wrap>
            <Header />
            <div className="container">
                <div className="body">
                    <div className="toolbar">
                        <div className="lang">
                            <GrLanguage />
                            <select defaultValue="ko">
                                <option value="ko">한국어</option>
                                <option value="ja">日本語</option>
                                <option value="tw">繁體中文</option>
                                <option value="en">English</option>
                            </select>
                            <GoTriangleDown />
                        </div>
                        <div className="other-btns">
                            <div className="guide-btn">
                                <div className="guide-btn-item">
                                    <button style={{ color: "#36f" }}>
                                        합격/불합격 단어 가이드
                                    </button>
                                </div>
                                <span style={{ color: "#cccccc" }}>
                                    &nbsp;|&nbsp;
                                </span>
                                <div className="guide-btn-item">
                                    <button>내 이력서 단어 체크</button>
                                    <div>
                                        <Toggle
                                            isChecked={isChecked}
                                            onClick={() => {
                                                setIsChecked(!isChecked);
                                            }}></Toggle>
                                    </div>
                                </div>
                            </div>
                            <button className="download">
                                <RiDownloadFill />
                            </button>
                        </div>
                    </div>
                    <div className="body-basic">
                        <input
                            className="title"
                            type="text"
                            maxLength={100}
                            placeholder="이력서 제목(필수)"
                        />
                        <input
                            className="name"
                            type="text"
                            maxLength={100}
                            placeholder="이름(필수)"
                        />
                        <input
                            className="email"
                            type="email"
                            maxLength={120}
                            placeholder="이메일(필수)"
                        />
                        <input
                            className="mobile"
                            type="tel"
                            maxLength={200}
                            placeholder="연락처(필수) ex) 010-0000-0000"
                        />
                    </div>
                    <div className="body-about">
                        <div className="body-about-header">간단 소개글</div>
                        <p className="body-guide">
                            • 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을
                            간단히 작성해주세요. <br />• 3~5줄로 요약하여
                            작성하는 것을 추천합니다!
                        </p>
                        <textarea
                            className="resume-input"
                            maxLength={4000}
                            placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"></textarea>
                    </div>
                    <div className="resume-lists">
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                경력
                            </div>
                            <p className="body-guide">
                                • 담당하신 업무 중 우선순위가 높은 업무를
                                선별하여 최신순으로 작성해주세요. <br />
                                • 경력사항이 없는 경우 '신입'으로 작성해주세요.
                                <br />• 업무 성과는 되도록 구체적인 숫자 혹은
                                %로 표현해주세요!
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn" onClick={addCareer}>
                                    + 추가
                                </button>
                                <ul>
                                    {careerList.map((data, idx) => (
                                        <ListItem key={idx}>
                                            <div className="career">
                                                <div>
                                                    <div className="period">
                                                        <input
                                                            className="start-year"
                                                            placeholder="YYYY"
                                                        />
                                                        <span>.</span>
                                                        <input
                                                            className="start-month"
                                                            placeholder="MM"
                                                        />
                                                        <span>
                                                            &nbsp;-&nbsp;
                                                        </span>
                                                        <input
                                                            className="end-year"
                                                            placeholder="YYYY"
                                                        />
                                                        <span>.</span>
                                                        <input
                                                            className="end-month"
                                                            placeholder="MM"
                                                        />
                                                    </div>
                                                    <div className="period-checkbox">
                                                        <input type="checkbox" />
                                                        <label>
                                                            현재 재직중
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="search">
                                                        <button className="search-modal-btn">
                                                            회사명
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input
                                                            className="position"
                                                            placeholder="부서명/직책"
                                                        />
                                                    </div>
                                                    <div className="projects">
                                                        <button className="add-btn">
                                                            + 주요 성과 추가
                                                        </button>
                                                        <ul>
                                                            <li className="project-list">
                                                                <textarea
                                                                    placeholder="주요 성과"
                                                                    maxLength={
                                                                        255
                                                                    }
                                                                />
                                                                <div className="period">
                                                                    <input
                                                                        className="start-year"
                                                                        placeholder="YYYY"
                                                                    />
                                                                    <span>
                                                                        .
                                                                    </span>
                                                                    <input
                                                                        className="start-month"
                                                                        placeholder="MM"
                                                                    />
                                                                    <span>
                                                                        &nbsp;-&nbsp;
                                                                    </span>
                                                                    <input
                                                                        className="end-year"
                                                                        placeholder="YYYY"
                                                                    />
                                                                    <span>
                                                                        .
                                                                    </span>
                                                                    <input
                                                                        className="end-month"
                                                                        placeholder="MM"
                                                                    />
                                                                </div>
                                                                <textarea
                                                                    placeholder="상세 업무 내용과 성과를 기입해주세요"
                                                                    maxLength={
                                                                        255
                                                                    }
                                                                />
                                                                <button className="delete-btn">
                                                                    <svg
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        color="#999">
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                                                                    </svg>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="delete-btn"
                                                onClick={() => {
                                                    deleteCareer(idx);
                                                }}>
                                                {idx}
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    color="#999">
                                                    <path
                                                        fill="currentColor"
                                                        d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                                                </svg>
                                            </button>
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                학력
                            </div>
                            <p className="body-guide">
                                • 최신순으로 작성해주세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn">+ 추가</button>
                                <ul></ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                스킬
                            </div>
                            <p className="body-guide">
                                • 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는
                                직무와 관련된 스킬을 추가해보세요. <br />•
                                데이터 분석 툴이나 협업 툴 등의 사용해본 경험이
                                있으신 툴들도 추가해보세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn">+ 추가</button>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                수상 및 기타
                            </div>
                            <p className="body-guide">
                                • 수상 이력, 직무 관련 자격증, 수료한 교육이나
                                참석한 외부활동 등이 있다면 간략히 작성해주세요.{" "}
                                <br />• 지원하는 회사에서 요구하는 경우가
                                아니라면 운전면허증과 같은 자격증은 생략하는
                                것이 좋습니다!
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn">+ 추가</button>
                                <ul></ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                외국어
                            </div>
                            <p className="body-guide">
                                • 외국어 자격증을 보유한 경우 작성해주세요.{" "}
                                <br />• 활용 가능한 외국어가 있다면, 어느정도
                                수준인지 레벨을 선택해주세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn">+ 추가</button>
                                <ul></ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                링크
                            </div>
                            <p className="body-guide">
                                • 깃헙, 노션으로 작성한 포트폴리오, 구글
                                드라이브 파일 등 업무 성과를 보여줄 수 있는
                                링크가 있다면 작성해주세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn">+ 추가</button>
                                <ul></ul>
                            </div>
                        </ResumeContentList>
                    </div>
                </div>
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        width: 90%;

        .toolbar {
            position: fixed;
            top: 50px;
            right: 5%;
            left: 5%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            z-index: 4;
            padding: 20px 0;
            box-sizing: border-box;

            .lang {
                height: 40px;
                border-radius: 2px;
                border: 1px solid #333;
                background-color: #fff;
                position: relative;
                display: flex;

                & svg:nth-of-type(1) {
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    top: 50%;
                    left: 10px;
                    z-index: 1;
                    transform: translateY(-50%);
                }
                & select {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    padding-left: 37px;
                    border: #e0e0e0;
                    appearance: none;
                    min-width: 98px;

                    &:focus {
                        outline-color: black;
                    }
                }
                & svg:nth-of-type(2) {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    font-size: 6px;
                    color: #666;
                    transform: translateY(-50%);
                }
            }

            .other-btns {
                display: flex;

                .guide-btn {
                    margin-right: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    background-color: #fff;

                    .guide-btn-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > button {
                            height: 40px;
                            font-size: 15px;
                            font-weight: 600;
                            padding: 6px 8px;
                            border: none;
                            background: none;
                            cursor: pointer;
                        }

                        & > div {
                            width: 56px;
                            height: 30px;
                            display: inline-block;
                            position: relative;
                        }

                        #toggle {
                            display: none;
                        }
                    }
                }

                .download {
                    border: 1px solid #999;
                    width: 40px;
                    height: 40px;
                    background-color: #fff;
                    border-radius: 3px;
                    cursor: pointer;

                    & svg {
                        width: 20px;
                        height: 20px;
                        color: #76797e;
                    }
                }
            }
        }

        .body-basic {
            margin-bottom: 60px;
        }

        .title {
            width: 100%;
            color: #3b3d40;
            font-size: 36px;
            line-height: 36px;
            font-weight: 500;
            margin: 130px 0 50px;
            border: none;
            &:focus {
                outline: none;
            }
        }
        .name {
            margin-top: 20px;
            font-size: 16px;
            border: none;
            width: 100%;
            height: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            &:focus {
                outline: none;
            }
        }

        .email,
        .mobile {
            margin-top: 10px;
            font-size: 16px;
            border: none;
            width: 100%;
            height: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            &:focus {
                outline: none;
            }
        }

        .body-guide {
            white-space: pre-wrap;
            padding: 10px;
            margin-top: 10px;
            background-color: #f3f9fe;
            font-size: 12px;
            line-height: 1.42;
            color: #666;
        }

        .body-about {
            margin-bottom: 60px;
            .body-about-header {
                padding: 20px 0 6px;
                font-size: 16px;
                font-weight: 500;
                color: #3b3d40;
                border-bottom: 1px solid #bababa;
            }

            .resume-input {
                resize: none;
                margin: 30px 0px 3px;
                color: rgb(59, 61, 64);
                height: 34px;
                font-size: 16px;
                width: 100%;
                white-space: pre-wrap;
                word-break: break-all;
                word-wrap: break-word;
                line-height: 22px;
                border: none;
                &:focus {
                    outline: none;
                }
            }
        }
    }
`;
const Toggle = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => (props.isChecked ? "#03c803" : "#f2f4f7")};
    border-radius: 15px;
    border: 1px solid #ececec;

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        border-radius: 50%;
        left: 2px;
        background-color: #fff;
        transform: ${(props) => (props.isChecked ? "translateX(80%)" : "")};
        transition: 0.4s;
        border: 1px solid #e1e2e3;
    }
`;
const ResumeContentList = styled.div`
    margin-bottom: 20px;

    .resume-content-list-header {
        padding: 40px 0 6px;
        font-size: 16px;
        font-weight: 500;
        color: #3b3d40;
        border-bottom: 1px solid #bababa;
    }

    .add-btn {
        color: #36f;
        border-bottom: 1px solid #f1f1f1;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: 30px 0;
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
    }
`;
const ListItem = styled.li`
    list-style: none;
    padding: 30px;
    position: relative;
    border-top: 1px solid #f1f1f1;

    .delete-btn {
        background: none;
        border: none;
        padding: 15px;
        position: absolute;
        top: 0;
        right: 15px;
        cursor: pointer;
    }

    .career {
        display: flex;
        & > div:first-of-type {
            flex: 1;
        }
        & > div:nth-of-type(2) {
            flex: 3;
        }
        .period {
            .start-year,
            .end-year {
                font-size: 14px;
                font-weight: 500;
                width: 36px;
                border: none;
                &:focus {
                    outline: none;
                }
            }
            .start-month,
            .end-month {
                font-size: 14px;
                font-weight: 500;
                width: 26px;
                margin-left: 4px;
                border: none;
                &:focus {
                    outline: none;
                }
            }
        }
        .period-checkbox {
            margin: 16px 0 30px;
            display: flex;
            align-items: center;
            color: rgba(0, 0, 0, 0.4);
            font-size: 14px;
            font-weight: 600;
            & > input {
                margin-right: 5px;
            }
        }

        .search {
            display: flex;
            .search-modal-btn {
                padding: 0;
                border: none;
                background: none;
                width: fit-content;
                cursor: pointer;
                color: #3b3d40;
                white-space: nowrap;
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 3px;
                word-wrap: break-word;
            }
        }
        .position {
            font-size: 16px;
            border: none;
            padding: 0;
            &:focus {
                outline: none;
                margin-bottom: 3px;
                width: 100%;
            }
        }

        .projects {
            .project-list {
                display: flex;
                flex-direction: column;
                position: relative;
                list-style: none;
                margin-left: -40px;
                padding: 15px 20px 15px 60px;
                font-size: 10px;

                &::before {
                    content: "●";
                    position: absolute;
                    top: 18px;
                    left: 40px;
                }
                & textarea {
                    border: none;
                    resize: none;
                    white-space: pre-wrap;
                    word-break: break-all;
                    word-wrap: break-word;
                    height: 34px;
                    color: rgb(59, 61, 64);
                    &:focus {
                        outline: none;
                    }
                }
                & textarea:nth-of-type(1) {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 22px;
                }
                & textarea:nth-of-type(2) {
                    font-size: 14px;
                    line-height: 1.6;
                }
            }
        }
    }
`;
export default CVCreate;
