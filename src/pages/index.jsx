import React from "react";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const scrollItems = [
    "개발",
    "데이터",
    "IT/기술",
    "커리어고민",
    "취업/이직",
    "마케팅",
    "경영/전략",
    "브랜딩",
    "조직문화",
    "리더십",
    "HR",
    "라이프스타일",
    "회사생활",
    "인간관계",
    "노무",
    "디자인",
    "UX/UI",
    "서비스기획",
];

const mock = [1, 2, 3, 4, 5, 6, 7, 8];
const mock2 = [1, 2, 3, 4];

const Main = () => {
    return (
        <Wrap>
            <Header />
            <main>
                <section>
                    <div className="section-wrap">
                        <div className="title-wrap">
                            <h2>나에게 필요한 커리어 인사이트</h2>
                            <button>
                                <svg
                                    width="24"
                                    height="24"
                                    class=""
                                    viewBox="0 0 17 17">
                                    <defs>
                                        <filter id="bfoh3u0w3a">
                                            <feColorMatrix
                                                in="SourceGraphic"
                                                values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"></feColorMatrix>
                                        </filter>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <g>
                                            <g>
                                                <g transform="translate(-1080 -374) translate(1080 374)">
                                                    <g>
                                                        <path
                                                            stroke="#999"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.2"
                                                            d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                                                            transform="translate(1 1)"></path>
                                                        <path
                                                            fill="#999"
                                                            d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                                                            transform="translate(1 1) rotate(-180 7.053 10.408)"></path>
                                                        <path
                                                            stroke="#999"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.2"
                                                            d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                                                            transform="translate(1 1)"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className="chip-scroll">
                            <div className="scroll-wrap">
                                {scrollItems.map((data, i) => (
                                    <button className="scroll-item" key={i}>
                                        {data}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <ul className="external-content-list">
                            {mock.map((data, i) => (
                                <li key={i}>
                                    <div className="external-content-thumbnail">
                                        <img
                                            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F6dD%2Fimage%2Fmpt7eBYmOuS0Yf2jB23-bJKWZbQ.png&w=500&q=75"
                                            alt="img"
                                        />
                                    </div>
                                    <p className="external-content-title">
                                        데이터 레이어를 활용한 GA4 전자상거래
                                        데이터 수집
                                    </p>
                                    <p className="external-content-desc">
                                        이전 글에서 데이터 레이어의 개념과 함께
                                        스크립트가 어떻게 구성되어 있고
                                        결과적으로 왜 써야 ...
                                    </p>
                                    <div className="external-content-info">
                                        <img
                                            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                                            alt="img"
                                        />
                                        <p>kayros</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 40,
                            }}>
                            <button className="more-btn">
                                더 많은 콘텐츠 보기
                                <svg
                                    class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                    viewBox="0 0 19 19">
                                    <path
                                        d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="divider-container">
                    <div>
                        <div className="grid-1">
                            <span>
                                즐겨보는 <span>크리에이터</span>의 글도 추천하고
                                싶다면?
                            </span>
                        </div>
                        <div>
                            <img
                                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=121&q=75"
                                alt="img"
                            />
                        </div>
                        <button className="recommend-creator">
                            <span>크리에이터 추천하기</span>
                        </button>
                    </div>
                </div>
                <section>
                    <div className="banner-header">
                        <button>
                            <svg
                                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18">
                                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                            </svg>
                        </button>
                        <div>
                            <h2>3분만에 읽는 Wanted+ 아티클</h2>
                            <button>
                                아티클 전체보기{" "}
                                <svg
                                    class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                    viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                </svg>
                            </button>
                        </div>
                        <button>
                            <svg
                                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18">
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="wanted-article">
                        {mock2.map((data, i) => (
                            <li key={i}>
                                <div className="thumbnail">
                                    <img
                                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2157%2Fec06d4d4.jpg&w=800&q=75"
                                        alt="img"
                                    />
                                </div>
                                <p className="title">
                                    핀테크 회사 대표가 된 개발자
                                </p>
                                <p className="desc">
                                    #개발 #취업/이직 #조직문화
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
                <hr className="hr" />
                <section>
                    <div className="banner-header">
                        <button>
                            <svg
                                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18">
                                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                            </svg>
                        </button>
                        <div>
                            <h2>개발자를 위한 Wanted+ VOD</h2>
                            <button>
                                VOD 전체보기{" "}
                                <svg
                                    class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                    viewBox="0 0 18 18">
                                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                                </svg>
                            </button>
                        </div>
                        <button>
                            <svg
                                class="SvgIcon_SvgIcon__root__svg__DKYBi"
                                viewBox="0 0 18 18">
                                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="wanted-article">
                        {mock2.map((data, i) => (
                            <li key={i}>
                                <div className="thumbnail">
                                    <img
                                        src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210224%2F8%2F92751851.jpg&w=800&q=75"
                                        alt="img"
                                    />
                                    <div className="playtime">
                                        <span>21:22</span>
                                    </div>
                                </div>
                                <div className="vod-content">
                                    <p className="name">원티드랩 류경묵</p>
                                    <p className="vod-title">
                                        Wanted Talk Engineering #1: 테스트
                                        코드와 배포 시스템
                                    </p>
                                    <p className="vod-desc">
                                        (무료) 테스트 코드와 배포 시스템
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </Wrap>
    );
};

const Wrap = styled.div`
    main {
        padding-top: 25px;
        background-color: #fff;

        & section {
            position: relative;
            scroll-margin-top: 4px;
            padding: 60px 0;
            width: 80%;
            margin: 0 auto;

            .section-wrap {
                width: 90%;
                margin: 0 auto;

                .title-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    & h2 {
                        font-size: 22px;
                        font-weight: 700;
                        color: #333;
                        margin: 0;
                    }
                    & button {
                        background: none;
                        border: none;
                        cursor: pointer;
                    }
                }

                .chip-scroll {
                    margin: 30px 0;
                    width: 100%;
                    overflow-x: auto;
                    .scroll-wrap {
                        display: flex;
                        justify-content: space-between;
                        .scroll-item {
                            border: 1px solid #f2f4f7;
                            background-color: #f2f4f7;
                            font-size: 15px;
                            padding: 0 29px;
                            height: 50px;
                            white-space: nowrap;
                            border-radius: 5px;
                            color: #333;
                            margin: 5px;
                        }
                    }
                }

                .external-content-list {
                    margin: 0;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px 20px;

                    & > li {
                        list-style: none;

                        .external-content-thumbnail {
                            position: relative;
                            height: auto;
                            padding-bottom: 70%;
                            & > img {
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                left: 0;
                                top: 0;
                                border-radius: 4px;
                                object-fit: cover;
                                object-position: top;
                            }
                        }
                        .external-content-title {
                            font-size: 16px;
                            font-weight: 700;
                            line-height: 24px;
                            color: #333;
                            margin: 17px 0 8px;
                        }
                        .external-content-desc {
                            font-size: 13px;
                            font-weight: 600;
                            line-height: 21px;
                            color: #aaa;
                        }
                        .external-content-info {
                            margin-top: 12px;
                            display: flex;
                            align-items: center;
                            & > img {
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                border: 1px solid #ececec;
                            }
                            & > p {
                                margin-left: 10px;
                                font-size: 13px;
                                font-weight: 600;
                                color: #aaa;
                            }
                        }
                    }
                }

                .more-btn {
                    font-size: 16px;
                    height: 50px;
                    border: 1px solid #e1e2e3;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    border-radius: 25px;
                    padding: 0 100px;
                    min-width: 64px;
                    cursor: pointer;
                    & > svg {
                        width: 16px;
                        height: 16px;
                        margin-left: 3px;
                    }
                }
            }
        }

        .divider-container {
            display: flex;
            height: 110px;
            background-color: #36f;
            & > div {
                width: 80%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                position: relative;

                .grid-1 {
                    font-size: 24px;
                    color: #fff;
                    font-weight: 500;
                    line-height: 35px;
                    & > span > span {
                        color: #a9ecf0;
                    }
                }
            }
            .recommend-creator {
                background-color: #fff;
                border: none;
                border-radius: 25px;
                color: #36f;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                font-weight: 700;
                height: 40px;
                padding: 0 47px;
                position: absolute;
                right: 0;
                cursor: pointer;
            }
        }

        .banner-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;

            & > button {
                display: flex;
                align-items: center;
                justify-content: center;
                background: none;
                border: 1px solid #e1e2e3;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                & svg {
                    color: #666;
                }
            }

            & > div {
                display: flex;
                flex-direction: column;
                align-items: center;

                & h2 {
                    font-size: 22px;
                    color: #333;
                    font-weight: 700;
                    margin: 0;
                    padding: 0;
                }
                & button {
                    margin-top: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #767676;
                    font-size: 15px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    & svg {
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }

        .wanted-article {
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px 20px;

            & li {
                list-style: none;

                .thumbnail {
                    position: relative;
                    padding-bottom: 70%;
                    & img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        border-radius: 4px;
                        object-fit: cover;
                        object-position: top;
                    }
                    & > div {
                        position: absolute;
                        right: 9px;
                        bottom: 8px;
                        & > span {
                            padding: 0 10px;
                            border-radius: 4px;
                            background-color: rgba(0, 0, 0, 0.5);
                            height: 24px;
                            font-size: 13px;
                            font-weight: 700;
                            line-height: 1.85;
                            color: #fff;
                            display: inline-block;
                        }
                    }
                }
                .title {
                    margin-top: 17px;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 1.5;
                    color: #333;
                }
                .desc {
                    margin-top: 13px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #333;
                }
            }
        }

        .hr {
            height: 1px;
            border: none;
            background-color: #ececec;
        }

        .vod-content {
            margin-top: 14px;
            p {
                margin: 0;
            }
            .name {
                font-size: 14px;
                margin: 5px 0;
                font-weight: 600;
            }
            .vod-title {
                font-size: 16px;
                line-height: 1.5;
                color: #333;
                font-weight: 700;
            }
            .vod-desc {
                margin-top: 8px;
                font-size: 13px;
                font-weight: 600;
                color: #aaa;
            }
        }
    }
`;
export default Main;
