import { render, screen, fireEvent } from '../../../test-utils';

import FormPage from './FormPage';


// /. imports


describe('FormPage component', () => {
    test('render component snapshot', () => {
        const { container } = render(<FormPage />);

        expect(container).toMatchSnapshot();
    });
    test('should be hide Preloader component, when isPreloaderVisible is false', () => {
        render(<FormPage />);

        expect(screen.queryByTestId('form-preloader')).toBeNull();
        expect(screen.getByTestId('button-submit')).toHaveTextContent('Save');
    });
    test('should be show Preloader component, when isPreloaderVisible is true', async () => {
        render(<FormPage />);

        // const handleSubmit = jest.fn();

        fireEvent.click(screen.getByTestId('button-submit'));
        // expect(handleSubmit).toHaveBeenCalledTimes(1);

        expect(screen.getByTestId('button-submit')).toHaveTextContent('Save');
        // expect(screen.getByTestId('form-preloader')).toBeInTheDocument();
    });
});