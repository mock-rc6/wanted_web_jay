import React, { useState } from "react";
import styled from "styled-components";
import hamburger from "../../assets/imgs/img-hamburger.png";
import logo from "../../assets/imgs/img-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../Signup";
import SignupDetail from "../Signup/SignupDetail";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { logoutAction } from "../../store/actions/login";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogined = useSelector((state) => state.loginReducer.isLogin);

    const [category, setCategory] = useState([
        { name: "채용", url: "recruit", isClicked: false },
        { name: "이벤트", url: "event", isClicked: false },
        { name: "직군별 연봉", url: "salary", isClicked: false },
        {
            name: "이력서",
            url: `cv/${isLogined ? "list" : "intro"}`,
            isClicked: false,
        },
        { name: "커뮤니티", url: "community", isClicked: false },
        { name: "프리랜서", url: "freelancer", isClicked: false },
        { name: "AI 합격예측", url: "ai", isClicked: false },
    ]);

    const [status, setStatus] = useState(""); //로그인 or 회원가입
    const [openSignupModal, setOpenSignupModal] = useState(false);
    const [openSignupDetailModal, setOpenSignupDetailModal] = useState(false);
    const [isProfileOpened, setIsProfileOpened] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    const logout = () => {
        removeCookie("accessToken");
        window.location.reload();
        dispatch(logoutAction());
    };

    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };

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
                        {category.map((data, idx) => (
                            <Link
                                to={"/" + data.url}
                                key={idx}
                                style={linkStyle}>
                                <Category
                                    isClicked={data.isClicked}
                                    onClick={(e) => {
                                        let list = [...category];
                                        list.forEach((d, i) => {
                                            if (idx === i) d.isClicked = true;
                                            else d.isClicked = false;
                                        });
                                        setCategory(list);
                                    }}>
                                    {data.name}
                                </Category>
                            </Link>
                        ))}
                    </ul>
                    <aside className="header-aside">
                        <button className="search-btn">
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
                        {isLogined ? (
                            <>
                                <button className="notification-btn">
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18">
                                        <defs>
                                            <path
                                                id="bpnpn3yn0a"
                                                d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"></path>
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                            <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                                                <mask
                                                    id="1dencd96ob"
                                                    fill="#fff">
                                                    <use xlinkHref="#bpnpn3yn0a"></use>
                                                </mask>
                                                <use
                                                    fillRule="nonzero"
                                                    stroke="currentColor"
                                                    strokeWidth=".3"
                                                    xlinkHref="#bpnpn3yn0a"></use>
                                                <g
                                                    fill="currentColor"
                                                    mask="url(#1dencd96ob)">
                                                    <path d="M0 0H18V18H0z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                                <button
                                    className="profile-btn"
                                    onClick={() => {
                                        setIsProfileOpened(!isProfileOpened);
                                    }}>
                                    <Profile isClicked={isProfileOpened}>
                                        <div></div>
                                    </Profile>
                                    {isProfileOpened && (
                                        <div className="profile-dropdown">
                                            <ul>
                                                <li
                                                    onClick={() => {
                                                        navigate("/mywanted");
                                                    }}>
                                                    <div>MY 원티드</div>
                                                </li>
                                                <li>
                                                    <div>프로필</div>
                                                </li>
                                                <li>
                                                    <div>지원 현황</div>
                                                </li>
                                                <li>
                                                    <div>제안받기 현황</div>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        navigate(
                                                            "/profile/likes"
                                                        );
                                                    }}>
                                                    <div>좋아요</div>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        navigate(
                                                            "/profile/bookmarks"
                                                        );
                                                    }}>
                                                    <div>북마크</div>
                                                </li>
                                                <li>
                                                    <div>추천</div>
                                                </li>
                                                <li>
                                                    <div>포인트</div>
                                                </li>
                                                <li
                                                    className="logout"
                                                    onClick={logout}>
                                                    <div>로그아웃</div>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </button>
                            </>
                        ) : (
                            <button
                                className="signup-btn"
                                onClick={() => {
                                    if (!openSignupDetailModal)
                                        setOpenSignupModal(true);
                                }}>
                                회원가입/로그인
                            </button>
                        )}
                        <span>|</span>
                        <button
                            className="btn-company-service"
                            onClick={() => {
                                navigate("/company");
                            }}>
                            기업 서비스
                        </button>
                    </aside>
                </nav>
            </div>
            <Signup
                setStatus={setStatus}
                width={400}
                modalStatus={openSignupModal}
                closeModal={() => {
                    setOpenSignupModal(false);
                }}
                setOpenSignupDetailModal={setOpenSignupDetailModal}
            />
            <SignupDetail
                status={status}
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
    }

    & .header-aside {
        display: flex;
        align-items: center;

        .search-btn {
            all: unset;
            padding: 0px 10px;
        }
        .signup-btn {
            all: unset;
            padding: 0px 10px;
            margin-right: 6px;
        }

        .notification-btn {
            all: unset;
            padding: 0px 10px;
            margin-right: 10px;
        }

        .profile-btn {
            all: unset;
            margin-right: 11px;
            position: relative;

            .profile-dropdown {
                position: absolute;
                top: 100%;
                right: -27px;
                margin-top: 13px;
                transform: translate(50%, 8px);
                min-width: 194px;
                border-radius: 10px;
                box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.3);
                background-color: #fff;
                overflow: hidden;

                & > ul {
                    padding: 0;
                    margin: 0;
                    padding-top: 14px;
                }

                & li:nth-child(2)::after,
                li:nth-child(6)::after {
                    content: "";
                    display: block;
                    margin: 9px 7px;
                    height: 1px;
                    background-color: #ececec;
                }

                & li:nth-child(3),
                li:nth-child(7) {
                    margin-top: 18px;
                }

                & li {
                    height: 34px;
                    display: inline-block;
                    vertical-align: middle;
                    box-sizing: border-box;
                    width: 100%;
                    font-size: 14px;
                    font-weight: 600;
                    color: #333;
                    line-height: 1;

                    & > div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        padding: 8px;
                        border-radius: 8px;
                        box-sizing: border-box;
                        font-weight: 500;
                        line-height: normal;
                        cursor: pointer;

                        &:hover {
                            background-color: #f7f7f7;
                        }
                    }
                }

                .logout {
                    margin-top: 9px;
                    background-color: #f7f7f7;
                    border-top: 1px solid #ececec;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
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
const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid ${(props) => (props.isClicked ? "#36f" : "#e1e2e3")};
    border-radius: 50px;

    & > div {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-size: cover;
        background-position: 50%;
        background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png);
    }
`;
const Category = styled.li`
    list-style: none;
    line-height: 20px;
    padding: 15px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid
        ${(props) => (props.isClicked ? "#36f" : "transparent")};
    &:hover {
        cursor: pointer;
        border-bottom: 2px solid gray;
    }
`;
export default Header;
