import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setImageSelectedStatus, setImageURL, setFormSubmitStatus, setRequestInfo } from '../../app/slices/formSlice';
import { usePostRequest } from '../../hooks/postRequest';

import { RootState } from '../../app/store';

import { useInput } from '../../hooks/defineInput';

import FormTemplate from './FormTemplate';


import './form.scss';


const Form: React.FC = () => {
    const { formInputs, isImageSelected, currentImageURL } = useSelector((state: RootState) => state.formSlice);
    const dispatch = useDispatch();
    const form = useRef<HTMLFormElement>(null!);
    // 
    const { request } = usePostRequest();
    const inputName = useInput('', { empty: true, minLength: 3, maxLength: 10 });
    const inputSurname = useInput('', { empty: true, minLength: 4, maxLength: 11 });
    const inputPatronymic = useInput('', { empty: true, minLength: 5, maxLength: 14 });
    // 
    const setNewImage = (e: any): void => { // React.FormEvent<HTMLInputElement> / React.FormEvent<HTMLInputElement> / React.ChangeEvent<HTMLInputElement>
        const fileReader = new FileReader();

        fileReader.readAsDataURL((e.target.files[0]));
        fileReader.onload = () => {
            dispatch(setImageURL(String(fileReader.result)));
        };

        dispatch(setImageSelectedStatus(true));
    };

    const handleFormSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        request('https://test-job.pixli.app/send.php', {
            action: 'send_data',
            id: 1,
            image: currentImageURL,
            contacts: [
                {
                    currentName: inputName.value,
                    currentSurname: inputSurname.value,
                    currentPatronymic: inputPatronymic.value
                }
            ]
        })
            .then((data) => {
                dispatch(setRequestInfo({ message: data.msg, status: data.status }));
            })
            .then(() => {
                form.current.reset();
                dispatch(setImageSelectedStatus(false));
                dispatch(setFormSubmitStatus(true));
            })
            .catch((err) => {
                dispatch(setRequestInfo({ message: err.msg, status: err.status }));
            });
    };

    return (
        <form ref={form} className="form" onSubmit={handleFormSubmit}>
            <div className="form__wrapper">
                {formInputs.map(item => {
                    return (
                        <FormTemplate
                            key={item.id}
                            htmlFor={item.htmlFor}
                            text={item.text}
                            placeholder={item.placeholder}
                            inputName={inputName}
                            inputSurname={inputSurname}
                            inputPatronymic={inputPatronymic}
                        />
                    );
                })}
                <div className="form__field file">
                    <span className="file__text">Photo</span>
                    <>
                        {isImageSelected
                            ?
                            <img className="file__image" src={currentImageURL} alt="chosenImage" />
                            :
                            <>
                                <input className="file__input" type="file" name="file" id="file" accept="image/*"
                                    onChange={setNewImage}
                                    required
                                />
                                <label className="file__label" htmlFor="file"></label>
                            </>
                        }
                    </>
                </div>

                <button className="form__button"
                    disabled={!inputName.isInputValid || !inputSurname.isInputValid || !inputPatronymic.isInputValid || !isImageSelected}
                >
                    Save
                </button>

            </div>
        </form>
    );
};

export default Form;

