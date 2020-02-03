import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salata', type: 'salata'},
    { label: 'Rajcica', type: 'rajcica'},
    { label: 'Sir', type: 'sir'},
    { label: 'Meso', type: 'meso'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Trenutna Cijena: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={()=> props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}>Naručiti!</button>
    </div>
);

export default buildControls;