import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChromePicker } from 'react-color';

import { addCurrentPaletteTemplate, setPaletteVisibleStatus, setColorPickerStatus, setCurrentPaletteTemplateColor } from '../../../app/slices/paletteSlice';
import Palette from '../../palette/Palette';
import './palettePage.scss';

import { RootState } from '../../../app/store';

import ButtonTemplate from '../../button/Button';

import palette from '../../../assets/images/palette.png';

// /. imports

const PalettePage: React.FC = () => {
    const { isColorPickerVisible, currentPaletteData, currentPaletteTemplateID } = useSelector((state: RootState) => state.paletteSlice);
    const [limit, setLimit] = useState(false);
    const [initaialColor, setColor] = useState('#ccc');
    const dispatch = useDispatch();
    const colorPicker = useRef<HTMLDivElement>(null!);
    // 
    const addPaletteTemplate = useCallback((): void => {
        dispatch(addCurrentPaletteTemplate(
            {
                id: String(Math.floor(Math.random() * 1000)),
                color: initaialColor
            }
        ));
        dispatch(setPaletteVisibleStatus(true));
        dispatch(setColorPickerStatus(true));
    }, [initaialColor]);

    const setCurrentPickerColor = (updatedColor: string): void => {
        dispatch(setCurrentPaletteTemplateColor({ id: currentPaletteTemplateID, value: updatedColor }));
        setColor(updatedColor);
    };

    const keyHandler = (e: any): void => {
        if (isColorPickerVisible && e.code === 'Escape') {
            dispatch(setColorPickerStatus(false));
        }
    };

    const defineValidColorPickerArea = (e: any): void => {
        const validPickerArea = e.target === colorPicker.current || colorPicker.current.contains(e.target);  // (e.target as Element)
        const validElements = e.target.className === 'palette__template' || e.target.className === 'button button--palette';
        if (!validPickerArea && !validElements) {
            dispatch(setColorPickerStatus(false));
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keyHandler);
        document.addEventListener('click', defineValidColorPickerArea);
        return () => {
            document.removeEventListener('keydown', keyHandler);
            document.removeEventListener('click', defineValidColorPickerArea);
        };
    }, [isColorPickerVisible]);

    useEffect(() => {
        if (currentPaletteData.length >= 8) { // disable ADD button
            setLimit(true);
        } else {
            setLimit(false);
        }
        // 
        if (currentPaletteData.length <= 0) { // hide ColorPicker
            dispatch(setColorPickerStatus(false));
        }
    }, [currentPaletteData]);
    // 
    return (
        <div className="palette-page">
            <div className="palette-page__wrapper">
                <div className="palette-page__workplace">
                    <div className="palette-page__palette">
                        <Palette />
                    </div>
                    <div ref={colorPicker} className="palette-page__picker">
                        {
                            isColorPickerVisible
                                ?
                                <ChromePicker color={initaialColor} onChange={(updatedColor: { hex: string }) => setCurrentPickerColor(updatedColor.hex)} />
                                :
                                <></>
                        }
                    </div>

                    <ButtonTemplate
                        className={'button--palette'}
                        text={'Add color'}
                        disabledStatus={limit ? true : false}
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