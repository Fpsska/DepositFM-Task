
// /. imports

const initialState = {
    navLinks: [
        {
            id: 1,
            text: "Form",
            link: "/DepositFM-Task/"
        },
        {
            id: 2,
            text: "Palette",
            link: "Palette"
        },
    ]
};

// /. state

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default navReducer;