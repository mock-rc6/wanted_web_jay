import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { autoResizeTextarea } from "../../utils/autoResizeTextarea";
import Modal from "../common/Modal";

const CareerItem = ({ careerList, setCareerList, idx }) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const [openModal, setOpenModal] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [tenure, setTenure] = useState("FULL_TIME");
    const [isChecked, setIsChecked] = useState(careerList[idx].is_in_service);

    const deleteCareer = (id) => {
        let list = [...careerList];
        setCareerList(list.filter((d, i) => id !== i));
    };

    const addProject = () => {
        const project = {
            id: 0,
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

    const addCompany = () => {
        let list = [...careerList];
        list[idx].company_name = companyName;
        list[idx].tenure = tenure;
        setCareerList(list);
        setOpenModal(false);
    };

    const handleCompany = (e) => {
        setCompanyName(e.target.value);
    };
    const handleTenure = (e) => {
        setTenure(e.target.value);
    };
    const handleDate = (e) => {
        const changed = {
            ...careerList[idx],
            [e.target.name]: e.target.valueAsDate,
        };
        let list = [...careerList];
        list[idx] = changed;
        setCareerList(list);
    };
    const handleResultDate = (e, i) => {
        const changed = {
            ...careerList[idx].results[i],
            [e.target.name]: e.target.valueAsDate,
        };
        let list = [...careerList];
        list[idx].results[i] = changed;
        setCareerList(list);
    };

    const handleResultInput = (e, i) => {
        const changed = {
            ...careerList[idx].results[i],
            [e.target.name]: e.target.value,
        };
        let list = [...careerList];
        list[idx].results[i] = changed;
        setCareerList(list);
    };

    const handleCheck = (e) => {
        const changed = {
            ...careerList[idx],
            [e.target.name]: e.target.checked,
        };
        let list = [...careerList];
        list[idx] = changed;
        setCareerList(list);
        setIsChecked(e.target.checked);
    };

    const handleInput = (e) => {
        const changed = { ...careerList[idx], [e.target.name]: e.target.value };
        let list = [...careerList];
        list[idx] = changed;
        setCareerList(list);
    };

    useEffect(() => {
        console.log("tenure :>> ", careerList);
    }, [careerList]);

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
                            defaultValue={careerList[idx].start_date}
                        />
                        {isChecked && (
                            <>
                                <span>&nbsp;-&nbsp;</span>
                                <input
                                    className="end-date"
                                    type="date"
                                    name="end_date"
                                    onChange={handleDate}
                                    defaultValue={careerList[idx].end_date}
                                />
                            </>
                        )}
                    </div>
                    <div className="period-checkbox">
                        <input
                            type="checkbox"
                            name="is_in_service"
                            onChange={handleCheck}
                            defaultChecked={careerList[idx].is_in_service}
                        />
                        <label>현재 재직중</label>
                    </div>
                </div>
                <div>
                    <div className="search">
                        <button
                            className="search-modal-btn"
                            onClick={() => {
                                setOpenModal(true);
                            }}>
                            {careerList[idx].company_name === ""
                                ? "회사명"
                                : careerList[idx].company_name}
                        </button>
                        {careerList[idx].tenure && (
                            <div className="tenure">
                                {careerList[idx].tenure}
                            </div>
                        )}
                    </div>
                    <div>
                        <input
                            className="position"
                            placeholder="부서명/직책"
                            name="department_position"
                            onChange={handleInput}
                            defaultValue={careerList[idx].department_position}
                        />
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
                                        name="title"
                                        onChange={(e) => {
                                            handleResultInput(e, i);
                                        }}
                                        defaultValue={
                                            careerList[idx].results[i].title
                                        }
                                    />
                                    <div className="period">
                                        <input
                                            className="start-date"
                                            type="date"
                                            name="start_date"
                                            onChange={(e) => {
                                                handleResultDate(e, i);
                                            }}
                                            defaultValue={
                                                careerList[idx].results[i]
                                                    .start_date
                                            }
                                        />
                                        <span>&nbsp;-&nbsp;</span>
                                        <input
                                            className="end-date"
                                            type="date"
                                            name="end_date"
                                            onChange={(e) => {
                                                handleResultDate(e, i);
                                            }}
                                            defaultValue={
                                                careerList[idx].results[i]
                                                    .end_date
                                            }
                                        />
                                    </div>
                                    <textarea
                                        ref={ref2}
                                        defaultValue={
                                            careerList[idx].results[i].detail
                                        }
                                        onKeyDown={() => {
                                            autoResizeTextarea(ref2);
                                        }}
                                        onKeyUp={() => {
                                            autoResizeTextarea(ref2);
                                        }}
                                        placeholder="상세 업무 내용과 성과를 기입해주세요"
                                        maxLength={255}
                                        name="detail"
                                        onChange={(e) => {
                                            handleResultInput(e, i);
                                        }}
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
            <Modal
                modalStatus={openModal}
                closeModal={() => {
                    setOpenModal(false);
                }}
                width={500}>
                <Wrap>
                    <div className="modal-header">
                        직장 검색
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
                            <div>직장</div>
                            <input
                                placeholder="직장명 검색"
                                name="company_name"
                                onChange={handleCompany}
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
                        <div
                            className="modal-body-input-wrap"
                            style={{ marginTop: 20 }}>
                            <div>재직 형태</div>
                            <select onChange={handleTenure} name="tenure">
                                <option value="FULL_TIME">풀타임</option>
                                <option value="PART_TIME">파트타임</option>
                                <option value="INTERN">인턴</option>
                            </select>
                        </div>
                        <button className="modal-btn" onClick={addCompany}>
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

            .tenure {
                padding: 2px 10px;
                margin-left: 6px;
                font-size: 14px;
                margin-bottom: 3px;
                border-radius: 25px;
                background-color: #f2f4f7;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #333333;
                & select {
                    border: none;
                    background-color: transparent;
                    appearance: none;
                    &:focus {
                        outline: none;
                    }
                }
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
export default CareerItem;
