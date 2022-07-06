import React, { useRef } from "react";
import styled from "styled-components";
import { autoResizeTextarea } from "../../utils/autoResizeTextarea";

const EducationItem = ({ educationList, setEducationList, idx }) => {
    const ref = useRef();

    const deleteEducation = (idx) => {
        let list = [...educationList];
        setEducationList(list.filter((d, i) => idx !== i));
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
                        <label>현재 재학중</label>
                    </div>
                </div>
                <div>
                    <div className="search">
                        <button className="search-modal-btn">학교명</button>
                    </div>
                    <div>
                        <input
                            className="position"
                            placeholder="전공 및 학위 (ex: 경영학과 학사)"
                        />
                    </div>
                    <div>
                        <textarea
                            ref={ref}
                            onKeyDown={() => {
                                autoResizeTextarea(ref);
                            }}
                            onKeyUp={() => {
                                autoResizeTextarea(ref);
                            }}
                            className="detail"
                            placeholder="이수과목 또는 연구내용"
                        />
                    </div>
                </div>
            </div>
            <button
                className="delete-btn"
                onClick={() => {
                    deleteEducation(idx);
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
            margin-bottom: 8px;
            &:focus {
                outline: none;
            }
        }
        .detail {
            border: none;
            resize: none;
            white-space: pre-wrap;
            word-break: break-all;
            word-wrap: break-word;
            width: 100%;
            height: 100%;
            padding: 0;
            color: rgb(59, 61, 64);
            &:focus {
                outline: none;
            }
        }
    }
`;
export default EducationItem;
