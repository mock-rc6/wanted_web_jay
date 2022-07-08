import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GrLanguage } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { RiDownloadFill } from "react-icons/ri";
import Header from "../../components/common/Header";
import CareerItem from "../../components/CVCreate/CareerItem";
import EducationItem from "../../components/CVCreate/EducationItem";
import AwardItem from "../../components/CVCreate/AwardItem";
import LanguageItem from "../../components/CVCreate/LanguageItem";
import footImg from "../../assets/imgs/img-resume-footer.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../lib/api/api";
import { getCookie } from "../../lib/cookies/cookie";
import { autoResizeTextarea } from "../../utils/autoResizeTextarea";

const recommendSkill = [
    "Python",
    "Spring Framework",
    "AWS",
    "Git",
    "iOS",
    "HTML",
    "JavaScript",
    "MySQL",
    "SQL",
    "Linux",
    "Android",
    "Kotlin",
    "Swift",
    "C / C++",
    "PHP",
    "Docker",
    "React",
    "Github",
    "JPA",
    "C++",
];
const CVCreate = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const ref = useRef();

    const resumeId = state.id; //이력서 id
    const accessToken = getCookie("accessToken");

    const [title, setTitle] = useState(state.title);
    const [name, setName] = useState(state.name);
    const [email, setEmail] = useState(state.email);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [introduction, setIntroduction] = useState("");

    const [isChecked, setIsChecked] = useState(false);
    const [careerList, setCareerList] = useState([]);
    const [educationList, setEducationList] = useState([]);
    const [openSkillTab, setOpenSkillTab] = useState(false);
    const [openRecommendSkill, setOpenRecommendSkill] = useState(false);
    const [skillList, setSkillList] = useState([]);
    const [skillInput, setSkillInput] = useState(""); //인풋창으로 스킬 추가
    const [awardList, setAwardList] = useState([]);
    const [langList, setLangList] = useState([]);
    const [link, setLink] = useState("");
    const [openLink, setOpenLink] = useState(false);

    const career = {
        id: 0,
        start_date: "",
        end_date: "",
        tenure: "",
        is_in_service: false,
        company_name: "",
        department_position: "",
        results: [],
    };

    const education = {
        id: 0,
        start_date: "",
        end_date: "",
        is_in_service: false,
        school_name: "",
        major_degree: "",
        detail: "",
    };

    const award = {
        id: 0,
        date: "",
        title: "",
        detail: "",
    };

    const lang = {
        id: 0,
        title: "",
        level: "",
        language_certificates: [],
    };

    useEffect(() => {
        axios
            .get(api + `resumes/${resumeId}`, {
                headers: {
                    "x-access-token": accessToken,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    setName(res.data.result.name);
                    setEmail(res.data.result.email);
                    setCareerList(res.data.result.careers);
                    setAwardList(res.data.result.awards);
                    setEducationList(res.data.result.educations);
                    setLangList(res.data.result.language_skills);
                    setSkillList(res.data.result.skills);
                    if (res.data.result.skills.length !== 0)
                        setOpenSkillTab(true);
                    if (
                        res.data.result.skills.length === 1 &&
                        res.data.result.skills[0] === ""
                    )
                        setOpenSkillTab(false);

                    setLink(res.data.result.external_link);
                    if (res.data.result.external_link.length !== 0)
                        setOpenLink(true);
                    setPhoneNumber(res.data.result.phone_number);
                    setIntroduction(res.data.result.introduction);
                } else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    }, []);

    const addCareer = () => {
        let list = [...careerList, career];
        setCareerList(list);
    };

    const addEducation = () => {
        let list = [...educationList, education];
        setEducationList(list);
    };

    const addSkill = (data) => {
        let check = false;
        let list = [...skillList];
        //스킬 중복 방지
        list.forEach((d) => {
            if (d === data) {
                check = true;
                return;
            }
        });

        if (!check) list.push(data);
        setSkillList(list);
    };

    const addAward = () => {
        let list = [...awardList, award];
        setAwardList(list);
    };

    const addLang = () => {
        let list = [...langList, lang];
        setLangList(list);
    };

    const handleLink = (e) => {
        setLink(e.target.value);
    };

    const handleSkillInput = (e) => {
        setSkillInput(e.target.value);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleIntroduction = (e) => {
        setIntroduction(e.target.value);
    };

    const deleteSkillTag = (idx) => {
        let list = [...skillList];
        setSkillList(list.filter((d, i) => idx !== i));
    };

    const editResume = () => {
        axios
            .patch(
                api + `resumes/${resumeId}?permanent=true`,
                {
                    id: resumeId,
                    title,
                    name,
                    email,
                    phone_number: phoneNumber,
                    introduction,
                    external_link: link,
                    careers: careerList,
                    awards: awardList,
                    educations: educationList,
                    language_skills: langList,
                    skills: skillList,
                },
                {
                    headers: {
                        "X-Access-Token": accessToken,
                    },
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) {
                    alert("이력서가 등록되었습니다.");
                    navigate("/cv/list");
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
                <div className="body">
                    <div className="toolbar">
                        <div className="lang">
                            <GrLanguage />
                            <select defaultValue="ko">
                                <option value="ko">한국어</option>
                                <option value="ja">日本語</option>
                                <option value="tw">繁體中文</option>
                                <option value="en">English</option>
                            </select>
                            <GoTriangleDown />
                        </div>
                        <div className="other-btns">
                            <div className="guide-btn">
                                <div className="guide-btn-item">
                                    <button style={{ color: "#36f" }}>
                                        합격/불합격 단어 가이드
                                    </button>
                                </div>
                                <span style={{ color: "#cccccc" }}>
                                    &nbsp;|&nbsp;
                                </span>
                                <div className="guide-btn-item">
                                    <button>내 이력서 단어 체크</button>
                                    <div>
                                        <Toggle
                                            isChecked={isChecked}
                                            onClick={() => {
                                                setIsChecked(!isChecked);
                                            }}></Toggle>
                                    </div>
                                </div>
                            </div>
                            <button className="download">
                                <RiDownloadFill />
                            </button>
                        </div>
                    </div>
                    <div className="body-basic">
                        <input
                            className="title"
                            type="text"
                            maxLength={100}
                            placeholder="이력서 제목(필수)"
                            defaultValue={state.title}
                            onChange={handleTitle}
                        />
                        <input
                            className="name"
                            type="text"
                            maxLength={100}
                            placeholder="이름(필수)"
                            defaultValue={name}
                            onChange={handleName}
                        />
                        <input
                            className="email"
                            type="email"
                            maxLength={120}
                            placeholder="이메일(필수)"
                            defaultValue={email}
                            onChange={handleEmail}
                        />
                        <input
                            className="mobile"
                            type="tel"
                            maxLength={200}
                            placeholder="연락처(필수) ex) 010-0000-0000"
                            onChange={handlePhoneNumber}
                            defaultValue={phoneNumber}
                        />
                    </div>
                    <div className="body-about">
                        <div className="body-about-header">간단 소개글</div>
                        <p className="body-guide">
                            • 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을
                            간단히 작성해주세요. <br />• 3~5줄로 요약하여
                            작성하는 것을 추천합니다!
                        </p>
                        <textarea
                            ref={ref}
                            className="resume-input"
                            maxLength={4000}
                            placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
                            onChange={handleIntroduction}
                            defaultValue={introduction}
                            onKeyDown={() => {
                                autoResizeTextarea(ref);
                            }}
                            onKeyUp={() => {
                                autoResizeTextarea(ref);
                            }}></textarea>
                    </div>
                    <div className="resume-lists">
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                경력
                            </div>
                            <p className="body-guide">
                                • 담당하신 업무 중 우선순위가 높은 업무를
                                선별하여 최신순으로 작성해주세요. <br />
                                • 경력사항이 없는 경우 '신입'으로 작성해주세요.
                                <br />• 업무 성과는 되도록 구체적인 숫자 혹은
                                %로 표현해주세요!
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn" onClick={addCareer}>
                                    + 추가
                                </button>
                                <ul>
                                    {careerList.map((data, idx) => (
                                        <CareerItem
                                            key={idx}
                                            careerList={careerList}
                                            setCareerList={setCareerList}
                                            idx={idx}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                학력
                            </div>
                            <p className="body-guide">
                                • 최신순으로 작성해주세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button
                                    className="add-btn"
                                    onClick={addEducation}>
                                    + 추가
                                </button>
                                <ul>
                                    {educationList.map((data, idx) => (
                                        <EducationItem
                                            key={idx}
                                            educationList={educationList}
                                            setEducationList={setEducationList}
                                            idx={idx}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                스킬
                            </div>
                            <p className="body-guide">
                                • 개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는
                                직무와 관련된 스킬을 추가해보세요. <br />•
                                데이터 분석 툴이나 협업 툴 등의 사용해본 경험이
                                있으신 툴들도 추가해보세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button
                                    className="add-btn"
                                    onClick={() => {
                                        setOpenSkillTab(true);
                                    }}>
                                    + 추가
                                </button>
                                {openSkillTab && (
                                    <div className="skill-input-wrap">
                                        <div className="skill-recommend-wrap">
                                            <div className="skill-recommend-wrap-header">
                                                <span>
                                                    많이 쓰는 인기 스킬을
                                                    추가해보세요!
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        setOpenRecommendSkill(
                                                            !openRecommendSkill
                                                        );
                                                    }}>
                                                    더보기
                                                </button>
                                            </div>
                                            <p
                                                className={
                                                    openRecommendSkill
                                                        ? "skill-recommend-big"
                                                        : "skill-recommend-small"
                                                }>
                                                {recommendSkill.map(
                                                    (data, idx) => (
                                                        <SkillChooseButton
                                                            key={idx}
                                                            onClick={() => {
                                                                addSkill(data);
                                                            }}>
                                                            <span>{data}</span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 16 16">
                                                                <g
                                                                    fill="none"
                                                                    fillRule="evenodd">
                                                                    <g fill="#939393">
                                                                        <g>
                                                                            <path
                                                                                d="M3.151 3.151c.202-.201.53-.201.732 0L8 7.27l4.117-4.118c.202-.201.53-.201.732 0 .201.202.201.53 0 .732L8.73 8l4.118 4.117c.18.18.199.458.06.66l-.06.072c-.202.201-.53.201-.732 0L8 8.73 3.883 12.85c-.202.201-.53.201-.732 0-.201-.202-.201-.53 0-.732L7.27 8 3.151 3.883c-.18-.18-.199-.458-.06-.66z"
                                                                                transform="translate(-156 -497) translate(156 497) rotate(-45 8 8)"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </SkillChooseButton>
                                                    )
                                                )}
                                            </p>
                                        </div>
                                        <input
                                            placeholder="보유 스킬을 검색해주세요."
                                            onChange={handleSkillInput}
                                        />
                                        <span
                                            onClick={() => {
                                                addSkill(skillInput);
                                            }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18">
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd">
                                                    <g fill="#939393">
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M16.433 17.317c.244.244.64.244.884 0s.244-.64 0-.884L11.9 11.016l-.211-.184c-.248-.212-.617-.198-.848.032C9.794 11.905 8.382 12.5 6.875 12.5c-3.106 0-5.625-2.519-5.625-5.625 0-3.107 2.518-5.625 5.625-5.625S12.5 3.768 12.5 6.875c0 .58-.088 1.148-.259 1.691-.103.33.08.68.409.784.33.104.68-.08.784-.409.208-.663.316-1.359.316-2.066C13.75 3.078 10.672 0 6.875 0S0 3.078 0 6.875c0 3.796 3.078 6.875 6.875 6.875 1.634 0 3.18-.574 4.4-1.593l5.158 5.16z"
                                                                    transform="translate(-1215 -454) translate(193 438) translate(1022.042 16.042)"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <p className="skill-tag-wrap">
                                            {skillList.map((data, idx) => (
                                                <SkillTag key={idx}>
                                                    {data}
                                                    <button
                                                        onClick={() => {
                                                            deleteSkillTag(idx);
                                                        }}>
                                                        <svg
                                                            width="16.59751037344398"
                                                            height="16.59751037344398"
                                                            viewBox="0 0 24 24"
                                                            color="#939393">
                                                            <path
                                                                fill="currentColor"
                                                                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"></path>
                                                        </svg>
                                                    </button>
                                                </SkillTag>
                                            ))}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                수상 및 기타
                            </div>
                            <p className="body-guide">
                                • 수상 이력, 직무 관련 자격증, 수료한 교육이나
                                참석한 외부활동 등이 있다면 간략히 작성해주세요.{" "}
                                <br />• 지원하는 회사에서 요구하는 경우가
                                아니라면 운전면허증과 같은 자격증은 생략하는
                                것이 좋습니다!
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn" onClick={addAward}>
                                    + 추가
                                </button>
                                <ul>
                                    {awardList.map((data, idx) => (
                                        <AwardItem
                                            key={idx}
                                            awardList={awardList}
                                            setAwardList={setAwardList}
                                            idx={idx}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList>
                            <div className="resume-content-list-header">
                                외국어
                            </div>
                            <p className="body-guide">
                                • 외국어 자격증을 보유한 경우 작성해주세요.{" "}
                                <br />• 활용 가능한 외국어가 있다면, 어느정도
                                수준인지 레벨을 선택해주세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button className="add-btn" onClick={addLang}>
                                    + 추가
                                </button>
                                <ul>
                                    {langList.map((data, idx) => (
                                        <LanguageItem
                                            key={idx}
                                            langList={langList}
                                            setLangList={setLangList}
                                            idx={idx}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </ResumeContentList>
                        <ResumeContentList style={{ marginBottom: 100 }}>
                            <div className="resume-content-list-header">
                                링크
                            </div>
                            <p className="body-guide">
                                • 깃헙, 노션으로 작성한 포트폴리오, 구글
                                드라이브 파일 등 업무 성과를 보여줄 수 있는
                                링크가 있다면 작성해주세요.
                            </p>
                            <div className="resume-content-list-body">
                                <button
                                    className="add-btn"
                                    onClick={() => {
                                        setOpenLink(true);
                                    }}>
                                    + 추가
                                </button>
                                {openLink && (
                                    <input
                                        className="link-input"
                                        placeholder="http://"
                                        onChange={handleLink}
                                        defaultValue={link}
                                    />
                                )}
                            </div>
                        </ResumeContentList>
                    </div>
                </div>
            </div>
            <FooterBar>
                <div className="footer">
                    <div>
                        <div className="progress">
                            <img src={footImg} alt="img" />
                        </div>
                        <div className="emoji">💪🏼</div>
                        <div className="description">
                            400자 이상 작성하시면 이력서를 완료할 수 있어요!
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <Button>임시 저장</Button>
                        <SubmitBtn onClick={editResume}>작성 완료</SubmitBtn>
                    </div>
                </div>
            </FooterBar>
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .container {
        width: 90%;

        .toolbar {
            position: fixed;
            top: 50px;
            right: 5%;
            left: 5%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            z-index: 4;
            padding: 20px 0;
            box-sizing: border-box;

            .lang {
                height: 40px;
                border-radius: 2px;
                border: 1px solid #333;
                background-color: #fff;
                position: relative;
                display: flex;

                & svg:nth-of-type(1) {
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    top: 50%;
                    left: 10px;
                    z-index: 1;
                    transform: translateY(-50%);
                }
                & select {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    padding-left: 37px;
                    border: #e0e0e0;
                    appearance: none;
                    min-width: 98px;

                    &:focus {
                        outline-color: black;
                    }
                }
                & svg:nth-of-type(2) {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    font-size: 6px;
                    color: #666;
                    transform: translateY(-50%);
                }
            }

            .other-btns {
                display: flex;

                .guide-btn {
                    margin-right: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    background-color: #fff;

                    .guide-btn-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        & > button {
                            height: 40px;
                            font-size: 15px;
                            font-weight: 600;
                            padding: 6px 8px;
                            border: none;
                            background: none;
                            cursor: pointer;
                        }

                        & > div {
                            width: 56px;
                            height: 30px;
                            display: inline-block;
                            position: relative;
                        }

                        #toggle {
                            display: none;
                        }
                    }
                }

                .download {
                    border: 1px solid #999;
                    width: 40px;
                    height: 40px;
                    background-color: #fff;
                    border-radius: 3px;
                    cursor: pointer;

                    & svg {
                        width: 20px;
                        height: 20px;
                        color: #76797e;
                    }
                }
            }
        }

        .body-basic {
            margin-bottom: 60px;
        }

        .title {
            width: 100%;
            color: #3b3d40;
            font-size: 36px;
            line-height: 36px;
            font-weight: 500;
            margin: 130px 0 50px;
            border: none;
            &:focus {
                outline: none;
            }
        }
        .name {
            margin-top: 20px;
            font-size: 16px;
            border: none;
            width: 100%;
            height: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            &:focus {
                outline: none;
            }
        }

        .email,
        .mobile {
            margin-top: 10px;
            font-size: 16px;
            border: none;
            width: 100%;
            height: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            &:focus {
                outline: none;
            }
        }

        .body-guide {
            white-space: pre-wrap;
            padding: 10px;
            margin-top: 10px;
            background-color: #f3f9fe;
            font-size: 12px;
            line-height: 1.42;
            color: #666;
        }

        .body-about {
            margin-bottom: 60px;
            .body-about-header {
                padding: 20px 0 6px;
                font-size: 16px;
                font-weight: 500;
                color: #3b3d40;
                border-bottom: 1px solid #bababa;
            }

            .resume-input {
                resize: none;
                margin: 30px 0px 3px;
                color: rgb(59, 61, 64);
                height: 34px;
                font-size: 16px;
                width: 100%;
                white-space: pre-wrap;
                word-break: break-all;
                word-wrap: break-word;
                line-height: 22px;
                border: none;
                &:focus {
                    outline: none;
                }
            }
        }
    }
`;
const Toggle = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => (props.isChecked ? "#03c803" : "#f2f4f7")};
    border-radius: 15px;
    border: 1px solid #ececec;

    &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        border-radius: 50%;
        left: 2px;
        background-color: #fff;
        transform: ${(props) => (props.isChecked ? "translateX(80%)" : "")};
        transition: 0.4s;
        border: 1px solid #e1e2e3;
    }
`;
const ResumeContentList = styled.div`
    margin-bottom: 20px;

    .resume-content-list-header {
        padding: 40px 0 6px;
        font-size: 16px;
        font-weight: 500;
        color: #3b3d40;
        border-bottom: 1px solid #bababa;
    }

    .add-btn {
        color: #36f;
        border-bottom: 1px solid #f1f1f1;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: 30px 0;
        font-size: 18px;
        font-weight: 600;
        text-align: left;
        cursor: pointer;
    }

    .skill-input-wrap {
        margin-bottom: 90px;
        position: relative;
        font-weight: 500;
        color: #333;

        & > input {
            margin-top: 30px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #e1e2e3;
            padding: 11px 20px 11px 15px;
            font-size: 15px;
            box-sizing: border-box;
        }

        & > span {
            position: absolute;
            margin-top: 45px;
            right: 20px;

            &::before {
                content: "";
                width: 1px;
                background-color: #ececec;
                height: 28px;
                display: block;
                position: absolute;
                left: -21px;
                bottom: 3px;
            }
        }

        .skill-recommend-wrap {
            display: flex;
            flex-direction: column;
            background-color: #f5fcf8;
            padding: 18px 21px 18px 17px;

            .skill-recommend-wrap-header {
                display: flex;
                justify-content: space-between;

                & span {
                    font-size: 13px;
                    color: #333;
                    line-height: 27px;
                    margin-bottom: 2px;
                    letter-spacing: 0;
                }
                & button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #666;
                }
            }

            .skill-recommend-small {
                height: 50px;
                overflow-y: hidden;
            }
            .skill-recommend-big {
                height: auto;
                overflow-y: auto;
            }
        }

        .skill-tag-wrap {
            margin-top: 6px;
        }
    }
    .link-input {
        padding: 30px;
        width: 100%;
        border: none;
        font-size: 14px;
        color: #333333;
        &:focus {
            outline: none;
        }
    }
`;
const SkillChooseButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #e4f4ec;
    border-radius: 19px;
    margin-right: 10px;
    height: 38px;
    padding: 0 17px;
    margin-top: 10px;
    border: none;
    cursor: pointer;

    & > span {
        margin-right: 9px;
    }
`;
const SkillTag = styled(SkillChooseButton)`
    background-color: #f3f5f8;
    cursor: default;
    & > button {
        background: none;
        border: none;
        margin-left: 10px;
        margin-top: 4px;
        cursor: pointer;
    }
`;
const FooterBar = styled.div`
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
    display: flex;
    width: 100%;
    padding: 0 50px;
    align-items: center;
    justify-content: space-between;

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px 0;
        margin: 0 auto;

        & > div {
            display: flex;
            align-items: center;
        }

        .progress {
            & > img {
                margin-top: 5px;
                height: 50px;
            }
        }
        .emoji {
            margin-top: 2px;
            margin-left: 6px;
            font-size: 16px;
            width: 32px;
        }
        .description {
            font-size: 13px;
            margin-top: 3px;
            color: #333;
            font-weight: 600;
        }

        .btn-wrap {
            display: flex;
            justify-content: flex-end;
        }
    }
`;
const Button = styled.button`
    background-color: #fff;
    border: 1px solid #36f;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 173px;
    height: 50px;
    font-size: 16px;
    color: #36f;
    border-radius: 25px;
    cursor: pointer;
`;
const SubmitBtn = styled(Button)`
    margin-left: 9px;
    color: #fff;
    background-color: #36f;
`;
export default CVCreate;
