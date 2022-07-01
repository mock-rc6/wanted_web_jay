const initialState = {
    userInfo: {},
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            localStorage.setItem("userInfo", JSON.stringify(action.data));
            return {
                ...state,
                userInfo: action.data,
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default loginReducer;
