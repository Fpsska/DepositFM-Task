import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

import PaletteTemplate from './PaletteTemplate';
import './palette.scss';

// /. imports

interface PalettePropTypes {
    setVisibleStatus: (arg: boolean) => void
}

// /. interfaces 

const Palette: React.FC<PalettePropTypes> = (props) => {

    const { setVisibleStatus } = props;

    const { currentPaletteData, isPaletteVisible } = useSelector((state: RootState) => state.paletteSlice);
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
                                        id={item.id}
                                        color={item.color}
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