import React from 'react';

import './button.scss';

// /. imports

interface buttonTemplatePropTypes {
    className: string,
    text: string,
    attr: string,
    disabledStatus: boolean,
    onClickHandler: () => void
}

// /. interfaces

const ButtonTemplate: React.FC<buttonTemplatePropTypes> = (props) => {

    const {
        className,
        text,
        attr,
        disabledStatus,
        onClickHandler
    } = props;

    return (
        <button className={`button ${className}`}
            disabled={disabledStatus}
            data-testid={attr}
            onClick={onClickHandler}
        >
            {text}
        </button>
    );
};

export default ButtonTemplate;