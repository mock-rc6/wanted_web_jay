import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

const langItem = [
    "영어",
    "중국어 북경어",
    "중국어 광동어",
    "일본어",
    "한국어",
    "독일어",
    "스페인어",
    "프랑스어",
    "네덜란드어",
    "노르웨이어",
    "덴마크어",
    "러시아어",
    "루마니아어",
    "말레이시아어",
    "베트남어",
];
const levelItem = ["FLUENT", "BUSINESS", "DAILY"];
const LanguageItem = ({ langList, setLangList, idx }) => {
    const [lang, setLang] = useState(
        langList[idx].title ? langList[idx].title : "언어"
    );
    const [level, setLevel] = useState(
        langList[idx].level ? langList[idx].level : "수준"
    );
    const [langDropdown, setLangDropdown] = useState(false);
    const [levelDropdown, setLevelDropdown] = useState(false);

    useEffect(() => {
        console.log("langList :>> ", langList);
    }, [langList]);

    useEffect(() => {
        let list = [...langList];
        list[idx].title = lang;
        setLangList(list);
    }, [lang]);

    useEffect(() => {
        let list = [...langList];
        list[idx].level = level;
        setLangList(list);
    }, [level]);

    const deleteLang = (idx) => {
        let list = [...langList];
        setLangList(list.filter((d, i) => idx !== i));
    };

    const addTest = () => {
        const test = {
            id: 0,
            title: "",
            score: "",
            date: "",
        };

        let list = [...langList];
        list[idx].language_certificates.push(test);
        setLangList(list);
    };

    const deleteTest = (i) => {
        let list = [...langList];
        let test = list[idx].language_certificates;
        list[idx].language_certificates = test.filter((data, id) => i !== id);
        setLangList(list);
    };

    const handleTestInput = (e, i) => {
        const changed = {
            ...langList[idx].language_certificates[i],
            [e.target.name]: e.target.value,
        };
        let list = [...langList];
        list[idx].language_certificates[i] = changed;
        setLangList(list);
    };

    const handleTestDate = (e, i) => {
        const changed = {
            ...langList[idx].language_certificates[i],
            [e.target.name]: e.target.valueAsDate,
        };
        let list = [...langList];
        list[idx].language_certificates[i] = changed;
        setLangList(list);
    };

    return (
        <ListItem>
            <div>
                <div className="content">
                    <div className="language">
                        <button
                            onClick={() => {
                                setLangDropdown(!langDropdown);
                                setLevelDropdown(false);
                            }}>
                            {lang}
                            <RiArrowDropDownLine />
                        </button>
                        {langDropdown && (
                            <LangDropdown>
                                {langItem.map((data, i) => (
                                    <div
                                        className="lang-item"
                                        key={i}
                                        onClick={() => {
                                            setLang(data);
                                            setLangDropdown(false);
                                        }}>
                                        {data}
                                    </div>
                                ))}
                            </LangDropdown>
                        )}
                    </div>
                    <div className="level">
                        <button
                            onClick={() => {
                                setLevelDropdown(!levelDropdown);
                                setLangDropdown(false);
                            }}>
                            {level}
                            <RiArrowDropDownLine />
                        </button>
                        {levelDropdown && (
                            <LevelDropdown>
                                {levelItem.map((data, i) => (
                                    <div
                                        className="lang-item"
                                        key={i}
                                        onClick={() => {
                                            setLevel(data);
                                            setLevelDropdown(false);
                                        }}>
                                        {data}
                                    </div>
                                ))}
                            </LevelDropdown>
                        )}
                    </div>
                    <div className="test-wrap">
                        <button className="add-btn" onClick={addTest}>
                            + 어학시험 추가
                        </button>
                        <ul>
                            {langList[idx].language_certificates.map(
                                (data, i) => (
                                    <TestList key={i}>
                                        <input
                                            className="exam-title"
                                            placeholder="시험명"
                                            name="title"
                                            onChange={(e) => {
                                                handleTestInput(e, i);
                                            }}
                                            defaultValue={
                                                langList[idx]
                                                    .language_certificates[i]
                                                    .title
                                            }
                                        />
                                        <input
                                            className="exam-score"
                                            placeholder="점수/급"
                                            name="score"
                                            onChange={(e) => {
                                                handleTestInput(e, i);
                                            }}
                                            defaultValue={
                                                langList[idx]
                                                    .language_certificates[i]
                                                    .score
                                            }
                                        />
                                        <input
                                            className="exam-time"
                                            type="date"
                                            name="date"
                                            onChange={(e) => {
                                                handleTestDate(e, i);
                                            }}
                                            defaultValue={
                                                langList[idx]
                                                    .language_certificates[i]
                                                    .date
                                            }
                                        />
                                        <button
                                            className="exam-delete-btn"
                                            onClick={() => {
                                                deleteTest(i);
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
                                    </TestList>
                                )
                            )}
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
            position: relative;
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
            position: relative;
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
    }
    .delete-btn {
        position: absolute;
        padding: 15px;
        top: 0;
        right: 0;
    }
`;
const TestList = styled.li`
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
        width: 150px;
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
`;
const LangDropdown = styled.div`
    position: absolute;
    top: 40px;
    background-color: #fff;
    box-shadow: 1px 2px 3px 3px rgba(0, 0, 0, 0.4);
    z-index: 1;
    height: 300px;
    overflow-y: auto;

    .lang-item {
        background-color: #fff;
        padding: 16px 24px;
        cursor: pointer;
        &:hover {
            background-color: #efefef;
        }
    }
`;
const LevelDropdown = styled(LangDropdown)`
    height: fit-content;
`;
export default LanguageItem;
