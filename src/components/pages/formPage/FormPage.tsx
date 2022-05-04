import React from 'react';

import Form from '../../form/Form';
import Preloader from '../../common/Preloader/Preloader';

const FormPage: React.FC = () => {
    return (
        <div className="form-page">
            <div className="form-page__wrapper">
                <div className="form-page__form">
                    <Form />
                </div>
                <div className="form-page__preloader">
                    <Preloader />
                </div>
            </div>
        </div>
    );
};

export default FormPage;