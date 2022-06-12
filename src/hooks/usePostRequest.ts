import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import { setResponseInfo, setResponseErrorStatus } from '../app/slices/formSlice';

// /. imports

interface dataTypes {
    action: string,
    id: number,
    image: string,
    contacts: contactsTypes[]
}

interface contactsTypes {
    currentName: string,
    currentSurname: string,
    currentPatronymic: string
}

// /. interfaces

export function usePostRequest() {
    const { currentResponseInfo } = useAppSelector(state => state.formSlice);
    const dispatch = useAppDispatch();

    const request = useCallback(async (url: string, data: dataTypes) => {
        try {
            const response = await fetch(url, {     // response configuration
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {     // response validation
                throw new Error(`Error from ${url}, status: ${response.status} / ${response.statusText}`);
            }

            const output = await response.json();

            setTimeout(() => {
                dispatch(setResponseInfo({ message: output.msg, status: output.status }));
            }, 2900);

            return output;

        } catch (err: any) {
            setTimeout(() => {
                // const msg = (err as Error).message;
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