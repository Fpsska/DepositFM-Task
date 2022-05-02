import React, { useCallback, useEffect, useState } from 'react';

// /. imports

interface FormTemplatePropTypes {
    text: string,
    placeholder: string,
    htmlFor: string,
    inputName: any,
    inputSurname: any,
    inputPatronymic: any
}

// /. interfaces

const FormTemplate: React.FC<FormTemplatePropTypes> = (props) => {
    const { text,
        placeholder,
        htmlFor,
        inputName,
        inputSurname,
        inputPatronymic
    } = props;

    const [errInputName, setErrInputName] = useState<any>(inputName);
    // 
    const errorNameHandler = useCallback((name: string) => {
        switch (name) {
            case 'name':
                setErrInputName(inputName);
                break;
            case 'surname':
                setErrInputName(inputSurname);
                break;
            case 'patronymic':
                setErrInputName(inputPatronymic);
                break;
        }
    }, [inputName, inputPatronymic, inputSurname]);

    useEffect(() => { // start handle input name
        errorNameHandler(htmlFor);
    }, [inputName.value, inputSurname.value, inputPatronymic.value, htmlFor, errorNameHandler]);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue = e.target.value.replace(/[0-9]/g, '');
        errInputName.onInputChange(eventValue); // send correct event.target.value to useInput onInputChange func
    };


    // 
    return (
        <div className="form__field field">
            <div className="field__title">
                <label className="field__label" htmlFor="name">{text}</label>
                {errInputName.minLengthError // errInputName.isInputActive && 
                    ? <span className="field__warn">minimum length is should be 3 letter</span>
                    : <></>}
                {errInputName.maxLengthError
                    ? <span className="field__warn">maximum length is should be less 10 letter</span>
                    : <></>}
                {errInputName.emptyError
                    ? <span className="field__warn">field cannot be empty</span>
                    : <></>}
            </div>
            <input className="field__input" type="text"
                name={htmlFor}
                id={htmlFor}
                placeholder={placeholder}
                value={errInputName.value}
                onChange={e => inputHandler(e)}
                onBlur={() => errInputName.onInputBlur()}
                required />
        </div>
    );
};

export default FormTemplate;