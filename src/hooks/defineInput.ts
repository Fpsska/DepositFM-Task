import { useState } from 'react';

import { useValidation } from './inputValidation';

// /. imports


export function useInput(currentValue: string, isImageSelected: boolean, validations: any) {

    const [value, setValue] = useState<string>(currentValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);
    const valid = useValidation({ value, isImageSelected, validations });

    const onInputChange = (e: string) => { // get correct string value from event
        setValue(e);
    };

    const onInputBlur = () => { // when leave input field
        setInputActiveStatus(true);
    };

    return {
        value,
        isInputActive,
        ...valid,
        onInputChange,
        onInputBlur
    };

}