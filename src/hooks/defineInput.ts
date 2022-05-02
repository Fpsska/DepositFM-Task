import React, { useState } from 'react';

import { useValidation } from './inputValidation';

// /. imports

export function useInput(currentValue: string, validations: any) {

    const [value, setValue] = useState<string>(currentValue);
    const [isInputActive, setInputActiveStatus] = useState<boolean>(false);
    const valid = useValidation({ value, validations });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
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