import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setImageSelectedStatus, setImageURL, setFormSubmitStatus, setRequestInfo } from '../../app/slices/formSlice';
import { usePostRequest } from '../../hooks/postRequest';

import { RootState } from '../../app/store';

// import FormTemplate from './FormTemplate';
import { useInput } from '../../hooks/defineInput';

import './form.scss';


const Form: React.FC = () => {
    const { formInputs, isImageSelected, currentImageURL, currentName, currentSurname, currentPatronymic } = useSelector((state: RootState) => state.formSlice);
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
            contacts: { currentName, currentSurname, currentPatronymic }
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

    // const errorHandler = (error) => {
    //     switch (error) {
    //         case 'emptyError':
    //             setCurrentError('field cannot be empty');
    //             break;
    //         case 'minLengthError':
    //             setCurrentError('minimum length is should be 4 letter');
    //             break;
    //         case 'maxLengthError':
    //             setCurrentError('maximum length is should be less 11 letter');
    //     }
    // };
    // 
    return (
        <form ref={form} className="form" onSubmit={handleFormSubmit}>
            <div className="form__wrapper">
                <div className="form__field field">
                    <div className="field__title">
                        <label className="field__label" htmlFor="name">Name</label>
                        {inputName.isInputActive && inputName.minLengthError
                            ? <span className="field__warn">minimum length is should be 3 letter</span>
                            : <></>}
                        {inputSurname.isInputActive && inputName.maxLengthError
                            ? <span className="field__warn">maximum length is should be less 10 letter</span>
                            : <></>}
                        {inputName.isInputActive && inputName.emptyError
                            ? <span className="field__warn">field cannot be empty</span>
                            : <></>}
                    </div>
                    <input className="field__input" type="text" name="name" placeholder="Your Name"
                        value={inputName.value}
                        onChange={e => inputName.onInputChange(e)}
                        onBlur={() => inputName.onInputBlur()}
                        required />
                </div>
                {/*  */}
                <div className="form__field field">
                    <div className="field__title">
                        <label className="field__label" htmlFor="surname">Surname</label>
                        {inputSurname.isInputActive && inputSurname.minLengthError
                            ? <span className="field__warn">minimum length is should be 4 letter</span>
                            : <></>}
                        {inputSurname.isInputActive && inputSurname.maxLengthError
                            ? <span className="field__warn">maximum length is should be less 11 letter</span>
                            : <></>}
                        {inputSurname.isInputActive && inputSurname.emptyError
                            ? <span className="field__warn">field cannot be empty</span>
                            : <></>}
                    </div>
                    <input className="field__input" type="text" name="surname" placeholder="Your Surname"
                        value={inputSurname.value}
                        onChange={e => inputSurname.onInputChange(e)}
                        onBlur={() => inputSurname.onInputBlur()}
                        required />
                </div>
                {/*  */}
                <div className="form__field field">
                    <div className="field__title">
                        <label className="field__label" htmlFor="patronymic">Patronymic</label>
                        {inputPatronymic.isInputActive && inputPatronymic.minLengthError
                            ? <span className="field__warn">minimum length is should be 5 letter</span>
                            : <></>}
                        {inputPatronymic.isInputActive && inputPatronymic.maxLengthError
                            ? <span className="field__warn">maximum length is should be less 14 letter</span>
                            : <></>}
                        {inputPatronymic.isInputActive && inputPatronymic.emptyError
                            ? <span className="field__warn">field cannot be empty</span>
                            : <></>}
                    </div>
                    <input className="field__input" type="text" name="patronymic" placeholder="Your Patronymic"
                        value={inputPatronymic.value}
                        onChange={e => inputPatronymic.onInputChange(e)}
                        onBlur={() => inputPatronymic.onInputBlur()}
                        required />
                </div>
                {/*  */}
                <div className="form__field file">
                    <span className="file__text">Photo</span>
                    <>
                        {isImageSelected
                            ?
                            <img className="file__image" src={currentImageURL} alt="chosenImage" />
                            :
                            <>
                                <input className="file__input" type="file" name="file" id="file" accept="image/*" required onChange={setNewImage} />
                                <label className="file__label" htmlFor="file"></label>
                            </>
                        }
                    </>
                </div>

                <button className="form__button"
                    disabled={!inputName.isInputValid || !inputPatronymic.isInputValid || !inputPatronymic.isInputValid}
                >Save
                </button>

            </div>
        </form>
    );
};

export default Form;

