import React from 'react';

import classes from './BuildControl.css';


const buildControl = (props) => {
    let currentIngredient = props.label.toLowerCase();
    return (
        <div className={classes.BuildControl}>
            <div
                className={classes.Label}>{props.label}<sup>{props.ingredients[currentIngredient]}</sup>
            </div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}>Less
            </button>
            <button
                className={classes.More}
                onClick={props.added}>More
            </button>
        </div>
    )
};

export default buildControl;