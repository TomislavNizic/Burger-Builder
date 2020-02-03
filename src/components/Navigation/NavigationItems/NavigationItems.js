import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Izrada Burgera</NavigationItem>
        <NavigationItem link="/">Košarica</NavigationItem>
    </ul>

);



export default navigationItems;