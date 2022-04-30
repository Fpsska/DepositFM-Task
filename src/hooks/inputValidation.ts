import { useState, useEffect } from 'react';


export function useValidation(currentValue: string, validations: any[]) {

    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);
    const [emptyError, setEmptyError] = useState<boolean>(false);
    const [isInputValid, setInputValidStatus] = useState<boolean>(false);

    useEffect(() => {

        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    currentValue.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    currentValue.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'empty':
                    currentValue ? setEmptyError(false) : setEmptyError(true);
                    break;
            }
        }

    }, [currentValue, validations]);

    useEffect(() => {
        if (minLengthError || maxLengthError || emptyError) {
            setInputValidStatus(false);
        } else {
            setInputValidStatus(true);
        }
    }, [minLengthError, maxLengthError, emptyError]);

    return {
        minLengthError,
        maxLengthError,
        emptyError,
        isInputValid,
    };

}