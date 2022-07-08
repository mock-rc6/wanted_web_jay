import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Modal from "../common/Modal";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { api } from "../../lib/api/api";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { loginAction } from "../../store/actions/login";

const mobileOptions = [
    { value: "+82", data: "South Korea" },
    { value: "+81", data: "Japan" },
    { value: "+1", data: "United States" },
];
const SignupDetail = ({ width, modalStatus, closeModal, status }) => {
    const dispatch = useDispatch();
    const passwordRef = useRef();
    const passwordMsgRef = useRef();
    const passwordCheckRef = useRef();
    const codeRef = useRef();
    const buttonRef = useRef();

    const email = useSelector((state) => state.SignupReducer.email);

    const [cookie, setCookie, removeCookie] = useCookies(["cookie-name"]);
    const [form, setForm] = useState({
        name: "",
        phoneNum: "",
        password: "",
        passwordCheck: "",
    });

    const { name, phoneNum, password, passwordCheck } = form;

    const [allCheck, setAllCheck] = useState(false);
    const [essentialCheck, setEssentialCheck] = useState(false);
    const [selectionCheck, setSelectionCheck] = useState(false);

    const [phoneNumIsValid, setPhoneNumIsValid] = useState(false);
    const [codeSuccess, setCodeSuccess] = useState(false);
    const [code, setCode] = useState("");
    const [token, setToken] = useState("");
    const [showCodeMsg, setShowCodeMsg] = useState(false);
    const [codeIsValid, setCodeIsValid] = useState(0); //번호 요청 완료
    const [isPasswordSame, setIsPasswordSame] = useState(true);
    const [passwordRight, setPasswordRight] = useState(false);
    const [pw, setPw] = useState("");

    useEffect(() => {
        checkPhoneNum(phoneNum);
    }, [phoneNum]);

    useEffect(() => {
        if (password !== "") {
            checkPassword();
            if (password === passwordCheck) setIsPasswordSame(true);
            else setIsPasswordSame(false);
        }
    }, [password]);

    useEffect(() => {
        if (passwordCheck !== "") {
            checkPasswordCheck();
            if (password === passwordCheck) setIsPasswordSame(true);
            else setIsPasswordSame(false);
        }
    }, [passwordCheck]);

    useEffect(() => {
        if (allCheck) {
            setEssentialCheck(true);
            setSelectionCheck(true);
        } else {
            setEssentialCheck(false);
            setSelectionCheck(false);
        }
    }, [allCheck]);

    useEffect(() => {
        if (!essentialCheck || !selectionCheck) setAllCheck(false);
        else if (essentialCheck && selectionCheck) setAllCheck(true);
    }, [essentialCheck, selectionCheck]);

    const close = () => {
        if (status === "signup") {
            setForm({
                name: "",
                phoneNum: "",
                password: "",
                passwordCheck: "",
            });
            setPhoneNumIsValid(false);
            setCodeSuccess(false);
            setCode("");
            setToken("");
            setShowCodeMsg(false);
            setCodeIsValid(0);
            setIsPasswordSame(true);
            setPasswordRight(false);
            if (window.confirm("회원가입을 취소하시겠습니까?")) closeModal();
        } else closeModal();
    };

    const phoneNumRegExp = (num) => {
        //전화번호 정규식
        var regExp = /^\d{3}-\d{4}-\d{4}$/;
        return regExp.test(num) ? true : false;
    };

    const passwordRegExp = (str) => {
        //대소문자, 숫자, 특수문자 포함 8자 이상 정규식
        var regExp = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        return regExp.test(str) ? true : false;
    };

    const checkPhoneNum = (num) => {
        if (phoneNumRegExp(num)) {
            setPhoneNumIsValid(true);
        } else {
            setPhoneNumIsValid(false);
        }
    };

    const checkPassword = () => {
        if (passwordRegExp(password)) {
            passwordRef.current.style.borderColor = "#e1e2e3";
            passwordMsgRef.current.style.color = "#767676";
            setPasswordRight(true);
        } else {
            passwordRef.current.style.borderColor = "#fe415c";
            passwordMsgRef.current.style.color = "#fe415c";
            setPasswordRight(false);
        }
    };

    const checkPasswordCheck = () => {
        if (passwordRegExp(passwordCheck)) {
            passwordCheckRef.current.style.borderColor = "#e1e2e3";
        } else {
            passwordCheckRef.current.style.borderColor = "#fe415c";
        }
    };

    const handleForm = (e) => {
        const changed = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(changed);
    };

    const handleCode = (e) => {
        setCode(e.target.value);
    };

    const getCode = () => {
        axios
            .post(
                api + "sms",
                {
                    phone_number: phoneNum,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    setCodeSuccess(true);
                    setShowCodeMsg(true);
                    codeRef.current.style.border = "1px solid #e1e2e3";
                } else {
                    alert(res.data.message);
                    codeRef.current.style.border = "1px solid #fe415c";
                }
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const checkCode = () => {
        axios
            .post(
                api + "sms/authentication",
                {
                    phone_number: phoneNum,
                    code,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    setToken(res.data.result.jwt);
                    setCodeIsValid(1); //인증 완료
                } else {
                    setCodeIsValid(2); //인증 실패
                }
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const submit = () => {
        axios
            .post(
                api + "users",
                {
                    user_name: name,
                    email,
                    password: password,
                    phone_number: phoneNum,
                },
                {
                    headers: {
                        "X-Access-Token": token,
                        "content-type": "application/json",
                    },
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    alert("회원가입이 완료되었습니다.");
                    closeModal();
                } else {
                    alert(res.data.message);
                }
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const login = () => {
        axios
            .post(
                api + "users/login",
                { email, password: pw },
                { withCredentials: true }
            )
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    setCookie("accessToken", res.data.result.jwt);
                    const userInfo = {
                        email,
                        id: res.data.result.id,
                    };
                    dispatch(loginAction(userInfo));
                    console.log("로그인 성공!");
                    closeLoginModal();
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    const closeLoginModal = () => {
        closeModal();
        window.location.reload();
    };

    const handlePassword = (e) => {
        setPw(e.target.value);
    };
    return (
        <Modal width={width} modalStatus={modalStatus} closeModal={close}>
            {status === "signup" ? (
                <Wrap>
                    <div className="modal-header">
                        회원가입
                        <button onClick={close}>
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
                                        name="name"
                                        onChange={handleForm}
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
                                                    {data.value}&nbsp;
                                                    {data.data}
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
                                            placeholder="(예시) 010-3456-7890"
                                            onChange={handleForm}
                                            name="phoneNum"
                                        />
                                        <GetCodeButton
                                            type="button"
                                            isValid={phoneNumIsValid}
                                            disabled={
                                                phoneNumIsValid ? false : true
                                            }
                                            onClick={getCode}>
                                            인증번호 받기
                                        </GetCodeButton>
                                    </div>
                                    <div className="input-code-wrap">
                                        <input
                                            placeholder="인증번호를 입력해 주세요."
                                            disabled={
                                                codeSuccess ? false : true
                                            }
                                            onChange={handleCode}
                                            ref={codeRef}
                                        />
                                        {codeIsValid === 1 ? (
                                            <div className="input-code-success">
                                                <span>일치</span>
                                                <svg
                                                    class="SvgIcon_SvgIconrootsvg__DKYBi"
                                                    viewBox="0 0 15 15"
                                                    style={{
                                                        width: 13,
                                                        height: 13,
                                                    }}>
                                                    <defs>
                                                        <path
                                                            id="al3je9dvha"
                                                            d="M576.95 196.13c-.217-.217-.57-.217-.787 0-.217.218-.217.57 0 .788l3.71 3.71c.217.217.57.217.787 0l6.677-6.678c.217-.217.217-.57 0-.787-.217-.217-.57-.217-.787 0l-6.284 6.284-3.316-3.316z"></path>
                                                    </defs>
                                                    <g
                                                        fill="currentColor"
                                                        fillRule="evenodd">
                                                        <g transform="translate(-575 -192)">
                                                            <use
                                                                fill="blue"
                                                                fillRule="nonzero"
                                                                stroke="#FFF"
                                                                strokeWidth=".3"
                                                                xlinkHref="#al3je9dvha"></use>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                        ) : (
                                            <InputCodeButton
                                                type="button"
                                                onClick={checkCode}
                                                code={code}>
                                                확인
                                            </InputCodeButton>
                                        )}
                                    </div>
                                    <CodeMsg
                                        show={showCodeMsg}
                                        valid={codeIsValid}>
                                        {codeIsValid === 0
                                            ? "인증번호가 요청되었습니다."
                                            : codeIsValid === 1
                                            ? "인증 되었습니다."
                                            : "인증번호가 잘못되었습니다."}
                                    </CodeMsg>
                                </div>
                            </div>
                            <div className="style-wrap">
                                <label htmlFor="userPassword">비밀번호</label>
                                <div className="style-body">
                                    <input
                                        type="password"
                                        placeholder="비밀번호를 입력해 주세요."
                                        id="userPassword"
                                        name="password"
                                        onChange={handleForm}
                                        ref={passwordRef}
                                    />
                                </div>
                                <div
                                    className="style-guide"
                                    ref={passwordMsgRef}>
                                    영문 대소문자, 숫자, 특수문자를 3가지
                                    이상으로 조합하여 8자 이상 입력해 주세요.
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
                                        name="passwordCheck"
                                        onChange={handleForm}
                                        ref={passwordCheckRef}
                                    />
                                </div>
                                <PasswordMsg
                                    className="style-guide"
                                    same={isPasswordSame}>
                                    비밀번호가 일치하지 않습니다.
                                </PasswordMsg>
                            </div>
                            <div className="agree-wrap">
                                <div className="check-all check">
                                    <input
                                        type="checkbox"
                                        checked={allCheck}
                                        onChange={(e) => {
                                            setAllCheck(e.target.checked);
                                        }}
                                    />
                                    전체 동의
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        checked={essentialCheck}
                                        onChange={(e) => {
                                            setEssentialCheck(e.target.checked);
                                        }}
                                    />
                                    개인정보 수집 및 이용 동의 (필수)
                                    <span>자세히</span>
                                </div>
                                <div
                                    className="check"
                                    style={{ marginTop: 15 }}>
                                    <input
                                        type="checkbox"
                                        checked={selectionCheck}
                                        onChange={(e) => {
                                            setSelectionCheck(e.target.checked);
                                        }}
                                    />
                                    이벤트 소식 등 알림 정보 받기
                                    <span>자세히</span>
                                </div>
                            </div>
                        </form>
                        <SubmitButtonWrap>
                            <div>
                                {name !== "" &&
                                isPasswordSame &&
                                passwordRight &&
                                phoneNum !== "" &&
                                codeIsValid === 1 &&
                                essentialCheck ? (
                                    <SubmitButton
                                        type="submit"
                                        onClick={submit}
                                        ref={buttonRef}>
                                        회원가입하기
                                    </SubmitButton>
                                ) : (
                                    <DisabledButton>
                                        회원가입하기
                                    </DisabledButton>
                                )}
                            </div>
                        </SubmitButtonWrap>
                    </div>
                </Wrap>
            ) : status === "login" ? (
                <Wrap>
                    <div className="modal-header">
                        비밀번호 입력
                        <button onClick={close}>
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
                    <div className="password-modal-body">
                        <div className="style-wrap">
                            <label htmlFor="password">비밀번호</label>
                            <div className="style-body">
                                <input
                                    type="password"
                                    placeholder="비밀번호"
                                    id="password"
                                    onChange={handlePassword}
                                    autoFocus
                                />
                            </div>
                        </div>
                        <SubmitButton
                            style={{ marginTop: 10 }}
                            type="button"
                            onClick={login}>
                            로그인
                        </SubmitButton>
                        <button className="reset-password">
                            비밀번호 초기화/변경
                        </button>
                    </div>
                </Wrap>
            ) : null}
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

    .password-modal-body {
        padding: 20px;

        .reset-password {
            background-color: transparent;
            font-size: 14px;
            color: #36f;
            margin-top: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 54px;
            border: 0;
            font-weight: 600;
            cursor: pointer;
        }
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
        position: relative;
        margin-top: 10px;

        & > input {
            padding: 1px 95px 1px 15px;
            height: 50px;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #e1e2e3;
            border-radius: 5px;
        }

        .input-code-success {
            width: 60px;
            display: flex;
            align-items: center;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 13px;
            font-weight: 700;
            color: #36f;
            & > span {
                width: 30px;
            }
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
    border-radius: 27px;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    height: 54px;
    color: white;
    background-color: #36f;
    border: none;
    cursor: pointer;
    &:disabled {
        color: #cacaca;
        background-color: #f2f4f7;
        cursor: not-allowed;
    }
`;
const DisabledButton = styled(SubmitButton)`
    color: #cacaca;
    cursor: not-allowed;
    background-color: #f2f4f7;
`;
const InputCodeButton = styled.button`
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    padding: 6px 20px 4px;
    border-radius: 5px;
    border: 1px solid #e1e2e3;
    background-color: white;
    color: #333;
    font-weight: 700;
    cursor: ${(props) => (props.code === "" ? "default" : "cursor")};
`;
const CodeMsg = styled.div`
    display: ${(props) => (props.show ? "block" : "none")};
    margin-top: 6px;
    font-size: 12px;
    color: ${(props) =>
        props.valid === 0 ? "#36f" : props.valid === 1 ? "#08ba9c" : "#fe415c"};
`;
const PasswordMsg = styled.div`
    display: ${(props) => (props.same ? "none" : "block")};
    color: #fe415c;
`;
export default SignupDetail;
