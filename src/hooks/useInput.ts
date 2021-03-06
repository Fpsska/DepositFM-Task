import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import { setPreloaderVisibleStatus } from '../app/slices/formSlice';

import { useValidation } from './useValidation';


// /. imports


export function useInput(currentValue: string, isImageSelected: boolean, validations: any) {

    const { isFormSubmited, isPreloaderVisible } = useAppSelector(state => state.formSlice);

    const [value, setValue] = useState<string>(currentValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);
    
    const valid = useValidation({ value, isImageSelected, validations });

    const dispatch = useAppDispatch();

    const onInputChange = (e: string) => { // get correct string value from event
        setValue(e);
    };

    const onInputBlur = () => { // when leave input field
        setInputActiveStatus(true);
    };

    useEffect(() => { // clear input fields, when form is submitted & hide preloader
        setTimeout(() => {
            dispatch(setPreloaderVisibleStatus(false));
        }, 3000);
    }, [isFormSubmited, isPreloaderVisible]);

    return {
        value,
        isInputActive,
        ...valid,
        onInputChange,
        onInputBlur
    };

}