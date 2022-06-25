import React from "react";
import styled from "styled-components";
import hamburger from "../../assets/imgs/img-hamburger.png";
import logo from "../../assets/imgs/img-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Wrap>
            <nav className="main-bar">
                <div className="header-wrap">
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
                    <li>이력서</li>
                    <li>커뮤니티</li>
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
                            <g fill="none" fill-rule="evenodd">
                                <use
                                    fill="#333"
                                    fill-rule="nonzero"
                                    stroke="#333"
                                    stroke-width=".3"
                                    xlinkHref="#qt2dnsql4a"></use>
                            </g>
                        </svg>
                    </button>
                    <button>회원가입/로그인</button>
                    <span>|</span>
                    <button className="btn-company-service">기업 서비스</button>
                </aside>
            </nav>
        </Wrap>
    );
};

const Wrap = styled.div`
    height: 50px;
    border-bottom: 1px solid #cccccc;
    font-size: 14px;

    .main-bar {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header-wrap {
        margin-right: 60px;
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
        & > li {
            line-height: 20px;
            padding: 15px;
            &:hover {
                cursor: pointer;
                border-bottom: 2px solid gray;
            }
        }
    }

    .header-aside {
        margin-left: 60px;
        display: flex;
        align-items: center;
        & > button:nth-child(1) {
            all: unset;
            padding: 0px 10px;
        }
        & > button:nth-child(2) {
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
    .btn-company-service {
        all: unset;
        border: 1px solid #cccccc;
        border-radius: 15px;
        padding: 0px 10px;
        margin-left: 15px;
        line-height: 30px;
    }
`;
export default Header;
