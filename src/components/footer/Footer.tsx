import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setResponseInfo } from '../../app/slices/formSlice';
import './footer.scss';

import { RootState } from '../../app/store';

const Footer: React.FC = () => {
    const { isFormPage } = useSelector((state: RootState) => state.navSlice);
    const { currentResponseInfo, isFormSubmited } = useSelector((state: RootState) => state.formSlice);
    const dispatch = useDispatch();
    // 
    useEffect(() => {
        dispatch(setResponseInfo(
            {
                id: Math.floor(Math.random() * 1000),
                message: 'waiting for submit',
                status: 'waiting for submit'
            }
        )
        );
    }, []);
    // 
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                {isFormPage
                    ?
                    <div className="response">
                        <span className="response__text">Response</span>
                        <div className="response__information">

                            <div className="response__status status">
                                <span className="status__title">Status:{' '}</span>
                                <span className="status__body">{isFormSubmited ? currentResponseInfo.status : 'waiting for submit'}</span>
                            </div>

                            <span className="response__message">
                                {`Message:  ${isFormSubmited ? currentResponseInfo.message : 'waiting for submit'}`}
                            </span>

                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </footer>
    );
};

export default Footer;