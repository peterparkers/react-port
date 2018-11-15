import React from 'react';
import classes from './skillComponent.css';

const skillComponent = (props) => {
    return (
        <div className={classes.skillComponent}>
            <h1 className={classes.name}>{props.name}</h1>
        </div>
    );
}

export default skillComponent;