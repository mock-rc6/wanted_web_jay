import React, { useEffect, useState } from "react";
import { api } from "../../lib/api/api";
import { getCookie } from "../../lib/cookies/cookie";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
    const accessToken = getCookie("accessToken");
    const navigate = useNavigate();

    const [init, setInit] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(() => {
        axios
            .get(api + "mypages", {
                headers: {
                    "x-access-token": accessToken,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    const info = {
                        user_name: res.data.result.name,
                        email: res.data.result.email,
                        phone_number: res.data.result.phone_number,
                    };
                    setInit(res.data.result);
                    setForm(info);
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    }, []);

    const handleForm = (e) => {
        const changed = { ...form, [e.target.name]: e.target.value };
        setForm(changed);
    };

    const submit = () => {
        axios
            .patch(api + "mypages/infos", form, {
                headers: {
                    "x-access-token": accessToken,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    alert("수정이 완료되었습니다.");
                    navigate("/mywanted");
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    return (
        <ProfileWrap>
            <Header />
            <section>
                <h2>MY 원티드</h2>
                <div className="profile-container">
                    <aside>
                        <div className="profile">
                            <Avatar>
                                <input type="file" />
                            </Avatar>
                            <dl>
                                <dt>{init.name}</dt>
                                <dd style={{ paddingTop: 20 }}>{init.email}</dd>
                                <dd style={{ paddingTop: 8 }}>
                                    {init.phone_number}
                                </dd>
                            </dl>
                            <button className="edit">기본정보 수정</button>
                        </div>
                        <div className="point">
                            <div style={{ paddingBottom: 23 }}>
                                <span>관심 있음</span>
                                <strong>0</strong>
                            </div>
                            <div style={{ paddingBottom: 23 }}>
                                <span>열람</span>
                                <strong>0</strong>
                            </div>
                            <div>
                                <span>받은 제안</span>
                                <strong>0</strong>
                            </div>
                        </div>
                    </aside>
                    <section>
                        <div className="form">
                            <header>
                                <p>기본정보 수정</p>
                                <span>
                                    지원 결과 또는 추천 포지션 정보를 받아볼
                                    이메일/연락처 정보 입력해주세요.
                                </span>
                            </header>
                            <div className="form-content-wrap">
                                <div className="form-content">
                                    <label htmlFor="name">
                                        <h6>이름</h6>
                                        <input
                                            defaultValue={form.user_name}
                                            id="name"
                                            name="user_name"
                                            onChange={handleForm}
                                        />
                                    </label>
                                    <label htmlFor="email">
                                        <h6>이메일</h6>
                                        <input
                                            defaultValue={form.email}
                                            id="email"
                                            name="email"
                                            onChange={handleForm}
                                        />
                                    </label>
                                    <label htmlFor="phone">
                                        <h6>휴대폰 번호</h6>
                                        <input
                                            defaultValue={form.phone_number}
                                            id="phone"
                                            name="phone_number"
                                            onChange={handleForm}
                                        />
                                    </label>
                                </div>
                            </div>
                            <footer className="form-footer">
                                <button onClick={submit}>완료</button>
                            </footer>
                        </div>
                    </section>
                </div>
            </section>
        </ProfileWrap>
    );
};
const ProfileWrap = styled.div`
    background-color: #f8f8fa;
    & > section {
        width: 80%;
        margin: 0 auto;
        & > h2 {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            padding: 50px 0 20px;
        }
        .profile-container {
            position: relative;
            & > aside {
                background-color: #fff;
                border: 1px solid #e1e2e3;
                border-radius: 5px;
                width: 250px;
                position: absolute;
                top: 0;
                left: 0;
                .profile {
                    padding: 42px 20px 30px;
                    text-align: center;

                    & > dl {
                        width: 100%;
                        padding: 0;
                        padding-top: 30px;
                        margin: 0;
                        & > dt {
                            font-size: 18px;
                            line-height: 19px;
                            font-weight: 700;
                            white-space: nowrap;
                        }
                        & > dd {
                            margin: 0;
                            padding: 0;
                            font-size: 14px;
                            line-height: 16px;
                            color: #767676;
                            white-space: nowrap;
                        }
                    }
                    .edit {
                        background-color: #fff;
                        border: 1px solid #e1e2e3;
                        border-radius: 20px;
                        width: 160px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 30px auto 0;
                        font-size: 16px;
                        color: #36f;
                        font-weight: 600;
                        cursor: pointer;
                    }
                }
                .point {
                    padding: 30px 20px;

                    & > div {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        & span {
                            font-size: 16px;
                            font-weight: 500;
                        }
                        & strong {
                            font-size: 18px;
                            font-weight: 700;
                        }
                    }
                }
                .setting {
                    padding: 30px 20px;
                    border-top: 1px solid #e1e2e3;
                    font-weight: 500;
                    font-size: 16px;
                }
            }
            & > section {
                padding-left: 270px;
                .form {
                    padding: 41px 0 30px;
                    border: 1px solid #e1e2e3;
                    border-radius: 3px;
                    background-color: #fff;
                    & > header {
                        padding: 0 30px;
                        & p {
                            color: #333;
                            font-size: 20px;
                            font-weight: 600;
                            line-height: 1;
                            margin: 0;
                        }
                        & span {
                            margin-top: 10px;
                            font-size: 16px;
                            font-weight: 400;
                            color: #9a9a9a;
                            line-height: 1.8;
                        }
                    }

                    .form-content-wrap {
                        margin-top: 43px;
                        .form-content {
                            padding: 0 30px;
                            & label {
                                width: 100%;
                                padding: 15px 0;
                                display: flex;
                                align-items: center;
                                & h6 {
                                    color: #999;
                                    font-size: 16px;
                                    width: 150px;
                                }
                                & input {
                                    width: calc(100% - 150px);
                                    padding: 12px 0;
                                    color: #333;
                                    font-size: 16px;
                                    font-weight: 400;
                                    border: none;
                                    border-bottom: 1px solid #e1e2e3;
                                    &:focus {
                                        outline: none;
                                    }
                                }
                            }
                        }
                    }
                }

                .form-footer {
                    margin-top: 45px;
                    padding: 0 30px;
                    text-align: right;
                    & > button {
                        color: #fff;
                        background-color: #36f;
                        border-radius: 3px;
                        width: 190px;
                        height: 50px;
                        font-size: 18px;
                        font-weight: 600;
                        cursor: pointer;
                        border: none;
                    }
                }
            }
        }
    }
`;
const Avatar = styled.div`
    background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png);
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-size: cover;
    background-position: 50%;
    margin: 0 auto;

    & > input {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
`;
export default ProfileEdit;
