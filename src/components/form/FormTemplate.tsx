import React from 'react';

// import { useDefineInput } from '../../hooks/defineInput';


interface FormTemplatePropTypes {
    text: string,
    placeholder: string,
    htmlFor: string
}

const FormTemplate: React.FC<FormTemplatePropTypes> = ({ text, placeholder, htmlFor }) => {
    // const { handleInputName } = useDefineInput();


    // 
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
        e.target.value = e.target.value.replace(/[0-9]/g, '');
        // handleInputName({ e, inputName });
    };
    // 
    return (
        <div className="form__field field">
            <div className="field__title">
                <label className="field__label" htmlFor={htmlFor}>{text}</label>
                <span className="field__warn">no valid</span>
            </div>
            <input className="field__input" type="text" name={htmlFor} id={htmlFor} placeholder={placeholder} required onChange={(e) => inputHandler(e, htmlFor)} />
        </div>
    );
};

export default FormTemplate;