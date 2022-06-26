import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const social = [
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=75",
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=75",
];

const Footer = () => {
    return (
        <Wrap>
            <div className="footer-row-01">
                <div className="nav-link">
                    <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=75"
                        alt="logo"
                    />
                    <div>
                        <button>기업소개</button>
                        <button>이용약관</button>
                        <button>개인정보 처리방침</button>
                        <button>고객센터</button>
                    </div>
                </div>
                <div className="social-link">
                    {social.map((data, idx) => (
                        <img key={idx} src={data} alt="social" />
                    ))}
                </div>
            </div>
            <div className="footer-row-02">
                <p>
                    (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로
                    300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                    <br />
                    유료직업소개사업등록번호 : (국내)
                    제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 |
                    사업자등록번호 : 299-86-00021 | 02-539-7118
                    <br />© Wantedlab, Inc.
                </p>
                <div className="locale-select">
                    <img
                        src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
                        alt="country"
                    />
                    <select>
                        <option value="KR">한국 (한국어)</option>
                        <option value="JP">日本 (日本語)</option>
                        <option value="WW">Worldwide (English)</option>
                        <option value="SG">Singapore (English)</option>
                    </select>
                    <IoMdArrowDropdown
                        style={{ position: "absolute", right: 15 }}
                    />
                </div>
            </div>
        </Wrap>
    );
};

const Wrap = styled.footer`
    padding-top: 18px;
    padding-bottom: 65px;
    border-top: 1px solid rgb(236, 236, 236);

    .footer-row-01 {
        margin: 0px 10% 18px 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav-link {
            display: flex;
            align-items: center;
            & > img {
                margin-right: 50px;
            }

            & > div {
                display: flex;
                align-items: center;

                & > button {
                    all: unset;
                    margin-right: 45px;
                    font-size: 15px;
                    font-weight: 500;
                    color: rgb(58, 58, 58);

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        .social-link {
            display: flex;
            align-items: center;

            & > img {
                margin-left: 14px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .footer-row-02 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 25px;
        margin: 0px 10%;
        margin-bottom: 18px;
        border-top: 1px solid rgb(236, 236, 236);

        & p {
            color: rgb(118, 118, 118);
            font-size: 12px;
            font-weight: 500;
            line-height: 20px;
            margin-right: 40px;
        }

        .locale-select {
            position: relative;
            width: 250px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(242, 244, 247);
            border-radius: 5px;

            & img {
                position: absolute;
                left: 15px;
                width: 24px;
                height: 17px;
            }

            & select {
                width: 100%;
                height: 40px;
                padding: 0px 45px;
                appearance: none;
                border: none;
                background-color: transparent;
            }
        }
    }
`;
export default Footer;
