import React from 'react';
import './TextField.scss';

/**
 * Common Text Input Field Component
 */
const TextField: React.FC<{
    label: string;
    className?: string;
    onChange: (value: string) => void;
    value: string;
    placeholder: string;
    ariaLabel: string;
}> = ({ label, onChange, value, placeholder, ariaLabel, className = '' }) => {
    return (
        <div className={`TextField ${className}`}>
            <input
                value={value}
                placeholder={placeholder}
                type="text"
                aria-label={ariaLabel}
                className="TextField__Input"
                onChange={e => {
                    onChange(e.target.value);
                }}
                name={value}
            />
            <label
                className="TextField__Label"
                htmlFor={value}
                data-content={label}
            >
                {label}
            </label>
        </div>
    );
};

export default TextField;
