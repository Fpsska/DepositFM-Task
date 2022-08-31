import React from 'react';

import { useAppSelector } from '../../../app/hooks';

import Form from '../../form/Form';
import Preloader from '../../common/Preloader/Preloader';

// /. imports

const FormPage: React.FC = () => {

    const { isPreloaderVisible } = useAppSelector(state => state.formSlice);
    
    return (
        <div className="form-page">
            <div className="form-page__wrapper">
                <div className="form-page__form">
                    <Form />
                </div>
                {isPreloaderVisible
                    ? <div className="form-page__preloader" data-testid="form-preloader">
                        <Preloader />
                    </div>
                    : <></>
                }
            </div>
        </div>
    );
};

export default FormPage;