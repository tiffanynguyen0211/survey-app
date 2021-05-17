import React from 'react';
import classnames from 'classnames';

import './Header.scss';
/**
 * Header Component
 */
const Header: React.FC<{
    classNames?: string;
}> = ({ classNames, children }) => {
    const headerClassNames = classnames('Header', {
        [`${classNames}`]: classNames,
    });
    return (
        <header className={headerClassNames}>
            <h1 className="Header__Title">Create Survey App</h1>
            {children}
        </header>
    );
};

export default Header;
