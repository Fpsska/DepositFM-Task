import { useState, useEffect } from 'react';

interface propsTypes {
    currentValue: string,
    validations: any,
}

export function useValidation(props: propsTypes) {

    const { currentValue, validations } = props;

    const [minLengthError, setMinLengthError] = useState<boolean>(false);

    useEffect(() => {

        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    currentValue.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
            }
        }

    }, [currentValue]);

    return {
        minLengthError,
    };

}