import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "../common/Modal";
import { IoIosArrowForward } from "react-icons/io";

const mobileOptions = [
    { value: "+82", data: "South Korea" },
    { value: "+81", data: "Japan" },
    { value: "+1", data: "United States" },
];
const SignupDetail = ({ width, modalStatus, closeModal }) => {
    const [phoneNum, setPhoneNum] = useState("");
    const [phoneNumIsValid, setPhoneNumIsValid] = useState(false);

    useEffect(() => {
        checkPhoneNum(phoneNum);
    }, [phoneNum]);

    const phoneNumRegExp = (num) => {
        //전화번호 정규식
        var regExp = /^\d{3}\d{4}\d{4}$/;
        return regExp.test(num) ? true : false;
    };

    const checkPhoneNum = (num) => {
        if (phoneNumRegExp(num)) {
            setPhoneNumIsValid(true);
        } else {
            setPhoneNumIsValid(false);
        }
    };

    const handlePhoneNumber = (e) => {
        setPhoneNum(e.target.value);
    };

    return (
        <Modal width={width} modalStatus={modalStatus} closeModal={closeModal}>
            <Wrap>
                <div className="modal-header">
                    회원가입
                    <button onClick={closeModal}>
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
                    <form>
                        <div className="style-wrap">
                            <label htmlFor="userName">이름</label>
                            <div className="style-body">
                                <input
                                    type="text"
                                    placeholder="이름을 입력해 주세요."
                                    id="userName"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="style-wrap">
                            <label>휴대폰 번호</label>
                            <div className="style-body">
                                <div className="mobile-select">
                                    <select>
                                        {mobileOptions.map((data, idx) => (
                                            <option
                                                key={idx}
                                                value={data.value}>
                                                {data.value}&nbsp;{data.data}
                                            </option>
                                        ))}
                                    </select>
                                    <IoIosArrowForward
                                        style={{
                                            position: "absolute",
                                            right: 10,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                </div>
                                <div className="mobile-input">
                                    <input
                                        className="user-phone-number"
                                        placeholder="(예시) 01034567890"
                                        onChange={handlePhoneNumber}
                                    />
                                    <GetCodeButton
                                        isValid={phoneNumIsValid}
                                        disabled={
                                            phoneNumIsValid ? false : true
                                        }>
                                        인증번호 받기
                                    </GetCodeButton>
                                </div>
                                <div className="input-code-wrap">
                                    <input
                                        placeholder="인증번호를 입력해 주세요."
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="style-wrap">
                            <label htmlFor="userPassword">비밀번호</label>
                            <div className="style-body">
                                <input
                                    type="password"
                                    placeholder="비밀번호를 입력해 주세요."
                                    id="userPassword"
                                />
                            </div>
                            <div className="style-guide">
                                영문 대소문자, 숫자, 특수문자를 3가지 이상으로
                                조합하여 8자 이상 입력해 주세요.
                            </div>
                        </div>
                        <div className="style-wrap">
                            <label htmlFor="userPasswordRepeat">
                                비밀번호 확인
                            </label>
                            <div className="style-body">
                                <input
                                    type="password"
                                    placeholder="비밀번호를 다시 한번 입력해 주세요."
                                    id="userPasswordRepeat"
                                />
                            </div>
                        </div>
                        <div className="agree-wrap">
                            <div className="check-all check">
                                <input type="checkbox" />
                                전체 동의
                            </div>
                            <div className="check">
                                <input type="checkbox" />
                                개인정보 수집 및 이용 동의 (필수)
                                <span>자세히</span>
                            </div>
                            <div className="check" style={{ marginTop: 15 }}>
                                <input type="checkbox" />
                                이벤트 소식 등 알림 정보 받기
                                <span>자세히</span>
                            </div>
                        </div>
                    </form>
                    <SubmitButtonWrap>
                        <div>
                            <SubmitButton>회원가입하기</SubmitButton>
                        </div>
                    </SubmitButtonWrap>
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

        & > button {
            all: unset;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            padding: 15px;
            line-height: 0;
            cursor: pointer;
        }
    }

    .modal-body {
        padding: 20px;
        padding-bottom: 0px;
    }

    .style-wrap {
        padding-bottom: 22px;
        color: #767676;
        & label {
            font-size: 14px;
        }
    }
    .style-body {
        margin-top: 11px;

        & > input {
            padding: 1px 15px;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            border: 1px solid #e1e2e3;
            border-radius: 5px;
            font-size: 15px;
        }
    }

    .style-guide {
        margin-top: 6px;
        font-size: 12px;
    }

    .mobile-select {
        margin-bottom: 10px;
        padding: 0 15px;
        position: relative;
        height: 50px;
        font-size: 15px;
        border: 1px solid #e1e2e3;
        border-radius: 5px;
        color: #333;

        & > select {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 0 15px;
            height: 50px;
            border: none;
            appearance: none;
        }
    }

    .mobile-input {
        display: flex;

        .user-phone-number {
            width: 100%;
            height: 50px;
            padding: 0 15px;
            border-radius: 5px;
            border: 1px solid #e1e2e3;
            font-size: 15px;
            color: #333;
        }
    }

    .input-code-wrap {
        margin-top: 10px;

        & > input {
            padding: 1px 95px 1px 15px;
            height: 50px;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #e1e2e3;
            border-radius: 5px;
        }
    }

    .agree-wrap {
        margin-top: 8px;
        font-size: 15px;
        color: #939393;
        .check-all {
            padding-bottom: 14px;
            margin-bottom: 15px;
            border-bottom: 1px solid #e1e2e3;
        }

        .check {
            display: flex;
            align-items: center;
            position: relative;

            & input {
                margin-right: 10px;
            }

            & span {
                position: absolute;
                right: 0;
                font-size: 13px;
                color: #767676;
            }
        }
    }
`;
const GetCodeButton = styled.button`
    min-width: 117px;
    margin-left: 10px;
    padding: 16px 15px 14px;
    border-radius: 5px;
    border: 1px solid ${(props) => (props.isValid ? "#e1e2e3" : "transparent")};
    background-color: ${(props) => (props.isValid ? "#fff" : "#f2f4f7")};
    font-weight: 700;
    color: ${(props) => (props.isValid ? "#36f" : "#ccc")};
    cursor: ${(props) => (props.isValid ? "pointer" : "default")};
`;
const SubmitButtonWrap = styled.div`
    width: 100%;
    height: 100px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);

    & > div {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
    }
`;
const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cacaca;
    background-color: #f2f4f7;
    border: 1px solid transparent;
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    height: 54px;
    cursor: not-allowed;
`;
export default SignupDetail;
