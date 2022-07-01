import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Carousel from "../../components/RecruitDetail/Carousel";
import a from "../../assets/imgs/img-hamburger.png";
import b from "../../assets/imgs/img-logo.png";
import c from "../../assets/imgs/img-tag-06.png";
import { IoIosHeart } from "react-icons/io";
import Card from "../../components/common/Card";

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tags = [
    "연봉업계평균이상",
    "인원급성장",
    "50명이하",
    "설립10년이상",
    "수평적조직",
    "석식제공",
    "음료",
    "사내식당",
    "IT, 컨텐츠",
];
const RecruitDetail = () => {
    const { naver } = window;
    let map = null;

    const [warningOpen, setWarningOpen] = useState(false);
    const [position, setPosition] = useState({
        lat: 0,
        lon: 0,
    });
    const { lat, lon } = position;

    useEffect(() => {
        geocoding();
    }, []);

    useEffect(() => {
        if (lat !== 0 && lon !== 0) initMap();
    }, [position]);

    const geocoding = () => {
        // 주소 -> 좌표로 변경
        naver.maps.Service.geocode(
            {
                address: "서울특별시 강남구 봉은사로 644 대웅신관 3층",
            },
            function (status, response) {
                if (status !== naver.maps.Service.Status.OK) {
                    return alert("error!");
                }

                const result = response.result,
                    items = result.items;

                setPosition({
                    lon: items[0].point.x,
                    lat: items[0].point.y,
                });
            }
        );
    };

    const initMap = () => {
        //네이버 지도 불러오는 함수
        const mapOptions = {
            center: new naver.maps.LatLng(lat, lon),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        map = new naver.maps.Map("map", mapOptions);
    }; //end initMap

    return (
        <Wrap>
            <Header />
            <div className="job-detail-content-wrap">
                <div className="job-detail-content">
                    <div className="job-content">
                        <Carousel images={[a, b, c]} />
                        <section className="job-header">
                            <h2>IT솔루션 개발 및 운영</h2>
                            <div>
                                <h6>유와이즈원</h6>
                                <div className="job-header-response-level">
                                    <button>응답률 매우 높음</button>
                                </div>
                                <span>|</span>
                                <span className="job-header-location">
                                    서울 · 한국
                                </span>
                            </div>
                            <div className="tags">
                                <ul>
                                    {tags.map((data, idx) => (
                                        <li key={idx}>
                                            <button className="tag-button">
                                                #{data}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                        <section className="job-content-description">
                            <p>
                                유와이즈원은 ECM(Enterprise Contents Management
                                : 기업 콘텐츠 관리) 기반 통합업무 솔루션을
                                개발하는 IT솔루션 전문기업입니다. 그룹웨어
                                솔루션, 병원전용 커뮤니케이션 플랫폼등 IT변화에
                                따른 최신 제품 라인업으로 고객에게 최고의
                                솔루션과 서비스를 제공하여 고객의 가치창출은
                                물론 고객과 함께 성장해 나가고 있습니다.
                            </p>
                            <h6>주요업무</h6>
                            <p>
                                1) 그룹웨어 기술지원팀 업무 수행
                                <br />
                                2) 대외 그룹웨어 유지보수 및 개선 담당
                                <br />
                                3) 내부 포탈(그룹웨어) 시스템을 운영 및 개선
                                <br />
                                4) 제품 개발
                            </p>
                            <h6>자격요건</h6>
                            <p>
                                1) 관련 업무 경력이 4년 이상이신 분<br />
                                2) Java, JSP, Javascript를 능숙하게 다루시는 분
                                <br />
                                3) Maven, Eclipse 개발도구 경험이 풍부하신 분
                                <br />
                                4) SCM(Git 혹은 SVN)을 이용한 소스관리 경험
                                보유자
                                <br />
                                5) Spring framework 기반 jQuery 활용 가능자
                                <br />
                                6) DBMS(Oracle 등) SQL 가능자
                                <br />
                                7) linux 사용 가능자
                            </p>
                            <h6>우대사항</h6>
                            <p>
                                1) 개발 분석/설계가 능숙하신 분<br />
                                2) Java Open Source 라이브러리 사용이 능숙하신
                                분
                                <br />
                                3) Apache Tomcat 연동 및 운영관련 경험이 있으신
                                분
                            </p>
                            <h6>혜택 및 복지</h6>
                            <p>
                                ● 조직문화
                                <br />
                                • 수평적 조직문화 : 직급이 아닌 상호 간 '님'으로
                                호칭합니다.
                                <br />
                                • 자유로운 연차사용 : 연차 사용 시 사유불문!
                                자유로운 연차 사용이 가능합니다.
                                <br />
                                • 사내 식당에서 맛있는 중식/석식 제공해드립니다.
                                <br />
                                • 식사 대신 간편식을 즐길 수 있습니다.
                                <br />
                                <br />
                                ● 근무환경
                                <br />
                                • 스마트 오피스 : 자율 좌석을 통해 스마트한
                                근무환경 제공합니다.
                                <br />
                                • 사내 어린이집 : 육아 걱정없는 업무 몰입을 위해
                                사내 어린이집을 운영합니다.
                                <br />
                                • 까페테리아 : 임직원 가격으로 할인된 가격에
                                음료를 제공해드립니다.
                                <br />
                                • 안마 의자 및 캡슐룸 : 근무 중 피로 회복/휴식을
                                위한 시설을 제공해드립니다.
                                <br />
                                <br />
                                ● 교육/생활
                                <br />
                                • 신입사원교육(OJT)운영을 통해 원활한 적응을
                                도와드립니다.
                                <br />
                                • 사내/외 교육, 사이버 연수원 등 교육비 지원 등
                                다방면으로 성장을 지원합니다.
                                <br />
                                • 사내 동호회를 통해 친목을 도모합니다. <br />
                                <br />
                                ● 지원금/보험
                                <br />
                                • 종합건강검진
                                <br />
                                • 경조금 지원 : 좋은 날엔 축하금을, 슬픈 날엔
                                위로금 지원합니다.
                                <br />
                                • 임직원몰 : 사내 임직원몰 내 다양한 상품을
                                직원가에 구입이 가능합니다.
                                <br />
                                • 자녀의 학자금을 지원해드립니다.
                                <br />
                                <br />
                                ● 선물
                                <br />
                                • 명절선물 : 다양한 품목 중 선택하여 상품을
                                지급해드립니다.
                                <br />
                                • 생일자 조기퇴근제 : 생일 당사자 조기 퇴근이
                                가능합니다.
                                <br />• 장기근속제도 : 5/10/20년 장기 근무 시
                                포상금을 지급해드립니다.
                            </p>
                            <h6>기술스택 · 툴</h6>
                            <div>
                                <div className="job-description-skill">
                                    <div>Git</div>
                                    <div>Java</div>
                                    <div>jQuery</div>
                                    <div>Maven</div>
                                    <div>JSP</div>
                                </div>
                            </div>
                        </section>
                        <hr />
                        <section className="job-work-place">
                            <div>
                                <span className="header">마감일</span>
                                <span className="body">2022.07.08</span>
                            </div>
                            <div>
                                <span className="header">근무지역</span>
                                <span className="body">
                                    서울특별시 강남구 봉은사로 644 대웅신관 3층
                                </span>
                            </div>
                            <div id="map" className="map"></div>
                        </section>
                        <section className="company-info">
                            <button>
                                <div className="logo"></div>
                                <div>
                                    <h5>유와이즈원</h5>
                                    <h6>IT, 컨텐츠</h6>
                                </div>
                            </button>
                            <button className="follow-button">
                                <span>팔로우</span>
                            </button>
                        </section>
                        <section className="warning">
                            <div className="warning-header">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="currentColor" fillRule="evenodd">
                                        <path
                                            fillRule="nonzero"
                                            d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"></path>
                                        <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                                        <path
                                            fillRule="nonzero"
                                            d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"></path>
                                    </g>
                                </svg>
                                <div className="warning-header-content">
                                    <h5>
                                        본 채용정보는 원티드랩의 동의없이
                                        무단전재, 재배포, 재가공할 수 없으며,
                                        구직활동 이외의
                                        <br />
                                        용도로 사용할 수 없습니다.
                                    </h5>
                                    <WarningArrow
                                        open={warningOpen}
                                        onClick={() => {
                                            setWarningOpen(!warningOpen);
                                        }}>
                                        &gt;
                                    </WarningArrow>
                                </div>
                            </div>
                            <WarningBody open={warningOpen}>
                                <p>
                                    본 채용 정보는 <strong>유와이즈원</strong>
                                    에서 제공한 자료를 바탕으로 원티드랩에서
                                    표현을 수정하고 이의 배열 및 구성을 편집하여
                                    완성한 원티드랩의 저작자산이자
                                    영업자산입니다. 본 정보 및 데이터베이스의
                                    일부 내지는 전부에 대하여 원티드랩의 동의
                                    없이 무단전재 또는 재배포, 재가공 및
                                    크롤링할 수 없으며, 게재된 채용기업의 정보는
                                    구직자의 구직활동 이외의 용도로 사용될 수
                                    없습니다. 원티드랩은{" "}
                                    <strong>유와이즈원</strong>
                                    에서 게재한 자료에 대한 오류나 그 밖에
                                    원티드랩이 가공하지 않은 정보의 내용상
                                    문제에 대하여 어떠한 보장도 하지 않으며,
                                    사용자가 이를 신뢰하여 취한 조치에 대해
                                    책임을 지지 않습니다.{" "}
                                    <strong>
                                        &lt;저작권자 (주)원티드랩.
                                        무단전재-재배포 금지&gt;
                                    </strong>
                                </p>
                            </WarningBody>
                        </section>
                    </div>
                    <aside className="job-process-container">
                        <header>
                            <div className="reward-container">
                                <h3>채용보상금</h3>
                                <ul>
                                    <li>
                                        <h4>추천인</h4>
                                        <p>500,000원</p>
                                    </li>
                                    <li>
                                        <h4>지원자</h4>
                                        <p>500,000원</p>
                                    </li>
                                </ul>
                                <button className="share-button">
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 19 19">
                                        <defs>
                                            <path
                                                id="shareIcon"
                                                d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z"></path>
                                        </defs>
                                        <g fill="none" fillRule="evenodd">
                                            <use
                                                fill="#36F"
                                                xlinkHref="#shareIcon"></use>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            <button className="bookmark-button">
                                <svg
                                    width="13"
                                    height="17"
                                    viewBox="0 0 13 17"
                                    style={{
                                        color: "rgb(51, 102, 255)",
                                        marginRight: 8,
                                    }}>
                                    <defs>
                                        <path
                                            id="bookmarkIconLine"
                                            d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"></path>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <use
                                            fill="currentColor"
                                            xlinkHref="#bookmarkIconLine"></use>
                                    </g>
                                </svg>
                                북마크하기
                            </button>
                            <button className="apply-button">지원하기</button>
                            <div className="reaction-wrap">
                                <button>
                                    <IoIosHeart
                                        fill="rgb(219,219,219)"
                                        style={{
                                            marginRight: 10,
                                            width: 16,
                                            height: 16,
                                        }}
                                    />
                                    <span>0</span>
                                </button>
                            </div>
                        </header>
                    </aside>
                </div>
                <div className="job-associated">
                    <h5>이 포지션을 찾고 계셨나요?</h5>
                    <div className="list">
                        {card.map((data, idx) => (
                            <Card key={idx} id={idx + 1} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Wrap>
    );
};

const Wrap = styled.div`
    & hr {
        border: 0px;
        border-top: 1px solid #cccccc;
    }
    & .job-detail-content-wrap {
        padding: 20px 10% 80px 10%;
    }

    & .job-detail-content {
        display: flex;
        justify-content: space-between;
    }

    & .job-content {
        width: 700px;
        border-radius: 12px;
    }

    & .job-header {
        margin-top: 40px;
        margin-bottom: 30px;
        & > h2 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        & > div:nth-of-type(1) {
            display: flex;
            align-items: center;
            & > h6 {
                all: unset;
                font-size: 14px;
                font-weight: 600;
            }

            & > span:nth-of-type(1) {
                margin-left: 10px;
                color: rgb(153, 153, 153);
            }
        }
    }

    & .job-header-response-level {
        margin-left: 10px;
        & > button {
            all: unset;
            line-height: 19px;
            font-size: 10px;
            padding: 0px 5px;
            color: rgb(0, 174, 173);
            border: 1px solid rgb(0, 174, 173);
            border-radius: 2px;
        }
    }

    & .job-header-location {
        padding: 0px 10px;
    }

    & .tags {
        margin-top: 20px;
        & ul {
            padding: 0;
            display: flex;
            flex-wrap: wrap;
        }

        & li {
            list-style: none;
            margin-right: 6px;
            margin-bottom: 10px;
            white-space: nowrap;
        }
    }

    & .tag-button {
        all: unset;
        padding: 9px 14px;
        background-color: rgb(243, 245, 248);
        border-radius: 25px;
        font-size: 12px;
        font-weight: 500;
    }

    & .job-content-description {
        margin-top: 40px;
        margin-bottom: 60px;
        padding-right: 20px;
        color: rgb(51, 51, 51);

        & p {
            line-height: 28px;
        }

        & h6 {
            margin: 0px;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 600;
        }
    }

    & .job-description-skill {
        display: flex;
        align-items: center;
        margin-top: 5px;

        & > div {
            padding: 9px 14px;
            background-color: rgb(228, 244, 236);
            font-size: 12px;
            line-height: 14.4px;
            font-weight: 600;
            border-radius: 20px;
            flex-wrap: wrap;
            margin-right: 8px;
        }
    }

    & .job-work-place {
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 16px;
        font-weight: 600;

        & > div {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        & .header {
            width: 80px;
            color: rgb(153, 153, 153);
        }
        & .body {
            color: rgb(51, 51, 51);
        }

        & .map {
            height: 254px;
            background-color: skyblue;
        }
    }

    & .company-info {
        margin-top: 80px;
        padding: 20px;
        border: 1px solid rgb(225, 226, 227);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;

        & button:nth-of-type(1) {
            all: unset;
            display: flex;
            align-items: center;

            & .logo {
                width: 50px;
                height: 50px;
                margin-right: 15px;
                background-image: url("https://static.wanted.co.kr/images/wdes/0_5.5ad81986.jpg");
                background-size: contain;
            }

            & h5 {
                padding: 0px;
                margin: 0px;
                padding-right: 10px;
                margin-bottom: 5px;
                font-weight: 600;
                font-size: 15px;
            }
            & h6 {
                padding: 0px;
                margin: 0px;
                padding-right: 10px;
                font-size: 15px;
                font-weight: 600;
                color: rgb(153, 153, 153);
            }

            &:hover {
                cursor: pointer;
            }
        }

        & .follow-button {
            all: unset;
            padding: 0px 27px;
            height: 40px;
            border: 1px solid rgb(225, 226, 227);
            border-radius: 25px;
            color: rgb(51, 102, 255);

            & > span {
                font-weight: 700;
            }

            &:hover {
                cursor: pointer;
                color: rgb(15, 63, 208);
            }
        }
    }

    .warning {
        margin-top: 10px;
        background-color: rgb(243, 245, 248);
        border-radius: 5px;
    }

    .warning-header {
        display: flex;
        align-items: center;
        padding: 25px 30px;
    }
    .warning-header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & h5 {
            margin: 0px 20px;
            line-height: 22px;
            font-size: 12px;
            font-weight: 700;
        }
    }

    .job-process-container {
        & header {
            position: sticky;
            top: 70px;
            width: 300px;
            padding: 24px 20px;
            border: 1px solid rgb(225, 226, 227);
            border-radius: 3px;
            background-color: #fff;
        }

        .reward-container {
            & h3 {
                margin: 0;
                font-size: 15px;
                font-weight: 600;
                color: rgb(51, 51, 51);
            }

            & ul {
                margin: 24px 0px;
                padding: 0;
                display: flex;
                align-items: center;
            }
            & li {
                width: 50%;
                list-style: none;
                & h4 {
                    margin: 0;
                    margin-bottom: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgb(153, 153, 153);
                }
                & p {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                    color: rgb(51, 51, 51);
                }
            }

            .share-button {
                all: unset;
                width: 40px;
                height: 40px;
                position: absolute;
                right: 20px;
                top: 20px;
                background-color: #fff;
                border: 1px solid #e1e2e3;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                &:hover {
                    cursor: pointer;
                }
            }
        }

        .bookmark-button {
            all: unset;
            width: 100%;
            height: 50px;
            border: 1px solid #36f;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            color: #36f;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            &:hover {
                cursor: pointer;
            }
        }

        .apply-button {
            all: unset;
            width: 100%;
            height: 50px;
            border: 1px solid #36f;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            color: white;
            background-color: #36f;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                cursor: pointer;
            }
        }

        .reaction-wrap {
            margin-top: 24px;

            & > button {
                all: unset;
                padding: 0px 15px;
                height: 30px;
                margin-right: 12px;
                border: 1px solid rgb(225, 226, 227);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: rgb(51, 51, 51);

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    .job-associated {
        margin-top: 80px;
        & h5 {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 600;
        }

        & > .list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
    }
`;
const WarningArrow = styled.button`
    all: unset;
    transform: ${(props) => (props.open ? "rotate(270deg)" : "rotate(90deg)")};
    &:hover {
        cursor: pointer;
    }
`;
const WarningBody = styled.div`
    display: ${(props) => (props.open ? "block" : "none")};
    padding: 13px 30px;
    border-top: 1px solid rgb(236, 236, 236);
    font-size: 13px;
    line-height: 24px;
`;
export default RecruitDetail;