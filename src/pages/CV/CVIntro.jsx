import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import axios from "axios";
import { api } from "../../lib/api/api";
import { getCookie } from "../../lib/cookies/cookie";

const CVIntro = () => {
    const navigate = useNavigate();
    const accessToken = getCookie("accessToken");

    const addResume = () => {
        axios
            .post(
                api + "resumes",
                {},
                {
                    headers: { "x-access-token": accessToken },
                    withCredentials: true,
                }
            )
            .then((res) => {
                if (res.data.isSuccess) {
                    console.log("res :>> ", res);
                    const { id, title, name, email } = res.data.result;
                    const info = {
                        id,
                        title,
                        name,
                        email,
                    };
                    navigate(`/cv/${id}`, { state: info });
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    return (
        <Wrap>
            <Header />
            <div className="container">
                <section className="resume-intro resume-intro-edit">
                    <div className="resume-intro-content">
                        <h1 style={{ fontSize: 56 }}>이력서 양식, 그 이상</h1>
                        <h2>
                            채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는
                            도구를 만들었습니다. <br />
                            <br />
                            서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게
                            작성해 보세요.
                        </h2>
                        <div className="resume-intro-content-button-wrap">
                            <button
                                className="go-to-resume"
                                onClick={() => {
                                    navigate("/cv/list");
                                }}>
                                이력서 관리
                            </button>
                            <button className="create-new" onClick={addResume}>
                                새 이력서 작성
                            </button>
                        </div>
                    </div>
                </section>
                <section className="resume-intro resume-intro-advantage">
                    <div className="resume-intro-content">
                        <h1>지원에 유리한</h1>
                        <h2>
                            글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별
                            금지 정책에 맞춰서 제작하였습니다.
                            <br />
                            <br />
                            군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.
                        </h2>
                    </div>
                </section>
                <section className="resume-intro resume-intro-career">
                    <div className="resume-intro-content">
                        <h1>본질에 집중한</h1>
                        <h2>
                            보다 명확한 정보 설계로 당신의 커리어를 돋보이게
                            만들어 드립니다.
                            <br />
                            <br />
                            불필요한 정보 입력을 최소화하고 이력서 작성에 방해가
                            되는 UI 요소들을 제거하였습니다.
                        </h2>
                    </div>
                </section>
                <section className="resume-intro resume-intro-download">
                    <div className="resume-intro-content">
                        <h1>활용이 자유로운</h1>
                        <h2>
                            PC/모바일 어디에서나 작성할 수 있고, PDF 파일로
                            저장과 활용이 쉽습니다.
                            <br />
                            <br />
                            가독성에 중점을 두고 설계하여, 파일 저장/출력시에도
                            돋보이는 결과물을 얻을 수 있습니다.
                        </h2>
                        <div className="resume-intro-content-button-wrap">
                            <button className="download-resume">
                                샘플 다운로드
                            </button>
                            <button className="create-new">
                                새 이력서 작성
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </Wrap>
    );
};

const Wrap = styled.div`
    .resume-intro::after {
        display: block;
        content: "";
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 20%;
        box-sizing: border-box;
    }

    .resume-intro-edit > div {
        padding: 100px 0 20px;
    }
    .resume-intro-edit::after {
        background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/resume_01_en.png);
    }

    .container:nth-child(1) {
        &:not(div) {
            padding: 80px 0 55px;
        }
    }
    .resume-intro-content {
        padding: 80px 0 55px;
        width: 60%;
        text-align: center;
        margin: 0 auto;
        word-wrap: break-word;
        word-break: keep-all;

        & h1 {
            font-size: 40px;
            font-weight: 600;
            margin: 0;
        }
        & h2 {
            font-size: 18px;
            font-weight: 400;
            margin: 20px 0 0;
            line-height: 1.5;
        }
    }

    .resume-intro-content-button-wrap {
        padding-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > button {
            margin: 0 5px;
            padding: 15px 50px;
            font-size: 18px;
            font-weight: 600;
            border-radius: 30px;
            cursor: pointer;
        }
        .go-to-resume {
            border: 1px solid #36f;
            background-color: #fff;
            color: #36f;
        }
        .create-new {
            border: 1px solid #36f;
            background-color: #36f;
            color: #fff;
        }
        .download-resume {
            border: 1px solid #fff;
            background-color: #fff;
            color: #36f;
        }
    }

    .resume-intro-advantage {
        color: #fff;
        background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/resume_02.jpeg);
    }

    .resume-intro-career::after {
        background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/resume_03_ko.png);
    }

    .resume-intro-download {
        color: #fff;
        background-image: url(https://static.wanted.co.kr/images/userweb/resume_intro/resume_04.jpeg);
    }
`;
export default CVIntro;
