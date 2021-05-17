import React from 'react';
import classnames from 'classnames';

import './SideNav.scss';

/**
 * Side Navigation, can be minimised or expaneded on click
 * Will display wrapped content passing through
 */
const SideNav: React.FC<{ classNames?: string }> = ({
    children,
    classNames,
}) => {
    const sideNavClassNames = classnames('SideNav', {
        [`${classNames}`]: classNames,
    });
    return <nav className={sideNavClassNames}>{children}</nav>;
};

export default SideNav;
