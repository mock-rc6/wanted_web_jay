import React from "react";
import styled from "styled-components";
import Modal from "../common/Modal";
import logo from "../../assets/imgs/img-logo.png";

const Signup = ({ width, modalStatus, closeModal }) => {
    return (
        <Modal width={width} modalStatus={modalStatus} closeModal={closeModal}>
            <Wrap>
                <div className="modal-header">
                    <img src={logo} alt="logo" width={70} />
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
                    <div className="text-wrap">
                        <h1>
                            직장인을 위한
                            <br /> 커리어 플랫폼, 원티드!
                        </h1>
                        <h2>
                            커리어 성장과 행복을 위한 여정
                            <br /> 지금 원티드에서 시작하세요.
                        </h2>
                    </div>
                    <div className="input-wrap">
                        <div className="email">
                            <label htmlFor="email">이메일</label>
                            <div>
                                <input
                                    type="email"
                                    placeholder="이메일을 입력해 주세요."
                                    id="email"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="input-button">
                            <button className="email-login-button">
                                <svg
                                    style={{ marginRight: 10 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24">
                                    <g
                                        fill="none"
                                        fillRule="evenodd"
                                        stroke="#FFF"
                                        strokeWidth="2">
                                        <rect
                                            width="17.2"
                                            height="14"
                                            x="3.4"
                                            y="5"
                                            rx="3"></rect>
                                        <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                                    </g>
                                </svg>
                                이메일로 계속하기
                            </button>
                            <div className="input-divider">or</div>
                            <div className="social-login-label">
                                다음 계정으로 계속하기
                            </div>
                            <div className="social-login-button-wrap">
                                <div className="social-login-button">
                                    <button className="kakao">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="21"
                                            viewBox="0 0 22 21">
                                            <path
                                                fill="#000"
                                                fillRule="nonzero"
                                                d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"></path>
                                        </svg>
                                        <div>Kakao</div>
                                    </button>
                                </div>
                                <div className="social-login-button">
                                    <button className="facebook">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="23"
                                            viewBox="0 0 12 23">
                                            <path
                                                fill="#fff"
                                                fillRule="nonzero"
                                                d="M11.214 12.603l.622-4.055h-3.89V5.917c0-1.11.543-2.191 2.285-2.191H12V.274S10.395 0 8.86 0C5.656 0 3.562 1.942 3.562 5.458v3.09H0v4.055h3.562v9.802c.714.112 1.446.17 2.191.17.746 0 1.478-.058 2.192-.17v-9.802h3.269"></path>
                                        </svg>
                                        <div>Facebook</div>
                                    </button>
                                </div>
                                <div className="social-login-button">
                                    <button className="google">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23">
                                            <g fill="none" fillRule="nonzero">
                                                <path
                                                    fill="#EA4335"
                                                    d="M11.5 4.574c1.688 0 3.204.58 4.396 1.72l3.299-3.299C17.203 1.14 14.6 0 11.5 0 7.005 0 3.115 2.577 1.223 6.335l3.842 2.98c.905-2.718 3.44-4.741 6.435-4.741z"></path>
                                                <path
                                                    fill="#4285F4"
                                                    d="M22.54 11.761c0-.815-.073-1.6-.21-2.352H11.5v4.448h6.19c-.268 1.438-1.078 2.656-2.296 3.471v2.886h3.717c2.174-2.002 3.429-4.95 3.429-8.453z"></path>
                                                <path
                                                    fill="#FBBC05"
                                                    d="M5.065 13.685c-.23-.69-.36-1.427-.36-2.185s.13-1.495.36-2.185v-2.98H1.223C.444 7.888 0 9.645 0 11.5c0 1.856.444 3.612 1.223 5.165l3.842-2.98z"></path>
                                                <path
                                                    fill="#34A853"
                                                    d="M11.5 23c3.105 0 5.708-1.03 7.61-2.786l-3.716-2.886c-1.03.69-2.347 1.098-3.894 1.098-2.995 0-5.53-2.023-6.435-4.741H1.223v2.98C3.115 20.423 7.005 23 11.5 23z"></path>
                                                <path d="M0 0L23 0 23 23 0 23z"></path>
                                            </g>
                                        </svg>
                                        <div>Google</div>
                                    </button>
                                </div>
                                <div className="social-login-button">
                                    <button className="apple">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="19"
                                            height="24"
                                            viewBox="0 0 19 24">
                                            <path
                                                fill="#fff"
                                                fillRule="nonzero"
                                                d="M15.868 12.55c.033 3.574 3.098 4.764 3.132 4.779-.026.084-.49 1.695-1.615 3.36-.972 1.439-1.982 2.872-3.572 2.902-1.562.03-2.065-.938-3.851-.938s-2.344.908-3.823.967c-1.535.059-2.704-1.556-3.684-2.99C.45 17.698-1.08 12.343.975 8.73c1.022-1.795 2.848-2.932 4.83-2.96 1.506-.03 2.929 1.026 3.85 1.026.921 0 2.65-1.27 4.467-1.083.761.032 2.897.31 4.268 2.343-.11.07-2.548 1.506-2.522 4.494m-2.936-8.777c.815-.999 1.363-2.389 1.213-3.772-1.174.048-2.594.792-3.437 1.79-.755.884-1.416 2.298-1.238 3.654 1.31.103 2.647-.673 3.462-1.672"></path>
                                        </svg>
                                        <div>Apple</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="footer">
                        걱정마세요! 여러분의 지원 활동은 SNS에 노출되지
                        않습니다.
                        <br />
                        회원가입 시 <span>개인정보 처리방침</span>과{" "}
                        <span>이용약관</span>을 확인하였으며, 동의합니다.
                    </p>
                </div>
            </Wrap>
        </Modal>
    );
};
const Wrap = styled.div`
    .modal-header {
        position: relative;
        padding: 16px 20px;
        font-size: 16px;
        font-weight: 600;
        text-align: center;

        & button {
            all: unset;
            padding: 15px;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }

    .modal-body {
        padding: 20px;
        width: 100%;
        box-sizing: border-box;

        .text-wrap {
            margin-top: 24px;
            margin-bottom: 40px;
            text-align: center;

            & h1 {
                font-size: 26px;
                font-weight: 600;
                line-height: 40px;
                margin: 0;
                color: #333;
            }

            & h2 {
                margin: 0;
                margin-top: 16px;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                color: #666;
            }
        }

        .input-wrap {
            width: 100%;

            .email {
                padding-bottom: 14px;
                & > label {
                    font-size: 14px;
                    font-weight: 400;
                    color: #767676;
                }

                & > div {
                    margin-top: 11px;

                    & > input {
                        box-sizing: border-box;
                        width: 100%;
                        font-size: 15px;
                        padding: 0px 15px;
                        height: 50px;
                        border: 1px solid rgb(225, 226, 227);
                        border-radius: 5px;
                    }
                }
            }

            .input-button {
                .email-login-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 54px;
                    border: 0;
                    border-radius: 27px;
                    background-color: #36f;
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    cursor: pointer;

                    &:hover {
                        background-color: #124af3;
                    }
                }

                .input-divider {
                    margin: 13px auto;
                    color: #969696;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 1;
                    text-align: center;
                }

                .social-login-label {
                    text-align: center;
                    color: #767676;
                    margin-bottom: 17px;
                    font-size: 14px;
                }

                .social-login-button-wrap {
                    display: flex;
                    height: 84px;
                }

                .social-login-button {
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    cursor: pointer;

                    & > button {
                        border: 0;
                        width: 56px;
                        height: 56px;
                        margin: 0 auto 8px;
                        border-radius: 50%;
                        cursor: pointer;
                        position: relative;

                        &:hover {
                            filter: brightness(0.9);
                        }

                        & > div {
                            position: absolute;
                            top: 62px;
                            color: #666;
                            font-size: 13px;
                            font-weight: 500;
                        }
                    }

                    .kakao {
                        background-color: #fee500;
                    }

                    .facebook {
                        background-color: #36f;
                    }

                    .google {
                        background-color: #fff;
                        border: 1px solid #e1e2e3;
                    }

                    .apple {
                        background-color: black;
                    }
                }
            }
        }

        .footer {
            margin: 0;
            margin-top: 26px;
            text-align: center;
            font-size: 12px;
            line-height: 18px;
            color: #999;

            & > span {
                color: #3336ff;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
`;

export default Signup;
