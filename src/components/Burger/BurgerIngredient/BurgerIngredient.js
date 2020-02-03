import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render (){
         let ingredient = null;

    switch ( this.props.type ) {
        case ('kruh-donji'):
            ingredient = <div className={classes.KruhDonji}></div>;
            break;
        case ('kruh-gornji'):
            ingredient = (
                <div className={classes.KruhGornji}>
                    <div className={classes.Sjemenke1}></div>
                    <div className={classes.Sjemenke2}></div>
                </div>
            );
            break;
        case ('meso'):
                ingredient = <div className={classes.Meso}></div>;
                break;
        case ('sir'):
                ingredient = <div className={classes.Sir}></div>;
                break;
        case ('salata'):
                ingredient = <div className={classes.Salata}></div>;
                break;
        case ('rajcica'):
                ingredient = <div className={classes.Rajcica}></div>;
                break;
        default:
            ingredient = null;
    }

    return ingredient;
}
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;

// Creating Stateless components always look like this, and are consisted of import, a function and an export