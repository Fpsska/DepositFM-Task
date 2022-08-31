import React, { useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
    setImageSelectedStatus,
    setImageURL,
    setFormSubmitStatus,
    setPreloaderVisibleStatus
} from '../../app/slices/formSlice';

import { usePostRequest } from '../../hooks/usePostRequest';

import { useInput } from '../../hooks/useInput';

import ButtonTemplate from '../button/Button';

import FormTemplate from './FormTemplate';


import './form.scss';

// /. imports

const Form: React.FC = () => {
    const {
        formInputs,
        isImageSelected,
        currentImageURL,
        isPreloaderVisible
    } = useAppSelector(state => state.formSlice);

    const dispatch = useAppDispatch();

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
        dispatch(setFormSubmitStatus(true));

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
        });
    };

    const deleteImage = (): void => {
        dispatch(setImageSelectedStatus(false));
    };
    // 
    return (
        <form ref={form} className="form" onSubmit={handleFormSubmit}>
            <div className="form__wrapper">
                {formInputs.map(item => {
                    return (
                        <FormTemplate
                            key={item.id}
                            {...item}

                            inputName={inputName}
                            inputSurname={inputSurname}
                            inputPatronymic={inputPatronymic}
                            isPreloaderVisible={isPreloaderVisible}
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
                                <button className="file__button file__button--delete" disabled={isPreloaderVisible} onClick={deleteImage}></button>
                            </div>
                            :
                            <>
                                <input className="file__input" type="file" name="file" id="file" accept="image/*"
                                    onChange={setNewImage}
                                    disabled={isPreloaderVisible}
                                    required
                                />
                                <label className="file__label" htmlFor="file"></label>
                            </>
                        }
                    </>
                </div>

                <ButtonTemplate
                    className={'button--form'}
                    attr={'button-submit'}
                    text={isPreloaderVisible ? 'Sending...' : 'Save'}
                    disabledStatus={
                        !inputName.isInputValid ||
                        !inputSurname.isInputValid ||
                        !inputPatronymic.isInputValid ||
                        !imageInput.isInputValid ||
                        isPreloaderVisible
                    }
                    onClickHandler={() => { }}
                />

            </div>
        </form>
    );
};

export default Form;

