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

    const [emptyError, setEmptyError] = useState<boolean>(false);
    const [minLengthError, setMinLengthError] = useState<boolean>(false);
    const [maxLengthError, setMaxLengthError] = useState<boolean>(false);

    const [minLengthCount, setminLengthCount] = useState<number>(0);
    const [maxLengthCount, setmaxLengthCount] = useState<number>(0);

    const [isInputValid, setInputValidStatus] = useState<boolean>(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'empty':
                    if (value) {
                        setEmptyError(false);
                    } else {
                        setEmptyError(true);
                        setMinLengthError(false);
                    }
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
    }, [value, validations]);

    useEffect(() => {
        if (emptyError || minLengthError || maxLengthError) {
            setInputValidStatus(false);
        } else {
            setInputValidStatus(true);
        }
    }, [emptyError, minLengthError, maxLengthError]);

    return {
        emptyError,
        minLengthError,
        minLengthCount,
        maxLengthError,
        maxLengthCount,
        isInputValid
    };

}