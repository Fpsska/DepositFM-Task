import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../app/store';

import { useValidation } from './useValidation';

// /. imports


export function useInput(currentValue: string, isImageSelected: boolean, validations: any) {

    const { isFormSubmited } = useSelector((state: RootState) => state.formSlice);
    const [value, setValue] = useState<string>(currentValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);
    const valid = useValidation({ value, isImageSelected, validations });

    const onInputChange = (e: string) => { // get correct string value from event
        setValue(e);
    };

    const onInputBlur = () => { // when leave input field
        setInputActiveStatus(true);
    };

    useEffect(() => { // clear input fields, when form is submitted
        isFormSubmited ? setValue('') : setValue(value);
    }, [isFormSubmited, value]);

    return {
        value,
        isInputActive,
        ...valid,
        onInputChange,
        onInputBlur
    };

}