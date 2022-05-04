import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setResponseInfo, setRequestInfo } from '../../app/slices/formSlice';
import './footer.scss';

import { RootState } from '../../app/store';

const Footer: React.FC = () => {
    const { isFormPage } = useSelector((state: RootState) => state.navSlice);
    const { isFormSubmited, currentResponseInfo, currentRequestInfo } = useSelector((state: RootState) => state.formSlice);
    const dispatch = useDispatch();
    // 
    useEffect(() => {
        dispatch(setRequestInfo({ id: Math.floor(Math.random() * 1000), message: 'waiting for submit', status: 'waiting for submit' }));
        dispatch(setResponseInfo({ id: Math.floor(Math.random() * 1000), message: 'waiting for submit', status: 'waiting for submit' }));
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
                            <span className="response__status">
                                {`Status: ${isFormSubmited ? currentRequestInfo.status : currentResponseInfo.status}`}
                            </span>
                            <span className="response__message">
                                {`Message:  ${isFormSubmited ? currentRequestInfo.message : currentResponseInfo.message}`}
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