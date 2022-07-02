const initialState = {
    userInfo:
        JSON.parse(localStorage.getItem("userInfo")) === null
            ? {}
            : JSON.parse(localStorage.getItem("userInfo")),
    isLogin:
        JSON.parse(localStorage.getItem("isLogin")) === null
            ? false
            : JSON.parse(localStorage.getItem("isLogin")),
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("userInfo", JSON.stringify(action.data));
            localStorage.setItem("isLogin", JSON.stringify(true));
            return {
                ...state,
                userInfo: action.data,
                isLogin: true,
            };
        }

        case "LOGOUT": {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("isLogin");
            break;
        }

        default: {
            return { ...state };
        }
    }
};

export default loginReducer;
