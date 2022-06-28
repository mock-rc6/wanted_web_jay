const initialState = {
    email: "",
};

const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EMAIL": {
            return {
                ...state,
                email: action.data,
            };
        }
        default: {
            return { ...state };
        }
    }
};

export default SignupReducer;
