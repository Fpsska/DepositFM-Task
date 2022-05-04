import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    setImageSelectedStatus,
    setImageURL,
    setFormSubmitStatus,
    setRequestInfo,
    setPreloaderVisibleStatus
} from '../../app/slices/formSlice';

import { usePostRequest } from '../../hooks/postRequest';

import { RootState } from '../../app/store';

import { useInput } from '../../hooks/useInput';

import FormTemplate from './FormTemplate';


import './form.scss';


const Form: React.FC = () => {
    const { formInputs, isImageSelected, currentImageURL } = useSelector((state: RootState) => state.formSlice);
    const dispatch = useDispatch();
    const form = useRef<HTMLFormElement>(null!);
    // 
    const { request } = usePostRequest();
    const inputName = useInput('', isImageSelected, { emptyValue: true, minLength: 3, maxLength: 10 });
    const inputSurname = useInput('', isImageSelected, { emptyValue: true, minLength: 4, maxLength: 11 });
    const inputPatronymic = useInput('', isImageSelected, { emptyValue: true, minLength: 5, maxLength: 14 });
    const imageInput = useInput('', isImageSelected, { emptyImage: true });
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
        dispatch(setPreloaderVisibleStatus(true));

        request('https://test-job.pixli.app/send.php', {
            action: 'test_data',
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
                setTimeout(() => {
                    dispatch(setFormSubmitStatus(true));
                }, 3000);
            })
            .catch((err) => {
                dispatch(setRequestInfo({ message: err.msg, status: err.status }));
            });
    };

    const deleteImage = (): void => {
        dispatch(setImageSelectedStatus(false));
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

                    <div className="file__title">
                        <span className="file__text">Photo</span>
                        {imageInput.emptyImageError
                            ? <span className="file__warn">image is required</span>
                            : <></>}
                    </div>

                    <>
                        {isImageSelected
                            ?
                            <div className="file__preview">
                                <img className="file__image" src={currentImageURL} alt="chosenImage" />
                                <button className="file__button file__button--delete" onClick={deleteImage}></button>
                            </div>
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
                    disabled={
                        !inputName.isInputValid ||
                        !inputSurname.isInputValid ||
                        !inputPatronymic.isInputValid ||
                        !imageInput.isInputValid}
                >
                    Save
                </button>

            </div>
        </form>
    );
};

export default Form;

