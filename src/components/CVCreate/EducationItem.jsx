import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { autoResizeTextarea } from "../../utils/autoResizeTextarea";
import Modal from "../common/Modal";

const EducationItem = ({ educationList, setEducationList, idx }) => {
    const ref = useRef();
    const [openModal, setOpenModal] = useState(false);
    const [schoolName, setSchoolName] = useState("");
    const [isChecked, setIsChecked] = useState(
        educationList[idx].is_in_service
    );

    const deleteEducation = (idx) => {
        let list = [...educationList];
        setEducationList(list.filter((d, i) => idx !== i));
    };

    const addSchool = () => {
        let list = [...educationList];
        list[idx].school_name = schoolName;
        setEducationList(list);
        setOpenModal(false);
    };

    const handleSchool = (e) => {
        setSchoolName(e.target.value);
    };

    const handleInput = (e) => {
        const changed = {
            ...educationList[idx],
            [e.target.name]: e.target.value,
        };
        let list = [...educationList];
        list[idx] = changed;
        setEducationList(list);
    };

    const handleDate = (e) => {
        const changed = {
            ...educationList[idx],
            [e.target.name]: e.target.valueAsDate,
        };
        let list = [...educationList];
        list[idx] = changed;
        setEducationList(list);
    };

    const handleCheck = (e) => {
        const changed = {
            ...educationList[idx],
            [e.target.name]: e.target.checked,
        };
        let list = [...educationList];
        list[idx] = changed;
        setEducationList(list);
        setIsChecked(e.target.checked);
    };

    useEffect(() => {
        console.log("educationList :>> ", educationList);
    }, [educationList]);

    return (
        <ListItem>
            <div className="career">
                <div>
                    <div className="period">
                        <input
                            className="start-date"
                            type="date"
                            name="start_date"
                            onChange={handleDate}
                            defaultValue={educationList[idx].start_date}
                        />
                        {isChecked && (
                            <>
                                <span>&nbsp;-&nbsp;</span>
                                <input
                                    className="end-date"
                                    type="date"
                                    name="end_date"
                                    onChange={handleDate}
                                    defaultValue={educationList[idx].end_date}
                                />
                            </>
                        )}
                    </div>
                    <div className="period-checkbox">
                        <input
                            type="checkbox"
                            name="is_in_service"
                            onChange={handleCheck}
                            defaultChecked={educationList[idx].is_in_service}
                        />
                        <label>현재 재학중</label>
                    </div>
                </div>
                <div>
                    <div className="search">
                        <button
                            className="search-modal-btn"
                            onClick={() => {
                                setOpenModal(true);
                            }}>
                            {educationList[idx].school_name === ""
                                ? "학교명"
                                : educationList[idx].school_name}
                        </button>
                    </div>
                    <div>
                        <input
                            className="position"
                            placeholder="전공 및 학위 (ex: 경영학과 학사)"
                            name="major_degree"
                            onChange={handleInput}
                            defaultValue={educationList[idx].major_degree}
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
                            name="detail"
                            onChange={handleInput}
                            defaultValue={educationList[idx].detail}
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
            <Modal
                modalStatus={openModal}
                closeModal={() => {
                    setOpenModal(false);
                }}
                width={500}>
                <Wrap>
                    <div className="modal-header">
                        학교 검색
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                color="#999">
                                <path
                                    fill="currentColor"
                                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body-input-wrap">
                            <div>학교</div>
                            <input
                                placeholder="학교명 검색"
                                name="school_name"
                                onChange={handleSchool}
                            />
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18">
                                    <g fill="none" fillRule="evenodd">
                                        <g fill="#939393">
                                            <g>
                                                <g>
                                                    <path
                                                        d="M16.433 17.317c.244.244.64.244.884 0s.244-.64 0-.884L11.9 11.016l-.211-.184c-.248-.212-.617-.198-.848.032C9.794 11.905 8.382 12.5 6.875 12.5c-3.106 0-5.625-2.519-5.625-5.625 0-3.107 2.518-5.625 5.625-5.625S12.5 3.768 12.5 6.875c0 .58-.088 1.148-.259 1.691-.103.33.08.68.409.784.33.104.68-.08.784-.409.208-.663.316-1.359.316-2.066C13.75 3.078 10.672 0 6.875 0S0 3.078 0 6.875c0 3.796 3.078 6.875 6.875 6.875 1.634 0 3.18-.574 4.4-1.593l5.158 5.16z"
                                                        transform="translate(-1215 -454) translate(193 438) translate(1022.042 16.042)"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <button className="modal-btn" onClick={addSchool}>
                            확인
                        </button>
                    </div>
                </Wrap>
            </Modal>
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
            .start-date,
            .end-date {
                font-size: 14px;
                font-weight: 500;
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
const Wrap = styled.div`
    .modal-header {
        height: 54px;
        padding: 16px 20px;
        position: relative;
        color: #333;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        & button {
            position: absolute;
            top: 0;
            right: 0;
            padding: 15px;
            background: none;
            border: none;
            cursor: pointer;
        }
    }
    .modal-body {
        padding: 20px;
        .modal-body-input-wrap {
            position: relative;
            & > select {
                margin-top: 10px;
                width: 100%;
                padding: 12px 20px 11px 15px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 400;
                color: #333;
            }

            & > div {
                color: #767676;
                font-size: 14px;
                font-weight: 500;
            }
            & input {
                margin-top: 10px;
                width: 100%;
                padding: 12px 60px 12px 15px;
                border: 1px solid #36f;
                font-size: 16px;
                border-radius: 5px;
                box-sizing: border-box;
            }
            & > span {
                position: absolute;
                top: 80%;
                right: 20px;
                transform: translateY(-50%);

                &::before {
                    content: "";
                    width: 1px;
                    background-color: #ececec;
                    height: 28px;
                    display: block;
                    position: absolute;
                    left: -21px;
                    bottom: 3px;
                }
            }
        }
        .modal-btn {
            margin-top: 30px;
            width: 100%;
            padding: 18px 148px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            background-color: #36f;
            border: none;
            color: #fff;
            cursor: pointer;
        }
    }
`;
export default EducationItem;
