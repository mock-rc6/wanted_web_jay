import React, { useState } from "react";
import Modal from "../common/Modal";
import styled from "styled-components";
import { IoIosRefresh } from "react-icons/io";

const location = [
    { main: "전국", detail: [] },
    {
        main: "서울",
        detail: ["전체", "강남구", "강동구", "강북구", "강서구", "관악구"],
    },
    {
        main: "부산",
        detail: ["전체", "강서구", "금정구", "남구", "동구", "동래구"],
    },
    {
        main: "대구",
        detail: ["전체", "남구", "달서구", "동구", "북구", "서구"],
    },
    {
        main: "인천",
        detail: ["전체", "계양구", "미추홀구", "남동구", "동구", "부평구"],
    },
    {
        main: "광주",
        detail: ["전체", "광산구", "남구", "동구", "북구", "서구"],
    },
    {
        main: "대전",
        detail: ["전체", "대덕구", "동구", "서구", "유성구", "중구"],
    },
    {
        main: "울산",
        detail: ["전체", "남구", "동구", "북구", "중구", "울주군"],
    },
    { main: "세종", detail: ["전체"] },
    {
        main: "경기",
        detail: ["전체", "수원시", "고양시", "성남시", "용인시", "부천시"],
    },
    {
        main: "강원",
        detail: ["전체", "강릉시", "동해시", "삼척시", "속초시", "원주시"],
    },
    {
        main: "충북",
        detail: ["전체", "제천시", "청주시", "충주시", "괴산군", "단양군"],
    },
    {
        main: "충남",
        detail: ["전체", "공주시", "논산시", "보령시", "서산시", "아산시"],
    },
    {
        main: "전북",
        detail: ["전체", "군산시", "김제시", "남원시", "익산시", "전주시"],
    },
    {
        main: "전남",
        detail: ["전체", "광양시", "나주시", "목포시", "순천시", "여수시"],
    },
    {
        main: "경북",
        detail: ["전체", "경산시", "경주시", "구미시", "김천시", "문경시"],
    },
    {
        main: "경남",
        detail: ["전체", "거제시", "김해시", "밀양시", "사천시", "양산시"],
    },
    { main: "제주", detail: ["전체", "서귀포시", "제주시"] },
];
const LocationModal = ({ modalStatus, closeModal, width, setLocations }) => {
    const [detail, setDetail] = useState(0);
    const [selectedLocations, setSelectedLocations] = useState([]);

    //지역 선택
    const handleLocationSelect = (main, detail) => {
        if (main === "전국") {
            setSelectedLocations(["한국 전국"]);
            return;
        }

        if (selectedLocations.length >= 15)
            alert("최대 15개까지 선택 가능합니다.");
        else {
            let tmp = [...selectedLocations];
            tmp = tmp.filter((data) => !data.includes("전국")); //일부 지역 선택 시 전국 태그 삭제
            // 전체와 부분 지역 필터링
            if (detail === "전체") {
                tmp = tmp.filter((data) => !data.includes(main));
            } else {
                tmp = tmp.filter((data) => data !== `${main} 전체`);
            }

            tmp.push(main + " " + detail);
            console.log("tmp :>> ", tmp);
            const set = new Set(tmp);
            let list = [...set];
            setSelectedLocations(list);
        }
    };

    const deleteSelectedLocation = (idx) => {
        //선택한 지역 제거
        let list = [...selectedLocations];
        list = list.filter((data, i) => idx !== i);
        if (list.length === 0) list.push("한국 전국"); // 모두 삭제하면 기본으로 한국 전국이 들어감
        setSelectedLocations(list);
    };

    const submit = () => {
        let list = [];
        selectedLocations.forEach((data) => {
            let str = data.replace(" ", ".");
            list.push(str);
        });
        setLocations(list);
        closeModal();
    };

    return (
        <Modal width={width} modalStatus={modalStatus} closeModal={closeModal}>
            <Wrap>
                <div className="modal-header">
                    <button
                        className="reset-btn"
                        onClick={() => {
                            let list = ["한국 전국"];
                            setSelectedLocations(list);
                        }}>
                        <IoIosRefresh />
                        초기화
                    </button>
                    <span>
                        지역
                        <span className="filter-count">
                            {selectedLocations.length}
                        </span>
                    </span>
                    <button className="close-btn" onClick={closeModal}>
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
                    <div className="selector-container">
                        <h6>국가</h6>
                        <div className="selector-select">
                            <select defaultValue="kr">
                                <option value="all">전세계</option>
                                <option value="tw">대만</option>
                                <option value="sg">싱가폴</option>
                                <option value="jp">일본</option>
                                <option value="kr">한국</option>
                                <option value="others">기타</option>
                            </select>
                        </div>
                    </div>
                    <div className="locations-container">
                        <div className="locations-column">
                            <h6>지역</h6>
                            <ul>
                                {location.map((data, idx) => (
                                    <li
                                        key={idx}
                                        value={idx}
                                        onClick={() => {
                                            setDetail(idx);
                                            handleLocationSelect(
                                                data.main,
                                                "전체"
                                            );
                                        }}>
                                        <button>{data.main}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="locations-column">
                            <h6>상세지역</h6>
                            <ul>
                                {location[detail].detail?.map((data, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            handleLocationSelect(
                                                location[detail].main,
                                                data
                                            );
                                        }}>
                                        <button>{data}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="selected-locations">
                        <ul>
                            {selectedLocations.map((data, idx) => (
                                <li key={idx} className="selected-item">
                                    <span>{data}</span>
                                    {data !== "한국 전국" && (
                                        <button
                                            onClick={() => {
                                                deleteSelectedLocation(idx);
                                            }}>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                color="#36f">
                                                <path
                                                    fill="currentColor"
                                                    d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                                            </svg>
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <p>최대 15개까지 선택 가능합니다.</p>
                    </div>
                    <button className="footer-btn" onClick={submit}>
                        확인
                    </button>
                </div>
            </Wrap>
        </Modal>
    );
};

const Wrap = styled.div`
    .modal-header {
        padding: 16px 20px;
        position: relative;
        color: #333;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        word-wrap: break-word;

        & button {
            padding: 15px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: 0;
            margin: 0;
            cursor: pointer;
        }

        .reset-btn {
            left: 0;
            font-size: 14px;
            font-weight: 400;
            color: #999;
            text-align: left;

            & svg {
                transform: scaleX(-1);
                margin-right: 5px;
            }
        }

        & > span {
            .filter-count {
                display: inline-block;
                margin-left: 7px;
                background-color: #36f;
                border-radius: 50%;
                color: #fff;
                font-size: 12px;
                font-weight: 600;
                width: 20px;
                height: 20px;
                line-height: 20px;
                position: relative;
                top: -2px;
            }
        }

        .close-btn {
            right: 0;
            line-height: 0;
        }
    }

    .modal-body {
        padding: 20px;
        min-height: 276px;
        max-height: 408px;
        height: calc(100vh - 389px);
        overflow-y: auto;
        box-sizing: border-box;

        .selector-container {
            margin: 10px 0 30px;
            & h6 {
                font-size: 16px;
                font-weight: 400;
                color: #999;
                margin: 0 0 10px;
            }

            .selector-select {
                & select {
                    appearance: none;
                    padding: 0 15px;
                    border: 1px solid #e1e2e3;
                    border-radius: 5px;
                    background-color: #fff;
                    color: #333;
                    font-size: 15px;
                    font-weight: 400;
                    width: 100%;
                    height: 40px;

                    &:focus {
                        outline-color: black;
                    }
                }
            }
        }

        .locations-container {
            display: flex;

            .locations-column {
                flex: 1 1;
                max-width: 50%;
                & h6 {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 23px;
                    color: #767676;
                    margin-bottom: 8px;
                }

                & ul {
                    max-height: 230px;
                    min-height: 98px;
                    height: calc(100vh - 567px);
                    overflow-y: auto;
                    border: 1px solid #e1e2e3;

                    & > li > button {
                        width: 100%;
                        text-align: left;
                        padding: 0 14px;
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 27px;
                        letter-spacing: normal;
                        color: #333;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        border: 0;
                        margin: 0;
                        background: none;
                        cursor: pointer;

                        &:hover {
                            background-color: #f7f7f7;
                        }
                    }
                }
            }
        }
    }
    .footer {
        padding: 40px 20px 20px;
        padding-top: 0;
        height: 225px;

        .selected-locations {
            height: 135px;
            background-color: #f6f6f6;
            margin: 0 -20px 20px;
            padding: 5px 20px;
            position: relative;

            & > ul {
                height: 88px;
                overflow-y: auto;
            }

            & p {
                position: absolute;
                bottom: 5px;
                left: 21px;
                line-height: 27px;
                font-size: 11px;
                font-weight: 400;
                color: #999;
            }

            .selected-item {
                display: inline-block;
                margin: 10px 6px 0 0;
                padding: 0 16px 0 15px;
                background-color: #fff;
                border: 1px solid #36f;
                border-radius: 17px;
                line-height: 32px;
                font-size: 13px;
                font-weight: 600;
                color: #36f;

                & > button {
                    position: relative;
                    top: 2px;
                    margin-left: 8px;
                    border: 0;
                    padding: 0;
                    background: none;
                    cursor: pointer;

                    & svg {
                        width: 14px;
                        height: 14px;
                    }
                }
            }
        }

        .footer-btn {
            color: #fff;
            width: 100%;
            height: 50px;
            background-color: #36f;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            line-height: 50px;
            text-align: center;
            border: none;
            cursor: pointer;
        }
    }
`;
export default LocationModal;
