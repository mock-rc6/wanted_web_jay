import React from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
    const location = useLocation();

    return (
        <div>
            <h3>
                <code>{location.pathname}</code>에 해당하는 url을 찾을 수
                없습니다.
            </h3>
        </div>
    );
};

export default NoMatch;
