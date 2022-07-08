import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/common/Card";
import Header from "../../components/common/Header";
import { api } from "../../lib/api/api";
import { getCookie } from "../../lib/cookies/cookie";

const Bookmarks = () => {
    const accessToken = getCookie("accessToken");
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get(api + "mypages/bookmarks", {
                headers: {
                    "x-access-token": accessToken,
                },
                withCredentials: true,
            })
            .then((res) => {
                console.log("res :>> ", res);
                if (res.data.isSuccess) setList(res.data.result);
                else alert(res.data.message);
            })
            .catch((e) => {
                console.log("e :>> ", e);
            });
    }, []);
    useEffect(() => {
        console.log("list :>> ", list);
    }, [list]);

    return (
        <Wrap>
            <Header />
            <div className="bookmark-body">
                <p>북마크</p>
                <div className="list">
                    <ul>
                        {list.map((data, idx) => (
                            <Card
                                key={idx}
                                id={data.id}
                                thumbnail={data.photos[0]}
                                position={data.title}
                                companyName={data.company_name}
                                responseRate={data.response_rate}
                                location={data.location}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </Wrap>
    );
};
const Wrap = styled.div`
    .bookmark-body {
        width: 80%;
        margin: 0 auto;
        padding-bottom: 100px;
        & p {
            font-size: 20px;
            font-weight: 700;
            color: #333;
            padding: 50px 0 20px;
        }
        .list {
            & ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
            }
        }
    }
`;
export default Bookmarks;
