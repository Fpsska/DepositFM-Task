import React from 'react';

import { useSelector } from 'react-redux';

import Form from '../../form/Form';
import Preloader from '../../common/Preloader/Preloader';
import { RootState } from '../../../app/store';

const FormPage: React.FC = () => {

    const { isPreloaderVisible } = useSelector((state: RootState) => state.formSlice);
    // 
    return (
        <div className="form-page">
            <div className="form-page__wrapper">
                <div className="form-page__form">
                    <Form />
                </div>
                {isPreloaderVisible
                    ? <div className="form-page__preloader">
                        <Preloader />
                    </div>
                    : <></>
                }
            </div>
        </div>
    );
};

export default FormPage;