
// /. imports

const initialState = {
    formInputs: [
        {
            id: 1,
            htmlFor: "name",
            text: "Name",
            placeholder: "Your Name",
        },
        {
            id: 2,
            htmlFor: "surname",
            text: "Surname",
            placeholder: "Your Surname",
        },
        {
            id: 3,
            htmlFor: "patronymic",
            text: "Patronymic",
            placeholder: "Your Patronymic",
        },
    ]
};

// /. state

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default formReducer;