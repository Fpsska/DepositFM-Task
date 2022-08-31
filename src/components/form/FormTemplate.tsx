import React, { useEffect, useState } from 'react';

// /. imports

interface FormTemplatePropTypes {
    text: string,
    placeholder: string,
    htmlFor: string,
    inputName: any,
    inputSurname: any,
    inputPatronymic: any,
    isPreloaderVisible: boolean
}

// /. interfaces

const FormTemplate: React.FC<FormTemplatePropTypes> = (props) => {
    const {
        text,
        placeholder,
        htmlFor,
        inputName,
        inputSurname,
        inputPatronymic,
        isPreloaderVisible
    } = props;

    const [errInputName, setErrInputName] = useState<any>(inputName);


    useEffect(() => { // start handle input name
        const errorNameHandler = (name: string) => {
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
        };

        errorNameHandler(htmlFor);
    }, [inputName, inputSurname, inputPatronymic, htmlFor]);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eventValue = e.target.value.replace(/[^A-Za-z]/g, '');
        errInputName.onInputChange(eventValue); // send correct event.target.value to useInput onInputChange func
    };

    return (
        <div className="form__field field">
            <div className="field__title">
                <label className="field__label" htmlFor="name">{text}</label>
                <>
                    {errInputName.emptyError
                        ? <span className="field__warn">field cannot be empty</span>
                        :
                        <>
                            {errInputName.minLengthError && <span className="field__warn">{`minimum length is should be ${errInputName.minLengthCount} letter`}</span>}
                        </>
                    }
                    {errInputName.maxLengthError && <span className="field__warn">{`maximum length is should be less ${errInputName.maxLengthCount} letter`}</span>}
                </>
            </div>
            <input
                className={errInputName.isInputValid ? 'field__input' : 'field__input no-valid'}
                type="text"
                name={htmlFor}
                id={htmlFor}
                placeholder={placeholder}
                disabled={isPreloaderVisible}
                required
                value={errInputName.value}
                onChange={e => inputHandler(e)}
                onBlur={() => errInputName.onInputBlur()}
            />
        </div>
    );
};

export default FormTemplate;