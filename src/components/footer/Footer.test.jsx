import { render, screen } from '../../test-utils';

import Footer from './Footer';

// /. imports

describe('Footer component', () => {
    test('render component snapshot with data', () => {
        const { container } = render(<Footer />);

        expect(container).toMatchSnapshot();
    });
    test('should be have class status__body, when isResponseIncorrect is false', () => {
        render(<Footer />);

        expect(screen.getByTestId('status-body')).toHaveClass('status__body');
    });
    test('should be have `waiting for submit` text in status fileds, when isFormSubmited is false', () => {
        render(<Footer />);

        expect(screen.getByTestId('status-body')).toHaveTextContent('waiting for submit');
        expect(screen.getByTestId('response-message')).toHaveTextContent('waiting for submit');
    });
});