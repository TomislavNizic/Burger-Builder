import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    // This could be a functional component, doesn't have to be a class
UNSAFE_componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
}

// here we make sure we don't unnecessarily update OrderSummary

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li> );
        } );


        return (
        <Auxiliary>
            <h3>Vaša Narudžba</h3>
            <p>Ukusni hamburger sa sljedećim sastojcima:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Ukupna Cijena: {this.props.price.toFixed(2)}</strong></p>
            <p>Finalizacija Narudžbe?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>ODUSTANI</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>NASTAVI</Button>
        </Auxiliary>);
    }


} 

export default OrderSummary;