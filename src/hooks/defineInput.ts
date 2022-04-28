import React from 'react';
import { useDispatch } from 'react-redux';

import { setNameValue, setSurnameValue, setPatronymicValue } from '../app/slices/formSlice';

interface propsTypes {
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
}

export function useDefineInput() {
    const dispatch = useDispatch();

    const handleInputName = (props: propsTypes) => {
        const { e, inputName } = props;

        switch (inputName) {
            case 'name':
                dispatch(setNameValue(e.target.value));
                break;
            case 'surname':
                dispatch(setSurnameValue(e.target.value));
                break;
            case 'patronymic':
                dispatch(setPatronymicValue(e.target.value));
                break;
            default:
                return;
        }
    };
    return { handleInputName };
}