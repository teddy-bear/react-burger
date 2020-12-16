import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home" active>Burger Builder</NavigationItem>
        <NavigationItem link="/order">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;