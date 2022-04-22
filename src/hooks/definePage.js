import { useDispatch } from 'react-redux';

import { setFormPageStatus } from '../app/reducers/navSlice';

export function useDefinePage() {
    const dispatch = useDispatch();

    const handlePageName = (pageName) => {
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