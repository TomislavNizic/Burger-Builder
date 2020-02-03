import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            } ); 
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Molimo vas da dodate sastojke!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="kruh-gornji" />
           {transformedIngredients}
            <BurgerIngredient type="kruh-donji" />

        </div>
    );
};

export default burger;

// Dinamički ispis liste sastojaka hamburgera