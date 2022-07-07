const initialState = {
    profileImg:
        JSON.parse(localStorage.getItem("profileImg")) === null
            ? "https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
            : JSON.parse(localStorage.getItem("profileImg")),
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PROFILE_IMAGE": {
            localStorage.setItem("profileImg", JSON.stringify(action.data));
            return {
                ...state,
                profileImg: action.data,
            };
        }

        default: {
            return { ...state };
        }
    }
};

export default profileReducer;
