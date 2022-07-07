import React from "react";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";

const ResumeItem = ({ title, isFinished, updatedAt, onClick }) => {
    return (
        <Wrap onClick={onClick}>
            <Title>
                <h3>{title}</h3>
                <p>{updatedAt.substr(0, 10).replace(/-/gi, ".")}</p>
                <p className="match">매치업 이력서</p>
            </Title>
            <Info>
                <div className="lang">한</div>
                <span>{isFinished ? "작성 완료" : "작성 중"}</span>
                <div className="dropdown">
                    <button>
                        <HiDotsVertical style={{ width: 24, height: 24 }} />
                    </button>
                </div>
            </Info>
        </Wrap>
    );
};
const Wrap = styled.div`
    height: 190px;
    width: calc(25% - 20px);
    margin-bottom: 20px;
    margin-right: 20px;
    position: relative;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;
`;
const Title = styled.div`
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    letter-spacing: normal;

    & h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.33;
        max-height: 46px;
        max-width: 100%;
        letter-spacing: normal;
        text-align: left;
        color: #999;
        overflow: hidden;
        word-break: break-all;
    }

    & p {
        margin: 0;
        margin-top: 5px;
        color: #999;
    }

    .match {
        color: #36f;
    }
`;
const Info = styled.div`
    position: absolute;
    bottom: 0;
    height: 41px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px 0 20px;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;

    .lang {
        width: 20px;
        height: 20px;
        border-radius: 2px;
        border: 1px solid #999;
        color: #999;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        margin-right: 10px;
    }

    & > span {
        color: #999;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
    }

    .dropdown {
        margin-left: auto;
        & > button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            background: none;
            width: 24px;
            height: 100%;
            color: #76797e;
            cursor: pointer;
        }
    }
`;
export default ResumeItem;
