import { render, screen, fireEvent } from '../../test-utils';

import Nav from './Nav';

// /. imports

const NavData = [
    {
        id: 1,
        text: 'Form',
        link: '/DepositFM-Task/',
        isActive: true
    }
];

describe('Nav component', () => {
    test('render component snapshot with data', () => {
        const { container } = render(<Nav data={NavData} />);

        expect(container).toMatchSnapshot();
    });
    test('render component empty snapshot', () => {
        const { container } = render(<Nav />);

        expect(container).toMatchSnapshot();
    });
    test('should be set InnerHTML, href for element', () => {
        render(<Nav data={NavData} />);

        expect(screen.getAllByTestId('nav-link')[0]).toHaveTextContent(NavData[0].text);
        expect(screen.getAllByTestId('nav-link')[0]).toHaveAttribute('href', NavData[0].link);
    });
    test('should be set active class for first link', () => {
        render(<Nav data={NavData} />);

        expect(screen.getAllByTestId('nav-link')[0]).toHaveClass('nav__link active');
    });
    test('should be set active class for current clicked link element', () => {
        render(<Nav data={NavData} />);

        // fireEvent.click(screen.getAllByTestId('nav-link')[1]);
        // expect(screen.getAllByTestId('nav-link')[1]).toHaveClass('nav__link active');
        // expect(screen.getAllByTestId('nav-link')[0]).toHaveClass('nav__link');
    });
});

