import { render, screen, fireEvent } from '../../test-utils';


import Form from './Form';

// /. imports

const formTemplateData = [
    {
        id: 1,
        htmlFor: 'name',
        text: 'Name',
        placeholder: 'Your Name',
        inputName: 'name',
        inputSurname: 'surname',
        inputPatronymic: 'patronymicName'
    }
];

describe('Form component', () => {
    test('render component snapshot with data', () => {
        const { container } = render(<Form data={formTemplateData} />);

        expect(container).toMatchSnapshot();
    });
    test('render component empty snapshot', () => {
        const { container } = render(<Form />);

        expect(container).toMatchSnapshot();
    });
    test('should be set no-valid class, when input is not-valid', () => {
        render(<Form />);

        expect(screen.getByPlaceholderText('Your Name')).toHaveClass('field__input no-valid');
        expect(screen.getByPlaceholderText('Your Surname')).toHaveClass('field__input no-valid');
        expect(screen.getByPlaceholderText('Your Patronymic')).toHaveClass('field__input no-valid');
    });
});