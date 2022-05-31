import { useEffect, useState, useRef, useCallback } from 'react';

// /. imports

interface propTypes {
    initialStatus: boolean
}

// /. interfaces 

export function useAreaHandler(props: propTypes) {

    const { initialStatus } = props;

    const [isVisible, setVisibleStatus] = useState<boolean>(initialStatus);
    const refEl = useRef<HTMLDivElement>(null!);

    const areaHandler = (e: any) => {
        if (isVisible && refEl.current && !refEl.current.contains(e.target)) {
            setVisibleStatus(false);
        }
    };

    const keyHandler = useCallback((e: KeyboardEvent): void => {
        if (isVisible && e.code === 'Escape') {
            setVisibleStatus(false);
        }
    }, [isVisible]);

    useEffect(() => {
        document.addEventListener('click', areaHandler, true);
        document.addEventListener('keydown', keyHandler);
        return () => {
            document.removeEventListener('click', areaHandler, true);
            document.removeEventListener('keydown', keyHandler);
        };
    }, [keyHandler]);

    return { refEl, isVisible, setVisibleStatus };
}