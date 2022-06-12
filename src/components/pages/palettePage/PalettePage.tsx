import React, { useCallback, useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
    addCurrentPaletteTemplate,
    setPaletteVisibleStatus,
    setCurrentPaletteTemplateColor
} from '../../../app/slices/paletteSlice';

import { useAreaHandler } from '../../../hooks/useAreaHandler';

import ButtonTemplate from '../../button/Button';
import Palette from '../../palette/Palette';

import palette from '../../../assets/images/palette.png';

import './palettePage.scss';


// /. imports

const PalettePage: React.FC = () => {
    const { currentPaletteData, currentPaletteTemplateID } = useAppSelector(state => state.paletteSlice);

    const [limit, setLimit] = useState(false);
    const [initaialColor, setColor] = useState('#ccc');

    const dispatch = useAppDispatch();

    const { refEl, isVisible, setVisibleStatus } = useAreaHandler({ initialStatus: false });
    // 
    const addPaletteTemplate = useCallback((): void => {
        dispatch(addCurrentPaletteTemplate(
            {
                id: String(Math.floor(Math.random() * 1000)),
                color: initaialColor
            }
        ));
        dispatch(setPaletteVisibleStatus(true));
        setVisibleStatus(true);
    }, [initaialColor]);

    const setCurrentPickerColor = (updatedColor: string): void => {
        dispatch(setCurrentPaletteTemplateColor({ id: currentPaletteTemplateID, value: updatedColor }));
        setColor(updatedColor);
    };

    useEffect(() => {
        if (currentPaletteData.length >= 8) { // disable ADD button
            setLimit(true);
        } else {
            setLimit(false);
        }
        // 
        if (currentPaletteData.length <= 0) { // hide ColorPicker
            setVisibleStatus(false);
        }
    }, [currentPaletteData]);
    // 
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <div className="palette-page__workplace">
                    <div className="palette-page__palette">
                        <Palette setVisibleStatus={setVisibleStatus} />
                    </div>
                    <div ref={refEl} className="palette-page__picker">
                        {
                            isVisible
                                ?
                                <ChromePicker color={initaialColor} onChange={(updatedColor: { hex: string }) => setCurrentPickerColor(updatedColor.hex)} />
                                :
                                <></>
                        }
                    </div>

                    <ButtonTemplate
                        className={'button--palette'}
                        text={'Add color'}
                        disabledStatus={limit}
                        attr={''}
                        onClickHandler={addPaletteTemplate}
                    />

                </div>
                <div className="palette-page__preview">
                    <img className="palette-page__image" src={palette} alt="palette" />
                </div>
            </div>
        </div>
    );
};

export default PalettePage;