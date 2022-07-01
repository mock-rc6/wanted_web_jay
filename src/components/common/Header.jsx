import React, { useState } from "react";
import styled from "styled-components";
import hamburger from "../../assets/imgs/img-hamburger.png";
import logo from "../../assets/imgs/img-logo.png";
import { Link } from "react-router-dom";
import Signup from "../Signup";
import SignupDetail from "../Signup/SignupDetail";

const Header = () => {
    const [openSignupModal, setOpenSignupModal] = useState(false);
    const [openSignupDetailModal, setOpenSignupDetailModal] = useState(false);

    return (
        <Wrap>
            <div>
                <nav className="main-bar">
                    <div>
                        <img
                            className="hamburger-img"
                            src={hamburger}
                            alt="hamburger-img"
                        />
                        <Link to="/">
                            <img className="logo-img" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="menu">
                        <li>채용</li>
                        <li>이벤트</li>
                        <li>직군별 연봉</li>
                        <li>이력서</li>
                        <li>커뮤니티</li>
                        <li>프리랜서</li>
                        <li>AI 합격예측</li>
                    </ul>
                    <aside className="header-aside">
                        <button>
                            <svg
                                xmlns="https://www.w3.org/2000/svg"
                                xmlnsXlink="https://www.w3.org/1999/xlink"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18">
                                <defs>
                                    <path
                                        id="qt2dnsql4a"
                                        d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                    <use
                                        fill="#333"
                                        fillRule="nonzero"
                                        stroke="#333"
                                        strokeWidth=".3"
                                        xlinkHref="#qt2dnsql4a"></use>
                                </g>
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                if (!openSignupDetailModal)
                                    setOpenSignupModal(true);
                            }}>
                            회원가입/로그인
                        </button>
                        <span>|</span>
                        <button className="btn-company-service">
                            기업 서비스
                        </button>
                    </aside>
                </nav>
            </div>
            <Signup
                width={400}
                modalStatus={openSignupModal}
                closeModal={() => {
                    setOpenSignupModal(false);
                }}
                setOpenSignupDetailModal={setOpenSignupDetailModal}
            />
            <SignupDetail
                width={400}
                modalStatus={openSignupDetailModal}
                closeModal={() => {
                    setOpenSignupDetailModal(false);
                }}
            />
        </Wrap>
    );
};

const Wrap = styled.div`
    & > div {
        width: 80%;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #cccccc;
    font-size: 14px;
    position: sticky;
    top: 0;
    z-index: 800;
    background-color: #fff;

    .main-bar {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
    }

    .hamburger-img {
        width: 17px;
        height: 14px;
        margin-right: 15px;
        &:hover {
            cursor: pointer;
        }
    }
    .logo-img {
        height: 21px;
        &:hover {
            cursor: pointer;
        }
    }

    .menu {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0;
        & > li {
            list-style: none;
            line-height: 20px;
            padding: 15px;
            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;
            &:hover {
                cursor: pointer;
                border-bottom: 2px solid gray;
            }
        }
    }

    & .header-aside {
        display: flex;
        align-items: center;

        & > button:nth-of-type(1) {
            all: unset;
            padding: 0px 10px;
        }
        & > button:nth-of-type(2) {
            all: unset;
            padding: 0px 10px;
            margin-right: 6px;
        }
        & > button:hover {
            cursor: pointer;
        }

        & > span {
            color: #cccccc;
        }
    }
    & .btn-company-service {
        all: unset;
        border: 1px solid #cccccc;
        border-radius: 15px;
        padding: 0px 10px;
        margin-left: 15px;
        line-height: 30px;
    }
`;
export default Header;
