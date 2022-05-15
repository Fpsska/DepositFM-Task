import { useDispatch } from 'react-redux';

import { setFormPageStatus } from '../app/slices/navSlice';

// /. imports

export function usePageName() {
    const dispatch = useDispatch();

    const handlePageName = (pageName: string) => {
        switch (pageName) {
            case 'Form':
                dispatch(setFormPageStatus(true));
                break;
            case 'Palette':
                dispatch(setFormPageStatus(false));
                break;
            default:
                return;
        }
    };
    return { handlePageName };
}