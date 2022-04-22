import { useDispatch } from 'react-redux';

import { setNameValue, setSurnameValue, setPatronymicValue } from '../app/actions/formActions';

export function useDefineInput() {
    const dispatch = useDispatch();

    const handleInputName = (e, inputName) => {
        switch (inputName) {
            case 'name':
                dispatch(setNameValue(e.target.value));
                break;
            case 'surname':
                dispatch(setSurnameValue(e.target.value));
                break;
            case 'patronymic':
                dispatch(setPatronymicValue(e.target.value));
                break;
            default:
                return;
        }
    };
    return { handleInputName };
}