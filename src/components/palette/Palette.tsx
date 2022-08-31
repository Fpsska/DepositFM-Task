import React from 'react';

import { useAppSelector } from '../../app/hooks';

import PaletteTemplate from './PaletteTemplate';
import './palette.scss';

// /. imports

interface PalettePropTypes {
    setVisibleStatus: (arg: boolean) => void
}

// /. interfaces 

const Palette: React.FC<PalettePropTypes> = (props) => {

    const { setVisibleStatus } = props;

    const { currentPaletteData, isPaletteVisible } = useAppSelector(state => state.paletteSlice);
    // 
    return (
        <div className="palette">
            <div className="palette__wrapper">
                {
                    isPaletteVisible
                        ?
                        <>
                            {currentPaletteData.map(item => {
                                return (
                                    <PaletteTemplate
                                        key={item.id}
                                        {...item}

                                        setVisibleStatus={setVisibleStatus}
                                    />
                                );
                            })}
                        </>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default Palette;