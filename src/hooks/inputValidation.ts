import { useState, useEffect } from 'react';

// /. imports

interface propTypes {
    value: string,
    validations: any[]
}

// /. interfaces

export function useValidation(props: propTypes) {

    const {
        value,
        validations
    } = props;

    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);
    const [emptyError, setEmptyError] = useState<boolean>(false);
    const [isInputValid, setInputValidStatus] = useState<boolean>(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'empty':
                    value ? setEmptyError(false) : setEmptyError(true);
                    break;
            }
        }
    }, [value, validations]);

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
        isInputValid
    };

}