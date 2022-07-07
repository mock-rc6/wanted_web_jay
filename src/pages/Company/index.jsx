import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import agree from "../../assets/imgs/img-company-agreement.png";

const locationList = [
    { id: "seoul", value: "서울" },
    { id: "busan", value: "부산" },
    { id: "daegu", value: "대구" },
    { id: "incheon", value: "인천" },
    { id: "gwangju", value: "광주" },
    { id: "daejeon", value: "대전" },
    { id: "ulsan", value: "울산" },
    { id: "sejong", value: "세종" },
    { id: "gyeonggi", value: "경기" },
    { id: "gangwon", value: "강원" },
];

const workTypeList = [
    "IT, 컨텐츠",
    "판매, 유통",
    "제조",
    "기타 서비스업",
    "전문, 과학기술",
    "금융",
    "교육",
    "예술, 스포츠, 여가",
];

const companySize = [
    "1~4명",
    "5~10명",
    "11~50명",
    "51~200명",
    "201~500명",
    "501~1000명",
    "1001~5000명",
    "5001~10000명",
    "10000명 이상",
];
const Company = () => {
    const navigate = useNavigate();

    return (
        <Wrap>
            <header className="company-header">
                <span>원티드 기업 서비스</span>
                <div className="profile">
                    <div className="user">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                            alt="profile"
                        />
                        <button>
                            이준수
                            <RiArrowDropDownLine />
                        </button>
                    </div>
                    <button
                        className="wanted-home"
                        onClick={() => {
                            navigate("/");
                        }}>
                        원티드 홈
                    </button>
                </div>
            </header>
            <div className="content">
                <h2 className="title">회사 정보를 등록해주세요.</h2>
                <h4>
                    원티드는 추천인/후보자들에게 좋은 일자리를 제공하기 위해,
                    다음 정보를 리뷰하여 회사등록을 승인하고 있습니다.
                </h4>
                <div className="row-box">
                    <div>회사이름</div>
                    <input placeholder="삼성전자" />
                </div>
                <div className="multi-wrap">
                    <div>
                        <div>국가</div>
                        <select defaultValue="kr">
                            <option value="kr">한국</option>
                            <option value="tw">대만</option>
                            <option value="sg">싱가폴</option>
                            <option value="jp">일본</option>
                            <option value="others">기타</option>
                        </select>
                    </div>
                    <div>
                        <div>지역</div>
                        <select defaultValue="seoul">
                            {locationList.map((data, idx) => (
                                <option key={idx} value={data.id}>
                                    {data.value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row-box">
                    <div>대표 주소</div>
                    <input placeholder="대표 주소 입력" />
                </div>
                <div className="multi-wrap">
                    <div>
                        <div>사업자 등록 번호</div>
                        <input placeholder="'-'제외 10자리'" />
                    </div>
                    <div className="money">
                        <div>
                            매출액/투자금액
                            <small>
                                (승인기준: 매출액/투자 유치 5억원 이상)
                            </small>
                        </div>
                        <input placeholder="매출액 / 투자금액 입력 (단위 : 억원)" />
                    </div>
                </div>
                <div className="multi-wrap">
                    <div>
                        <div>산업군</div>
                        <select defaultValue="default">
                            <option value="default" disabled>
                                산업군
                            </option>
                            {workTypeList.map((data, i) => (
                                <option key={i} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <div>
                            직원수<small>(승인기준: 팀원 10명 이상)</small>
                        </div>
                        <select defaultValue="default">
                            <option value="default" disabled>
                                회사규모
                            </option>
                            {companySize.map((data, idx) => (
                                <option key={idx} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row-box">
                    <div>회사/서비스 소개(3,000자 제한)</div>
                    <textarea placeholder="회사정보 (텍스트만 입력 가능합니다.)"></textarea>
                </div>
                <div className="multi-wrap">
                    <div>
                        <div>설립연도</div>
                        <input placeholder="ex) 2012" />
                    </div>
                    <div className="money">
                        <div>정보 수신 이메일</div>
                        <input placeholder="ex) example@company.com" />
                    </div>
                </div>
                <div className="multi-wrap">
                    <div>
                        <div>담당자 연락처</div>
                        <input placeholder="연락처 입력" />
                    </div>
                    <div className="money">
                        <div>웹사이트 주소</div>
                        <input placeholder="URL 입력 (여러개 등록시 ','로 구분)" />
                    </div>
                </div>
                <div className="row-box">
                    <div>
                        뉴스 검색 키워드
                        <small>(키워드는 최대 3개까지 입력 가능합니다.)</small>
                    </div>
                    <input placeholder="서비스명 혹은 브랜드명 입력 (텍스트만 입력 가능합니다.)" />
                </div>
                <div className="row-box">
                    <div>
                        가입 경로
                        <small>
                            (원티드를 추천한 기업과 추천인을 입력 해 주세요.)
                        </small>
                    </div>
                    <input placeholder="ex) 원티드랩/김OO담당자" />
                </div>
                <div className="row-box">
                    <div>기업회원 이용약관</div>
                    <div className="agreement">
                        <img src={agree} alt="img" />
                    </div>
                </div>
            </div>
            <footer className="company-footer">
                <div>
                    <div className="footer-left">
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree">
                            이용약관 및 원티드 기업회원 가입에 동의합니다.
                        </label>
                    </div>
                    <SubmitBtn>제출하기</SubmitBtn>
                </div>
            </footer>
        </Wrap>
    );
};

const Wrap = styled.div`
    .company-header {
        height: 50px;
        background-color: rgb(28, 28, 28);
        padding: 0px 20%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > span {
            height: 50px;
            float: left;
            position: relative;
            font-size: 16px;
            display: flex;
            align-items: center;
            color: rgb(181, 181, 181);
        }

        .profile {
            display: flex;
            align-items: center;

            .user {
                display: flex;
                align-items: center;
                margin-right: 10px;

                & > img {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                & > button {
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                    background: none;
                    border: none;
                    cursor: pointer;
                    & svg {
                        margin: 0 10px;
                    }
                }
            }
            .wanted-home {
                color: white;
                font-size: 14px;
                font-weight: bold;
                background: none;
                border: none;
                cursor: pointer;
                border: 1px solid #fff;
                border-radius: 3px;
                padding: 8px 15px;
            }
        }
    }

    .content {
        width: 60%;
        margin: 0 auto;

        .title {
            font-size: 26px;
            color: #333333;
            font-weight: 700;
            margin: 40px 0 0;
        }
        & h4 {
            color: #757575;
            font-size: 16px;
            font-weight: 600;
            margin-top: 10px;
            margin-bottom: 40px;
        }

        .row-box {
            margin-bottom: 30px;

            .agreement {
                height: 300px;
                border-radius: 3px;
                border: 1px solid #e1e2e3;
                padding: 14px;
                & > img {
                    width: 100%;
                    height: 300px;
                }
            }

            & small {
                font-size: 80%;
            }
            & > div {
                margin: 10px 0;
                font-size: 16px;
                color: black;
            }
            & > input {
                border: 1px solid #e1e2e3;
                width: 100%;
                padding: 14px 15px;
                border-radius: 3px;
                font-size: 16px;
                box-sizing: border-box;
            }

            & > textarea {
                appearance: none;
                color: rgb(51, 51, 51);
                font-size: 16px;
                padding: 14px 15px;
                border-radius: 3px;
                border: 1px solid #e1e2e3;
                width: 100%;
                height: 240px;
            }
        }

        .multi-wrap {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 30px;

            & small {
                font-size: 80%;
            }

            & select {
                height: 48px;
                padding: 14px 15px;
                width: 100%;
                border: 1px solid rgb(219, 219, 219);
                border-radius: 3px;
                font-size: 16px;
                color: rgb(51, 51, 51);
            }
            & > div {
                width: 100%;
                position: relative;
                & > div {
                    margin: 10px 0;
                    font-size: 16px;
                    color: black;
                }
                & > input {
                    border: 1px solid #e1e2e3;
                    width: 100%;
                    padding: 14px 15px;
                    border-radius: 3px;
                    font-size: 16px;
                    box-sizing: border-box;
                }
                .money::after {
                    content: "억원";
                    position: absolute;
                    top: 50%;
                    right: 15px;
                    transform: translateY(-50%);
                    font-size: 15px;
                    color: rgb(181, 181, 181);
                }
            }
            & > div:nth-of-type(2) {
                margin-left: 30px;
            }
        }
    }

    .company-footer {
        position: fixed;
        z-index: 1;
        background-color: #fff;
        width: 100%;
        bottom: 0;
        width: 100%;
        height: 71px;
        border-top: 1px solid rgb(221, 221, 221);
        padding: 5px 0;
        display: flex;
        align-items: center;

        & > div {
            width: 60%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 50px;
        }

        .footer-left {
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 14px;
            color: rgb(51, 51, 51);
            & > input {
                margin-right: 6px;
            }
        }
    }
`;
const SubmitBtn = styled.button`
    background-color: #36f;
    border-radius: 25px;
    font-size: 16px;
    min-width: 120px;
    padding: 14px 20px;
    color: white;
    border: none;
    cursor: pointer;
`;

export default Company;
