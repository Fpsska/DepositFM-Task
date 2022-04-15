import { ACTION_SET_ACTIVE_STATUS } from "../actions/navActions"
// /. imports

const initialState = {
    navLinks: [
        {
            id: 1,
            text: "Form",
            link: "/DepositFM-Task/",
            isActive: true
        },
        {
            id: 2,
            text: "Palette",
            link: "Palette",
            isActive: false
        },
    ]
};

// /. state

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_ACTIVE_STATUS:
            return {
                ...state,
                navLinks: state.navLinks.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            isActive: action.payload.status
                        }
                    } else {
                        return {
                            ...item,
                            isActive: false
                        }
                    }
                })
            }
        default:
            return state;
    }
};

export default navReducer;