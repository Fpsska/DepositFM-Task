import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

import PaletteTemplate from './PaletteTemplate';
import './palette.scss';

// /. imports

const Palette: React.FC = () => {
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