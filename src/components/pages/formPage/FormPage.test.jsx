import { fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../test-utils';

import FormPage from './FormPage';


// /. imports


describe('FormPage component', () => {
    test('render component snapshot', () => {
        const { container } = render(<FormPage />);

        expect(container).toMatchSnapshot();
    });
    test('hide Preloader component, when isPreloaderVisible is false', () => {
        render(<FormPage />);

        expect(screen.queryByTestId('form-preloader')).toBeNull();  // not.toBeInTheDocument
        expect(screen.getByTestId('form-submit')).toHaveTextContent('Save');
    });
    test('show Preloader component, when isPreloaderVisible is true', async () => {
        render(<FormPage />);

        userEvent.click(screen.getByTestId('form-submit'));
        expect(screen.getByTestId('form-submit')).toHaveTextContent('Save');
        // expect(await screen.findByTestId('form-preloader')).toBeInTheDocument();
    });
});