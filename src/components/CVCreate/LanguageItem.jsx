import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

const LanguageItem = ({ langList, setLangList, idx }) => {
    const deleteLang = (idx) => {
        let list = [...langList];
        setLangList(list.filter((d, i) => idx !== i));
    };
    return (
        <ListItem>
            <div>
                <div className="content">
                    <div className="language">
                        <button>
                            영어
                            <RiArrowDropDownLine />
                        </button>
                    </div>
                    <div className="level">
                        <button>
                            수준
                            <RiArrowDropDownLine />
                        </button>
                    </div>
                    <div className="test-wrap">
                        <button className="add-btn">+ 어학시험 추가</button>
                        <ul>
                            <li className="test-list">
                                <input
                                    className="exam-title"
                                    placeholder="시험명"
                                />
                                <input
                                    className="exam-score"
                                    placeholder="점수/급"
                                />
                                <input
                                    className="exam-time"
                                    placeholder="YYYY.MM.DD"
                                />
                                <button className="exam-delete-btn">
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
                    deleteLang(idx);
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

    & button {
        border: none;
        background: none;
        cursor: pointer;
    }

    .content {
        margin-left: 25%;
        width: 75%;

        .language {
            margin-bottom: 3px;
            position: relatve;
            & > button {
                font-size: 20px;
                color: #3b3d40;
                font-weight: 500;
                padding: 0;
                & svg {
                    margin-left: 5px;
                    width: 20px;
                    height: 20px;
                    color: #36f;
                }
            }
        }

        .level {
            & > button {
                font-size: 16px;
                color: #999;
                padding: 0;
                & svg {
                    margin-left: 5px;
                    width: 20px;
                    height: 20px;
                    color: #36f;
                }
            }
        }

        .add-btn {
            font-size: 16px;
            padding: 20px 0;
        }

        .test-list {
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

            input:focus {
                outline: none;
            }

            .exam-title {
                margin: 0;
                padding: 0;
                font-weight: 500;
                font-size: 16px;
                width: 100%;
                white-space: pre-wrap;
                word-wrap: break-word;
                margin-bottom: 3px;
                border: none;
            }

            .exam-score {
                margin-top: 5px;
                margin-bottom: 3px;
                font-size: 16px;
                font-weight: 500;
                border: none;
                width: 100%;
            }

            .exam-time {
                border: none;
                margin-top: 5px;
                margin-bottom: 3px;
            }

            .exam-delete-btn {
                position: absolute;
                padding: 15px;
                top: 0;
                right: 0;
            }
        }
    }
    .delete-btn {
        position: absolute;
        padding: 15px;
        top: 0;
        right: 0;
    }
`;
export default LanguageItem;
