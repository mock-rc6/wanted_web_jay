import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TbCopy } from "react-icons/tb";
import { BiUpload } from "react-icons/bi";
import ResumeItem from "../../components/CVList/ResumeItem";
import axios from "axios";
import { api } from "../../lib/api/api";
import { getCookie } from "../../lib/cookies/cookie";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CVList = () => {
    const navigate = useNavigate();
    const accessToken = getCookie("accessToken");

    useEffect(() => {
        axios
            .get(api + "resumes", {
                headers: { "x-access-token": accessToken },
            })
            .then((res) => {
                console.log("res :>> ", res);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    }, []);

    return (
        <Wrap>
            <Header />
            <div className="resume-list">
                <div className="resume-list-header">
                    <h4>최근 문서</h4>
                    <Link
                        to="/cv/intro"
                        style={{ textDecoration: "none", color: "#36f" }}>
                        <div className="link">
                            <span>원티드 이력서 소개</span>
                            <IoMdInformationCircleOutline
                                style={{ marginLeft: 8, width: 20, height: 20 }}
                            />
                        </div>
                    </Link>
                </div>
                <div className="resume-list-list">
                    <ResumeAdd
                        className="resume-item"
                        onClick={() => {
                            navigate("/cv/create");
                        }}>
                        <div>
                            <TbCopy
                                style={{
                                    width: 26,
                                    height: 26,
                                    transform: "rotate(180deg)",
                                    color: "white",
                                }}
                            />
                        </div>
                        <p>새 이력서 작성</p>
                    </ResumeAdd>
                    <ResumeUpload className="resume-item">
                        <div>
                            <BiUpload
                                style={{ width: 26, height: 26, color: "#666" }}
                            />
                        </div>
                        <p>파일 업로드</p>
                    </ResumeUpload>
                    {mock.map((data, idx) => (
                        <ResumeItem key={idx} />
                    ))}
                </div>
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    background-color: #f8f8fa;
    height: 100vh;

    .resume-list {
        width: 80%;
        margin: 0 auto;

        .resume-list-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin: 25px 0 5px;

            & h4 {
                font-size: 16px;
                font-weight: 600;
                line-height: 1.4;
                padding: 15px 0;
                margin: 0;
                color: #333;
                word-wrap: break-word;
            }

            .link {
                padding: 15px 0;
                display: flex;
                align-items: center;

                & span {
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }

        .resume-list-list {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: calc(100% + 20px);

            .resume-item {
                height: 190px;
                width: calc(25% - 20px);
                margin-bottom: 20px;
                margin-right: 20px;
                position: relative;
                border: 1px solid #dbdbdb;
                background-color: #fff;
                box-sizing: border-box;
                cursor: pointer;
            }
        }
    }
`;
const ResumeAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 74px;
        height: 74px;
        border-radius: 50%;
        background-color: #36f;
    }

    & > p {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin: 20px 0 0;
    }
`;
const ResumeUpload = styled(ResumeAdd)`
    & > div {
        background-color: #e1e2e3;
    }
`;
export default CVList;
