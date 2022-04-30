import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useValidation } from './inputValidation';


export function useInput(currentValue: string, validations: any) {

    const [value, setValue] = useState<string>(currentValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);
    const valid = useValidation(value, validations);

    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    const onBlur = (e: any) => { // when leave input field
        setInputActiveStatus(true);
    };

    return {
        value,
        isInputActive,
        ...valid,
        onChange,
        onBlur,
    };

}