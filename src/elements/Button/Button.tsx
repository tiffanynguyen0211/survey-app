import React, { ReactNode } from 'react';
import classnames from 'classnames';

import './Button.scss';

type ButtonProps = {
    onClick?: () => void;
    icon?: ReactNode;
    ariaLabel: string;
    buttonLabel?: string;
    classNames?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};

/**
 * Common Button Component
 */
const Button: React.FC<ButtonProps> = ({
    icon,
    ariaLabel,
    buttonLabel,
    classNames,
    type = 'button',
    onClick = () => {},
    disabled = false,
}) => {
    const buttonClassNames = classnames('Button', {
        'Button--disabled': disabled,
        [`${classNames}`]: classNames,
    });

    const buttonLabelClassNames = classnames('Button__Label', {
        'Button__Label--hidden': icon,
    });
    return (
        <button
            aria-label={ariaLabel}
            className={buttonClassNames}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span>{icon}</span>}
            {buttonLabel && (
                <span className={buttonLabelClassNames}>{buttonLabel}</span>
            )}
        </button>
    );
};

export default Button;
