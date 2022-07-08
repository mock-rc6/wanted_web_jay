import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import { api } from "../../lib/api/api";
import { getCookie } from "../../lib/cookies/cookie";
import { useDispatch, useSelector } from "react-redux";
import { profileImageAction } from "../../store/actions/profile";

const MyWanted = () => {
    const accessToken = getCookie("accessToken");
    const formData = new FormData();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const profileImg = useSelector((state) => state.profileReducer.profileImg);

    const [form, setForm] = useState({});
    const [img, setImg] = useState("");

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
                if (res.data.isSuccess) setForm(res.data.result);
                else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    }, []);

    useEffect(() => {
        if (img !== "") {
            if (window.confirm("사진을 등록하시겠습니까?")) {
                uploadImage();
            }
        }
    }, [img]);

    const handleImg = (e) => {
        console.log("e.target.files[0] :>> ", e.target.files[0]);
        const i = e.target.files[0];
        let list = [];
        list.push(i);
        setImg(i);
    };

    const uploadImage = () => {
        formData.append("images", img);
        axios
            .post(api + "users/resources/images", formData, {
                headers: {
                    "X-Access-Token": accessToken,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    dispatch(
                        profileImageAction(
                            "https://dev.odoong.shop/resources" +
                                res.data.result.photo_url
                        )
                    );
                    window.location.reload();
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    };

    return (
        <Wrap>
            <Header />
            <section>
                <h2>MY 원티드</h2>
                <div className="mywanted-container">
                    <aside>
                        <div className="profile">
                            <Avatar profileImg={profileImg}>
                                <input type="file" onChange={handleImg} />
                            </Avatar>
                            <dl
                                onClick={() => {
                                    navigate("/profile/edit");
                                }}>
                                <dt>{form.name}</dt>
                                <dd style={{ paddingTop: 20 }}>{form.email}</dd>
                                <dd style={{ paddingTop: 8 }}>
                                    {form.phone_number}
                                </dd>
                            </dl>
                        </div>
                        <div className="point">
                            <div>
                                <span>포인트</span>
                                <strong>0P</strong>
                            </div>
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
                        <div className="setting">계정 설정</div>
                    </aside>
                    <section className="body">
                        <div className="summary">
                            <h2>지원 현황</h2>
                            <ul>
                                <li>
                                    <em>0</em>
                                    <span>지원 완료</span>
                                </li>
                                <li>
                                    <em>0</em>
                                    <span>진행 중</span>
                                </li>
                                <li>
                                    <em>0</em>
                                    <span>최종 합격</span>
                                </li>
                                <li>
                                    <em>0</em>
                                    <span>불합격</span>
                                </li>
                            </ul>
                        </div>
                        <div className="profile-level">
                            <div className="profile-level-top">
                                <h2>프로필</h2>
                            </div>
                            <div className="progress-bar">
                                <h3>
                                    <span>루키</span>
                                    <span>신입, 프론트엔드 개발자</span>
                                </h3>
                            </div>
                            <p className="level-subtitle">
                                간단한 소개만 작성해도 면접 제안을 받을 수
                                있어요!
                            </p>
                            <div className="start-matchup-wrap">
                                <button className="start-matchup">
                                    간단 이력 추가하고 매치업 시작하기
                                </button>
                            </div>
                        </div>
                        <div className="body-contents">
                            <div>
                                <div className="list-header">
                                    <h2>북마크</h2>
                                    <button>
                                        총 {form.bookmarks?.length}개 전체보기
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12">
                                            <path
                                                fill="currentColor"
                                                d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <ul>
                                    {form.bookmarks?.map((data, idx) => (
                                        <Item key={idx}>
                                            <ItemLogo
                                                img={
                                                    "https://dev.odoong.shop/resources" +
                                                    data.photos[0]
                                                }></ItemLogo>
                                            <div className="item-content">
                                                <h3>{data.title}</h3>
                                                <div>
                                                    <p>{data.company_name}</p>
                                                    <span>{data.location}</span>
                                                </div>
                                            </div>
                                        </Item>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="list-header">
                                    <h2>좋아요</h2>
                                    <button>
                                        총 {form.likemarks?.length}개 전체보기
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12">
                                            <path
                                                fill="currentColor"
                                                d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <ul>
                                    {form.likemarks?.map((data, idx) => (
                                        <Item key={idx}>
                                            <ItemLogo
                                                img={
                                                    "https://dev.odoong.shop/resources" +
                                                    data.photos[0]
                                                }></ItemLogo>
                                            <div className="item-content">
                                                <h3>{data.title}</h3>
                                                <div>
                                                    <p>{data.company_name}</p>
                                                    <span>{data.location}</span>
                                                </div>
                                            </div>
                                        </Item>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Wrap>
    );
};

const Wrap = styled.div`
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
        .mywanted-container {
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
                        &:hover {
                            text-decoration: underline;
                            cursor: pointer;
                        }

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
                }
                .point {
                    padding: 30px 20px;
                    border-top: 1px solid #e1e2e3;
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

            .body {
                padding-left: 270px;
                .summary {
                    padding: 26px 0 34px;
                    margin: 0 0 20px;
                    border-radius: 5px;
                    border: 1px solid #e1e2e3;
                    background-color: #fff;
                    & > h2 {
                        font-size: 18px;
                        padding: 0 32px 26px;
                        font-weight: 700;
                    }
                    & > ul {
                        list-style: none;
                        margin: 0;
                        display: flex;
                    }
                    & li {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 25%;
                        border-right: 1px solid #e1e2e3;
                        & em {
                            font-size: 36px;
                            font-weight: 400;
                            line-height: 1;
                            padding-bottom: 11px;
                        }
                        & span {
                            font-size: 16px;
                            line-height: 19px;
                        }
                    }
                }

                .profile-level {
                    background-color: #fff;
                    border: 1px solid #e1e2e3;
                    border-radius: 5px;
                    margin: 0 0 20px;
                    padding: 26px 0 31px;
                    width: 100%;
                    .profile-level-top {
                        margin: 0 30px 30px;
                        & h2 {
                            font-size: 18px;
                            font-weight: 700;
                            height: 28px;
                            line-height: 28px;
                            color: #333;
                        }
                    }
                    .progress-bar {
                        margin: 0 30px;
                        padding: 30px 29px 25px 30px;
                        border-radius: 5px;
                        background: rgba(239, 241, 251, 0.44);
                        & > h3 {
                            font-size: 18px;
                            margin: 0;
                            font-weight: 700;
                            color: #333;
                            text-align: center;
                            white-space: nowrap;
                            & > span:nth-of-type(1) {
                                font-size: 14px;
                                color: #666;
                                padding: 1.5px 6px 0.5px;
                                border-radius: 4px;
                                border: 1px solid #ccc;
                                background-color: #fff;
                            }
                            & > span:nth-of-type(2) {
                                margin-left: 12px;
                            }
                        }
                    }
                    .level-subtitle {
                        font-size: 16px;
                        font-weight: 400;
                        color: #333;
                        text-align: center;
                        margin: 30px 30px 0;
                    }
                    .start-matchup-wrap {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .start-matchup {
                        padding: 2px 24px 0;
                        height: 48px;
                        margin: 16px auto 0;
                        font-size: 16px;
                        color: #36f;
                        background-color: #fff;
                        border: 1px solid #36f;
                        border-radius: 25px;
                        font-weight: 700;
                    }
                }

                .body-contents {
                    background-color: #fff;
                    border: 1px solid #e1e2e3;
                    border-radius: 5px;

                    & > div {
                        padding: 26px 30px 30px;
                        border-bottom: 1px solid #e1e2e3;

                        .list-header {
                            display: flex;
                            justify-content: space-between;
                            & h2 {
                                font-size: 18px;
                                font-weight: 700;
                                line-height: 27px;
                            }
                            & button {
                                display: flex;
                                align-items: center;
                                border: none;
                                background: none;
                                color: #36f;
                                font-size: 14px;
                                cursor: pointer;
                            }
                        }
                        & > ul {
                            list-style: none;
                            margin-top: 30px;
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            gap: 20px;
                        }
                    }
                }
            }
        }
    }
`;
const Avatar = styled.div`
    background-image: url(${(props) => props.profileImg});
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
const Item = styled.li`
    display: flex;
    align-items: center;
    .item-content {
        padding-left: 20px;
        min-height: 100px;
        & h3 {
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            margin-bottom: 8px;
        }
        & p {
            font-size: 15px;
            font-weight: 700;
            line-height: 22px;
            margin-bottom: 10px;
        }
        & span {
            font-size: 14px;
            line-height: 15px;
            color: #999;
        }
    }
`;
const ItemLogo = styled.div`
    background-image: url(${(props) => props.img});
    width: 100px;
    height: 100px;
    border: 1px solid #e1e2e3;
    border-radius: 3px;
    background-size: cover;
`;
export default MyWanted;
