import { render, screen, cleanup } from '../../test-utils';

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
    test('Nav renders with props', () => {
        render(<Nav data={NavData} />);
        const navElements = screen.getAllByRole('navigation');

        expect(navElements[0]).toHaveTextContent(NavData[0].text);
        expect(navElements[1]).toHaveAttribute('href', NavData[0].link);
    });
    test('Nav data snapshot', () => {
        const { navLinkElement } = render(<Nav data={NavData} />);

        expect(navLinkElement).toMatchSnapshot();
    });
    test('Nav empty snapshot', () => {
        const { navLinkElement } = render(<Nav />);
        
        expect(navLinkElement).toMatchSnapshot();
    });
});

