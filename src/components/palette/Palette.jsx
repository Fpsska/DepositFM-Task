import React from 'react';

import { useSelector } from 'react-redux';

import PaletteTemplate from './PaletteTemplate';
import './palette.scss';

const Palette = () => {
    const { currentPaletteData, isPaletteVisible } = useSelector(state => state.paletteSlice);
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