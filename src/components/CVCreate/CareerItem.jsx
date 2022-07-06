import React, { useRef } from "react";
import styled from "styled-components";
import { autoResizeTextarea } from "../../utils/autoResizeTextarea";

const CareerItem = ({ careerList, setCareerList, idx }) => {
    const ref1 = useRef();
    const ref2 = useRef();

    const deleteCareer = (idx) => {
        let list = [...careerList];
        setCareerList(list.filter((d, i) => idx !== i));
    };

    const addProject = () => {
        const project = {
            title: "",
            start_date: "",
            end_date: "",
            detail: "",
        };

        let list = [...careerList];
        list[idx].results.push(project);
        setCareerList(list);
    };

    const deleteProject = (id) => {
        let list = [...careerList];
        let result = list[idx].results;
        list[idx].results = result.filter((data, i) => i !== id);
        setCareerList(list);
    };

    return (
        <ListItem>
            <div className="career">
                <div>
                    <div className="period">
                        <input className="start-year" placeholder="YYYY" />
                        <span>.</span>
                        <input className="start-month" placeholder="MM" />
                        <span>&nbsp;-&nbsp;</span>
                        <input className="end-year" placeholder="YYYY" />
                        <span>.</span>
                        <input className="end-month" placeholder="MM" />
                    </div>
                    <div className="period-checkbox">
                        <input type="checkbox" />
                        <label>현재 재직중</label>
                    </div>
                </div>
                <div>
                    <div className="search">
                        <button className="search-modal-btn">회사명</button>
                    </div>
                    <div>
                        <input className="position" placeholder="부서명/직책" />
                    </div>
                    <div className="projects">
                        <button className="add-btn" onClick={addProject}>
                            + 주요 성과 추가
                        </button>
                        <ul>
                            {careerList[idx].results.map((data, i) => (
                                <ProjectList key={i}>
                                    <textarea
                                        ref={ref1}
                                        onKeyDown={() => {
                                            autoResizeTextarea(ref1);
                                        }}
                                        onKeyUp={() => {
                                            autoResizeTextarea(ref1);
                                        }}
                                        placeholder="주요 성과"
                                        maxLength={255}
                                    />
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
                                        <span>&nbsp;-&nbsp;</span>
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
                                    <textarea
                                        ref={ref2}
                                        onKeyDown={() => {
                                            autoResizeTextarea(ref2);
                                        }}
                                        onKeyUp={() => {
                                            autoResizeTextarea(ref2);
                                        }}
                                        placeholder="상세 업무 내용과 성과를 기입해주세요"
                                        maxLength={255}
                                    />
                                    <button
                                        className="delete-btn"
                                        onClick={() => {
                                            deleteProject(i);
                                        }}>
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
                                </ProjectList>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button
                className="delete-btn"
                onClick={() => {
                    deleteCareer(idx);
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" color="#999">
                    <path
                        fill="currentColor"
                        d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                </svg>
            </button>
        </ListItem>
    );
};
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
            width: 100%;
            &:focus {
                outline: none;
                margin-bottom: 3px;
            }
        }

        .projects {
        }
    }
`;
const ProjectList = styled.li`
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
        width: 100%;
        height: auto;
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
`;
export default CareerItem;
