import { useState, useEffect } from 'react';

// /. imports

interface propTypes {
    value: string,
    isImageSelected: boolean,
    validations: any[]
}

// /. interfaces

export function useValidation(props: propTypes) {

    const {
        value,
        isImageSelected,
        validations
    } = props;

    const [emptyError, setEmptyError] = useState<boolean>(false);
    const [emptyImageError, setEmptyImageError] = useState<boolean>(isImageSelected);
    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);

    const [minLengthCount, setminLengthCount] = useState<number>(0);
    const [maxLengthCount, setmaxLengthCount] = useState<number>(0);

    const [isInputValid, setInputValidStatus] = useState<boolean>(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'emptyValue':
                    value ? setEmptyError(false) : setEmptyError(true);
                    break;
                case 'emptyImage':
                    isImageSelected ? setEmptyImageError(false) : setEmptyImageError(true);
                    break;
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    setminLengthCount(validations[validation]);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    setmaxLengthCount(validations[validation]);
                    break;
            }
        }
    }, [value, isImageSelected, validations]);

    useEffect(() => {
        if (emptyError || emptyImageError || minLengthError || maxLengthError) {
            setInputValidStatus(false);
        } else {
            setInputValidStatus(true);
        }
    }, [emptyError, emptyImageError, minLengthError, maxLengthError]);

    return {
        emptyError,
        emptyImageError,
        minLengthError,
        minLengthCount,
        maxLengthError,
        maxLengthCount,
        isInputValid
    };

}