import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setResponseInfo, setResponseErrorStatus } from '../app/slices/formSlice';




// /. imports

export function usePostRequest() {
    const dispatch = useDispatch();
    const { currentResponseInfo } = useSelector((state) => state.formSlice);

    const request = useCallback(async (url, data) => {
        try {
            const response = await fetch(url, {     // response configuration
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {     // response validation
                throw new Error(`Error from ${url}, status: ${response.message}`);
            }

            const output = await response.json();

            setTimeout(() => {
                dispatch(setResponseInfo({ message: output.msg, status: output.status }));
            }, 3000);

            return output;

        } catch (err) {
            setTimeout(() => {
                dispatch(setResponseInfo({ message: err.message, status: 'error' }));
            }, 3000);
        }
    }, []);

    useEffect(() => {
        if (currentResponseInfo.status === 'error') {
            dispatch(setResponseErrorStatus(true));
        } else {
            dispatch(setResponseErrorStatus(false));
        }
    }, [currentResponseInfo]);

    return { request };
}