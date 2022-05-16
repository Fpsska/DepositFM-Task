import { useEffect, useState, useRef } from 'react';

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
        if (refEl.current && !refEl.current.contains(e.target)) {
            setVisibleStatus(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', areaHandler, true);
        return () => {
            document.removeEventListener('click', areaHandler, true);
        };
    }, []);

    return { refEl, isVisible, setVisibleStatus };
}